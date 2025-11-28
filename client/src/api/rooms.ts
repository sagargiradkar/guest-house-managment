import api from './api';
import { Room } from '@/types/hotel';

interface RoomParams {
  checkIn?: string;
  checkOut?: string;
}

interface RoomsResponse {
  rooms: Room[];
}

interface RoomResponse {
  room: Room;
}

interface RoomMessageResponse {
  room: Room;
  message: string;
}

interface MessageResponse {
  message: string;
}

// Description: Get rooms by hotel ID
// Endpoint: GET /api/rooms/hotel/:hotelId
// Request: { checkIn?: string, checkOut?: string }
// Response: { rooms: Room[] }
export const getRoomsByHotel = async (hotelId: string, params?: RoomParams): Promise<RoomsResponse> => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        rooms: [
          {
            _id: 'room1',
            hotelId: hotelId,
            roomNumber: '101',
            roomType: 'single',
            description: 'Cozy single room with city view',
            size: 250,
            sizeUnit: 'sqft',
            maxOccupancy: 1,
            basePrice: 120,
            images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'],
            amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar'],
            beds: [{ type: 'single', quantity: 1 }],
            isAvailable: true,
            blockedDates: [],
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z'
          },
          {
            _id: 'room2',
            hotelId: hotelId,
            roomNumber: '201',
            roomType: 'double',
            description: 'Spacious double room with modern amenities',
            size: 350,
            sizeUnit: 'sqft',
            maxOccupancy: 2,
            basePrice: 180,
            weekendPrice: 220,
            images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'],
            amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Balcony'],
            beds: [{ type: 'queen', quantity: 1 }],
            isAvailable: true,
            blockedDates: [],
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z'
          },
          {
            _id: 'room3',
            hotelId: hotelId,
            roomNumber: '301',
            roomType: 'suite',
            description: 'Luxurious suite with separate living area',
            size: 600,
            sizeUnit: 'sqft',
            maxOccupancy: 4,
            basePrice: 350,
            weekendPrice: 420,
            images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'],
            amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Balcony', 'Kitchen', 'Bathtub'],
            beds: [{ type: 'king', quantity: 1 }, { type: 'single', quantity: 2 }],
            isAvailable: true,
            blockedDates: [],
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z'
          }
        ]
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/rooms/hotel/${hotelId}`, { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get room by ID
// Endpoint: GET /api/rooms/:id
// Request: {}
// Response: { room: Room }
export const getRoomById = async (id: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        room: {
          _id: id,
          hotelId: '1',
          roomNumber: '201',
          roomType: 'double',
          description: 'Spacious double room with modern amenities and city view',
          size: 350,
          sizeUnit: 'sqft',
          maxOccupancy: 2,
          basePrice: 180,
          weekendPrice: 220,
          images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'
          ],
          amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Balcony', 'Safe'],
          beds: [{ type: 'queen', quantity: 1 }],
          isAvailable: true,
          blockedDates: [],
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-15T00:00:00Z'
        }
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/rooms/${id}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Create new room
// Endpoint: POST /api/rooms
// Request: { room: Partial<Room> }
// Response: { room: Room, message: string }
export const createRoom = async (roomData: Partial<Room>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        room: { ...roomData, _id: Date.now().toString() },
        message: 'Room created successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.post('/api/rooms', roomData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Update room
// Endpoint: PUT /api/rooms/:id
// Request: { room: Partial<Room> }
// Response: { room: Room, message: string }
export const updateRoom = async (id: string, roomData: Partial<Room>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        room: { ...roomData, _id: id },
        message: 'Room updated successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/rooms/${id}`, roomData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Delete room
// Endpoint: DELETE /api/rooms/:id
// Request: {}
// Response: { message: string }
export const deleteRoom = async (id: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Room deleted successfully' });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.delete(`/api/rooms/${id}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};