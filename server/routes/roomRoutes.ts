import express from 'express';
import { requireUser } from './middlewares/auth';
import roomService from '../services/roomService';
import { ROLES } from 'shared/config/roles';

const router = express.Router();

// Description: Get rooms by hotel
// Endpoint: GET /api/rooms/hotel/:hotelId
// Request: { checkIn?, checkOut? }
// Response: { rooms: Array<Room> }
router.get('/hotel/:hotelId', async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { checkIn, checkOut } = req.query;

    const rooms = await roomService.getRoomsByHotel(
      hotelId,
      checkIn as string,
      checkOut as string
    );

    res.status(200).json({ rooms });
  } catch (error: any) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get room by ID
// Endpoint: GET /api/rooms/:id
// Request: {}
// Response: { room: Room }
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const room = await roomService.getRoomById(id);

    res.status(200).json(room);
  } catch (error: any) {
    console.error('Error fetching room:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
  }
});

// Description: Create a new room
// Endpoint: POST /api/rooms
// Request: { hotel, name, type, description, size, maxOccupancy, price, images, amenities, bedConfiguration }
// Response: { room: Room }
router.post('/', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const room = await roomService.createRoom(req.body, req.user._id.toString(), req.user.role);

    res.status(201).json(room);
  } catch (error: any) {
    console.error('Error creating room:', error);
    const status = error.message.includes('permission') ? 403 : 400;
    res.status(status).json({ error: error.message });
  }
});

// Description: Update room
// Endpoint: PUT /api/rooms/:id
// Request: { name?, type?, description?, size?, maxOccupancy?, price?, images?, amenities?, bedConfiguration? }
// Response: { room: Room }
router.put('/:id', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const room = await roomService.updateRoom(id, req.body, req.user._id.toString(), req.user.role);

    res.status(200).json(room);
  } catch (error: any) {
    console.error('Error updating room:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

// Description: Delete room
// Endpoint: DELETE /api/rooms/:id
// Request: {}
// Response: { success: boolean }
router.delete('/:id', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const result = await roomService.deleteRoom(id, req.user._id.toString(), req.user.role);

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error deleting room:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

export default router;
