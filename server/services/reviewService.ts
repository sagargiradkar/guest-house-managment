import Review, { IReview } from '../models/Review';
import Booking from '../models/Booking';
import hotelService from './hotelService';
import { Types } from 'mongoose';

interface CreateReviewData {
  bookingId: string;
  ratings: {
    overall: number;
    cleanliness: number;
    comfort: number;
    location: number;
    service: number;
    valueForMoney: number;
  };
  comment: string;
  photos?: string[];
  displayName?: string;
  isAnonymous?: boolean;
}

class ReviewService {
  /**
   * Create a new review
   */
  async createReview(reviewData: CreateReviewData, userId: string) {
    console.log(`Creating review for booking: ${reviewData.bookingId}`);

    const { bookingId, ratings, comment, photos, displayName, isAnonymous } = reviewData;

    // Verify booking exists and belongs to user
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      throw new Error('Booking not found');
    }

    if (booking.user.toString() !== userId) {
      throw new Error('You can only review your own bookings');
    }

    // Check if booking is completed
    if (booking.status !== 'completed') {
      // Allow reviews after checkout date has passed
      const today = new Date();
      if (booking.checkOutDate > today) {
        throw new Error('You can only review after your stay is completed');
      }
    }

    // Check if review already exists
    const existingReview = await Review.findOne({ user: userId, booking: bookingId });

    if (existingReview) {
      throw new Error('You have already reviewed this booking');
    }

    // Validate ratings
    const ratingValues = Object.values(ratings);
    if (ratingValues.some((rating) => rating < 1 || rating > 5)) {
      throw new Error('All ratings must be between 1 and 5');
    }

    // Create review
    const review = new Review({
      user: userId,
      hotel: booking.hotel,
      booking: bookingId,
      ratings,
      comment,
      photos: photos || [],
      displayName,
      isAnonymous: isAnonymous || false,
      status: 'approved', // Auto-approve for now
    });

    await review.save();
    console.log(`Review created successfully with ID: ${review._id}`);

    // Update hotel rating
    await hotelService.updateHotelRating(booking.hotel.toString());

    return review;
  }

  /**
   * Get reviews by hotel
   */
  async getReviewsByHotel(hotelId: string, page = 1, limit = 10) {
    console.log(`Fetching reviews for hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    const query = { hotel: hotelId, status: 'approved' };
    const skip = (page - 1) * limit;

    const [reviews, total] = await Promise.all([
      Review.find(query)
        .populate('user', 'name')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Review.countDocuments(query),
    ]);

    // Hide user info for anonymous reviews
    const formattedReviews = reviews.map((review: any) => {
      if (review.isAnonymous) {
        return {
          ...review,
          user: { name: 'Anonymous' },
        };
      }
      return review;
    });

    console.log(`Found ${reviews.length} reviews for hotel`);
    return {
      reviews: formattedReviews,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * Get reviews by user
   */
  async getReviewsByUser(userId: string) {
    console.log(`Fetching reviews for user: ${userId}`);

    const reviews = await Review.find({ user: userId })
      .populate('hotel', 'name images')
      .populate('booking', 'checkInDate checkOutDate')
      .sort({ createdAt: -1 })
      .lean();

    console.log(`Found ${reviews.length} reviews for user`);
    return reviews;
  }

  /**
   * Get review by booking
   */
  async getReviewByBooking(bookingId: string, userId: string) {
    console.log(`Fetching review for booking: ${bookingId}`);

    if (!Types.ObjectId.isValid(bookingId)) {
      throw new Error('Invalid booking ID');
    }

    const review = await Review.findOne({ booking: bookingId, user: userId })
      .populate('hotel', 'name')
      .lean();

    if (!review) {
      return null;
    }

    console.log(`Review found for booking`);
    return review;
  }

  /**
   * Update review helpful count
   */
  async markReviewHelpful(reviewId: string) {
    console.log(`Marking review as helpful: ${reviewId}`);

    if (!Types.ObjectId.isValid(reviewId)) {
      throw new Error('Invalid review ID');
    }

    const review = await Review.findByIdAndUpdate(
      reviewId,
      { $inc: { helpful: 1 } },
      { new: true }
    );

    if (!review) {
      throw new Error('Review not found');
    }

    console.log(`Review helpful count updated`);
    return review;
  }

  /**
   * Get hotel rating breakdown
   */
  async getHotelRatingBreakdown(hotelId: string) {
    console.log(`Fetching rating breakdown for hotel: ${hotelId}`);

    const reviews = await Review.find({ hotel: hotelId, status: 'approved' });

    if (reviews.length === 0) {
      return {
        overall: 0,
        cleanliness: 0,
        comfort: 0,
        location: 0,
        service: 0,
        valueForMoney: 0,
        totalReviews: 0,
      };
    }

    const breakdown = {
      overall: 0,
      cleanliness: 0,
      comfort: 0,
      location: 0,
      service: 0,
      valueForMoney: 0,
      totalReviews: reviews.length,
    };

    reviews.forEach((review) => {
      breakdown.overall += review.ratings.overall;
      breakdown.cleanliness += review.ratings.cleanliness;
      breakdown.comfort += review.ratings.comfort;
      breakdown.location += review.ratings.location;
      breakdown.service += review.ratings.service;
      breakdown.valueForMoney += review.ratings.valueForMoney;
    });

    // Calculate averages
    breakdown.overall = Math.round((breakdown.overall / reviews.length) * 10) / 10;
    breakdown.cleanliness = Math.round((breakdown.cleanliness / reviews.length) * 10) / 10;
    breakdown.comfort = Math.round((breakdown.comfort / reviews.length) * 10) / 10;
    breakdown.location = Math.round((breakdown.location / reviews.length) * 10) / 10;
    breakdown.service = Math.round((breakdown.service / reviews.length) * 10) / 10;
    breakdown.valueForMoney = Math.round((breakdown.valueForMoney / reviews.length) * 10) / 10;

    console.log(`Rating breakdown calculated`);
    return breakdown;
  }
}

export default new ReviewService();
