import api from './api';
import { User } from 'shared/types/user';

interface UserParams {
  role?: string;
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}

interface UsersResponse {
  users: User[];
  total: number;
  page: number;
  totalPages: number;
}

interface UserResponse {
  user: User;
}

interface UserMessageResponse {
  user: User;
  message: string;
}

interface MessageResponse {
  message: string;
}

// Description: Get all users (admin)
// Endpoint: GET /api/users
// Request: { role?: string, status?: string, search?: string, page?: number, limit?: number }
// Response: { users: User[], total: number, page: number, totalPages: number }
export const getAllUsers = async (params?: UserParams): Promise<UsersResponse> => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        users: [
          {
            _id: 'user1',
            email: 'john@example.com',
            name: 'John Doe',
            phone: '+1-555-0100',
            role: 'guest',
            isActive: true,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-02-01T00:00:00Z',
            lastLoginAt: '2024-02-15T10:30:00Z'
          },
          {
            _id: 'user2',
            email: 'jane@example.com',
            name: 'Jane Smith',
            phone: '+1-555-0200',
            role: 'owner',
            isActive: true,
            createdAt: '2024-01-05T00:00:00Z',
            updatedAt: '2024-02-05T00:00:00Z',
            lastLoginAt: '2024-02-16T09:15:00Z'
          },
          {
            _id: 'user3',
            email: 'admin@example.com',
            name: 'Admin User',
            phone: '+1-555-0300',
            role: 'admin',
            isActive: true,
            createdAt: '2023-12-01T00:00:00Z',
            updatedAt: '2024-02-10T00:00:00Z',
            lastLoginAt: '2024-02-16T11:00:00Z'
          }
        ],
        total: 3,
        page: 1,
        totalPages: 1
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get('/api/users', { params });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get user by ID
// Endpoint: GET /api/users/:id
// Request: {}
// Response: { user: User }
export const getUserById = async (id: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          _id: id,
          email: 'john@example.com',
          name: 'John Doe',
          phone: '+1-555-0100',
          dateOfBirth: '1990-05-15',
          address: '123 Main St, New York, NY 10001',
          role: 'guest',
          isActive: true,
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-02-01T00:00:00Z',
          lastLoginAt: '2024-02-15T10:30:00Z'
        }
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.get(`/api/users/${id}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Update user profile
// Endpoint: PUT /api/users/:id
// Request: { user: Partial<User> }
// Response: { user: User, message: string }
export const updateUser = async (id: string, userData: Partial<User>) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: { ...userData, _id: id },
        message: 'Profile updated successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/users/${id}`, userData);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Update user role (admin)
// Endpoint: PUT /api/users/:id/role
// Request: { role: string }
// Response: { user: User, message: string }
export const updateUserRole = async (id: string, role: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: { _id: id, role },
        message: 'User role updated successfully'
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/users/${id}/role`, { role });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Suspend/activate user (admin)
// Endpoint: PUT /api/users/:id/status
// Request: { isActive: boolean }
// Response: { user: User, message: string }
export const updateUserStatus = async (id: string, isActive: boolean) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: { _id: id, isActive },
        message: `User ${isActive ? 'activated' : 'suspended'} successfully`
      });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.put(`/api/users/${id}/status`, { isActive });
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Delete user (admin)
// Endpoint: DELETE /api/users/:id
// Request: {}
// Response: { message: string }
export const deleteUser = async (id: string) => {
  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'User deleted successfully' });
    }, 500);
  });
  // Uncomment to make actual API call
  // try {
  //   const response = await api.delete(`/api/users/${id}`);
  //   return response.data;
  // } catch (error: any) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};