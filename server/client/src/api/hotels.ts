import api from './api';
import { Hotel } from '@/types/hotel';

interface HotelFilters {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
  amenities?: string[];
  roomType?: string;
}

interface HotelsResponse {
  hotels: Hotel[];
  total: number;
}

// Description: Get list of hotels with filters
// Endpoint: GET /api/hotels
// Request: { search?, city?, amenities?, minPrice?, maxPrice?, type?, rating?, page?, limit? }
// Response: { hotels: Hotel[], total: number, page: number, totalPages: number }
export const getHotels = async (filters?: HotelFilters): Promise<HotelsResponse> => {
  try {
    const params: any = {};
    if (filters?.location) params.search = filters.location;
    if (filters?.minPrice) params.minPrice = filters.minPrice;
    if (filters?.maxPrice) params.maxPrice = filters.maxPrice;
    if (filters?.amenities) params.amenities = filters.amenities;
    if (filters?.roomType) params.type = filters.roomType;

    const response = await api.get('/api/hotels', { params });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

interface HotelResponse {
  hotel: Hotel;
}

// Description: Get hotel by ID
// Endpoint: GET /api/hotels/:id
// Request: {}
// Response: Hotel
export const getHotelById = async (id: string): Promise<Hotel> => {
  try {
    const response = await api.get(`/api/hotels/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Create new hotel
// Endpoint: POST /api/hotels
// Request: { name, description, type, address, contact, images, amenities, policies }
// Response: Hotel
export const createHotel = async (hotelData: Partial<Hotel>) => {
  try {
    const response = await api.post('/api/hotels', hotelData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Update hotel
// Endpoint: PUT /api/hotels/:id
// Request: { name?, description?, type?, address?, contact?, images?, amenities?, policies? }
// Response: Hotel
export const updateHotel = async (id: string, hotelData: Partial<Hotel>) => {
  try {
    const response = await api.put(`/api/hotels/${id}`, hotelData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Delete hotel
// Endpoint: DELETE /api/hotels/:id
// Request: {}
// Response: { success: boolean }
export const deleteHotel = async (id: string) => {
  try {
    const response = await api.delete(`/api/hotels/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get hotels by owner
// Endpoint: GET /api/hotels/owner/me
// Request: {}
// Response: { hotels: Hotel[] }
export const getHotelsByOwner = async () => {
  try {
    const response = await api.get('/api/hotels/owner/me');
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};
