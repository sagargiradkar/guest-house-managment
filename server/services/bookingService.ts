import Booking, { IBooking } from '../models/Booking';
import Room from '../models/Room';
import Hotel from '../models/Hotel';
import roomService from './roomService';
import { Types } from 'mongoose';

interface CreateBookingData {
  hotelId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  guestDetails: {
    fullName: string;
    email: string;
    phone: string;
    additionalGuests?: string[];
  };
  specialRequests?: string;
  payment: {
    method: string;
  };
}

class BookingService {
  /**
   * Create a new booking
   */
  async createBooking(bookingData: CreateBookingData, userId: string) {
    console.log(`Creating booking for user: ${userId}`);

    const { hotelId, roomId, checkInDate, checkOutDate, numberOfGuests, guestDetails, specialRequests, payment } = bookingData;

    // Validate dates
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      throw new Error('Check-in date cannot be in the past');
    }

    if (checkOut <= checkIn) {
      throw new Error('Check-out date must be after check-in date');
    }

    // Verify room exists and get hotel
    const room = await Room.findById(roomId).populate('hotel');
    if (!room) {
      throw new Error('Room not found');
    }

    // Verify hotel matches
    if (room.hotel._id.toString() !== hotelId) {
      throw new Error('Room does not belong to specified hotel');
    }

    // Check availability
    const isAvailable = await roomService.checkRoomAvailability(roomId, checkIn, checkOut);
    if (!isAvailable) {
      throw new Error('Room is not available for selected dates');
    }

    // Check max occupancy
    if (numberOfGuests > room.maxOccupancy) {
      throw new Error(`Room maximum occupancy is ${room.maxOccupancy} guests`);
    }

    // Calculate pricing
    const pricing = await roomService.getRoomPrice(roomId, checkIn, checkOut);
    const taxes = pricing.subtotal * 0.1; // 10% tax
    const serviceFees = pricing.subtotal * 0.05; // 5% service fee
    const total = pricing.subtotal + taxes + serviceFees;

    // Create booking
    const booking = new Booking({
      user: userId,
      hotel: hotelId,
      room: roomId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuests,
      guestDetails,
      specialRequests,
      pricing: {
        ...pricing,
        taxes,
        serviceFees,
        total,
      },
      payment: {
        method: payment.method,
        status: 'completed', // In production, this would be handled by payment gateway
        transactionId: `TXN${Date.now()}`,
      },
      status: 'confirmed',
    });

    await booking.save();
    console.log(`Booking created successfully: ${booking.bookingReference}`);

    // Populate for response
    await booking.populate([
      { path: 'hotel', select: 'name address images' },
      { path: 'room', select: 'name type' },
    ]);

    return booking;
  }

  /**
   * Get bookings by user
   */
  async getBookingsByUser(userId: string, status?: string) {
    console.log(`Fetching bookings for user: ${userId}, status: ${status || 'all'}`);

    const query: any = { user: userId };

    if (status) {
      query.status = status;
    }

    const bookings = await Booking.find(query)
      .populate('hotel', 'name address images')
      .populate('room', 'name type')
      .sort({ createdAt: -1 })
      .lean();

    console.log(`Found ${bookings.length} bookings`);
    return bookings;
  }

  /**
   * Get booking by ID
   */
  async getBookingById(bookingId: string, userId: string, userRole: string) {
    console.log(`Fetching booking: ${bookingId}`);

    if (!Types.ObjectId.isValid(bookingId)) {
      throw new Error('Invalid booking ID');
    }

    const booking = await Booking.findById(bookingId)
      .populate('hotel', 'name address contact images')
      .populate('room', 'name type images')
      .populate('user', 'name email')
      .lean();

    if (!booking) {
      throw new Error('Booking not found');
    }

    // Check permissions
    if (userRole !== 'admin' && booking.user._id.toString() !== userId) {
      // Check if user is hotel owner
      const hotel = await Hotel.findById(booking.hotel._id);
      if (!hotel || hotel.owner.toString() !== userId) {
        throw new Error('You do not have permission to view this booking');
      }
    }

    console.log(`Booking found: ${booking.bookingReference}`);
    return booking;
  }

  /**
   * Get bookings by hotel
   */
  async getBookingsByHotel(hotelId: string, userId: string, userRole: string) {
    console.log(`Fetching bookings for hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    // Verify ownership (unless admin)
    if (userRole !== 'admin') {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel || hotel.owner.toString() !== userId) {
        throw new Error('You do not have permission to view bookings for this hotel');
      }
    }

    const bookings = await Booking.find({ hotel: hotelId })
      .populate('room', 'name type')
      .populate('user', 'name email')
      .sort({ checkInDate: -1 })
      .lean();

    console.log(`Found ${bookings.length} bookings for hotel`);
    return bookings;
  }

  /**
   * Get all bookings (admin only)
   */
  async getAllBookings(filters: any = {}, page = 1, limit = 20) {
    console.log('Fetching all bookings with filters:', filters);

    const query: any = {};

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.hotelId) {
      query.hotel = filters.hotelId;
    }

    if (filters.startDate && filters.endDate) {
      query.checkInDate = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const skip = (page - 1) * limit;

    const [bookings, total] = await Promise.all([
      Booking.find(query)
        .populate('hotel', 'name address')
        .populate('room', 'name type')
        .populate('user', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Booking.countDocuments(query),
    ]);

    console.log(`Found ${bookings.length} bookings`);
    return {
      bookings,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * Cancel booking
   */
  async cancelBooking(bookingId: string, userId: string, userRole: string, cancellationReason?: string) {
    console.log(`Cancelling booking: ${bookingId}`);

    if (!Types.ObjectId.isValid(bookingId)) {
      throw new Error('Invalid booking ID');
    }

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      throw new Error('Booking not found');
    }

    // Check permissions
    if (userRole !== 'admin' && booking.user.toString() !== userId) {
      throw new Error('You do not have permission to cancel this booking');
    }

    // Check if already cancelled
    if (booking.status === 'cancelled') {
      throw new Error('Booking is already cancelled');
    }

    // Check if already completed
    if (booking.status === 'completed') {
      throw new Error('Cannot cancel completed booking');
    }

    // Update booking status
    booking.status = 'cancelled';
    booking.cancellationReason = cancellationReason || 'User requested cancellation';
    booking.cancelledAt = new Date();
    booking.payment.status = 'refunded'; // In production, trigger actual refund

    await booking.save();

    console.log(`Booking cancelled successfully: ${booking.bookingReference}`);
    return booking;
  }

  /**
   * Update booking status (for checkout completion)
   */
  async updateBookingStatus(bookingId: string, status: string) {
    console.log(`Updating booking status: ${bookingId} to ${status}`);

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      throw new Error('Booking not found');
    }

    booking.status = status as any;
    await booking.save();

    console.log(`Booking status updated successfully`);
    return booking;
  }
}

export default new BookingService();
