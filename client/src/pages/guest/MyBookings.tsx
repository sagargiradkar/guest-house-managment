import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { BookingCard } from '@/components/BookingCard';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Booking } from '@/types/hotel';
import { getBookingsByUser, cancelBooking } from '@/api/bookings';
import { useToast } from '@/hooks/useToast';
import { Calendar } from 'lucide-react';

export function MyBookings() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState<Booking | null>(null);
  const [cancelling, setCancelling] = useState(false);

  const loadBookings = useCallback(async () => {
    try {
      console.log('Loading bookings...');
      const response = await getBookingsByUser(user!._id);
      setBookings(response.bookings);
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
    // Could navigate to a detailed booking page
  };

  const handleCancelClick = (booking: Booking) => {
    console.log('Cancel booking clicked:', booking._id);
    setBookingToCancel(booking);
    setCancelDialogOpen(true);
  };

  const handleCancelConfirm = async () => {
    if (!bookingToCancel) return;

    try {
      console.log('Cancelling booking:', bookingToCancel._id);
      setCancelling(true);
      await cancelBooking(bookingToCancel._id, 'User requested cancellation');

      toast({
        title: 'Booking Cancelled',
        description: 'Your booking has been cancelled successfully'
      });

      loadBookings();
      setCancelDialogOpen(false);
      setBookingToCancel(null);
    } catch (error) {
      console.error('Error cancelling booking:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to cancel booking',
        variant: 'destructive'
      });
    } finally {
      setCancelling(false);
    }
  };

  const handleReview = (booking: Booking) => {
    console.log('Writing review for booking:', booking._id);
    navigate(`/review/${booking._id}`);
  };

  const upcomingBookings = bookings.filter(b => b.bookingStatus === 'confirmed');
  const pastBookings = bookings.filter(b => b.bookingStatus === 'completed');
  const cancelledBookings = bookings.filter(b => b.bookingStatus === 'cancelled');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
        <p className="text-muted-foreground">View and manage your hotel reservations</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({bookings.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming ({upcomingBookings.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastBookings.length})</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled ({cancelledBookings.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-64 animate-pulse bg-muted"></Card>
              ))}
            </div>
          ) : bookings.length === 0 ? (
            <Card className="p-12 text-center">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
              <p className="text-muted-foreground mb-4">Start exploring and book your first stay!</p>
              <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-600 to-purple-600">
                Browse Hotels
              </Button>
            </Card>
          ) : (
            bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                onViewDetails={handleViewDetails}
                onCancel={booking.bookingStatus === 'confirmed' ? handleCancelClick : undefined}
                onReview={booking.bookingStatus === 'completed' ? handleReview : undefined}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4 mt-6">
          {upcomingBookings.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No upcoming bookings</p>
            </Card>
          ) : (
            upcomingBookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                onViewDetails={handleViewDetails}
                onCancel={handleCancelClick}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4 mt-6">
          {pastBookings.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No past bookings</p>
            </Card>
          ) : (
            pastBookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                onViewDetails={handleViewDetails}
                onReview={handleReview}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4 mt-6">
          {cancelledBookings.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No cancelled bookings</p>
            </Card>
          ) : (
            cancelledBookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                onViewDetails={handleViewDetails}
              />
            ))
          )}
        </TabsContent>
      </Tabs>

      <AlertDialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this booking? This action cannot be undone.
              {bookingToCancel && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">{bookingToCancel.hotelName}</p>
                  <p className="text-sm">Booking Ref: {bookingToCancel.bookingReference}</p>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={cancelling}>Keep Booking</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleCancelConfirm}
              disabled={cancelling}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {cancelling ? 'Cancelling...' : 'Cancel Booking'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}