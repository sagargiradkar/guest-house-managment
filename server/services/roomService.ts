import Room, { IRoom } from '../models/Room';
import Hotel from '../models/Hotel';
import Booking from '../models/Booking';
import { Types } from 'mongoose';

class RoomService {
  /**
   * Get rooms by hotel
   */
  async getRoomsByHotel(hotelId: string, checkIn?: string, checkOut?: string) {
    console.log(`Fetching rooms for hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    const rooms = await Room.find({ hotel: hotelId }).sort({ price: 1 }).lean();

    // If dates provided, filter out unavailable rooms
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      console.log(`Checking availability from ${checkIn} to ${checkOut}`);

      const availableRooms = [];

      for (const room of rooms) {
        const isAvailable = await this.checkRoomAvailability(
          room._id.toString(),
          checkInDate,
          checkOutDate
        );

        if (isAvailable) {
          availableRooms.push({ ...room, available: true });
        } else {
          availableRooms.push({ ...room, available: false });
        }
      }

      console.log(`Found ${availableRooms.filter((r) => r.available).length} available rooms`);
      return availableRooms;
    }

    console.log(`Found ${rooms.length} rooms`);
    return rooms;
  }

  /**
   * Get room by ID
   */
  async getRoomById(roomId: string) {
    console.log(`Fetching room with ID: ${roomId}`);

    if (!Types.ObjectId.isValid(roomId)) {
      throw new Error('Invalid room ID');
    }

    const room = await Room.findById(roomId).populate('hotel', 'name address').lean();

    if (!room) {
      throw new Error('Room not found');
    }

    console.log(`Room found: ${room.name}`);
    return room;
  }

  /**
   * Create a new room
   */
  async createRoom(roomData: Partial<IRoom>, userId: string, userRole: string) {
    console.log(`Creating new room: ${roomData.name}`);

    if (!roomData.hotel) {
      throw new Error('Hotel ID is required');
    }

    // Verify hotel exists and user has permission
    const hotel = await Hotel.findById(roomData.hotel);

    if (!hotel) {
      throw new Error('Hotel not found');
    }

    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to add rooms to this hotel');
    }

    const room = new Room(roomData);
    await room.save();

    console.log(`Room created successfully with ID: ${room._id}`);
    return room;
  }

  /**
   * Update room
   */
  async updateRoom(roomId: string, roomData: Partial<IRoom>, userId: string, userRole: string) {
    console.log(`Updating room: ${roomId}`);

    if (!Types.ObjectId.isValid(roomId)) {
      throw new Error('Invalid room ID');
    }

    const room = await Room.findById(roomId).populate('hotel');

    if (!room) {
      throw new Error('Room not found');
    }

    // Check ownership
    const hotel: any = room.hotel;
    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to update this room');
    }

    Object.assign(room, roomData);
    await room.save();

    console.log(`Room updated successfully: ${room.name}`);
    return room;
  }

  /**
   * Delete room
   */
  async deleteRoom(roomId: string, userId: string, userRole: string) {
    console.log(`Deleting room: ${roomId}`);

    if (!Types.ObjectId.isValid(roomId)) {
      throw new Error('Invalid room ID');
    }

    const room = await Room.findById(roomId).populate('hotel');

    if (!room) {
      throw new Error('Room not found');
    }

    // Check ownership
    const hotel: any = room.hotel;
    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to delete this room');
    }

    // Check for active bookings
    const activeBookings = await Booking.countDocuments({
      room: roomId,
      status: 'confirmed',
      checkOutDate: { $gte: new Date() },
    });

    if (activeBookings > 0) {
      throw new Error('Cannot delete room with active bookings');
    }

    await Room.findByIdAndDelete(roomId);
    console.log(`Room deleted successfully: ${roomId}`);

    return { success: true };
  }

  /**
   * Check room availability for dates
   */
  async checkRoomAvailability(roomId: string, checkInDate: Date, checkOutDate: Date): Promise<boolean> {
    const room = await Room.findById(roomId);

    if (!room || !room.availability) {
      return false;
    }

    // Check blocked dates
    for (const block of room.blockedDates) {
      if (
        (checkInDate >= block.startDate && checkInDate < block.endDate) ||
        (checkOutDate > block.startDate && checkOutDate <= block.endDate) ||
        (checkInDate <= block.startDate && checkOutDate >= block.endDate)
      ) {
        return false;
      }
    }

    // Check existing bookings
    const conflictingBookings = await Booking.countDocuments({
      room: roomId,
      status: { $in: ['confirmed', 'completed'] },
      $or: [
        {
          checkInDate: { $lt: checkOutDate },
          checkOutDate: { $gt: checkInDate },
        },
      ],
    });

    return conflictingBookings === 0;
  }

  /**
   * Get room price for date range
   */
  async getRoomPrice(roomId: string, checkInDate: Date, checkOutDate: Date) {
    const room = await Room.findById(roomId);

    if (!room) {
      throw new Error('Room not found');
    }

    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Simple pricing - can be enhanced with weekend/seasonal pricing
    const basePrice = room.price;
    const subtotal = basePrice * nights;

    return {
      roomRate: basePrice,
      numberOfNights: nights,
      subtotal,
    };
  }
}

export default new RoomService();
