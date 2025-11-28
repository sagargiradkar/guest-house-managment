import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IRoom extends Document {
  _id: Types.ObjectId;
  hotel: Types.ObjectId;
  name: string;
  type: string;
  description: string;
  size: number;
  maxOccupancy: number;
  price: number;
  weekendPrice?: number;
  images: string[];
  amenities: string[];
  bedConfiguration: Array<{
    type: string;
    quantity: number;
  }>;
  availability: boolean;
  blockedDates: Array<{
    startDate: Date;
    endDate: Date;
    reason: string;
  }>;
  status: 'clean' | 'occupied' | 'dirty' | 'maintenance';
  createdAt: Date;
  updatedAt: Date;
}

const RoomSchema: Schema = new Schema(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: [true, 'Hotel reference is required'],
      index: true,
    },
    name: {
      type: String,
      required: [true, 'Room name is required'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Room type is required'],
      enum: ['Single', 'Double', 'Suite', 'Deluxe', 'Family'],
    },
    description: {
      type: String,
      required: [true, 'Room description is required'],
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    size: {
      type: Number,
      required: [true, 'Room size is required'],
      min: [1, 'Room size must be positive'],
    },
    maxOccupancy: {
      type: Number,
      required: [true, 'Max occupancy is required'],
      min: [1, 'Max occupancy must be at least 1'],
    },
    price: {
      type: Number,
      required: [true, 'Room price is required'],
      min: [0, 'Price cannot be negative'],
    },
    weekendPrice: {
      type: Number,
      min: [0, 'Weekend price cannot be negative'],
    },
    images: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    bedConfiguration: {
      type: [
        {
          type: {
            type: String,
            enum: ['Single', 'Double', 'Queen', 'King'],
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1,
          },
        },
      ],
      default: [],
    },
    availability: {
      type: Boolean,
      default: true,
    },
    blockedDates: {
      type: [
        {
          startDate: {
            type: Date,
            required: true,
          },
          endDate: {
            type: Date,
            required: true,
          },
          reason: {
            type: String,
            enum: ['Maintenance', 'Reserved', 'Other'],
            default: 'Other',
          },
        },
      ],
      default: [],
    },
    status: {
      type: String,
      enum: ['clean', 'occupied', 'dirty', 'maintenance'],
      default: 'clean',
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for hotel and room queries
RoomSchema.index({ hotel: 1, type: 1 });
RoomSchema.index({ hotel: 1, availability: 1 });

export default mongoose.model<IRoom>('Room', RoomSchema);
