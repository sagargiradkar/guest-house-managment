export interface HousekeepingTask {
  _id: string;
  hotelId: string;
  roomId: string;
  roomNumber: string;
  taskType: 'checkout_cleaning' | 'daily_service' | 'deep_clean' | 'maintenance';
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in_progress' | 'completed';
  assignedTo?: string;
  assignedToName?: string;
  specialInstructions?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RoomStatus {
  roomId: string;
  roomNumber: string;
  status: 'clean_available' | 'occupied' | 'needs_cleaning' | 'under_maintenance' | 'checkout_cleaning';
  guestName?: string;
  checkOutTime?: string;
  lastCleaned?: string;
  floor?: number;
}