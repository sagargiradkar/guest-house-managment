import api from './api';
import { Review } from '@/types/hotel';

// Description: Get reviews by hotel
// Endpoint: GET /api/reviews/hotel/:hotelId
// Request: { rating?: number, page?: number, limit?: number }
// Response: { reviews: Review[], total: number, averageRating: number }
export const getReviewsByHotel = async (hotelId: string, params?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        reviews: [
          {
            _id: 'review1',
            hotelId: hotelId,
            bookingId: 'booking1',
            userId: 'user1',
            userName: 'John Doe',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
            overallRating: 5,
            ratings: {
              cleanliness: 5,
              comfort: 5,
              location: 4,
              service: 5,
              valueForMoney: 4
            },
            reviewText: 'Excellent stay! The room was spotless and the staff was incredibly helpful. Would definitely recommend.',
            images: [],
            stayDate: '2024-01-15',
            isAnonymous: false,
            helpfulVotes: 12,
            status: 'approved',
            createdAt: '2024-01-20T00:00:00Z',
            updatedAt: '2024-01-20T00:00:00Z'
          },
          {
            _id: 'review2',
            hotelId: hotelId,
            bookingId: 'booking2',
            userId: 'user2',
            userName: 'Jane Smith',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
            overallRating: 4,
            ratings: {
              cleanliness: 4,
              comfort: 4,
              location: 5,
              service: 4,
              valueForMoney: 4
            },
            reviewText: 'Great location and comfortable rooms. The breakfast could be improved but overall a pleasant experience.',
            images: [],
            stayDate: '2024-01-10',
            isAnonymous: false,
            helpfulVotes: 8,
            status: 'approved',
            createdAt: '2024-01-15T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z'
          }
        ],
        total: 2,
        averageRating: 4.5
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/reviews/hotel/${hotelId}`, { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Create review
// Endpoint: POST /api/reviews
// Request: { review: Partial<Review> }
// Response: { review: Review, message: string }
export const createReview = async (reviewData: Partial<Review>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        review: {
          ...reviewData,
          _id: Date.now().toString(),
          status: 'pending',
          helpfulVotes: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        message: 'Review submitted successfully. It will be visible after moderation.'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.post('/api/reviews', reviewData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get reviews by user
// Endpoint: GET /api/reviews/user/:userId
// Request: {}
// Response: { reviews: Review[] }
export const getReviewsByUser = async (userId: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        reviews: [
          {
            _id: 'review1',
            hotelId: '1',
            bookingId: 'booking1',
            userId: userId,
            userName: 'John Doe',
            overallRating: 5,
            ratings: {
              cleanliness: 5,
              comfort: 5,
              location: 4,
              service: 5,
              valueForMoney: 4
            },
            reviewText: 'Excellent stay!',
            images: [],
            stayDate: '2024-01-15',
            isAnonymous: false,
            helpfulVotes: 12,
            status: 'approved',
            createdAt: '2024-01-20T00:00:00Z',
            updatedAt: '2024-01-20T00:00:00Z'
          }
        ]
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/reviews/user/${userId}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};