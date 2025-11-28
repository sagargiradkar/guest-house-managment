import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Hotel, Room } from '@/types/hotel';
import { Review } from '@/types/hotel';
import { getHotelById } from '@/api/hotels';
import { getRoomsByHotel } from '@/api/rooms';
import { getReviewsByHotel } from '@/api/reviews';
import { useToast } from '@/hooks/useToast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RoomCard } from '@/components/RoomCard';
import { MapPin, Phone, Mail, Globe, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatDate, calculateNights } from '@/lib/date-utils';

export function HotelDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const loadHotelData = useCallback(async () => {
    try {
      console.log('Loading hotel data for ID:', id);
      setLoading(true);

      const [hotelResponse, roomsResponse, reviewsResponse] = await Promise.all([
        getHotelById(id!),
        getRoomsByHotel(id!),
        getReviewsByHotel(id!)
      ]);

      setHotel(hotelResponse.hotel);
      setRooms(roomsResponse.rooms);
      setReviews(reviewsResponse.reviews);
    } catch (error) {
      console.error('Error loading hotel data:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to load hotel details',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  }, [id, toast]);

  useEffect(() => {
    if (id) {
      loadHotelData();
    }
  }, [id, loadHotelData]);

  const handleBookRoom = (room: Room) => {
    if (!checkIn || !checkOut) {
      toast({
        title: 'Select Dates',
        description: 'Please select check-in and check-out dates',
        variant: 'destructive'
      });
      return;
    }
    
    console.log('Booking room:', room._id);
    navigate('/booking', {
      state: {
        hotel,
        room,
        checkIn,
        checkOut,
        guests
      }
    });
  };

  const nextImage = () => {
    if (hotel) {
      setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
    }
  };

  const prevImage = () => {
    if (hotel) {
      setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Card className="h-96 animate-pulse bg-muted"></Card>
        <Card className="h-64 animate-pulse bg-muted"></Card>
      </div>
    );
  }

  if (!hotel) {
    return (
      <Card className="p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Hotel Not Found</h2>
        <Button onClick={() => navigate('/search')}>Back to Search</Button>
      </Card>
    );
  }

  const nights = checkIn && checkOut ? calculateNights(checkIn, checkOut) : 1;

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate(-1)}>
        <ChevronLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      {/* Image Gallery */}
      <Card className="overflow-hidden">
        <div className="relative h-96">
          <img
            src={hotel.images[currentImageIndex]}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {hotel.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
          
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {hotel.images.length}
          </div>
        </div>
      </Card>

      {/* Hotel Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{hotel.location.address}, {hotel.location.city}, {hotel.location.state}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{hotel.rating}</span>
                      <span className="text-sm text-muted-foreground">({hotel.reviewCount} reviews)</span>
                    </div>
                    <Badge>{hotel.type}</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground">{hotel.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div className="text-sm">
                      <p className="font-medium">Check-in</p>
                      <p className="text-muted-foreground">{hotel.policies.checkInTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div className="text-sm">
                      <p className="font-medium">Check-out</p>
                      <p className="text-muted-foreground">{hotel.policies.checkOutTime}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-3">Contact</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{hotel.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{hotel.contact.email}</span>
                    </div>
                    {hotel.contact.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a href={hotel.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {hotel.contact.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="rooms" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rooms" className="space-y-4 mt-6">
              {rooms.map((room) => (
                <RoomCard
                  key={room._id}
                  room={room}
                  onBook={handleBookRoom}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  nights={nights}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4 mt-6">
              {reviews.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">No reviews yet</p>
                </Card>
              ) : (
                reviews.map((review) => (
                  <Card key={review._id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.userAvatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                          alt={review.userName}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-semibold">{review.userName}</p>
                              <p className="text-sm text-muted-foreground">
                                Stayed on {formatDate(review.stayDate)}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{review.overallRating}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-3">{review.reviewText}</p>
                          <div className="flex flex-wrap gap-2 text-sm">
                            <Badge variant="outline">Cleanliness: {review.ratings.cleanliness}</Badge>
                            <Badge variant="outline">Comfort: {review.ratings.comfort}</Badge>
                            <Badge variant="outline">Service: {review.ratings.service}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
            
            <TabsContent value="policies" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                    <p className="text-muted-foreground">{hotel.policies.cancellationPolicy}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">House Rules</h3>
                    <p className="text-muted-foreground">{hotel.policies.houseRules}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">Book Your Stay</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-1 block">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Guests</label>
                  <input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>

              {checkIn && checkOut && (
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{nights} nights</span>
                  </div>
                </div>
              )}

              <p className="text-sm text-muted-foreground">
                Select a room below to continue with booking
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}