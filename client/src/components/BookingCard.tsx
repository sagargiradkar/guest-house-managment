import { Calendar, MapPin, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Booking } from '@/types/hotel';
import { formatDate } from '@/lib/date-utils';

interface BookingCardProps {
  booking: Booking;
  onViewDetails: (booking: Booking) => void;
  onCancel?: (booking: Booking) => void;
  onReview?: (booking: Booking) => void;
}

export function BookingCard({ booking, onViewDetails, onCancel, onReview }: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isUpcoming = booking.bookingStatus === 'confirmed';
  const isCompleted = booking.bookingStatus === 'completed';

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">{booking.hotelName}</h3>
            <p className="text-sm text-muted-foreground">
              Booking Ref: {booking.bookingReference}
            </p>
          </div>
          <Badge className={getStatusColor(booking.bookingStatus)}>
            {booking.bookingStatus}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Check-in</p>
              <p className="text-muted-foreground">{formatDate(booking.checkInDate)}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Check-out</p>
              <p className="text-muted-foreground">{formatDate(booking.checkOutDate)}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Guests</p>
              <p className="text-muted-foreground">{booking.numberOfGuests}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Total</p>
              <p className="text-muted-foreground">${booking.totalAmount}</p>
            </div>
          </div>
        </div>
        
        <div className="text-sm">
          <p className="font-medium mb-1">Room Type</p>
          <p className="text-muted-foreground capitalize">{booking.roomType}</p>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button variant="outline" onClick={() => onViewDetails(booking)} className="flex-1">
          View Details
        </Button>
        {isUpcoming && onCancel && (
          <Button variant="destructive" onClick={() => onCancel(booking)} className="flex-1">
            Cancel
          </Button>
        )}
        {isCompleted && onReview && (
          <Button onClick={() => onReview(booking)} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
            Write Review
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}