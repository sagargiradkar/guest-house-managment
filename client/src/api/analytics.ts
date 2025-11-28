import api from './api';

// Description: Get owner analytics
// Endpoint: GET /api/analytics/owner/:ownerId
// Request: { startDate?: string, endDate?: string, hotelId?: string }
// Response: { analytics: object }
export const getOwnerAnalytics = async (ownerId: string, params?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        analytics: {
          totalRevenue: 45680,
          revenueChange: 12.5,
          totalBookings: 156,
          bookingsChange: 8.3,
          occupancyRate: 78.5,
          occupancyChange: 5.2,
          averageDailyRate: 185,
          rateChange: 3.1,
          revenueByMonth: [
            { month: 'Jan', revenue: 12500 },
            { month: 'Feb', revenue: 15200 },
            { month: 'Mar', revenue: 18000 }
          ],
          bookingsByMonth: [
            { month: 'Jan', bookings: 45 },
            { month: 'Feb', bookings: 52 },
            { month: 'Mar', bookings: 59 }
          ],
          occupancyByMonth: [
            { month: 'Jan', occupancy: 72 },
            { month: 'Feb', occupancy: 75 },
            { month: 'Mar', occupancy: 78.5 }
          ],
          roomPerformance: [
            { roomType: 'Single', bookings: 45, revenue: 8500, occupancy: 65 },
            { roomType: 'Double', bookings: 68, revenue: 18200, occupancy: 82 },
            { roomType: 'Suite', bookings: 43, revenue: 19000, occupancy: 75 }
          ],
          topAmenities: [
            { amenity: 'WiFi', requests: 145 },
            { amenity: 'Parking', requests: 98 },
            { amenity: 'Pool', requests: 87 }
          ]
        }
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/analytics/owner/${ownerId}`, { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get admin analytics
// Endpoint: GET /api/analytics/admin
// Request: { startDate?: string, endDate?: string }
// Response: { analytics: object }
export const getAdminAnalytics = async (params?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        analytics: {
          totalRevenue: 245680,
          revenueChange: 15.2,
          totalBookings: 1256,
          bookingsChange: 10.5,
          totalUsers: 3456,
          usersChange: 18.7,
          totalHotels: 45,
          hotelsChange: 5.2,
          activeBookings: 234,
          averageOccupancy: 76.8,
          revenueByMonth: [
            { month: 'Jan', revenue: 65000 },
            { month: 'Feb', revenue: 78000 },
            { month: 'Mar', revenue: 102680 }
          ],
          bookingsByMonth: [
            { month: 'Jan', bookings: 380 },
            { month: 'Feb', bookings: 425 },
            { month: 'Mar', bookings: 451 }
          ],
          userGrowth: [
            { month: 'Jan', users: 2890 },
            { month: 'Feb', users: 3120 },
            { month: 'Mar', users: 3456 }
          ],
          topHotels: [
            { name: 'Grand Plaza Hotel', revenue: 45680, bookings: 156 },
            { name: 'Seaside Resort', revenue: 38900, bookings: 134 },
            { name: 'Mountain View Lodge', revenue: 32100, bookings: 112 }
          ],
          bookingsByRoomType: [
            { type: 'Single', count: 345, percentage: 27.5 },
            { type: 'Double', count: 512, percentage: 40.8 },
            { type: 'Suite', count: 289, percentage: 23.0 },
            { type: 'Deluxe', count: 110, percentage: 8.7 }
          ],
          revenueByHotel: [
            { hotel: 'Grand Plaza', revenue: 45680 },
            { hotel: 'Seaside Resort', revenue: 38900 },
            { hotel: 'Mountain Lodge', revenue: 32100 },
            { hotel: 'City Center', revenue: 28500 },
            { hotel: 'Beach House', revenue: 25400 }
          ]
        }
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get('/api/analytics/admin', { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};