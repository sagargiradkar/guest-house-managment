// pages/services/ExpatHousing.tsx
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
  Home,
  Wifi,
  Plane,
  Globe2,
  Languages,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  Bed,
  Users,
  Briefcase,
  HeartHandshake,
  FileText,
  Wallet,
  Navigation,
  BookOpen,
  Building2,
  Bath,
  Maximize,
  Car,
  Utensils,
  Package
} from 'lucide-react';

export function ExpatHousing() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920',
      title: 'Welcome Home, Expats!',
      subtitle: 'Premium housing solutions designed for international professionals'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920',
      title: 'Your Gateway to India',
      subtitle: 'Comfortable accommodations that feel like home'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920',
      title: 'Seamless Transition',
      subtitle: 'Making your relocation to India smooth and stress-free'
    }
  ];

  // Expat housing properties
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      title: 'Expat-Ready 2BHK',
      location: 'Koregaon Park, Pune',
      beds: 2,
      baths: 2,
      sqft: 1100,
      price: '₹60,000/month',
      features: ['Western Kitchen', 'Gym', 'Pool']
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      title: 'Luxury 3BHK Apartment',
      location: 'Whitefield, Bangalore',
      beds: 3,
      baths: 3,
      sqft: 1600,
      price: '₹85,000/month',
      features: ['Club House', 'Security', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      title: 'Premium 4BHK Villa',
      location: 'Bandra, Mumbai',
      beds: 4,
      baths: 4,
      sqft: 2400,
      price: '₹1,50,000/month',
      features: ['Garden', 'Parking', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      title: 'Executive Penthouse',
      location: 'Golf Course Road, Gurgaon',
      beds: 3,
      baths: 3,
      sqft: 2000,
      price: '₹1,20,000/month',
      features: ['Terrace', 'Smart Home', 'WiFi']
    }
  ];

  // Why choose us for expats
  const expatBenefits = [
    {
      icon: Languages,
      title: 'Language Assistance',
      description: 'English-speaking property managers and support staff for seamless communication'
    },
    {
      icon: FileText,
      title: 'Visa & Documentation Help',
      description: 'Assistance with rental agreements, police verification, and other paperwork'
    },
    {
      icon: Navigation,
      title: 'Neighborhood Orientation',
      description: 'Guided tours and local area information to help you settle in quickly'
    },
    {
      icon: Wallet,
      title: 'International Payment Options',
      description: 'Accept payments via wire transfer, credit cards, and international payment methods'
    },
    {
      icon: HeartHandshake,
      title: 'Cultural Integration Support',
      description: 'Help connecting with expat communities and understanding local customs'
    },
    {
      icon: Globe2,
      title: 'Western Amenities',
      description: 'Properties equipped with familiar appliances and modern conveniences'
    },
    {
      icon: Shield,
      title: 'Secure Gated Communities',
      description: '24/7 security with CCTV surveillance for peace of mind'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock assistance in English for any urgent needs'
    }
  ];

  // Relocation support services
  const relocationServices = [
    {
      icon: Plane,
      title: 'Airport Pickup',
      description: 'Complimentary airport transfer service on your arrival',
      included: true
    },
    {
      icon: BookOpen,
      title: 'City Orientation',
      description: 'Guided tour of your neighborhood and key locations',
      included: true
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Rental agreement, police verification assistance',
      included: true
    },
    {
      icon: Utensils,
      title: 'Restaurant Recommendations',
      description: 'Curated list of expat-friendly restaurants',
      included: true
    },
    {
      icon: Users,
      title: 'Expat Community Connect',
      description: 'Introduction to local expat groups and networks',
      included: false
    },
    {
      icon: Car,
      title: 'Driver Service Arrangement',
      description: 'Help finding reliable driver services',
      included: false
    },
    {
      icon: Building2,
      title: 'School Information',
      description: 'International school options for your children',
      included: false
    },
    {
      icon: Package,
      title: 'Utility Setup',
      description: 'Assistance with internet, gas, and other utilities',
      included: true
    }
  ];

  // Countries we serve
  const countries = [
    { name: 'United States', flag: '🇺🇸', count: 450 },
    { name: 'United Kingdom', flag: '🇬🇧', count: 320 },
    { name: 'Germany', flag: '🇩🇪', count: 180 },
    { name: 'France', flag: '🇫🇷', count: 150 },
    { name: 'Australia', flag: '🇦🇺', count: 210 },
    { name: 'Japan', flag: '🇯🇵', count: 140 },
    { name: 'Singapore', flag: '🇸🇬', count: 190 },
    { name: 'Other Countries', flag: '🌍', count: 360 }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'James Anderson',
      role: 'Software Engineer from USA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      country: '🇺🇸',
      rating: 5,
      text: 'Moving to India for work was daunting, but Corporate Housing made it so easy. They handled everything from airport pickup to helping me set up utilities. The apartment is perfect and the support team is always available.'
    },
    {
      name: 'Sophie Mueller',
      role: 'Project Manager from Germany',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      country: '🇩🇪',
      rating: 5,
      text: 'Best expat housing service in India! They understood exactly what I needed as a European professional. The apartment has all Western amenities and the property manager speaks perfect English. Highly recommend!'
    },
    {
      name: 'Michael Chen',
      role: 'Consultant from Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      country: '🇸🇬',
      rating: 5,
      text: 'I have relocated to 5 different countries for work, and this is by far the smoothest experience. The property is excellent, location is perfect, and the team went above and beyond to help me settle in.'
    },
    {
      name: 'Emma Thompson',
      role: 'Business Analyst from UK',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      country: '🇬🇧',
      rating: 5,
      text: 'As a first-time expat, I was nervous about moving to India. The team provided incredible support, from documentation to introducing me to other expats. The apartment feels like home and I couldn\'t be happier!'
    }
  ];

  // Popular locations for expats
  const popularLocations = [
    {
      city: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600',
      properties: 85,
      description: 'Tech hub with international community',
      highlights: ['IT Companies', 'International Schools', 'Great Weather']
    },
    {
      city: 'Gurgaon',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600',
      properties: 72,
      description: 'Corporate district near Delhi',
      highlights: ['MNC Offices', 'Shopping Malls', 'Modern Infrastructure']
    },
    {
      city: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600',
      properties: 68,
      description: 'Financial capital with vibrant culture',
      highlights: ['Financial Hub', 'Nightlife', 'International Cuisine']
    },
    {
      city: 'Pune',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600',
      properties: 55,
      description: 'Educational hub with pleasant climate',
      highlights: ['IT Parks', 'Educational Institutions', 'Cultural Heritage']
    }
  ];

  // Process steps
  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Discuss your requirements, budget, and preferred locations via video call'
    },
    {
      step: '02',
      title: 'Property Selection',
      description: 'We shortlist expat-friendly properties matching your needs'
    },
    {
      step: '03',
      title: 'Virtual/Physical Tour',
      description: 'Explore properties through virtual tours or in-person visits'
    },
    {
      step: '04',
      title: 'Move-In Assistance',
      description: 'Complete documentation, airport pickup, and settling-in support'
    }
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
                      <div className="max-w-2xl text-white animate-slide-up">
                        <div className="inline-block mb-4 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
                          EXPAT HOUSING SOLUTIONS
                        </div>
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
                            onClick={() => navigate('/search')}
                          >
                            Find Your Home
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-black text-white hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
                            Schedule Consultation
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

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 text-gray-900 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Premium Housing for Expatriates in India
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed mb-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Relocating to India? We specialize in providing comfortable, fully-furnished accommodations tailored specifically for international professionals and expatriates. Our properties are located in expat-friendly neighborhoods with Western amenities and excellent infrastructure.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              With over 2,000 expats served from 50+ countries, we understand the unique challenges of international relocation and provide comprehensive support to make your transition smooth and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Expats We've Helped</h2>
            <p className="text-xl text-gray-600">Trusted by professionals from around the world</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {countries.map((country, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{country.name}</h3>
                  <p className="text-2xl font-bold text-red-600">{country.count}+</p>
                  <p className="text-xs text-gray-500">Expats Served</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Expat-Friendly Properties</h2>
            <p className="text-xl text-gray-600">Curated accommodations designed for international living</p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {properties.map((property, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.price}
                      </div>
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {property.features.map((feature, idx) => (
                          <span key={idx} className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4 flex items-center">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        {property.location}
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
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
                      <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => navigate('/search')}>
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Expat Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Expats Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized services designed for international professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {expatBenefits.map((benefit, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Relocation Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Relocation Support Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive assistance to make your move hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {relocationServices.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6" />
                    </div>
                    {service.included ? (
                      <Badge className="bg-green-600 text-xs">Included</Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">Optional</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Cities for Expats</h2>
            <p className="text-xl text-gray-600">Prime locations with international communities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {popularLocations.map((location, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-700 group ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{location.city}</h3>
                    <p className="text-sm">{location.properties} Properties</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.highlights.map((highlight, idx) => (
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

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">Simple process for international relocations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-red-200" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Expats Say</h2>
            <p className="text-xl text-gray-600">Real experiences from international professionals</p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-3xl">{testimonial.country}</span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your India Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect home for your international assignment
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
              className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule Consultation
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
          </div>
        </div>
      </section>
    </div>
  );
}
