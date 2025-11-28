import api from './api';
import { HousekeepingTask, RoomStatus } from '@/types/housekeeping';

// Description: Get room statuses by hotel
// Endpoint: GET /api/housekeeping/rooms/:hotelId
// Request: {}
// Response: { rooms: RoomStatus[] }
export const getRoomStatusesByHotel = async (hotelId: string) => {
  try {
    const response = await api.get(`/api/housekeeping/rooms/${hotelId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Update room status
// Endpoint: PUT /api/housekeeping/rooms/:roomId/status
// Request: { status: 'clean' | 'occupied' | 'dirty' | 'maintenance' }
// Response: Room
export const updateRoomStatus = async (roomId: string, status: string) => {
  try {
    const response = await api.put(`/api/housekeeping/rooms/${roomId}/status`, {
      status,
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get housekeeping tasks
// Endpoint: GET /api/housekeeping/tasks/:hotelId
// Request: { status?, priority?, assignedTo? }
// Response: { tasks: HousekeepingTask[] }
export const getHousekeepingTasks = async (hotelId: string, filters?: any) => {
  try {
    const response = await api.get(`/api/housekeeping/tasks/${hotelId}`, {
      params: filters,
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Create housekeeping task
// Endpoint: POST /api/housekeeping/tasks
// Request: { hotelId, roomId, taskType, priority, scheduledDate, assignedTo?, description?, specialInstructions? }
// Response: HousekeepingTask
export const createHousekeepingTask = async (taskData: Partial<HousekeepingTask>) => {
  try {
    const response = await api.post('/api/housekeeping/tasks', taskData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Update housekeeping task
// Endpoint: PUT /api/housekeeping/tasks/:id
// Request: { status?, priority?, assignedTo?, description?, specialInstructions? }
// Response: HousekeepingTask
export const updateHousekeepingTask = async (taskId: string, updates: Partial<HousekeepingTask>) => {
  try {
    const response = await api.put(`/api/housekeeping/tasks/${taskId}`, updates);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Delete housekeeping task
// Endpoint: DELETE /api/housekeeping/tasks/:id
// Request: {}
// Response: { success: boolean }
export const deleteHousekeepingTask = async (taskId: string) => {
  try {
    const response = await api.delete(`/api/housekeeping/tasks/${taskId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get housekeeping summary
// Endpoint: GET /api/housekeeping/summary/:hotelId
// Request: {}
// Response: { rooms: {...}, tasks: {...} }
export const getHousekeepingSummary = async (hotelId: string) => {
  try {
    const response = await api.get(`/api/housekeeping/summary/${hotelId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};
