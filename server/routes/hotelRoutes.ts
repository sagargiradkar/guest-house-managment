import express from 'express';
import { requireUser } from './middlewares/auth';
import hotelService from '../services/hotelService';
import { ROLES } from 'shared/config/roles';

const router = express.Router();

// Description: Get all hotels with optional filters
// Endpoint: GET /api/hotels
// Request: { search?, city?, amenities?, minPrice?, maxPrice?, type?, rating?, page?, limit? }
// Response: { hotels: Array<Hotel>, total: number, page: number, totalPages: number }
router.get('/', async (req, res) => {
  try {
    const {
      search,
      city,
      amenities,
      minPrice,
      maxPrice,
      type,
      rating,
      page = '1',
      limit = '20',
    } = req.query;

    const filters: any = {};

    if (search) filters.search = search as string;
    if (city) filters.city = city as string;
    if (amenities) {
      filters.amenities = Array.isArray(amenities) ? amenities : [amenities];
    }
    if (minPrice) filters.minPrice = parseFloat(minPrice as string);
    if (maxPrice) filters.maxPrice = parseFloat(maxPrice as string);
    if (type) filters.type = type as string;
    if (rating) filters.rating = parseFloat(rating as string);

    const result = await hotelService.getHotels(
      filters,
      parseInt(page as string),
      parseInt(limit as string)
    );

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get hotels by owner
// Endpoint: GET /api/hotels/owner/me
// Request: {}
// Response: { hotels: Array<Hotel> }
router.get('/owner/me', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const hotels = await hotelService.getHotelsByOwner(req.user._id.toString());

    res.status(200).json({ hotels });
  } catch (error: any) {
    console.error('Error fetching owner hotels:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get hotel by ID
// Endpoint: GET /api/hotels/:id
// Request: {}
// Response: { hotel: Hotel }
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await hotelService.getHotelById(id);

    res.status(200).json(hotel);
  } catch (error: any) {
    console.error('Error fetching hotel:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
  }
});

// Description: Create a new hotel
// Endpoint: POST /api/hotels
// Request: { name, description, type, address, contact, images, amenities, policies }
// Response: { hotel: Hotel }
router.post('/', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const hotel = await hotelService.createHotel(req.body, req.user._id.toString());

    res.status(201).json(hotel);
  } catch (error: any) {
    console.error('Error creating hotel:', error);
    res.status(400).json({ error: error.message });
  }
});

// Description: Update hotel
// Endpoint: PUT /api/hotels/:id
// Request: { name?, description?, type?, address?, contact?, images?, amenities?, policies? }
// Response: { hotel: Hotel }
router.put('/:id', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await hotelService.updateHotel(
      id,
      req.body,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json(hotel);
  } catch (error: any) {
    console.error('Error updating hotel:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

// Description: Delete hotel
// Endpoint: DELETE /api/hotels/:id
// Request: {}
// Response: { success: boolean }
router.delete('/:id', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const result = await hotelService.deleteHotel(id, req.user._id.toString(), req.user.role);

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error deleting hotel:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

export default router;
