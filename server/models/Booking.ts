import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IBooking extends Document {
  _id: Types.ObjectId;
  bookingReference: string;
  user: Types.ObjectId;
  hotel: Types.ObjectId;
  room: Types.ObjectId;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfGuests: number;
  guestDetails: {
    fullName: string;
    email: string;
    phone: string;
    additionalGuests?: string[];
  };
  specialRequests?: string;
  pricing: {
    roomRate: number;
    numberOfNights: number;
    subtotal: number;
    taxes: number;
    serviceFees: number;
    total: number;
  };
  payment: {
    method: string;
    status: 'pending' | 'completed' | 'failed' | 'refunded';
    transactionId?: string;
  };
  status: 'confirmed' | 'completed' | 'cancelled';
  cancellationReason?: string;
  cancelledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema = new Schema(
  {
    bookingReference: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
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
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Room reference is required'],
      index: true,
    },
    checkInDate: {
      type: Date,
      required: [true, 'Check-in date is required'],
      index: true,
    },
    checkOutDate: {
      type: Date,
      required: [true, 'Check-out date is required'],
      index: true,
    },
    numberOfGuests: {
      type: Number,
      required: [true, 'Number of guests is required'],
      min: [1, 'At least one guest is required'],
    },
    guestDetails: {
      fullName: {
        type: String,
        required: [true, 'Guest full name is required'],
      },
      email: {
        type: String,
        required: [true, 'Guest email is required'],
      },
      phone: {
        type: String,
        required: [true, 'Guest phone is required'],
      },
      additionalGuests: [String],
    },
    specialRequests: String,
    pricing: {
      roomRate: {
        type: Number,
        required: true,
      },
      numberOfNights: {
        type: Number,
        required: true,
      },
      subtotal: {
        type: Number,
        required: true,
      },
      taxes: {
        type: Number,
        required: true,
      },
      serviceFees: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
    payment: {
      method: {
        type: String,
        required: true,
        enum: ['credit_card', 'debit_card', 'paypal'],
      },
      status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending',
      },
      transactionId: String,
    },
    status: {
      type: String,
      enum: ['confirmed', 'completed', 'cancelled'],
      default: 'confirmed',
      index: true,
    },
    cancellationReason: String,
    cancelledAt: Date,
  },
  {
    timestamps: true,
  }
);

// Compound indexes for common queries
BookingSchema.index({ user: 1, status: 1 });
BookingSchema.index({ hotel: 1, checkInDate: 1, checkOutDate: 1 });
BookingSchema.index({ room: 1, checkInDate: 1, checkOutDate: 1 });

// Generate booking reference before save
BookingSchema.pre('save', function (next) {
  if (!this.bookingReference) {
    this.bookingReference = `BK${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }
  next();
});

export default mongoose.model<IBooking>('Booking', BookingSchema);
