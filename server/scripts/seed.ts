import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User';
import Hotel from '../models/Hotel';
import Room from '../models/Room';
import { generatePasswordHash } from '../utils/password';

dotenv.config();

const SAMPLE_HOTEL_IMAGES = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
];

const SAMPLE_ROOM_IMAGES = [
  'https://images.unsplash.com/photo-1590490360182-c33d57733427',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
];

async function seed() {
  try {
    console.log('Starting database seed...');

    // Connect to database
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined');
    }

    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to database');

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({});
    await Hotel.deleteMany({});
    await Room.deleteMany({});
    console.log('Existing data cleared');

    // Create admin user
    console.log('Creating admin user...');
    const adminPassword = await generatePasswordHash('admin123');
    const admin = await User.create({
      email: 'admin@guesthub.com',
      password: adminPassword,
      name: 'System Admin',
      role: 'admin',
    });
    console.log('Admin user created:', admin.email);

    // Create owner user
    console.log('Creating owner user...');
    const ownerPassword = await generatePasswordHash('owner123');
    const owner = await User.create({
      email: 'owner@guesthub.com',
      password: ownerPassword,
      name: 'Hotel Owner',
      role: 'owner',
    });
    console.log('Owner user created:', owner.email);

    // Create guest user
    console.log('Creating guest user...');
    const guestPassword = await generatePasswordHash('guest123');
    const guest = await User.create({
      email: 'guest@guesthub.com',
      password: guestPassword,
      name: 'John Guest',
      role: 'guest',
    });
    console.log('Guest user created:', guest.email);

    // Create sample hotels
    console.log('Creating sample hotels...');

    const hotel1 = await Hotel.create({
      name: 'Grand Plaza Hotel',
      description:
        'Experience luxury and comfort at the Grand Plaza Hotel. Located in the heart of the city, we offer world-class amenities and exceptional service.',
      type: 'Hotel',
      owner: owner._id,
      address: {
        line1: '123 Main Street',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        postalCode: '10001',
      },
      location: {
        type: 'Point',
        coordinates: [-74.006, 40.7128],
      },
      contact: {
        phone: '+1-212-555-0100',
        email: 'info@grandplaza.com',
        website: 'https://grandplaza.com',
      },
      images: SAMPLE_HOTEL_IMAGES,
      amenities: ['WiFi', 'Parking', 'Pool', 'Gym', 'Restaurant', 'Bar', '24-hour Front Desk'],
      policies: {
        checkInTime: '15:00',
        checkOutTime: '11:00',
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        houseRules: 'No smoking. No pets allowed.',
      },
      status: 'active',
      rating: 4.5,
      reviewCount: 0,
    });
    console.log('Created hotel:', hotel1.name);

    const hotel2 = await Hotel.create({
      name: 'Seaside Resort',
      description:
        'Escape to paradise at Seaside Resort. Enjoy breathtaking ocean views, pristine beaches, and unmatched hospitality.',
      type: 'Resort',
      owner: owner._id,
      address: {
        line1: '456 Beach Road',
        city: 'Miami',
        state: 'FL',
        country: 'USA',
        postalCode: '33139',
      },
      location: {
        type: 'Point',
        coordinates: [-80.1300, 25.7907],
      },
      contact: {
        phone: '+1-305-555-0200',
        email: 'reservations@seasideresort.com',
        website: 'https://seasideresort.com',
      },
      images: SAMPLE_HOTEL_IMAGES,
      amenities: [
        'WiFi',
        'Parking',
        'Pool',
        'Gym',
        'Restaurant',
        'Bar',
        'Spa',
        'Beach Access',
      ],
      policies: {
        checkInTime: '14:00',
        checkOutTime: '12:00',
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        houseRules: 'No smoking in rooms. Pets welcome with additional fee.',
      },
      status: 'active',
      rating: 4.8,
      reviewCount: 0,
    });
    console.log('Created hotel:', hotel2.name);

    const hotel3 = await Hotel.create({
      name: 'Cozy Mountain Lodge',
      description:
        'Nestled in the mountains, our lodge offers a peaceful retreat with stunning views and outdoor adventures.',
      type: 'Guest House',
      owner: owner._id,
      address: {
        line1: '789 Mountain Trail',
        city: 'Aspen',
        state: 'CO',
        country: 'USA',
        postalCode: '81611',
      },
      location: {
        type: 'Point',
        coordinates: [-106.8175, 39.1911],
      },
      contact: {
        phone: '+1-970-555-0300',
        email: 'hello@mountainlodge.com',
      },
      images: SAMPLE_HOTEL_IMAGES,
      amenities: ['WiFi', 'Parking', 'Fireplace', 'Kitchen', 'Pet Friendly'],
      policies: {
        checkInTime: '16:00',
        checkOutTime: '10:00',
        cancellationPolicy: 'Free cancellation up to 24 hours before check-in',
        houseRules: 'No smoking. Pets allowed.',
      },
      status: 'active',
      rating: 4.3,
      reviewCount: 0,
    });
    console.log('Created hotel:', hotel3.name);

    // Create rooms for each hotel
    console.log('Creating rooms...');

    // Rooms for Grand Plaza Hotel
    await Room.create({
      hotel: hotel1._id,
      name: 'Deluxe King Room',
      type: 'Deluxe',
      description: 'Spacious room with a king-size bed, city views, and modern amenities.',
      size: 350,
      maxOccupancy: 2,
      price: 250,
      images: SAMPLE_ROOM_IMAGES,
      amenities: ['WiFi', 'Air Conditioning', 'TV', 'Mini Bar', 'Coffee Maker', 'Safe'],
      bedConfiguration: [{ type: 'King', quantity: 1 }],
      availability: true,
      status: 'clean',
    });

    await Room.create({
      hotel: hotel1._id,
      name: 'Executive Suite',
      type: 'Suite',
      description: 'Luxurious suite with separate living area, perfect for business travelers.',
      size: 600,
      maxOccupancy: 4,
      price: 450,
      images: SAMPLE_ROOM_IMAGES,
      amenities: [
        'WiFi',
        'Air Conditioning',
        'TV',
        'Mini Bar',
        'Balcony',
        'Work Desk',
        'Coffee Maker',
      ],
      bedConfiguration: [
        { type: 'King', quantity: 1 },
        { type: 'Double', quantity: 1 },
      ],
      availability: true,
      status: 'clean',
    });

    await Room.create({
      hotel: hotel1._id,
      name: 'Standard Double Room',
      type: 'Double',
      description: 'Comfortable room with two double beds, ideal for families or friends.',
      size: 300,
      maxOccupancy: 4,
      price: 180,
      images: SAMPLE_ROOM_IMAGES,
      amenities: ['WiFi', 'Air Conditioning', 'TV', 'Coffee Maker'],
      bedConfiguration: [{ type: 'Double', quantity: 2 }],
      availability: true,
      status: 'clean',
    });

    // Rooms for Seaside Resort
    await Room.create({
      hotel: hotel2._id,
      name: 'Ocean View Suite',
      type: 'Suite',
      description: 'Breathtaking ocean views from your private balcony in this luxury suite.',
      size: 700,
      maxOccupancy: 4,
      price: 550,
      weekendPrice: 650,
      images: SAMPLE_ROOM_IMAGES,
      amenities: [
        'WiFi',
        'Air Conditioning',
        'TV',
        'Mini Bar',
        'Balcony',
        'Bathtub',
        'Coffee Maker',
      ],
      bedConfiguration: [{ type: 'King', quantity: 1 }],
      availability: true,
      status: 'clean',
    });

    await Room.create({
      hotel: hotel2._id,
      name: 'Beach Villa',
      type: 'Suite',
      description: 'Private villa steps from the beach with exclusive amenities.',
      size: 1000,
      maxOccupancy: 6,
      price: 850,
      weekendPrice: 1000,
      images: SAMPLE_ROOM_IMAGES,
      amenities: [
        'WiFi',
        'Air Conditioning',
        'TV',
        'Mini Bar',
        'Kitchen',
        'Balcony',
        'Bathtub',
        'Private Pool',
      ],
      bedConfiguration: [
        { type: 'King', quantity: 2 },
        { type: 'Double', quantity: 1 },
      ],
      availability: true,
      status: 'clean',
    });

    await Room.create({
      hotel: hotel2._id,
      name: 'Garden View Room',
      type: 'Double',
      description: 'Peaceful room overlooking tropical gardens.',
      size: 400,
      maxOccupancy: 3,
      price: 280,
      weekendPrice: 320,
      images: SAMPLE_ROOM_IMAGES,
      amenities: ['WiFi', 'Air Conditioning', 'TV', 'Balcony', 'Coffee Maker'],
      bedConfiguration: [{ type: 'Queen', quantity: 1 }],
      availability: true,
      status: 'clean',
    });

    // Rooms for Cozy Mountain Lodge
    await Room.create({
      hotel: hotel3._id,
      name: 'Mountain View Cabin',
      type: 'Suite',
      description: 'Rustic cabin with panoramic mountain views and cozy fireplace.',
      size: 500,
      maxOccupancy: 4,
      price: 320,
      images: SAMPLE_ROOM_IMAGES,
      amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Balcony', 'Coffee Maker'],
      bedConfiguration: [
        { type: 'Queen', quantity: 1 },
        { type: 'Double', quantity: 1 },
      ],
      availability: true,
      status: 'clean',
    });

    await Room.create({
      hotel: hotel3._id,
      name: 'Cozy Single Room',
      type: 'Single',
      description: 'Perfect for solo travelers seeking tranquility in the mountains.',
      size: 200,
      maxOccupancy: 1,
      price: 120,
      images: SAMPLE_ROOM_IMAGES,
      amenities: ['WiFi', 'Fireplace', 'Coffee Maker'],
      bedConfiguration: [{ type: 'Single', quantity: 1 }],
      availability: true,
      status: 'clean',
    });

    await Room.create({
      hotel: hotel3._id,
      name: 'Family Suite',
      type: 'Family',
      description: 'Spacious suite perfect for families with children, featuring a full kitchen.',
      size: 650,
      maxOccupancy: 6,
      price: 400,
      images: SAMPLE_ROOM_IMAGES,
      amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Balcony', 'Coffee Maker', 'Work Desk'],
      bedConfiguration: [
        { type: 'King', quantity: 1 },
        { type: 'Double', quantity: 2 },
      ],
      availability: true,
      status: 'clean',
    });

    console.log('Rooms created successfully');

    console.log('\n=== SEED DATA SUMMARY ===');
    console.log('\nTest Accounts:');
    console.log('1. Admin:');
    console.log('   Email: admin@guesthub.com');
    console.log('   Password: admin123');
    console.log('\n2. Owner:');
    console.log('   Email: owner@guesthub.com');
    console.log('   Password: owner123');
    console.log('\n3. Guest:');
    console.log('   Email: guest@guesthub.com');
    console.log('   Password: guest123');
    console.log('\nHotels created: 3');
    console.log('Rooms created: 9');
    console.log('\n=== SEED COMPLETED SUCCESSFULLY ===\n');

    await mongoose.disconnect();
    console.log('Disconnected from database');
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

seed();
