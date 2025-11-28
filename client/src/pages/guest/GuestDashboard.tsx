import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookingCard } from '@/components/BookingCard';
import { Booking } from '@/types/hotel';
import { getBookingsByUser } from '@/api/bookings';
import { useToast } from '@/hooks/useToast';
import { Calendar, Hotel, Star, TrendingUp } from 'lucide-react';

export function GuestDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [upcomingBookings, setUpcomingBookings] = useState<Booking[]>([]);
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = useCallback(async () => {
    try {
      console.log('Loading user bookings...');
      const response = await getBookingsByUser(user!._id);
      const bookings = response.bookings;

      setUpcomingBookings(bookings.filter((b: Booking) => b.bookingStatus === 'confirmed'));
      setPastBookings(bookings.filter((b: Booking) => b.bookingStatus === 'completed'));
    } catch (error) {
      console.error('Error loading bookings:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to load bookings',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  }, [user, toast]);

  useEffect(() => {
    if (user) {
      loadBookings();
    }
  }, [user, loadBookings]);

  const handleViewDetails = (booking: Booking) => {
    console.log('Viewing booking details:', booking._id);
    navigate(`/my-bookings`);
  };

  const handleReview = (booking: Booking) => {
    console.log('Writing review for booking:', booking._id);
    navigate(`/review/${booking._id}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'Guest'}!</h1>
        <p className="text-muted-foreground">Manage your bookings and explore new destinations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Upcoming Bookings</p>
                <p className="text-3xl font-bold">{upcomingBookings.length}</p>
              </div>
              <Calendar className="h-12 w-12 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Past Stays</p>
                <p className="text-3xl font-bold">{pastBookings.length}</p>
              </div>
              <Hotel className="h-12 w-12 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Reviews to Write</p>
                <p className="text-3xl font-bold">{pastBookings.length}</p>
              </div>
              <Star className="h-12 w-12 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Bookings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Upcoming Bookings</h2>
          <Button variant="outline" onClick={() => navigate('/my-bookings')}>
            View All
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <Card key={i} className="h-64 animate-pulse bg-muted"></Card>
            ))}
          </div>
        ) : upcomingBookings.length === 0 ? (
          <Card className="p-12 text-center">
            <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No upcoming bookings</h3>
            <p className="text-muted-foreground mb-4">Start planning your next adventure!</p>
            <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-600 to-purple-600">
              Browse Hotels
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingBookings.slice(0, 2).map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => navigate('/')}
            >
              <Hotel className="h-8 w-8" />
              <span>Browse Hotels</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => navigate('/my-bookings')}
            >
              <Calendar className="h-8 w-8" />
              <span>My Bookings</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => navigate('/profile')}
            >
              <Star className="h-8 w-8" />
              <span>My Profile</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}