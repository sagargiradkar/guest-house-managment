import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IReview extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  hotel: Types.ObjectId;
  booking: Types.ObjectId;
  ratings: {
    overall: number;
    cleanliness: number;
    comfort: number;
    location: number;
    service: number;
    valueForMoney: number;
  };
  comment: string;
  photos: string[];
  displayName?: string;
  isAnonymous: boolean;
  status: 'pending' | 'approved' | 'rejected';
  helpful: number;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
      index: true,
    },
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: [true, 'Hotel reference is required'],
      index: true,
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
      required: [true, 'Booking reference is required'],
      index: true,
    },
    ratings: {
      overall: {
        type: Number,
        required: [true, 'Overall rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot exceed 5'],
      },
      cleanliness: {
        type: Number,
        required: [true, 'Cleanliness rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot exceed 5'],
      },
      comfort: {
        type: Number,
        required: [true, 'Comfort rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot exceed 5'],
      },
      location: {
        type: Number,
        required: [true, 'Location rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot exceed 5'],
      },
      service: {
        type: Number,
        required: [true, 'Service rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot exceed 5'],
      },
      valueForMoney: {
        type: Number,
        required: [true, 'Value for money rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot exceed 5'],
      },
    },
    comment: {
      type: String,
      required: [true, 'Review comment is required'],
      minlength: [10, 'Review must be at least 10 characters'],
      maxlength: [2000, 'Review cannot exceed 2000 characters'],
    },
    photos: {
      type: [String],
      default: [],
    },
    displayName: String,
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'approved', // Auto-approve for now
    },
    helpful: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to ensure one review per booking
ReviewSchema.index({ user: 1, booking: 1 }, { unique: true });
ReviewSchema.index({ hotel: 1, status: 1 });

export default mongoose.model<IReview>('Review', ReviewSchema);
