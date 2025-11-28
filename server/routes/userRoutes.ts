import express from 'express';
import { requireUser } from './middlewares/auth';
import userService from '../services/userService';
import { ROLES } from 'shared/config/roles';

const router = express.Router();

// Description: Get all users (admin only)
// Endpoint: GET /api/users
// Request: { role?, status?, search?, page?, limit? }
// Response: { users: Array<User>, total: number, page: number, totalPages: number }
router.get('/', requireUser([ROLES.ADMIN]), async (req, res) => {
  try {
    const { role, search, page = '1', limit = '20' } = req.query;

    const query: any = {};
    if (role) query.role = role;
    if (search) {
      query.$or = [
        { name: new RegExp(search as string, 'i') },
        { email: new RegExp(search as string, 'i') },
      ];
    }

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const [users, total] = await Promise.all([
      userService.getUsers(query, skip, parseInt(limit as string)),
      userService.countUsers(query),
    ]);

    res.status(200).json({
      users,
      total,
      page: parseInt(page as string),
      totalPages: Math.ceil(total / parseInt(limit as string)),
    });
  } catch (error: any) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Get user by ID (admin only)
// Endpoint: GET /api/users/:id
// Request: {}
// Response: { user: User }
router.get('/:id', requireUser([ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error: any) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: error.message });
  }
});

// Description: Update user profile
// Endpoint: PUT /api/users/me
// Request: { name?, email?, phone?, dateOfBirth?, address? }
// Response: { user: User }
router.put('/me', requireUser(), async (req, res) => {
  try {
    const { name, phone, dateOfBirth, address } = req.body;

    const updates: any = {};
    if (name) updates.name = name;
    if (phone) updates.phone = phone;
    if (dateOfBirth) updates.dateOfBirth = dateOfBirth;
    if (address) updates.address = address;

    const user = await userService.updateUser(req.user._id.toString(), updates);

    res.status(200).json(user);
  } catch (error: any) {
    console.error('Error updating user profile:', error);
    res.status(400).json({ error: error.message });
  }
});

// Description: Update user role (admin only)
// Endpoint: PUT /api/users/:id/role
// Request: { role: 'guest' | 'owner' | 'admin' }
// Response: { user: User }
router.put('/:id/role', requireUser([ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!role || !['guest', 'owner', 'admin'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    const user = await userService.updateUser(id, { role });

    res.status(200).json(user);
  } catch (error: any) {
    console.error('Error updating user role:', error);
    res.status(400).json({ error: error.message });
  }
});

// Description: Delete user (admin only)
// Endpoint: DELETE /api/users/:id
// Request: {}
// Response: { success: boolean }
router.delete('/:id', requireUser([ROLES.ADMIN]), async (req, res) => {
  try {
    const { id } = req.params;

    if (id === req.user._id.toString()) {
      return res.status(400).json({ error: 'Cannot delete your own account' });
    }

    await userService.deleteUser(id);

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error deleting user:', error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
