import express from 'express';
import { requireUser } from './middlewares/auth';
import bookingService from '../services/bookingService';
import { ROLES } from 'shared/config/roles';

const router = express.Router();

// Description: Create a new booking
// Endpoint: POST /api/bookings
// Request: { hotelId, roomId, checkInDate, checkOutDate, numberOfGuests, guestDetails, specialRequests, payment }
// Response: { booking: Booking }
router.post('/', requireUser(), async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body, req.user._id.toString());

    res.status(201).json(booking);
  } catch (error: any) {
    console.error('Error creating booking:', error);
    res.status(400).json({ error: error.message });
  }
});

// Description: Get bookings by user
// Endpoint: GET /api/bookings/user/me
// Request: { status? }
// Response: { bookings: Array<Booking> }
router.get('/user/me', requireUser(), async (req, res) => {
  try {
    const { status } = req.query;
    const bookings = await bookingService.getBookingsByUser(
      req.user._id.toString(),
      status as string
    );

    res.status(200).json({ bookings });
  } catch (error: any) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get booking by ID
// Endpoint: GET /api/bookings/:id
// Request: {}
// Response: { booking: Booking }
router.get('/:id', requireUser(), async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingService.getBookingById(
      id,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json(booking);
  } catch (error: any) {
    console.error('Error fetching booking:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 500;
    res.status(status).json({ error: error.message });
  }
});

// Description: Get bookings by hotel
// Endpoint: GET /api/bookings/hotel/:hotelId
// Request: {}
// Response: { bookings: Array<Booking> }
router.get('/hotel/:hotelId', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { hotelId } = req.params;
    const bookings = await bookingService.getBookingsByHotel(
      hotelId,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json({ bookings });
  } catch (error: any) {
    console.error('Error fetching hotel bookings:', error);
    const status = error.message.includes('permission') ? 403 : 500;
    res.status(status).json({ error: error.message });
  }
});

// Description: Get all bookings (admin only)
// Endpoint: GET /api/bookings
// Request: { status?, hotelId?, startDate?, endDate?, page?, limit? }
// Response: { bookings: Array<Booking>, total: number, page: number, totalPages: number }
router.get('/', requireUser([ROLES.ADMIN]), async (req, res) => {
  try {
    const { status, hotelId, startDate, endDate, page = '1', limit = '20' } = req.query;

    const filters: any = {};
    if (status) filters.status = status;
    if (hotelId) filters.hotelId = hotelId;
    if (startDate && endDate) {
      filters.startDate = startDate;
      filters.endDate = endDate;
    }

    const result = await bookingService.getAllBookings(
      filters,
      parseInt(page as string),
      parseInt(limit as string)
    );

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Cancel booking
// Endpoint: POST /api/bookings/:id/cancel
// Request: { cancellationReason? }
// Response: { booking: Booking }
router.post('/:id/cancel', requireUser(), async (req, res) => {
  try {
    const { id } = req.params;
    const { cancellationReason } = req.body;

    const booking = await bookingService.cancelBooking(
      id,
      req.user._id.toString(),
      req.user.role,
      cancellationReason
    );

    res.status(200).json(booking);
  } catch (error: any) {
    console.error('Error cancelling booking:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

export default router;
