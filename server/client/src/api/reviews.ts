import api from './api';
import { Review } from '@/types/hotel';

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

// Description: Create a new review
// Endpoint: POST /api/reviews
// Request: { bookingId, ratings, comment, photos?, displayName?, isAnonymous? }
// Response: Review
export const createReview = async (reviewData: CreateReviewData) => {
  try {
    const response = await api.post('/api/reviews', reviewData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get reviews by hotel
// Endpoint: GET /api/reviews/hotel/:hotelId
// Request: { page?, limit? }
// Response: { reviews: Review[], total: number, page: number, totalPages: number }
export const getReviewsByHotel = async (hotelId: string, page = 1, limit = 10) => {
  try {
    const response = await api.get(`/api/reviews/hotel/${hotelId}`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get reviews by user
// Endpoint: GET /api/reviews/user/me
// Request: {}
// Response: { reviews: Review[] }
export const getReviewsByUser = async () => {
  try {
    const response = await api.get('/api/reviews/user/me');
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get review by booking
// Endpoint: GET /api/reviews/booking/:bookingId
// Request: {}
// Response: { review: Review | null }
export const getReviewByBooking = async (bookingId: string) => {
  try {
    const response = await api.get(`/api/reviews/booking/${bookingId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get hotel rating breakdown
// Endpoint: GET /api/reviews/hotel/:hotelId/breakdown
// Request: {}
// Response: { overall, cleanliness, comfort, location, service, valueForMoney, totalReviews }
export const getHotelRatingBreakdown = async (hotelId: string) => {
  try {
    const response = await api.get(`/api/reviews/hotel/${hotelId}/breakdown`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};
