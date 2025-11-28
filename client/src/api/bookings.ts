import api from './api';
import { Booking } from '@/types/hotel';

// Description: Create new booking
// Endpoint: POST /api/bookings
// Request: { booking: Partial<Booking> }
// Response: { booking: Booking, message: string }
export const createBooking = async (bookingData: Partial<Booking>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        booking: {
          ...bookingData,
          _id: Date.now().toString(),
          bookingReference: `BK${Date.now()}`,
          paymentStatus: 'completed',
          bookingStatus: 'confirmed',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        message: 'Booking created successfully'
      });
    }, 1000);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.post('/api/bookings', bookingData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get bookings by user
// Endpoint: GET /api/bookings/user/:userId
// Request: { status?: string }
// Response: { bookings: Booking[] }
export const getBookingsByUser = async (userId: string, params?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bookings: [
          {
            _id: 'booking1',
            bookingReference: 'BK1234567890',
            hotelId: '1',
            hotelName: 'Grand Plaza Hotel',
            roomId: 'room2',
            roomType: 'double',
            guestId: userId,
            guestName: 'John Doe',
            guestEmail: 'john@example.com',
            guestPhone: '+1-555-0100',
            checkInDate: '2024-03-15',
            checkOutDate: '2024-03-18',
            numberOfGuests: 2,
            numberOfNights: 3,
            totalAmount: 540,
            paymentStatus: 'completed',
            bookingStatus: 'confirmed',
            specialRequests: 'Late check-in requested',
            createdAt: '2024-02-01T00:00:00Z',
            updatedAt: '2024-02-01T00:00:00Z'
          },
          {
            _id: 'booking2',
            bookingReference: 'BK1234567891',
            hotelId: '2',
            hotelName: 'Seaside Resort',
            roomId: 'room3',
            roomType: 'suite',
            guestId: userId,
            guestName: 'John Doe',
            guestEmail: 'john@example.com',
            guestPhone: '+1-555-0100',
            checkInDate: '2024-01-10',
            checkOutDate: '2024-01-15',
            numberOfGuests: 4,
            numberOfNights: 5,
            totalAmount: 1750,
            paymentStatus: 'completed',
            bookingStatus: 'completed',
            createdAt: '2023-12-15T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z'
          }
        ]
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/bookings/user/${userId}`, { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get booking by ID
// Endpoint: GET /api/bookings/:id
// Request: {}
// Response: { booking: Booking }
export const getBookingById = async (id: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        booking: {
          _id: id,
          bookingReference: 'BK1234567890',
          hotelId: '1',
          hotelName: 'Grand Plaza Hotel',
          roomId: 'room2',
          roomType: 'double',
          guestId: 'user1',
          guestName: 'John Doe',
          guestEmail: 'john@example.com',
          guestPhone: '+1-555-0100',
          checkInDate: '2024-03-15',
          checkOutDate: '2024-03-18',
          numberOfGuests: 2,
          numberOfNights: 3,
          totalAmount: 540,
          paymentStatus: 'completed',
          bookingStatus: 'confirmed',
          specialRequests: 'Late check-in requested',
          createdAt: '2024-02-01T00:00:00Z',
          updatedAt: '2024-02-01T00:00:00Z'
        }
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/bookings/${id}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Cancel booking
// Endpoint: PUT /api/bookings/:id/cancel
// Request: { reason: string }
// Response: { booking: Booking, message: string }
export const cancelBooking = async (id: string, reason: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        booking: {
          _id: id,
          bookingStatus: 'cancelled',
          paymentStatus: 'refunded'
        },
        message: 'Booking cancelled successfully. Refund will be processed within 5-7 business days.'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/bookings/${id}/cancel`, { reason });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get bookings by hotel
// Endpoint: GET /api/bookings/hotel/:hotelId
// Request: { status?: string, startDate?: string, endDate?: string }
// Response: { bookings: Booking[] }
export const getBookingsByHotel = async (hotelId: string, params?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bookings: [
          {
            _id: 'booking1',
            bookingReference: 'BK1234567890',
            hotelId: hotelId,
            hotelName: 'Grand Plaza Hotel',
            roomId: 'room2',
            roomType: 'double',
            guestId: 'user1',
            guestName: 'John Doe',
            guestEmail: 'john@example.com',
            guestPhone: '+1-555-0100',
            checkInDate: '2024-03-15',
            checkOutDate: '2024-03-18',
            numberOfGuests: 2,
            numberOfNights: 3,
            totalAmount: 540,
            paymentStatus: 'completed',
            bookingStatus: 'confirmed',
            createdAt: '2024-02-01T00:00:00Z',
            updatedAt: '2024-02-01T00:00:00Z'
          }
        ]
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/bookings/hotel/${hotelId}`, { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get all bookings (admin)
// Endpoint: GET /api/bookings
// Request: { status?: string, hotelId?: string, startDate?: string, endDate?: string, page?: number, limit?: number }
// Response: { bookings: Booking[], total: number, page: number, totalPages: number }
export const getAllBookings = async (params?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bookings: [
          {
            _id: 'booking1',
            bookingReference: 'BK1234567890',
            hotelId: '1',
            hotelName: 'Grand Plaza Hotel',
            roomId: 'room2',
            roomType: 'double',
            guestId: 'user1',
            guestName: 'John Doe',
            guestEmail: 'john@example.com',
            guestPhone: '+1-555-0100',
            checkInDate: '2024-03-15',
            checkOutDate: '2024-03-18',
            numberOfGuests: 2,
            numberOfNights: 3,
            totalAmount: 540,
            paymentStatus: 'completed',
            bookingStatus: 'confirmed',
            createdAt: '2024-02-01T00:00:00Z',
            updatedAt: '2024-02-01T00:00:00Z'
          },
          {
            _id: 'booking2',
            bookingReference: 'BK1234567891',
            hotelId: '2',
            hotelName: 'Seaside Resort',
            roomId: 'room3',
            roomType: 'suite',
            guestId: 'user2',
            guestName: 'Jane Smith',
            guestEmail: 'jane@example.com',
            guestPhone: '+1-555-0200',
            checkInDate: '2024-03-20',
            checkOutDate: '2024-03-25',
            numberOfGuests: 4,
            numberOfNights: 5,
            totalAmount: 1750,
            paymentStatus: 'completed',
            bookingStatus: 'confirmed',
            createdAt: '2024-02-05T00:00:00Z',
            updatedAt: '2024-02-05T00:00:00Z'
          }
        ],
        total: 2,
        page: 1,
        totalPages: 1
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get('/api/bookings', { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};