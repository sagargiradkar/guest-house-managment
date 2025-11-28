import express from 'express';
import { requireUser } from './middlewares/auth';
import reviewService from '../services/reviewService';

const router = express.Router();

// Description: Create a new review
// Endpoint: POST /api/reviews
// Request: { bookingId, ratings: { overall, cleanliness, comfort, location, service, valueForMoney }, comment, photos?, displayName?, isAnonymous? }
// Response: { review: Review }
router.post('/', requireUser(), async (req, res) => {
  try {
    const review = await reviewService.createReview(req.body, req.user._id.toString());

    res.status(201).json(review);
  } catch (error: any) {
    console.error('Error creating review:', error);
    res.status(400).json({ error: error.message });
  }
});

// Description: Get reviews by hotel
// Endpoint: GET /api/reviews/hotel/:hotelId
// Request: { page?, limit? }
// Response: { reviews: Array<Review>, total: number, page: number, totalPages: number }
router.get('/hotel/:hotelId', async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { page = '1', limit = '10' } = req.query;

    const result = await reviewService.getReviewsByHotel(
      hotelId,
      parseInt(page as string),
      parseInt(limit as string)
    );

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error fetching hotel reviews:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get reviews by user
// Endpoint: GET /api/reviews/user/me
// Request: {}
// Response: { reviews: Array<Review> }
router.get('/user/me', requireUser(), async (req, res) => {
  try {
    const reviews = await reviewService.getReviewsByUser(req.user._id.toString());

    res.status(200).json({ reviews });
  } catch (error: any) {
    console.error('Error fetching user reviews:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get review by booking
// Endpoint: GET /api/reviews/booking/:bookingId
// Request: {}
// Response: { review: Review | null }
router.get('/booking/:bookingId', requireUser(), async (req, res) => {
  try {
    const { bookingId } = req.params;
    const review = await reviewService.getReviewByBooking(bookingId, req.user._id.toString());

    res.status(200).json({ review });
  } catch (error: any) {
    console.error('Error fetching booking review:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get hotel rating breakdown
// Endpoint: GET /api/reviews/hotel/:hotelId/breakdown
// Request: {}
// Response: { overall, cleanliness, comfort, location, service, valueForMoney, totalReviews }
router.get('/hotel/:hotelId/breakdown', async (req, res) => {
  try {
    const { hotelId } = req.params;
    const breakdown = await reviewService.getHotelRatingBreakdown(hotelId);

    res.status(200).json(breakdown);
  } catch (error: any) {
    console.error('Error fetching rating breakdown:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Mark review as helpful
// Endpoint: POST /api/reviews/:id/helpful
// Request: {}
// Response: { review: Review }
router.post('/:id/helpful', async (req, res) => {
  try {
    const { id } = req.params;
    const review = await reviewService.markReviewHelpful(id);

    res.status(200).json(review);
  } catch (error: any) {
    console.error('Error marking review as helpful:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
  }
});

export default router;
