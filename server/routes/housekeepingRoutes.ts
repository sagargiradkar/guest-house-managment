import express from 'express';
import { requireUser } from './middlewares/auth';
import housekeepingService from '../services/housekeepingService';
import { ROLES } from 'shared/config/roles';

const router = express.Router();

// Description: Get room statuses by hotel
// Endpoint: GET /api/housekeeping/rooms/:hotelId
// Request: {}
// Response: { rooms: Array<RoomStatus> }
router.get('/rooms/:hotelId', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { hotelId } = req.params;
    const rooms = await housekeepingService.getRoomStatusesByHotel(
      hotelId,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json({ rooms });
  } catch (error: any) {
    console.error('Error fetching room statuses:', error);
    const status = error.message.includes('permission') ? 403 : 500;
    res.status(status).json({ error: error.message });
  }
});

// Description: Update room status
// Endpoint: PUT /api/housekeeping/rooms/:roomId/status
// Request: { status: 'clean' | 'occupied' | 'dirty' | 'maintenance' }
// Response: { room: Room }
router.put('/rooms/:roomId/status', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { roomId } = req.params;
    const { status } = req.body;

    if (!status || !['clean', 'occupied', 'dirty', 'maintenance'].includes(status)) {
      return res.status(400).json({ error: 'Invalid room status' });
    }

    const room = await housekeepingService.updateRoomStatus(
      roomId,
      status,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json(room);
  } catch (error: any) {
    console.error('Error updating room status:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

// Description: Get housekeeping tasks
// Endpoint: GET /api/housekeeping/tasks/:hotelId
// Request: { status?, priority?, assignedTo? }
// Response: { tasks: Array<HousekeepingTask> }
router.get('/tasks/:hotelId', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { status, priority, assignedTo } = req.query;

    const filters: any = {};
    if (status) filters.status = status;
    if (priority) filters.priority = priority;
    if (assignedTo) filters.assignedTo = assignedTo;

    const tasks = await housekeepingService.getHousekeepingTasks(
      hotelId,
      req.user._id.toString(),
      req.user.role,
      filters
    );

    res.status(200).json({ tasks });
  } catch (error: any) {
    console.error('Error fetching housekeeping tasks:', error);
    const status = error.message.includes('permission') ? 403 : 500;
    res.status(status).json({ error: error.message });
  }
});

// Description: Create housekeeping task
// Endpoint: POST /api/housekeeping/tasks
// Request: { hotelId, roomId, taskType, priority, scheduledDate, assignedTo?, description?, specialInstructions? }
// Response: { task: HousekeepingTask }
router.post('/tasks', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const task = await housekeepingService.createHousekeepingTask(
      req.body,
      req.user._id.toString(),
      req.user.role
    );

    res.status(201).json(task);
  } catch (error: any) {
    console.error('Error creating housekeeping task:', error);
    const status = error.message.includes('permission') ? 403 : 400;
    res.status(status).json({ error: error.message });
  }
});

// Description: Update housekeeping task
// Endpoint: PUT /api/housekeeping/tasks/:id
// Request: { status?, priority?, assignedTo?, description?, specialInstructions? }
// Response: { task: HousekeepingTask }
router.put('/tasks/:id', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const task = await housekeepingService.updateHousekeepingTask(
      id,
      req.body,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json(task);
  } catch (error: any) {
    console.error('Error updating housekeeping task:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

// Description: Delete housekeeping task
// Endpoint: DELETE /api/housekeeping/tasks/:id
// Request: {}
// Response: { success: boolean }
router.delete('/tasks/:id', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const result = await housekeepingService.deleteHousekeepingTask(
      id,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error deleting housekeeping task:', error);
    const status = error.message.includes('permission') ? 403 : error.message.includes('not found') ? 404 : 400;
    res.status(status).json({ error: error.message });
  }
});

// Description: Get housekeeping summary
// Endpoint: GET /api/housekeeping/summary/:hotelId
// Request: {}
// Response: { rooms: { clean, occupied, dirty, maintenance, total }, tasks: { pending, in_progress, completed, cancelled, total } }
router.get('/summary/:hotelId', requireUser([ROLES.OWNER, ROLES.ADMIN]), async (req, res) => {
  try {
    const { hotelId } = req.params;
    const summary = await housekeepingService.getHousekeepingSummary(
      hotelId,
      req.user._id.toString(),
      req.user.role
    );

    res.status(200).json(summary);
  } catch (error: any) {
    console.error('Error fetching housekeeping summary:', error);
    const status = error.message.includes('permission') ? 403 : 500;
    res.status(status).json({ error: error.message });
  }
});

export default router;
