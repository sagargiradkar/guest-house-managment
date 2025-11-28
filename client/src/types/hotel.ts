export interface Hotel {
  _id: string;
  name: string;
  description: string;
  type: 'hotel' | 'guesthouse' | 'resort' | 'hostel';
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  images: string[];
  amenities: string[];
  policies: {
    checkInTime: string;
    checkOutTime: string;
    cancellationPolicy: string;
    houseRules: string;
  };
  rating: number;
  reviewCount: number;
  ownerId: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  _id: string;
  hotelId: string;
  roomNumber: string;
  roomType: 'single' | 'double' | 'suite' | 'deluxe' | 'family';
  description: string;
  size: number;
  sizeUnit: 'sqft' | 'sqm';
  maxOccupancy: number;
  basePrice: number;
  weekendPrice?: number;
  images: string[];
  amenities: string[];
  beds: Array<{
    type: 'single' | 'double' | 'queen' | 'king';
    quantity: number;
  }>;
  isAvailable: boolean;
  blockedDates: Array<{
    startDate: string;
    endDate: string;
    reason: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  _id: string;
  bookingReference: string;
  hotelId: string;
  hotelName: string;
  roomId: string;
  roomType: string;
  guestId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  numberOfNights: number;
  totalAmount: number;
  paymentStatus: 'pending' | 'completed' | 'refunded';
  bookingStatus: 'confirmed' | 'completed' | 'cancelled';
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  hotelId: string;
  bookingId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  overallRating: number;
  ratings: {
    cleanliness: number;
    comfort: number;
    location: number;
    service: number;
    valueForMoney: number;
  };
  reviewText: string;
  images: string[];
  stayDate: string;
  isAnonymous: boolean;
  helpfulVotes: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}