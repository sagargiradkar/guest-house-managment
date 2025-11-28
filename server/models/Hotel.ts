import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IHotel extends Document {
  _id: Types.ObjectId;
  name: string;
  description: string;
  type: string;
  owner: Types.ObjectId;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  location: {
    type: string;
    coordinates: [number, number]; // [longitude, latitude]
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  images: string[];
  amenities: string[];
  policies: {
    checkInTime: string;
    checkOutTime: string;
    cancellationPolicy: string;
    houseRules: string;
  };
  rating?: number;
  reviewCount: number;
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}

const HotelSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Hotel name is required'],
      trim: true,
      maxlength: [200, 'Hotel name cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Hotel description is required'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    type: {
      type: String,
      required: [true, 'Hotel type is required'],
      enum: ['Hotel', 'Guest House', 'Resort', 'Apartment', 'Hostel'],
      default: 'Hotel',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Hotel owner is required'],
      index: true,
    },
    address: {
      line1: {
        type: String,
        required: [true, 'Address line 1 is required'],
      },
      line2: String,
      city: {
        type: String,
        required: [true, 'City is required'],
        index: true,
      },
      state: {
        type: String,
        required: [true, 'State is required'],
      },
      country: {
        type: String,
        required: [true, 'Country is required'],
      },
      postalCode: {
        type: String,
        required: [true, 'Postal code is required'],
      },
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        default: [0, 0],
      },
    },
    contact: {
      phone: {
        type: String,
        required: [true, 'Contact phone is required'],
      },
      email: {
        type: String,
        required: [true, 'Contact email is required'],
      },
      website: String,
    },
    images: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    policies: {
      checkInTime: {
        type: String,
        default: '14:00',
      },
      checkOutTime: {
        type: String,
        default: '11:00',
      },
      cancellationPolicy: {
        type: String,
        default: 'Free cancellation up to 24 hours before check-in',
      },
      houseRules: {
        type: String,
        default: '',
      },
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'pending'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

// Index for geospatial queries
HotelSchema.index({ location: '2dsphere' });

// Index for text search
HotelSchema.index({ name: 'text', description: 'text', 'address.city': 'text' });

export default mongoose.model<IHotel>('Hotel', HotelSchema);
