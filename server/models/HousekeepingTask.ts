import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IHousekeepingTask extends Document {
  _id: Types.ObjectId;
  hotel: Types.ObjectId;
  room: Types.ObjectId;
  taskType: 'checkout_cleaning' | 'daily_service' | 'deep_clean' | 'maintenance';
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  assignedTo?: Types.ObjectId;
  description?: string;
  specialInstructions?: string;
  scheduledDate: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const HousekeepingTaskSchema: Schema = new Schema(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: [true, 'Hotel reference is required'],
      index: true,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Room reference is required'],
      index: true,
    },
    taskType: {
      type: String,
      required: [true, 'Task type is required'],
      enum: ['checkout_cleaning', 'daily_service', 'deep_clean', 'maintenance'],
    },
    priority: {
      type: String,
      required: [true, 'Priority is required'],
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    status: {
      type: String,
      enum: ['pending', 'in_progress', 'completed', 'cancelled'],
      default: 'pending',
      index: true,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    description: {
      type: String,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    specialInstructions: {
      type: String,
      maxlength: [1000, 'Special instructions cannot exceed 1000 characters'],
    },
    scheduledDate: {
      type: Date,
      required: [true, 'Scheduled date is required'],
      index: true,
    },
    completedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Compound indexes for common queries
HousekeepingTaskSchema.index({ hotel: 1, status: 1, scheduledDate: 1 });
HousekeepingTaskSchema.index({ room: 1, status: 1 });
HousekeepingTaskSchema.index({ assignedTo: 1, status: 1 });

export default mongoose.model<IHousekeepingTask>('HousekeepingTask', HousekeepingTaskSchema);
