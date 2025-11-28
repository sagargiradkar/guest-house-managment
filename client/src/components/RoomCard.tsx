import { Users, Maximize, Bed } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Room } from '@/types/hotel';

interface RoomCardProps {
  room: Room;
  onBook: (room: Room) => void;
  checkIn?: string;
  checkOut?: string;
  nights?: number;
}

export function RoomCard({ room, onBook, checkIn, checkOut, nights = 1 }: RoomCardProps) {
  const totalPrice = room.basePrice * nights;

  const handleBook = () => {
    console.log('Booking room:', room._id);
    onBook(room);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img
            src={room.images[0]}
            alt={room.roomType}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="md:w-2/3 flex flex-col">
          <CardContent className="p-4 flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold capitalize">{room.roomType} Room</h3>
                <p className="text-sm text-muted-foreground">Room {room.roomNumber}</p>
              </div>
              <Badge variant={room.isAvailable ? 'default' : 'secondary'}>
                {room.isAvailable ? 'Available' : 'Unavailable'}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {room.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-3 text-sm">
              <div className="flex items-center gap-1">
                <Maximize className="h-4 w-4 text-muted-foreground" />
                <span>{room.size} {room.sizeUnit}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Max {room.maxOccupancy} guests</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span>{room.beds.map(b => `${b.quantity} ${b.type}`).join(', ')}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {room.amenities.slice(0, 4).map((amenity) => (
                <Badge key={amenity} variant="outline" className="text-xs">
                  {amenity}
                </Badge>
              ))}
              {room.amenities.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{room.amenities.length - 4} more
                </Badge>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                ${room.basePrice}
                <span className="text-sm font-normal text-muted-foreground">/night</span>
              </div>
              {nights > 1 && (
                <div className="text-sm text-muted-foreground">
                  Total: ${totalPrice} for {nights} nights
                </div>
              )}
            </div>
            <Button
              onClick={handleBook}
              disabled={!room.isAvailable}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Book Now
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}