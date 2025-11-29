// pages/PropertyDetails.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { Hotel } from '@/types/hotel';
import { MOCK_HOTELS } from '@/lib/mockData';
import { useToast } from '@/hooks/useToast';
import {
  MapPin,
  Star,
  Bed,
  Bath,
  Maximize,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  CheckCircle2,
  Phone,
  Mail,
  ArrowLeft,
  Share2,
  Heart,
  Calendar,
  Users,
  Home,
  Droplets,
  Shield,
  Waves
} from 'lucide-react';

export function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [property, setProperty] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const found = MOCK_HOTELS.find(h => h._id === id);
      if (found) {
        setProperty(found);
      } else {
        toast({
          title: 'Property not found',
          description: 'The property you are looking for does not exist.',
          variant: 'destructive'
        });
        navigate('/search');
      }
      setLoading(false);
      setTimeout(() => setContentLoaded(true), 300);
    }, 500);
  }, [id, navigate, toast]);

  // Sync carousel with thumbnails
  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on('select', () => {
      setSelectedImage(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
    carouselApi?.scrollTo(index);
  };

  if (loading || !property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'Parking': Car,
    'Kitchen': Utensils,
    'Gym': Dumbbell,
    'Air Conditioning': Home,
    'Swimming Pool': Waves,
    '24/7 Security': Shield,
    'Laundry': Droplets,
    'Housekeeping': Home,
  };

  return (
    <div className="min-h-screen bg-gray-50 -mt-12">
      {/* Back Button */}
      <div className="bg-white border-b sticky z-10 shadow-sm mb-0">
        <div className="container mx-auto px-4 py-3">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Back to Search</span>
            <span className="sm:hidden">Back</span>
          </Button>
        </div>
      </div>

      {/* Add padding top on mobile to account for fixed button */}
      <div className="pt-14 md:pt-0">
        {/* Image Gallery */}
        <section className={`bg-white transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="container mx-auto px-4 py-4 md:py-8">
            <Carousel 
              className="w-full max-w-6xl mx-auto"
              setApi={setCarouselApi}
            >
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg md:rounded-xl overflow-hidden">
                      <img
                        src={image}
                        alt={`${property.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Image counter on mobile */}
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {index + 1} / {property.images.length}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>

            {/* Thumbnail Gallery - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-3 mt-4 max-w-6xl mx-auto">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative h-20 lg:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-red-600 ring-2 ring-red-600 ring-offset-2' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-red-600 bg-opacity-20 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Property Info */}
        <section className="container mx-auto px-4 py-6 md:py-8">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Header */}
              <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {property.name}
                      </h1>
                      <p className="text-base md:text-lg text-gray-600 flex items-start sm:items-center">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 text-red-600 flex-shrink-0 mt-1 sm:mt-0" />
                        <span className="line-clamp-2">{property.location.address}</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
                    <Badge className="bg-red-600 text-white px-3 md:px-4 py-1.5 md:py-2">
                      <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 fill-white" />
                      {property.rating}
                    </Badge>
                    <span className="text-sm md:text-base text-gray-600">
                      {property.reviews} reviews
                    </span>
                    <Badge variant="secondary" className="text-sm">
                      {property.roomType}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Bed className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-red-600" />
                      <p className="text-xs md:text-sm text-gray-600">Bedrooms</p>
                      <p className="text-sm md:text-base font-semibold">{property.roomType}</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-red-600" />
                      <p className="text-xs md:text-sm text-gray-600">Bathrooms</p>
                      <p className="text-sm md:text-base font-semibold">2</p>
                    </div>
                    <div className="text-center">
                      <Maximize className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-red-600" />
                      <p className="text-xs md:text-sm text-gray-600">Size</p>
                      <p className="text-sm md:text-base font-semibold">1200 sqft</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">About this property</h2>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Amenities</h2>
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {property.amenities.map((amenity, index) => {
                      const IconComponent = amenityIcons[amenity] || CheckCircle2;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
                          </div>
                          <span className="text-sm md:text-base text-gray-700 font-medium">
                            {amenity}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Location</h2>
                  <div className="mb-4 space-y-1">
                    <p className="text-base md:text-lg text-gray-700 font-medium">
                      {property.location.city}, {property.location.state}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {property.location.address}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      Postal Code: {property.location.postalCode}
                    </p>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm md:text-base text-gray-600 font-medium">
                        {property.location.city}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        Lat: {property.location.coordinates.lat}, Lng: {property.location.coordinates.lng}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className={`lg:sticky lg:top-24 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="mb-6">
                    <p className="text-xs md:text-sm text-gray-600 mb-2">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-bold text-gray-900">
                        ₹{property.price}
                      </span>
                      <span className="text-sm md:text-base text-gray-600">/ night</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 inline mr-1" />
                          Check-in
                        </label>
                        <input
                          type="date"
                          className="w-full px-2 md:px-3 py-2 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 inline mr-1" />
                          Check-out
                        </label>
                        <input
                          type="date"
                          className="w-full px-2 md:px-3 py-2 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        <Users className="h-3 w-3 md:h-4 md:w-4 inline mr-1" />
                        Guests
                      </label>
                      <select className="w-full px-2 md:px-3 py-2 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-5 md:py-6 text-base md:text-lg font-semibold mb-4">
                    Book Now
                  </Button>

                  <div className="border-t pt-6 space-y-3">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-4">
                      Contact Property
                    </h3>
                    <Button variant="outline" className="w-full justify-start text-sm md:text-base">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Property
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm md:text-base">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>

                  <div className="mt-6 p-3 md:p-4 bg-green-50 rounded-lg">
                    <p className="text-xs md:text-sm text-green-800 flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                      Free cancellation up to 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mobile Bottom Booking Bar - Fixed at bottom on mobile only */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-20">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-600">Starting from</p>
                <p className="text-xl font-bold text-gray-900">₹{property.price}<span className="text-sm font-normal text-gray-600">/night</span></p>
              </div>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 font-semibold"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* Add padding bottom on mobile for fixed booking bar */}
        <div className="h-20 lg:hidden"></div>
      </div>
    </div>
  );
}
