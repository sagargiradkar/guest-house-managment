// pages/locations/Pune.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Autoplay from 'embla-carousel-autoplay';
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Star,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Phone,
  Mail,
  ArrowRight,
  Building2,
  GraduationCap,
  ShoppingBag,
  Plane,
  Train,
  Bus,
  Hospital,
  Coffee,
  Trees,
  TrendingUp,
  Users,
  Briefcase,
  Home
} from 'lucide-react';

export function Pune() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920',
      title: 'Corporate Housing in Pune',
      subtitle: 'Premium furnished apartments in India\'s cultural capital'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920',
      title: 'Live in Pune\'s Best Localities',
      subtitle: 'Modern accommodations in prime locations'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920',
      title: 'Your Home Away From Home',
      subtitle: 'Comfortable stays for business and leisure'
    }
  ];

  // Featured properties in Pune
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      title: 'Luxury 2BHK in Koregaon Park',
      location: 'Koregaon Park',
      beds: 2,
      baths: 2,
      sqft: 1200,
      price: '₹55,000/month',
      rating: 4.8,
      reviews: 124,
      features: ['WiFi', 'Parking', 'Gym', 'Pool']
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      title: 'Modern 3BHK in Hinjewadi',
      location: 'Hinjewadi IT Park',
      beds: 3,
      baths: 2,
      sqft: 1500,
      price: '₹65,000/month',
      rating: 4.9,
      reviews: 89,
      features: ['WiFi', 'Furnished', 'Security', 'AC']
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      title: 'Premium 2BHK in Baner',
      location: 'Baner Road',
      beds: 2,
      baths: 2,
      sqft: 1100,
      price: '₹48,000/month',
      rating: 4.7,
      reviews: 156,
      features: ['WiFi', 'Kitchen', 'Parking', 'Club']
    },
    {
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      title: 'Executive 1BHK in Viman Nagar',
      location: 'Viman Nagar',
      beds: 1,
      baths: 1,
      sqft: 700,
      price: '₹32,000/month',
      rating: 4.6,
      reviews: 92,
      features: ['WiFi', 'Furnished', 'AC', 'Security']
    },
    {
      image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1f14?w=800',
      title: 'Spacious 3BHK in Wakad',
      location: 'Wakad',
      beds: 3,
      baths: 3,
      sqft: 1600,
      price: '₹58,000/month',
      rating: 4.8,
      reviews: 78,
      features: ['WiFi', 'Gym', 'Pool', 'Garden']
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      title: 'Elegant 2BHK in Kharadi',
      location: 'Kharadi EON',
      beds: 2,
      baths: 2,
      sqft: 1300,
      price: '₹52,000/month',
      rating: 4.9,
      reviews: 134,
      features: ['WiFi', 'Club', 'Parking', 'Security']
    }
  ];

  // Popular localities in Pune
  const localities = [
    {
      name: 'Hinjewadi',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
      properties: 145,
      description: 'IT Hub with major tech parks',
      priceRange: '₹40K - ₹80K',
      highlights: ['IT Parks', 'Restaurants', 'Shopping']
    },
    {
      name: 'Koregaon Park',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
      properties: 98,
      description: 'Upscale residential area',
      priceRange: '₹50K - ₹1L',
      highlights: ['Cafes', 'Nightlife', 'Premium']
    },
    {
      name: 'Baner',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600',
      properties: 132,
      description: 'Well-connected suburb',
      priceRange: '₹35K - ₹70K',
      highlights: ['Schools', 'Malls', 'Connectivity']
    },
    {
      name: 'Viman Nagar',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600',
      properties: 87,
      description: 'Near airport, IT offices',
      priceRange: '₹30K - ₹65K',
      highlights: ['Airport', 'IT Offices', 'Restaurants']
    },
    {
      name: 'Kharadi',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600',
      properties: 156,
      description: 'Growing IT corridor',
      priceRange: '₹38K - ₹75K',
      highlights: ['Tech Companies', 'Modern', 'Upcoming']
    },
    {
      name: 'Wakad',
      image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600',
      properties: 124,
      description: 'Residential with great amenities',
      priceRange: '₹35K - ₹68K',
      highlights: ['Family-Friendly', 'Parks', 'Schools']
    }
  ];

  // City highlights
  const cityHighlights = [
    {
      icon: Briefcase,
      title: 'IT & Business Hub',
      description: 'Home to major IT parks including Hinjewadi, Magarpatta, and EON IT Park',
      stat: '500+ Companies'
    },
    {
      icon: GraduationCap,
      title: 'Educational Excellence',
      description: 'Top universities and institutions attracting students worldwide',
      stat: '100+ Colleges'
    },
    {
      icon: Trees,
      title: 'Pleasant Climate',
      description: 'Year-round moderate weather perfect for comfortable living',
      stat: '20-35°C Avg'
    },
    {
      icon: TrendingUp,
      title: 'Growing Economy',
      description: 'Rapidly developing infrastructure and business opportunities',
      stat: '15% Growth'
    }
  ];

  // Connectivity
  const connectivity = [
    {
      icon: Plane,
      title: 'Airport',
      description: 'Pune International Airport - 15-30 mins',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Train,
      title: 'Railway',
      description: 'Pune Junction & Shivajinagar - Well connected',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Bus,
      title: 'Metro',
      description: 'Upcoming Pune Metro for easy commute',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Car,
      title: 'Highways',
      description: 'Mumbai-Pune Expressway & National Highways',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  // Nearby amenities
  const amenities = [
    {
      icon: ShoppingBag,
      title: 'Shopping',
      places: ['Phoenix Market City', 'Amanora Mall', 'Seasons Mall']
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      places: ['Ruby Hall Clinic', 'Sahyadri Hospital', 'Columbia Asia']
    },
    {
      icon: Coffee,
      title: 'Dining',
      places: ['Koregaon Park Cafes', 'FC Road Eateries', 'Viman Nagar']
    },
    {
      icon: Trees,
      title: 'Recreation',
      places: ['Shaniwar Wada', 'Aga Khan Palace', 'Osho Garden']
    }
  ];

  // Stats
  const stats = [
    { label: 'Properties Available', value: '750+', icon: Home },
    { label: 'Happy Residents', value: '2,500+', icon: Users },
    { label: 'Localities Covered', value: '25+', icon: MapPin },
    { label: 'Average Rating', value: '4.8', icon: Star }
  ];

  return (
    <div className="min-h-screen -mt-28">
      {/* Hero Carousel Section */}
      <section className="relative h-[600px]">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent>
            {heroImages.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px]">
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-3xl text-white animate-slide-up">
                        <Badge className="mb-4 bg-white/20 text-white border-white/30">
                          <MapPin className="h-3 w-3 mr-1" />
                          PUNE, MAHARASHTRA
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                          {slide.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 shadow-xl"
                            onClick={() => navigate('/search?location=pune')}
                          >
                            View Properties
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-black hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
                            <Phone className="mr-2 h-5 w-5" />
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 text-gray-900 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Why Choose Pune for Corporate Housing?
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Pune, known as the "Oxford of the East," is a thriving IT hub with a perfect blend of modern infrastructure and rich cultural heritage. Our corporate housing solutions offer you premium accommodations in Pune's best localities, close to major IT parks, educational institutions, and entertainment hubs.
            </p>
          </div>
        </div>
      </section>

      {/* City Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Pune at a Glance</h2>
            <p className="text-xl text-gray-600">What makes Pune an ideal place to live</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cityHighlights.map((highlight, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <highlight.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{highlight.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{highlight.description}</p>
                  <Badge variant="secondary">{highlight.stat}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Localities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Localities in Pune</h2>
            <p className="text-xl text-gray-600">Find your perfect neighborhood</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {localities.map((locality, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-700 group cursor-pointer ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/search?location=pune&area=${locality.name.toLowerCase()}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={locality.image}
                    alt={locality.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{locality.name}</h3>
                    <p className="text-sm">{locality.properties} Properties</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-3">{locality.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Price Range</span>
                    <span className="font-semibold text-gray-900">{locality.priceRange}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {locality.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Properties in Pune</h2>
            <p className="text-xl text-gray-600">Handpicked accommodations for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {properties.map((property, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-700 group cursor-pointer ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => navigate('/property-details')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-gray-900">{property.price}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900 ml-1">
                        {property.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">({property.reviews} reviews)</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    {property.location}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds} Bed
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths} Bath
                    </span>
                    <span className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1" />
                      {property.sqft} sqft
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 font-semibold"
              onClick={() => navigate('/search?location=pune')}
            >
              View All Properties in Pune
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Excellent Connectivity</h2>
            <p className="text-xl text-gray-600">Well-connected to all parts of the city</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {connectivity.map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.color} mb-4`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nearby Amenities</h2>
            <p className="text-xl text-gray-600">Everything you need within reach</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4">
                    <amenity.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                  <ul className="space-y-2">
                    {amenity.places.map((place, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                        {place}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Move to Pune?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find your perfect corporate housing in Pune today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/search?location=pune')}
            >
              Browse All Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
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
            <a href="mailto:pune@corporatehousing.co.in" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Mail className="h-5 w-5 text-red-500" />
              <span className="font-semibold">pune@corporatehousing.co.in</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
