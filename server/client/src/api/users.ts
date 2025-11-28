import api from './api';

// Description: Get all users (admin only)
// Endpoint: GET /api/users
// Request: { role?, search?, page?, limit? }
// Response: { users: User[], total: number, page: number, totalPages: number }
export const getAllUsers = async (filters?: any) => {
  try {
    const response = await api.get('/api/users', { params: filters });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get user by ID (admin only)
// Endpoint: GET /api/users/:id
// Request: {}
// Response: User
export const getUserById = async (userId: string) => {
  try {
    const response = await api.get(`/api/users/${userId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Update user profile
// Endpoint: PUT /api/users/me
// Request: { name?, phone?, dateOfBirth?, address? }
// Response: User
export const updateUser = async (userData: any) => {
  try {
    const response = await api.put('/api/users/me', userData);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Update user role (admin only)
// Endpoint: PUT /api/users/:id/role
// Request: { role: 'guest' | 'owner' | 'admin' }
// Response: User
export const updateUserRole = async (userId: string, role: string) => {
  try {
    const response = await api.put(`/api/users/${userId}/role`, { role });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Update user status (admin only)
// Endpoint: PUT /api/users/:id/status
// Request: { status: 'active' | 'suspended' }
// Response: User
export const updateUserStatus = async (userId: string, status: string) => {
  try {
    const response = await api.put(`/api/users/${userId}/status`, { status });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Delete user (admin only)
// Endpoint: DELETE /api/users/:id
// Request: {}
// Response: { success: boolean }
export const deleteUser = async (userId: string) => {
  try {
    const response = await api.delete(`/api/users/${userId}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};
