import express from 'express';
import { requireUser } from './middlewares/auth';
import analyticsService from '../services/analyticsService';
import { ROLES } from 'shared/config/roles';

const router = express.Router();

// Description: Get owner analytics
// Endpoint: GET /api/analytics/owner
// Request: { hotelId?, startDate?, endDate? }
// Response: { summary: {...}, bookingTrends: [...], roomPerformance: [...], recentBookings: [...] }
router.get('/owner', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { hotelId, startDate, endDate } = req.query;

    const analytics = await analyticsService.getOwnerAnalytics(
      req.user._id.toString(),
      hotelId as string,
      startDate as string,
      endDate as string
    );

    res.status(200).json(analytics);
  } catch (error: any) {
    console.error('Error fetching owner analytics:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get admin analytics
// Endpoint: GET /api/analytics/admin
// Request: { startDate?, endDate? }
// Response: { summary: {...}, usersByRole: {...}, hotelsByStatus: {...}, bookingsByStatus: {...}, revenueTrends: [...], topHotels: [...], userGrowth: [...] }
router.get('/admin', requireUser([ROLES.ADMIN]), async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const analytics = await analyticsService.getAdminAnalytics(
      startDate as string,
      endDate as string
    );

    res.status(200).json(analytics);
  } catch (error: any) {
    console.error('Error fetching admin analytics:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
