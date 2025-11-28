import api from './api';
import { Booking } from '@/types/hotel';

interface CreateBookingData {
  hotelId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  guestDetails: {
    fullName: string;
    email: string;
    phone: string;
    additionalGuests?: string[];
  };
  specialRequests?: string;
  payment: {
    method: string;
  };
}

// Description: Create a new booking
// Endpoint: POST /api/bookings
// Request: { hotelId, roomId, checkInDate, checkOutDate, numberOfGuests, guestDetails, specialRequests, payment }
// Response: Booking
export const createBooking = async (bookingData: CreateBookingData) => {
  try {
    const response = await api.post('/api/bookings', bookingData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get bookings by user
// Endpoint: GET /api/bookings/user/me
// Request: { status? }
// Response: { bookings: Booking[] }
export const getBookingsByUser = async (status?: string) => {
  try {
    const params: any = {};
    if (status) params.status = status;

    const response = await api.get('/api/bookings/user/me', { params });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get booking by ID
// Endpoint: GET /api/bookings/:id
// Request: {}
// Response: Booking
export const getBookingById = async (bookingId: string) => {
  try {
    const response = await api.get(`/api/bookings/${bookingId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Cancel booking
// Endpoint: POST /api/bookings/:id/cancel
// Request: { cancellationReason? }
// Response: Booking
export const cancelBooking = async (bookingId: string, cancellationReason?: string) => {
  try {
    const response = await api.post(`/api/bookings/${bookingId}/cancel`, {
      cancellationReason,
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get bookings by hotel
// Endpoint: GET /api/bookings/hotel/:hotelId
// Request: {}
// Response: { bookings: Booking[] }
export const getBookingsByHotel = async (hotelId: string) => {
  try {
    const response = await api.get(`/api/bookings/hotel/${hotelId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get all bookings (admin only)
// Endpoint: GET /api/bookings
// Request: { status?, hotelId?, startDate?, endDate?, page?, limit? }
// Response: { bookings: Booking[], total: number, page: number, totalPages: number }
export const getAllBookings = async (filters?: any) => {
  try {
    const response = await api.get('/api/bookings', { params: filters });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};
