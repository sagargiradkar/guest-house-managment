import api from './api';

// Description: Get owner analytics
// Endpoint: GET /api/analytics/owner
// Request: { hotelId?, startDate?, endDate? }
// Response: { summary, bookingTrends, roomPerformance, recentBookings }
export const getOwnerAnalytics = async (hotelId?: string, startDate?: string, endDate?: string) => {
  try {
    const params: any = {};
    if (hotelId) params.hotelId = hotelId;
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

    const response = await api.get('/api/analytics/owner', { params });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get admin analytics
// Endpoint: GET /api/analytics/admin
// Request: { startDate?, endDate? }
// Response: { summary, usersByRole, hotelsByStatus, bookingsByStatus, revenueTrends, topHotels, userGrowth }
export const getAdminAnalytics = async (startDate?: string, endDate?: string) => {
  try {
    const params: any = {};
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

    const response = await api.get('/api/analytics/admin', { params });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};
