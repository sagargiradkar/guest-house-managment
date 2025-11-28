import Hotel, { IHotel } from '../models/Hotel';
import Room from '../models/Room';
import { Types } from 'mongoose';

interface HotelFilters {
  search?: string;
  city?: string;
  amenities?: string[];
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  rating?: number;
}

class HotelService {
  /**
   * Get all hotels with optional filters
   */
  async getHotels(filters: HotelFilters = {}, page = 1, limit = 20) {
    console.log('Fetching hotels with filters:', filters);

    const query: any = { status: 'active' };

    // Text search
    if (filters.search) {
      query.$text = { $search: filters.search };
    }

    // City filter
    if (filters.city) {
      query['address.city'] = new RegExp(filters.city, 'i');
    }

    // Amenities filter
    if (filters.amenities && filters.amenities.length > 0) {
      query.amenities = { $all: filters.amenities };
    }

    // Type filter
    if (filters.type) {
      query.type = filters.type;
    }

    // Rating filter
    if (filters.rating) {
      query.rating = { $gte: filters.rating };
    }

    const skip = (page - 1) * limit;

    const [hotels, total] = await Promise.all([
      Hotel.find(query)
        .populate('owner', 'name email')
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean(),
      Hotel.countDocuments(query),
    ]);

    // If price filters are provided, we need to check rooms
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      const hotelIds = hotels.map((h: any) => h._id);
      const roomQuery: any = { hotel: { $in: hotelIds } };

      if (filters.minPrice !== undefined) {
        roomQuery.price = { ...roomQuery.price, $gte: filters.minPrice };
      }
      if (filters.maxPrice !== undefined) {
        roomQuery.price = { ...roomQuery.price, $lte: filters.maxPrice };
      }

      const roomsInRange = await Room.find(roomQuery).distinct('hotel');
      const filteredHotels = hotels.filter((h: any) =>
        roomsInRange.some((id) => id.equals(h._id))
      );

      console.log(`Found ${filteredHotels.length} hotels matching price criteria`);
      return {
        hotels: filteredHotels,
        total: filteredHotels.length,
        page,
        totalPages: Math.ceil(filteredHotels.length / limit),
      };
    }

    console.log(`Found ${hotels.length} hotels`);
    return {
      hotels,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * Get hotel by ID
   */
  async getHotelById(hotelId: string) {
    console.log(`Fetching hotel with ID: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    const hotel = await Hotel.findById(hotelId)
      .populate('owner', 'name email')
      .lean();

    if (!hotel) {
      throw new Error('Hotel not found');
    }

    console.log(`Hotel found: ${hotel.name}`);
    return hotel;
  }

  /**
   * Get hotels by owner
   */
  async getHotelsByOwner(ownerId: string) {
    console.log(`Fetching hotels for owner: ${ownerId}`);

    const hotels = await Hotel.find({ owner: ownerId })
      .sort({ createdAt: -1 })
      .lean();

    console.log(`Found ${hotels.length} hotels for owner`);
    return hotels;
  }

  /**
   * Create a new hotel
   */
  async createHotel(hotelData: Partial<IHotel>, ownerId: string) {
    console.log(`Creating new hotel: ${hotelData.name}`);

    const hotel = new Hotel({
      ...hotelData,
      owner: ownerId,
    });

    await hotel.save();
    console.log(`Hotel created successfully with ID: ${hotel._id}`);

    return hotel;
  }

  /**
   * Update hotel
   */
  async updateHotel(hotelId: string, hotelData: Partial<IHotel>, userId: string, userRole: string) {
    console.log(`Updating hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      throw new Error('Hotel not found');
    }

    // Check ownership (unless admin)
    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to update this hotel');
    }

    Object.assign(hotel, hotelData);
    await hotel.save();

    console.log(`Hotel updated successfully: ${hotel.name}`);
    return hotel;
  }

  /**
   * Delete hotel
   */
  async deleteHotel(hotelId: string, userId: string, userRole: string) {
    console.log(`Deleting hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      throw new Error('Hotel not found');
    }

    // Check ownership (unless admin)
    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to delete this hotel');
    }

    // Check if there are any active bookings
    const Room = require('../models/Room').default;
    const Booking = require('../models/Booking').default;

    const rooms = await Room.find({ hotel: hotelId });
    const roomIds = rooms.map((r) => r._id);

    const activeBookings = await Booking.countDocuments({
      room: { $in: roomIds },
      status: 'confirmed',
      checkOutDate: { $gte: new Date() },
    });

    if (activeBookings > 0) {
      throw new Error('Cannot delete hotel with active bookings');
    }

    await Hotel.findByIdAndDelete(hotelId);
    console.log(`Hotel deleted successfully: ${hotelId}`);

    return { success: true };
  }

  /**
   * Update hotel rating based on reviews
   */
  async updateHotelRating(hotelId: string) {
    console.log(`Updating rating for hotel: ${hotelId}`);

    const Review = require('../models/Review').default;

    const reviews = await Review.find({ hotel: hotelId, status: 'approved' });

    if (reviews.length === 0) {
      await Hotel.findByIdAndUpdate(hotelId, {
        rating: undefined,
        reviewCount: 0,
      });
      return;
    }

    const averageRating =
      reviews.reduce((sum, review) => sum + review.ratings.overall, 0) / reviews.length;

    await Hotel.findByIdAndUpdate(hotelId, {
      rating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
      reviewCount: reviews.length,
    });

    console.log(`Hotel rating updated: ${averageRating.toFixed(1)}`);
  }
}

export default new HotelService();
