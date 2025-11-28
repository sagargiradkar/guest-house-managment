import dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';
import basicRoutes from './routes/index';
import authRoutes from './routes/authRoutes';
import hotelRoutes from './routes/hotelRoutes';
import roomRoutes from './routes/roomRoutes';
import bookingRoutes from './routes/bookingRoutes';
import reviewRoutes from './routes/reviewRoutes';
import housekeepingRoutes from './routes/housekeepingRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import userRoutes from './routes/userRoutes';
import { connectDB } from './config/database';
// import contactRoutes = './routes/routes';
import cors from 'cors';

// Load environment variables
dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error("Error: DATABASE_URL variables in .env missing.");
  process.exit(-1);
}

const app = express();
const port = process.env.PORT || 3000;

// Pretty-print JSON responses
app.enable('json spaces');
// We want to be consistent with URL paths, so we enable strict routing
app.enable('strict routing');
// app.use('/api', contactRoutes);
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

app.on("error", (error: Error) => {
  console.error(`Server error: ${error.message}`);
  console.error(error.stack);
});

// Basic Routes
app.use(basicRoutes);
// Authentication Routes
app.use('/api/auth', authRoutes);
// Hotel Routes
app.use('/api/hotels', hotelRoutes);
// Room Routes
app.use('/api/rooms', roomRoutes);
// Booking Routes
app.use('/api/bookings', bookingRoutes);
// Review Routes
app.use('/api/reviews', reviewRoutes);
// Housekeeping Routes
app.use('/api/housekeeping', housekeepingRoutes);
// Analytics Routes
app.use('/api/analytics', analyticsRoutes);
// User Routes
app.use('/api/users', userRoutes);

// If no routes handled the request, it's a 404
app.use((req: Request, res: Response) => {
  res.status(404).send("Page not found.");
});

// Error handling
app.use((err: Error, req: Request, res: Response) => {
  console.error(`Unhandled application error: ${err.message}`);
  console.error(err.stack);
  res.status(500).send("There was an error serving your request.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});