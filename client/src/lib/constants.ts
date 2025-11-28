export const ROOM_TYPES = [
  { value: 'single', label: 'Single' },
  { value: 'double', label: 'Double' },
  { value: 'suite', label: 'Suite' },
  { value: 'deluxe', label: 'Deluxe' },
  { value: 'family', label: 'Family Room' }
];

export const HOTEL_TYPES = [
  { value: 'hotel', label: 'Hotel' },
  { value: 'guesthouse', label: 'Guest House' },
  { value: 'resort', label: 'Resort' },
  { value: 'hostel', label: 'Hostel' }
];

export const AMENITIES = [
  'WiFi',
  'Air Conditioning',
  'TV',
  'Mini Bar',
  'Balcony',
  'Kitchen',
  'Parking',
  'Pool',
  'Gym',
  'Restaurant',
  'Bar',
  'Spa',
  'Room Service',
  'Laundry Service',
  '24-hour Front Desk',
  'Airport Shuttle',
  'Pet Friendly',
  'Conference Room',
  'Safe',
  'Bathtub',
  'Shower',
  'Hair Dryer',
  'Iron',
  'Work Desk',
  'Coffee Maker'
];

export const BED_TYPES = [
  { value: 'single', label: 'Single' },
  { value: 'double', label: 'Double' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' }
];

export const BOOKING_STATUS = {
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  REFUNDED: 'refunded'
};

export const ROOM_STATUS = {
  CLEAN_AVAILABLE: 'clean_available',
  OCCUPIED: 'occupied',
  NEEDS_CLEANING: 'needs_cleaning',
  UNDER_MAINTENANCE: 'under_maintenance',
  CHECKOUT_CLEANING: 'checkout_cleaning'
};

export const TASK_TYPES = [
  { value: 'checkout_cleaning', label: 'Checkout Cleaning' },
  { value: 'daily_service', label: 'Daily Service' },
  { value: 'deep_clean', label: 'Deep Clean' },
  { value: 'maintenance', label: 'Maintenance' }
];

export const PRIORITY_LEVELS = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' }
];