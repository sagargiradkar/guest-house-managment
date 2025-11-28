import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Booking } from '@/types/hotel';
import { formatDate } from '@/lib/date-utils';
import { CheckCircle, Download, Home, Calendar } from 'lucide-react';

export function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking } = location.state as { booking: Booking };

  if (!booking) {
    navigate('/');
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-lg opacity-90">Your reservation has been successfully created</p>
        </div>

        <CardContent className="p-8 space-y-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Booking Reference</p>
            <p className="text-2xl font-bold text-blue-600">{booking.bookingReference}</p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-lg">Booking Details</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Hotel</p>
                <p className="font-medium">{booking.hotelName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Room Type</p>
                <p className="font-medium capitalize">{booking.roomType}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Check-in</p>
                <p className="font-medium">{formatDate(booking.checkInDate)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Check-out</p>
                <p className="font-medium">{formatDate(booking.checkOutDate)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Guests</p>
                <p className="font-medium">{booking.numberOfGuests}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="font-medium text-blue-600">${booking.totalAmount}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
            <p className="text-sm">
              <strong>Confirmation email sent to:</strong> {booking.guestEmail}
            </p>
            <p className="text-sm mt-2 text-muted-foreground">
              Please check your email for detailed booking information and check-in instructions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => navigate('/my-bookings')}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
            >
              <Calendar className="h-4 w-4 mr-2" />
              View My Bookings
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex-1"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}