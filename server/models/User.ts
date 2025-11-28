import mongoose, { Document, Schema } from 'mongoose';
import { isPasswordHash } from '../utils/password';
import { randomUUID } from 'crypto';
import { ROLES, ALL_ROLES, RoleValues } from 'shared';

export interface IUser extends Document {
  email: string;
  password: string | null;
  createdAt: Date;
  lastLoginAt: Date;
  isActive: boolean;
  role: RoleValues;
  refreshToken: string;
  oauthProvider?: string;
  oauthId?: string;
}

const schema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: false,
    validate: {
      validator: function(v: string) {
        if (!this.oauthProvider && !v) {
          return false;
        }
        return v ? isPasswordHash(v) : true;
      },
      message: 'Invalid password hash'
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  lastLoginAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ALL_ROLES,
    default: ROLES.USER,
  },
  refreshToken: {
    type: String,
    unique: true,
    index: true,
    default: () => randomUUID(),
  },
  oauthProvider: {
    type: String,
    required: false,
  },
  oauthId: {
    type: String,
    required: false,
    index: true,
    sparse: true,
  },
}, {
  versionKey: false,
});

schema.set('toJSON', {
  transform: (doc: Document, ret: Record<string, unknown>) => {
    delete ret.password;
    return ret;
  },
});

const User = mongoose.model<IUser>('User', schema);

export default User;
