import { RoleValues } from '../config/roles';

export interface User {
  _id: string;
  email: string;
  role: RoleValues;
  name?: string;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
  profilePicture?: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string;
  isActive: boolean;
}