import Booking from '../models/Booking';
import Hotel from '../models/Hotel';
import Room from '../models/Room';
import User from '../models/User';
import Review from '../models/Review';
import { Types } from 'mongoose';

class AnalyticsService {
  /**
   * Get owner analytics for specific hotels
   */
  async getOwnerAnalytics(ownerId: string, hotelId?: string, startDate?: string, endDate?: string) {
    console.log(`Fetching analytics for owner: ${ownerId}`);

    // Build query for hotels
    const hotelQuery: any = { owner: ownerId };
    if (hotelId) {
      hotelQuery._id = hotelId;
    }

    const hotels = await Hotel.find(hotelQuery);
    const hotelIds = hotels.map((h) => h._id);

    if (hotelIds.length === 0) {
      return this.getEmptyAnalytics();
    }

    // Get all rooms for these hotels
    const rooms = await Room.find({ hotel: { $in: hotelIds } });
    const roomIds = rooms.map((r) => r._id);

    // Build date filter
    const dateFilter: any = {};
    if (startDate && endDate) {
      dateFilter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    // Get bookings
    const bookingQuery: any = {
      room: { $in: roomIds },
      ...dateFilter,
    };

    const [bookings, totalBookings, revenue] = await Promise.all([
      Booking.find(bookingQuery).lean(),
      Booking.countDocuments({ room: { $in: roomIds } }),
      Booking.aggregate([
        {
          $match: {
            room: { $in: roomIds },
            'payment.status': 'completed',
            ...dateFilter,
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: '$pricing.total' },
          },
        },
      ]),
    ]);

    // Calculate occupancy rate
    const today = new Date();
    const occupiedRooms = await Booking.countDocuments({
      room: { $in: roomIds },
      status: 'confirmed',
      checkInDate: { $lte: today },
      checkOutDate: { $gte: today },
    });

    const occupancyRate = rooms.length > 0 ? (occupiedRooms / rooms.length) * 100 : 0;

    // Get booking trends (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const bookingTrends = await Booking.aggregate([
      {
        $match: {
          room: { $in: roomIds },
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 },
          revenue: { $sum: '$pricing.total' },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Get room performance
    const roomPerformance = await Booking.aggregate([
      {
        $match: {
          room: { $in: roomIds },
          'payment.status': 'completed',
        },
      },
      {
        $group: {
          _id: '$room',
          totalBookings: { $sum: 1 },
          revenue: { $sum: '$pricing.total' },
          averageRate: { $avg: '$pricing.roomRate' },
        },
      },
      {
        $lookup: {
          from: 'rooms',
          localField: '_id',
          foreignField: '_id',
          as: 'roomDetails',
        },
      },
      { $unwind: '$roomDetails' },
      {
        $project: {
          roomType: '$roomDetails.type',
          roomName: '$roomDetails.name',
          totalBookings: 1,
          revenue: 1,
          averageRate: 1,
        },
      },
    ]);

    console.log(`Analytics calculated for owner`);

    return {
      summary: {
        totalHotels: hotels.length,
        totalRooms: rooms.length,
        totalBookings,
        occupancyRate: Math.round(occupancyRate * 10) / 10,
        totalRevenue: revenue[0]?.total || 0,
      },
      bookingTrends,
      roomPerformance,
      recentBookings: bookings.slice(0, 10),
    };
  }

  /**
   * Get admin analytics (system-wide)
   */
  async getAdminAnalytics(startDate?: string, endDate?: string) {
    console.log('Fetching admin analytics');

    // Build date filter
    const dateFilter: any = {};
    if (startDate && endDate) {
      dateFilter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const [
      totalHotels,
      totalRooms,
      totalUsers,
      totalBookings,
      revenue,
      usersByRole,
      hotelsByStatus,
      bookingsByStatus,
    ] = await Promise.all([
      Hotel.countDocuments(),
      Room.countDocuments(),
      User.countDocuments(),
      Booking.countDocuments(dateFilter),
      Booking.aggregate([
        {
          $match: {
            'payment.status': 'completed',
            ...dateFilter,
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: '$pricing.total' },
          },
        },
      ]),
      User.aggregate([
        { $group: { _id: '$role', count: { $sum: 1 } } },
      ]),
      Hotel.aggregate([
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
      Booking.aggregate([
        { $match: dateFilter },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
    ]);

    // Get revenue trends (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const revenueTrends = await Booking.aggregate([
      {
        $match: {
          'payment.status': 'completed',
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          revenue: { $sum: '$pricing.total' },
          bookings: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Get top performing hotels
    const topHotels = await Booking.aggregate([
      {
        $match: {
          'payment.status': 'completed',
        },
      },
      {
        $group: {
          _id: '$hotel',
          totalBookings: { $sum: 1 },
          revenue: { $sum: '$pricing.total' },
        },
      },
      { $sort: { revenue: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: 'hotels',
          localField: '_id',
          foreignField: '_id',
          as: 'hotelDetails',
        },
      },
      { $unwind: '$hotelDetails' },
      {
        $project: {
          hotelName: '$hotelDetails.name',
          hotelCity: '$hotelDetails.address.city',
          totalBookings: 1,
          revenue: 1,
        },
      },
    ]);

    // Calculate occupancy rate
    const today = new Date();
    const occupiedRooms = await Booking.countDocuments({
      status: 'confirmed',
      checkInDate: { $lte: today },
      checkOutDate: { $gte: today },
    });

    const occupancyRate = totalRooms > 0 ? (occupiedRooms / totalRooms) * 100 : 0;

    // Get user growth (last 12 months)
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const userGrowth = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: twelveMonthsAgo },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } },
    ]);

    console.log('Admin analytics calculated');

    return {
      summary: {
        totalHotels,
        totalRooms,
        totalUsers,
        totalBookings,
        totalRevenue: revenue[0]?.total || 0,
        occupancyRate: Math.round(occupancyRate * 10) / 10,
      },
      usersByRole: usersByRole.reduce((acc: any, curr) => {
        acc[curr._id] = curr.count;
        return acc;
      }, {}),
      hotelsByStatus: hotelsByStatus.reduce((acc: any, curr) => {
        acc[curr._id] = curr.count;
        return acc;
      }, {}),
      bookingsByStatus: bookingsByStatus.reduce((acc: any, curr) => {
        acc[curr._id] = curr.count;
        return acc;
      }, {}),
      revenueTrends,
      topHotels,
      userGrowth,
    };
  }

  /**
   * Get empty analytics structure
   */
  private getEmptyAnalytics() {
    return {
      summary: {
        totalHotels: 0,
        totalRooms: 0,
        totalBookings: 0,
        occupancyRate: 0,
        totalRevenue: 0,
      },
      bookingTrends: [],
      roomPerformance: [],
      recentBookings: [],
    };
  }
}

export default new AnalyticsService();
