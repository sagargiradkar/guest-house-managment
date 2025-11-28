import api from './api';
import { Room } from '@/types/hotel';

// Description: Get rooms by hotel
// Endpoint: GET /api/rooms/hotel/:hotelId
// Request: { checkIn?, checkOut? }
// Response: { rooms: Room[] }
export const getRoomsByHotel = async (hotelId: string, checkIn?: string, checkOut?: string) => {
  try {
    const params: any = {};
    if (checkIn) params.checkIn = checkIn;
    if (checkOut) params.checkOut = checkOut;

    const response = await api.get(`/api/rooms/hotel/${hotelId}`, { params });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get room by ID
// Endpoint: GET /api/rooms/:id
// Request: {}
// Response: Room
export const getRoomById = async (roomId: string) => {
  try {
    const response = await api.get(`/api/rooms/${roomId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Create new room
// Endpoint: POST /api/rooms
// Request: { hotel, name, type, description, size, maxOccupancy, price, images, amenities, bedConfiguration }
// Response: Room
export const createRoom = async (roomData: Partial<Room>) => {
  try {
    const response = await api.post('/api/rooms', roomData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Update room
// Endpoint: PUT /api/rooms/:id
// Request: { name?, type?, description?, size?, maxOccupancy?, price?, images?, amenities?, bedConfiguration? }
// Response: Room
export const updateRoom = async (roomId: string, roomData: Partial<Room>) => {
  try {
    const response = await api.put(`/api/rooms/${roomId}`, roomData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Delete room
// Endpoint: DELETE /api/rooms/:id
// Request: {}
// Response: { success: boolean }
export const deleteRoom = async (roomId: string) => {
  try {
    const response = await api.delete(`/api/rooms/${roomId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};
