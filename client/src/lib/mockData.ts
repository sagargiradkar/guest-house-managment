// lib/mockData.ts
import { Hotel } from '@/types/hotel';

export const MOCK_HOTELS: Hotel[] = [
  {
    _id: '1',
    name: 'Luxury Corporate Suites',
    location: {
      address: 'Baner Road, Pune, Maharashtra',
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
      postalCode: '411045',
      coordinates: { lat: 18.5593, lng: 73.7797 }
    },
    description: 'Premium service apartments with modern amenities perfect for business travelers',
    price: 4500,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Gym', 'Swimming Pool'],
    roomType: '2BHK',
    availability: true,
    reviews: 156,
    owner: 'owner1'
  },
  {
    _id: '2',
    name: 'Executive Service Apartments',
    location: {
      address: 'Whitefield Main Road, Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      postalCode: '560066',
      coordinates: { lat: 12.9698, lng: 77.7499 }
    },
    description: 'Spacious apartments ideal for corporate stays and families',
    price: 3800,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Housekeeping'],
    roomType: '3BHK',
    availability: true,
    reviews: 89,
    owner: 'owner2'
  },
  {
    _id: '3',
    name: 'Downtown Studio Residency',
    location: {
      address: 'Andheri West, Mumbai, Maharashtra',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      postalCode: '400053',
      coordinates: { lat: 19.1136, lng: 72.8697 }
    },
    description: 'Compact and comfortable studio apartments in prime location',
    price: 5200,
    rating: 4.3,
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Parking', '24/7 Security'],
    roomType: 'Studio',
    availability: true,
    reviews: 234,
    owner: 'owner3'
  },
  {
    _id: '4',
    name: 'Premium Business Homes',
    location: {
      address: 'DLF Cyber City, Gurugram, Haryana',
      city: 'Gurugram',
      state: 'Haryana',
      country: 'India',
      postalCode: '122002',
      coordinates: { lat: 28.4950, lng: 77.0826 }
    },
    description: 'Fully furnished homes with premium amenities',
    price: 6800,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Gym', 'Swimming Pool', 'Laundry', '24/7 Security'],
    roomType: '3BHK',
    availability: true,
    reviews: 312,
    owner: 'owner4'
  },
  {
    _id: '5',
    name: 'Cozy 1BHK Apartments',
    location: {
      address: 'Koramangala 5th Block, Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      postalCode: '560095',
      coordinates: { lat: 12.9352, lng: 77.6245 }
    },
    description: 'Affordable and comfortable apartments for short stays',
    price: 2900,
    rating: 4.1,
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking'],
    roomType: '1BHK',
    availability: true,
    reviews: 67,
    owner: 'owner5'
  },
  {
    _id: '6',
    name: 'Elegant Corporate Flats',
    location: {
      address: 'Hinjewadi Phase 2, Pune, Maharashtra',
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
      postalCode: '411057',
      coordinates: { lat: 18.5912, lng: 73.7361 }
    },
    description: 'Modern flats designed for working professionals',
    price: 3500,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Gym', 'Parking', 'Housekeeping'],
    roomType: '2BHK',
    availability: true,
    reviews: 145,
    owner: 'owner6'
  },
  {
    _id: '7',
    name: 'Deluxe Service Apartments',
    location: {
      address: 'Bandra West, Mumbai, Maharashtra',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      postalCode: '400050',
      coordinates: { lat: 19.0596, lng: 72.8295 }
    },
    description: 'Luxurious apartments with sea-facing views',
    price: 7500,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Gym', 'Swimming Pool', 'Sea View'],
    roomType: '3BHK',
    availability: true,
    reviews: 201,
    owner: 'owner7'
  },
  {
    _id: '8',
    name: 'Budget-Friendly Studios',
    location: {
      address: 'Kharadi, Pune, Maharashtra',
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
      postalCode: '411014',
      coordinates: { lat: 18.5515, lng: 73.9371 }
    },
    description: 'Affordable studio apartments for solo travelers',
    price: 2200,
    rating: 3.9,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Parking'],
    roomType: 'Studio',
    availability: true,
    reviews: 45,
    owner: 'owner8'
  },
  {
    _id: '9',
    name: 'Family Villa Residency',
    location: {
      address: 'Powai Lake Road, Mumbai, Maharashtra',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      postalCode: '400076',
      coordinates: { lat: 19.1176, lng: 72.9060 }
    },
    description: 'Spacious villas perfect for families',
    price: 8900,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Gym', 'Swimming Pool', 'Garden', 'Laundry'],
    roomType: '4BHK',
    availability: true,
    reviews: 178,
    owner: 'owner9'
  },
  {
    _id: '10',
    name: 'Modern 2BHK Flats',
    location: {
      address: 'Indiranagar 100 Feet Road, Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      postalCode: '560038',
      coordinates: { lat: 12.9716, lng: 77.6412 }
    },
    description: 'Contemporary flats with all modern amenities',
    price: 4200,
    rating: 4.4,
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200'
    ],
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Gym', 'Housekeeping'],
    roomType: '2BHK',
    availability: true,
    reviews: 98,
    owner: 'owner10'
  }
];
