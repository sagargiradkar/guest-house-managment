import { Star, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Hotel } from '@/types/hotel';
import { useNavigate } from 'react-router-dom';

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    console.log('Navigating to hotel details:', hotel._id);
    navigate(`/hotels/${hotel._id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
          {hotel.type}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{hotel.name}</h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="line-clamp-1">{hotel.location.city}, {hotel.location.state}</span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {hotel.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {hotel.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{hotel.amenities.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{hotel.rating}</span>
            <span className="text-sm text-muted-foreground">({hotel.reviewCount})</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleViewDetails} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}