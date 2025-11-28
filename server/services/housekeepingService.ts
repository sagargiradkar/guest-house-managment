import HousekeepingTask, { IHousekeepingTask } from '../models/HousekeepingTask';
import Room from '../models/Room';
import Hotel from '../models/Hotel';
import { Types } from 'mongoose';

interface CreateTaskData {
  hotelId: string;
  roomId: string;
  taskType: 'checkout_cleaning' | 'daily_service' | 'deep_clean' | 'maintenance';
  priority: 'low' | 'medium' | 'high';
  scheduledDate: string;
  assignedTo?: string;
  description?: string;
  specialInstructions?: string;
}

class HousekeepingService {
  /**
   * Get room statuses by hotel
   */
  async getRoomStatusesByHotel(hotelId: string, userId: string, userRole: string) {
    console.log(`Fetching room statuses for hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    // Verify ownership (unless admin)
    if (userRole !== 'admin') {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel || hotel.owner.toString() !== userId) {
        throw new Error('You do not have permission to view room statuses for this hotel');
      }
    }

    const rooms = await Room.find({ hotel: hotelId })
      .select('name type status maxOccupancy')
      .lean();

    console.log(`Found ${rooms.length} rooms`);
    return rooms;
  }

  /**
   * Update room status
   */
  async updateRoomStatus(
    roomId: string,
    status: 'clean' | 'occupied' | 'dirty' | 'maintenance',
    userId: string,
    userRole: string
  ) {
    console.log(`Updating room status: ${roomId} to ${status}`);

    if (!Types.ObjectId.isValid(roomId)) {
      throw new Error('Invalid room ID');
    }

    const room = await Room.findById(roomId).populate('hotel');

    if (!room) {
      throw new Error('Room not found');
    }

    // Check ownership
    const hotel: any = room.hotel;
    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to update room status');
    }

    room.status = status;
    await room.save();

    console.log(`Room status updated successfully`);
    return room;
  }

  /**
   * Get housekeeping tasks
   */
  async getHousekeepingTasks(hotelId: string, userId: string, userRole: string, filters: any = {}) {
    console.log(`Fetching housekeeping tasks for hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    // Verify ownership (unless admin)
    if (userRole !== 'admin') {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel || hotel.owner.toString() !== userId) {
        throw new Error('You do not have permission to view tasks for this hotel');
      }
    }

    const query: any = { hotel: hotelId };

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.priority) {
      query.priority = filters.priority;
    }

    if (filters.assignedTo) {
      query.assignedTo = filters.assignedTo;
    }

    const tasks = await HousekeepingTask.find(query)
      .populate('room', 'name type')
      .populate('assignedTo', 'name email')
      .sort({ priority: -1, scheduledDate: 1 })
      .lean();

    console.log(`Found ${tasks.length} housekeeping tasks`);
    return tasks;
  }

  /**
   * Create housekeeping task
   */
  async createHousekeepingTask(taskData: CreateTaskData, userId: string, userRole: string) {
    console.log(`Creating housekeeping task for room: ${taskData.roomId}`);

    const { hotelId, roomId, taskType, priority, scheduledDate, assignedTo, description, specialInstructions } = taskData;

    // Verify hotel ownership
    if (userRole !== 'admin') {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel || hotel.owner.toString() !== userId) {
        throw new Error('You do not have permission to create tasks for this hotel');
      }
    }

    // Verify room belongs to hotel
    const room = await Room.findById(roomId);
    if (!room || room.hotel.toString() !== hotelId) {
      throw new Error('Room not found or does not belong to specified hotel');
    }

    // Create task
    const task = new HousekeepingTask({
      hotel: hotelId,
      room: roomId,
      taskType,
      priority,
      scheduledDate: new Date(scheduledDate),
      assignedTo: assignedTo || undefined,
      description,
      specialInstructions,
    });

    await task.save();
    console.log(`Housekeeping task created successfully with ID: ${task._id}`);

    // Populate for response
    await task.populate([
      { path: 'room', select: 'name type' },
      { path: 'assignedTo', select: 'name email' },
    ]);

    return task;
  }

  /**
   * Update housekeeping task
   */
  async updateHousekeepingTask(
    taskId: string,
    updates: Partial<IHousekeepingTask>,
    userId: string,
    userRole: string
  ) {
    console.log(`Updating housekeeping task: ${taskId}`);

    if (!Types.ObjectId.isValid(taskId)) {
      throw new Error('Invalid task ID');
    }

    const task = await HousekeepingTask.findById(taskId).populate('hotel');

    if (!task) {
      throw new Error('Task not found');
    }

    // Check ownership
    const hotel: any = task.hotel;
    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to update this task');
    }

    // If marking as completed, update room status
    if (updates.status === 'completed' && task.status !== 'completed') {
      updates.completedAt = new Date();

      // Update room status based on task type
      if (task.taskType === 'checkout_cleaning' || task.taskType === 'daily_service') {
        await Room.findByIdAndUpdate(task.room, { status: 'clean' });
      }
    }

    Object.assign(task, updates);
    await task.save();

    console.log(`Housekeeping task updated successfully`);

    // Populate for response
    await task.populate([
      { path: 'room', select: 'name type' },
      { path: 'assignedTo', select: 'name email' },
    ]);

    return task;
  }

  /**
   * Delete housekeeping task
   */
  async deleteHousekeepingTask(taskId: string, userId: string, userRole: string) {
    console.log(`Deleting housekeeping task: ${taskId}`);

    if (!Types.ObjectId.isValid(taskId)) {
      throw new Error('Invalid task ID');
    }

    const task = await HousekeepingTask.findById(taskId).populate('hotel');

    if (!task) {
      throw new Error('Task not found');
    }

    // Check ownership
    const hotel: any = task.hotel;
    if (userRole !== 'admin' && hotel.owner.toString() !== userId) {
      throw new Error('You do not have permission to delete this task');
    }

    await HousekeepingTask.findByIdAndDelete(taskId);
    console.log(`Housekeeping task deleted successfully`);

    return { success: true };
  }

  /**
   * Get housekeeping summary for hotel
   */
  async getHousekeepingSummary(hotelId: string, userId: string, userRole: string) {
    console.log(`Fetching housekeeping summary for hotel: ${hotelId}`);

    if (!Types.ObjectId.isValid(hotelId)) {
      throw new Error('Invalid hotel ID');
    }

    // Verify ownership (unless admin)
    if (userRole !== 'admin') {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel || hotel.owner.toString() !== userId) {
        throw new Error('You do not have permission to view summary for this hotel');
      }
    }

    const [roomStats, taskStats] = await Promise.all([
      Room.aggregate([
        { $match: { hotel: new Types.ObjectId(hotelId) } },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
      HousekeepingTask.aggregate([
        { $match: { hotel: new Types.ObjectId(hotelId) } },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
    ]);

    const summary = {
      rooms: {
        clean: 0,
        occupied: 0,
        dirty: 0,
        maintenance: 0,
        total: 0,
      },
      tasks: {
        pending: 0,
        in_progress: 0,
        completed: 0,
        cancelled: 0,
        total: 0,
      },
    };

    roomStats.forEach((stat) => {
      summary.rooms[stat._id as keyof typeof summary.rooms] = stat.count;
      summary.rooms.total += stat.count;
    });

    taskStats.forEach((stat) => {
      summary.tasks[stat._id as keyof typeof summary.tasks] = stat.count;
      summary.tasks.total += stat.count;
    });

    console.log(`Housekeeping summary calculated`);
    return summary;
  }
}

export default new HousekeepingService();
