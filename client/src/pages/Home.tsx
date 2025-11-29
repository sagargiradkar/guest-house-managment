// pages/Home.tsx
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar, SearchParams } from '@/components/SearchBar';
import { HotelCard } from '@/components/HotelCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Hotel } from '@/types/hotel';
import { getHotels } from '@/api/hotels';
import { useToast } from '@/hooks/useToast';
import { 
  Building2, 
  Home as HomeIcon, 
  Globe2, 
  Users, 
  Shield, 
  Clock, 
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Star
} from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [featuredHotels, setFeaturedHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  const loadFeaturedHotels = useCallback(async () => {
    try {
      console.log('Loading featured hotels...');
      const response = await getHotels();
      setFeaturedHotels(response.hotels.slice(0, 6));
      // Simulate content loading delay for smooth UX
      setTimeout(() => setContentLoaded(true), 300);
    } catch (error) {
      console.error('Error loading featured hotels:', error);
      // toast({
      //   title: 'Error',
      //   description: error.message || 'Failed to load hotels',
      //   variant: 'destructive'
      // });
      setContentLoaded(true);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadFeaturedHotels();
  }, [loadFeaturedHotels]);

  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
    navigate('/search', { state: params });
  };

  // Services offered
  const services = [
    {
      icon: Building2,
      title: 'Corporate Stay Solutions',
      description: 'Tailored accommodation solutions for business travelers and corporate clients',
      link: '/services/corporate-stay'
    },
    {
      icon: HomeIcon,
      title: 'Corporate Guest Houses',
      description: 'Fully furnished guest houses for extended business stays',
      link: '/services/guest-houses'
    },
    {
      icon: Globe2,
      title: 'Expat Housing',
      description: 'Comfortable housing solutions for expatriates and international professionals',
      link: '/services/expat-housing'
    },
    {
      icon: Users,
      title: 'NRI Housing',
      description: 'Premium accommodations for Non-Resident Indians visiting home',
      link: '/services/nri-housing'
    }
  ];

  // Key features
  const features = [
    {
      icon: CheckCircle2,
      title: 'Verified Properties',
      description: 'All properties are verified and quality-checked'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Safe and encrypted payment processing'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    },
    {
      icon: Award,
      title: 'Best Price Guarantee',
      description: 'Competitive rates for quality accommodations'
    }
  ];

  // Locations
  const locations = [
    { name: 'Pune', properties: 45, image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400' },
    { name: 'Mumbai', properties: 68, image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400' },
    { name: 'Bangalore', properties: 52, image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400' },
    { name: 'Delhi', properties: 61, image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400' }
  ];

  // Skeleton Loading Components
  const ServiceSkeleton = () => (
    <Card className="border-2">
      <CardContent className="p-6 text-center">
        <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
        <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </CardContent>
    </Card>
  );

  const FeatureSkeleton = () => (
    <Card className="border-t-4 border-t-gray-300">
      <CardContent className="p-6 text-center">
        <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
        <Skeleton className="h-6 w-2/3 mx-auto mb-2" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  );

  const LocationSkeleton = () => (
    <Card className="h-64">
      <Skeleton className="w-full h-full" />
    </Card>
  );

  return (
    <div className="min-h-screen -mt-12">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full animate-fade-in">
              SERVICE APARTMENTS IN PUNE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: '100ms' }}>
              Expat Housing &<br />
              Corporate Service<br />
              Apartments<br />
              <span className="text-red-500">Specialist in Pune</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Whether you are looking for Safe & Spacious<br className="hidden md:block" />
              Corporate Private Rooms & Entire House Service<br className="hidden md:block" />
              Apartments in Pune?
            </p>
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto animate-slide-up shadow-xl hover:shadow-2xl transition-all"
              style={{ animationDelay: '300ms' }}
              onClick={() => navigate('/search')}
            >
              ENQUIRE NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What We Do</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive accommodation solutions for corporate and individual needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => <ServiceSkeleton key={i} />)
            ) : (
              services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-xl transition-all duration-500 cursor-pointer border-2 hover:border-red-500 group ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => navigate(service.link)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Featured Properties</h2>
              <p className="text-base md:text-lg text-gray-600">Handpicked accommodations for your perfect stay</p>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/search')}
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
            >
              View All Properties
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="h-96 overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-4 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex justify-between pt-2">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              featuredHotels.map((hotel, index) => (
                <div
                  key={hotel._id}
                  className={`transition-all duration-700 ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <HotelCard hotel={hotel} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience excellence in corporate housing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => <FeatureSkeleton key={i} />)
            ) : (
              features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`text-center hover:shadow-lg transition-all duration-700 border-t-4 border-t-red-600 hover:-translate-y-1 ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Where We Serve</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Premium accommodations across major cities in India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => <LocationSkeleton key={i} />)
            ) : (
              locations.map((location, index) => (
                <Card
                  key={index}
                  className={`relative h-64 overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-700 ${
                    contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => navigate('/search', { state: { location: location.name } })}
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-6">
                    <MapPin className="h-6 w-6 text-white mb-2 group-hover:animate-bounce" />
                    <h3 className="text-2xl font-bold text-white">{location.name}</h3>
                    <p className="text-white text-sm mt-1">{location.properties} Properties Available</p>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Explore
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Guests Say</h2>
            <p className="text-lg md:text-xl text-gray-600">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card 
                key={i} 
                className={`hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Excellent service and beautiful accommodations. The staff was incredibly helpful and the location was perfect for our business needs."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold mr-3">
                      JD
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">Business Traveler</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the best in corporate housing and service apartments. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/search')}
            >
              Browse Properties
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => window.location.href = 'tel:+918788800500'}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            <a href="tel:+918788800500" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Phone className="h-5 w-5 text-red-500" />
              <span className="font-semibold">+91 8788 800 500</span>
            </a>
            <a href="mailto:info@corporatehousing.com" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Mail className="h-5 w-5 text-red-500" />
              <span className="font-semibold">info@corporatehousing.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              <span className="font-semibold">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
