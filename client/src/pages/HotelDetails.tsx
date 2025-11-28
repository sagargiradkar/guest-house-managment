// pages/HotelDetails.tsx
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
import { Skeleton } from '@/components/ui/skeleton';
import { RoomCard } from '@/components/RoomCard';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  Wifi,
  Car,
  Coffee,
  Users,
  Calendar,
  ArrowLeft,
  Share2,
  Heart,
  CheckCircle
} from 'lucide-react';
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
  const [contentLoaded, setContentLoaded] = useState(false);
  
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
      
      setTimeout(() => setContentLoaded(true), 300);
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
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-12 w-32 mb-6" />
          <Skeleton className="h-[500px] w-full mb-6 rounded-xl" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-96 w-full rounded-xl" />
            </div>
            <Skeleton className="h-96 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-12 text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Hotel Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the hotel you're looking for.</p>
          <Button onClick={() => navigate('/search')} className="bg-red-600 hover:bg-red-700">
            Back to Search
          </Button>
        </Card>
      </div>
    );
  }

  const nights = checkIn && checkOut ? calculateNights(checkIn, checkOut) : 1;

  return (
    <div className="min-h-screen bg-gray-50 -mt-28 pt-28">
      {/* Breadcrumb & Actions Bar */}
      <div className="bg-white border-b sticky top-28 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="hover:bg-gray-100">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-gray-100">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="relative h-[500px] group">
              <img
                src={hotel.images[currentImageIndex]}
                alt={hotel.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Navigation Buttons */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {hotel.images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 w-2 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              
              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                {currentImageIndex + 1} / {hotel.images.length}
              </div>

              {/* Hotel Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{hotel.name}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg">{hotel.location.city}, {hotel.location.state}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-lg">{hotel.rating}</span>
                    <span className="text-sm">({hotel.reviewCount} reviews)</span>
                  </div>
                  <Badge className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1">
                    {hotel.type}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hotel Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Info Cards */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-red-600" />
                  <p className="text-sm text-gray-600 mb-1">Check-in</p>
                  <p className="font-semibold">{hotel.policies.checkInTime}</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-red-600" />
                  <p className="text-sm text-gray-600 mb-1">Check-out</p>
                  <p className="font-semibold">{hotel.policies.checkOutTime}</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Star className="h-6 w-6 mx-auto mb-2 text-yellow-400 fill-yellow-400" />
                  <p className="text-sm text-gray-600 mb-1">Rating</p>
                  <p className="font-semibold">{hotel.rating}/5</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-red-600" />
                  <p className="text-sm text-gray-600 mb-1">Reviews</p>
                  <p className="font-semibold">{hotel.reviewCount}</p>
                </CardContent>
              </Card>
            </div>

            {/* About Section */}
            <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Property</h2>
                <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Location</h3>
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>{hotel.location.address}, {hotel.location.city}, {hotel.location.state}, {hotel.location.zipCode}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities Section */}
            <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Amenities & Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href={`tel:${hotel.contact.phone}`} className="font-semibold text-gray-900 hover:text-red-600">
                        {hotel.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href={`mailto:${hotel.contact.email}`} className="font-semibold text-gray-900 hover:text-red-600">
                        {hotel.contact.email}
                      </a>
                    </div>
                  </div>
                  {hotel.contact.website && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Website</p>
                        <a 
                          href={hotel.contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-semibold text-gray-900 hover:text-red-600"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
              <Tabs defaultValue="rooms" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1">
                  <TabsTrigger value="rooms" className="data-[state=active]:bg-white">
                    Available Rooms
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-white">
                    Reviews ({reviews.length})
                  </TabsTrigger>
                  <TabsTrigger value="policies" className="data-[state=active]:bg-white">
                    Policies
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="rooms" className="space-y-4 mt-6 px-6 pb-6">
                  {rooms.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500">No rooms available at the moment</p>
                    </div>
                  ) : (
                    rooms.map((room, index) => (
                      <div
                        key={room._id}
                        className={`transition-all duration-500 ${
                          contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${500 + index * 100}ms` }}
                      >
                        <RoomCard
                          room={room}
                          onBook={handleBookRoom}
                          checkIn={checkIn}
                          checkOut={checkOut}
                          nights={nights}
                        />
                      </div>
                    ))
                  )}
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-4 mt-6 px-6 pb-6">
                  {reviews.length === 0 ? (
                    <div className="text-center py-12">
                      <Star className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p className="text-gray-500 text-lg">No reviews yet</p>
                      <p className="text-gray-400 text-sm mt-2">Be the first to review this property</p>
                    </div>
                  ) : (
                    reviews.map((review) => (
                      <Card key={review._id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <img
                              src={review.userAvatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.userName}`}
                              alt={review.userName}
                              className="w-14 h-14 rounded-full border-2 border-gray-200"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <p className="font-semibold text-lg text-gray-900">{review.userName}</p>
                                  <p className="text-sm text-gray-500 flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    Stayed on {formatDate(review.stayDate)}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full">
                                  <Star className="h-4 w-4 fill-red-600 text-red-600" />
                                  <span className="font-bold text-red-600">{review.overallRating}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed mb-4">{review.reviewText}</p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                  Cleanliness: {review.ratings.cleanliness}/5
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Comfort: {review.ratings.comfort}/5
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Service: {review.ratings.service}/5
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Value: {review.ratings.value}/5
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>
                
                <TabsContent value="policies" className="mt-6 px-6 pb-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-red-600" />
                        Cancellation Policy
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-7">{hotel.policies.cancellationPolicy}</p>
                    </div>
                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-red-600" />
                        House Rules
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-7">{hotel.policies.houseRules}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className={`sticky top-44 shadow-xl border-2 border-gray-200 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-gray-900">Book Your Stay</h3>
                  <p className="text-gray-600 text-sm">Select your dates to see available rooms</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-gray-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-gray-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-gray-700 flex items-center gap-2">
                      <Users className="h-4 w-4 text-red-600" />
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {checkIn && checkOut && (
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold text-gray-900">{nights} {nights === 1 ? 'night' : 'nights'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Guests</span>
                      <span className="font-semibold text-gray-900">{guests}</span>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-red-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-red-800 font-medium text-center">
                      💡 Select check-in and check-out dates, then choose a room below to continue
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Free cancellation available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>No booking fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Instant confirmation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
