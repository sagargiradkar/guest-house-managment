import api from './api';
import { Hotel } from '@/types/hotel';

// Description: Get list of hotels with filters
// Endpoint: GET /api/hotels
// Request: { location?: string, checkIn?: string, checkOut?: string, guests?: number, minPrice?: number, maxPrice?: number, amenities?: string[], roomType?: string }
// Response: { hotels: Hotel[], total: number }
export const getHotels = async (filters?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotels: [
          {
            _id: '1',
            name: 'Grand Plaza Hotel',
            description: 'Luxury hotel in the heart of the city with stunning views and world-class amenities.',
            type: 'hotel',
            location: {
              address: '123 Main Street',
              city: 'New York',
              state: 'NY',
              country: 'USA',
              postalCode: '10001',
              coordinates: { lat: 40.7128, lng: -74.0060 }
            },
            contact: {
              phone: '+1-555-0123',
              email: 'info@grandplaza.com',
              website: 'https://grandplaza.com'
            },
            images: [
              'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
              'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'
            ],
            amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Parking', 'Spa', '24-hour Front Desk'],
            policies: {
              checkInTime: '15:00',
              checkOutTime: '11:00',
              cancellationPolicy: 'Free cancellation up to 24 hours before check-in',
              houseRules: 'No smoking, No pets, Quiet hours 10 PM - 7 AM'
            },
            rating: 4.5,
            reviewCount: 234,
            ownerId: 'owner1',
            status: 'active',
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z'
          },
          {
            _id: '2',
            name: 'Seaside Resort',
            description: 'Beautiful beachfront resort with private beach access and ocean views.',
            type: 'resort',
            location: {
              address: '456 Beach Road',
              city: 'Miami',
              state: 'FL',
              country: 'USA',
              postalCode: '33139',
              coordinates: { lat: 25.7617, lng: -80.1918 }
            },
            contact: {
              phone: '+1-555-0456',
              email: 'info@seasideresort.com'
            },
            images: [
              'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'
            ],
            amenities: ['WiFi', 'Pool', 'Beach Access', 'Restaurant', 'Bar', 'Water Sports'],
            policies: {
              checkInTime: '14:00',
              checkOutTime: '12:00',
              cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
              houseRules: 'No smoking in rooms, Pets allowed with fee'
            },
            rating: 4.8,
            reviewCount: 456,
            ownerId: 'owner2',
            status: 'active',
            createdAt: '2024-01-05T00:00:00Z',
            updatedAt: '2024-01-20T00:00:00Z'
          },
          {
            _id: '3',
            name: 'Mountain View Lodge',
            description: 'Cozy mountain lodge with breathtaking views and hiking trails.',
            type: 'guesthouse',
            location: {
              address: '789 Mountain Pass',
              city: 'Aspen',
              state: 'CO',
              country: 'USA',
              postalCode: '81611',
              coordinates: { lat: 39.1911, lng: -106.8175 }
            },
            contact: {
              phone: '+1-555-0789',
              email: 'info@mountainviewlodge.com'
            },
            images: [
              'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
              'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800'
            ],
            amenities: ['WiFi', 'Fireplace', 'Hiking Trails', 'Restaurant', 'Parking'],
            policies: {
              checkInTime: '16:00',
              checkOutTime: '10:00',
              cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
              houseRules: 'No smoking, No parties'
            },
            rating: 4.6,
            reviewCount: 189,
            ownerId: 'owner1',
            status: 'active',
            createdAt: '2024-01-10T00:00:00Z',
            updatedAt: '2024-01-25T00:00:00Z'
          }
        ],
        total: 3
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get('/api/hotels', { params: filters });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get hotel by ID
// Endpoint: GET /api/hotels/:id
// Request: {}
// Response: { hotel: Hotel }
export const getHotelById = async (id: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotel: {
          _id: id,
          name: 'Grand Plaza Hotel',
          description: 'Luxury hotel in the heart of the city with stunning views and world-class amenities. Our hotel offers spacious rooms, exceptional service, and convenient access to major attractions.',
          type: 'hotel',
          location: {
            address: '123 Main Street',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            postalCode: '10001',
            coordinates: { lat: 40.7128, lng: -74.0060 }
          },
          contact: {
            phone: '+1-555-0123',
            email: 'info@grandplaza.com',
            website: 'https://grandplaza.com'
          },
          images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'
          ],
          amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Parking', 'Spa', '24-hour Front Desk', 'Room Service', 'Laundry Service'],
          policies: {
            checkInTime: '15:00',
            checkOutTime: '11:00',
            cancellationPolicy: 'Free cancellation up to 24 hours before check-in. Cancellations made within 24 hours will incur a one-night charge.',
            houseRules: 'No smoking in rooms. Quiet hours from 10 PM to 7 AM. Maximum 2 guests per room unless specified.'
          },
          rating: 4.5,
          reviewCount: 234,
          ownerId: 'owner1',
          status: 'active',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-15T00:00:00Z'
        }
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/hotels/${id}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Create new hotel
// Endpoint: POST /api/hotels
// Request: { hotel: Partial<Hotel> }
// Response: { hotel: Hotel, message: string }
export const createHotel = async (hotelData: Partial<Hotel>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotel: { ...hotelData, _id: Date.now().toString() },
        message: 'Hotel created successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.post('/api/hotels', hotelData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Update hotel
// Endpoint: PUT /api/hotels/:id
// Request: { hotel: Partial<Hotel> }
// Response: { hotel: Hotel, message: string }
export const updateHotel = async (id: string, hotelData: Partial<Hotel>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotel: { ...hotelData, _id: id },
        message: 'Hotel updated successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/hotels/${id}`, hotelData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Delete hotel
// Endpoint: DELETE /api/hotels/:id
// Request: {}
// Response: { message: string }
export const deleteHotel = async (id: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Hotel deleted successfully' });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.delete(`/api/hotels/${id}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get hotels by owner
// Endpoint: GET /api/hotels/owner/:ownerId
// Request: {}
// Response: { hotels: Hotel[] }
export const getHotelsByOwner = async (ownerId: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotels: [
          {
            _id: '1',
            name: 'Grand Plaza Hotel',
            description: 'Luxury hotel in the heart of the city',
            type: 'hotel',
            location: {
              address: '123 Main Street',
              city: 'New York',
              state: 'NY',
              country: 'USA',
              postalCode: '10001',
              coordinates: { lat: 40.7128, lng: -74.0060 }
            },
            contact: {
              phone: '+1-555-0123',
              email: 'info@grandplaza.com'
            },
            images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
            amenities: ['WiFi', 'Pool', 'Gym'],
            policies: {
              checkInTime: '15:00',
              checkOutTime: '11:00',
              cancellationPolicy: 'Free cancellation up to 24 hours',
              houseRules: 'No smoking'
            },
            rating: 4.5,
            reviewCount: 234,
            ownerId: ownerId,
            status: 'active',
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z'
          }
        ]
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/hotels/owner/${ownerId}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};