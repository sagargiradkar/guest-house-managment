import api from './api';
import { HousekeepingTask, RoomStatus } from '@/types/housekeeping';

// Description: Get room statuses by hotel
// Endpoint: GET /api/housekeeping/hotel/:hotelId/status
// Request: {}
// Response: { roomStatuses: RoomStatus[] }
export const getRoomStatusesByHotel = async (hotelId: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        roomStatuses: [
          {
            roomId: 'room1',
            roomNumber: '101',
            status: 'clean_available',
            floor: 1,
            lastCleaned: '2024-02-15T10:00:00Z'
          },
          {
            roomId: 'room2',
            roomNumber: '102',
            status: 'occupied',
            guestName: 'John Doe',
            checkOutTime: '2024-02-20T11:00:00Z',
            floor: 1
          },
          {
            roomId: 'room3',
            roomNumber: '103',
            status: 'checkout_cleaning',
            guestName: 'Jane Smith',
            checkOutTime: '2024-02-16T11:00:00Z',
            floor: 1
          },
          {
            roomId: 'room4',
            roomNumber: '201',
            status: 'needs_cleaning',
            floor: 2,
            lastCleaned: '2024-02-14T10:00:00Z'
          },
          {
            roomId: 'room5',
            roomNumber: '202',
            status: 'under_maintenance',
            floor: 2
          }
        ]
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/housekeeping/hotel/${hotelId}/status`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get housekeeping tasks by hotel
// Endpoint: GET /api/housekeeping/hotel/:hotelId/tasks
// Request: { status?: string, priority?: string }
// Response: { tasks: HousekeepingTask[] }
export const getHousekeepingTasks = async (hotelId: string, params?: any) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        tasks: [
          {
            _id: 'task1',
            hotelId: hotelId,
            roomId: 'room3',
            roomNumber: '103',
            taskType: 'checkout_cleaning',
            priority: 'high',
            status: 'pending',
            specialInstructions: 'Deep clean required',
            createdAt: '2024-02-16T09:00:00Z',
            updatedAt: '2024-02-16T09:00:00Z'
          },
          {
            _id: 'task2',
            hotelId: hotelId,
            roomId: 'room4',
            roomNumber: '201',
            taskType: 'daily_service',
            priority: 'medium',
            status: 'in_progress',
            assignedTo: 'staff1',
            assignedToName: 'Maria Garcia',
            createdAt: '2024-02-16T08:00:00Z',
            updatedAt: '2024-02-16T09:30:00Z'
          },
          {
            _id: 'task3',
            hotelId: hotelId,
            roomId: 'room5',
            roomNumber: '202',
            taskType: 'maintenance',
            priority: 'high',
            status: 'pending',
            specialInstructions: 'AC unit needs repair',
            createdAt: '2024-02-15T14:00:00Z',
            updatedAt: '2024-02-15T14:00:00Z'
          }
        ]
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/housekeeping/hotel/${hotelId}/tasks`, { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Create housekeeping task
// Endpoint: POST /api/housekeeping/tasks
// Request: { task: Partial<HousekeepingTask> }
// Response: { task: HousekeepingTask, message: string }
export const createHousekeepingTask = async (taskData: Partial<HousekeepingTask>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        task: {
          ...taskData,
          _id: Date.now().toString(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        message: 'Task created successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.post('/api/housekeeping/tasks', taskData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Update housekeeping task
// Endpoint: PUT /api/housekeeping/tasks/:id
// Request: { task: Partial<HousekeepingTask> }
// Response: { task: HousekeepingTask, message: string }
export const updateHousekeepingTask = async (id: string, taskData: Partial<HousekeepingTask>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        task: { ...taskData, _id: id },
        message: 'Task updated successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/housekeeping/tasks/${id}`, taskData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Update room status
// Endpoint: PUT /api/housekeeping/rooms/:roomId/status
// Request: { status: string }
// Response: { roomStatus: RoomStatus, message: string }
export const updateRoomStatus = async (roomId: string, status: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        roomStatus: { roomId, status },
        message: 'Room status updated successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/housekeeping/rooms/${roomId}/status`, { status });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};