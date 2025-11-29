// pages/services/FurnishedHomes.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  Utensils,
  Tv,
  Wind,
  Car,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  Bed,
  Sofa,
  Sparkles,
  Key,
  Package,
  TrendingUp,
  Bath,
  Maximize,
  DollarSign,
  Calendar,
  Users,
  Heart,
  Award,
  Zap
} from 'lucide-react';

export function FurnishedHomes() {
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
      title: 'Move-In Ready Furnished Homes',
      subtitle: 'Complete living solutions with premium furniture and appliances'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920',
      title: 'Luxury Living Made Simple',
      subtitle: 'Designer interiors with modern amenities'
    },
    {
      url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920',
      title: 'Your Dream Home Awaits',
      subtitle: 'Fully furnished apartments and villas ready for you'
    }
  ];

  // Furnished homes properties
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      title: 'Modern 1BHK Apartment',
      location: 'Hinjewadi, Pune',
      beds: 1,
      baths: 1,
      sqft: 600,
      price: '₹38,000/month',
      type: 'Apartment',
      features: ['Premium Furniture', 'Smart Home', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      title: 'Elegant 2BHK Home',
      location: 'Baner, Pune',
      beds: 2,
      baths: 2,
      sqft: 900,
      price: '₹55,000/month',
      type: 'Apartment',
      features: ['Designer Interiors', 'Balcony', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      title: 'Luxury 3BHK Penthouse',
      location: 'Koregaon Park, Pune',
      beds: 3,
      baths: 3,
      sqft: 1500,
      price: '₹85,000/month',
      type: 'Penthouse',
      features: ['Terrace', 'Pool Access', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      title: 'Premium 4BHK Villa',
      location: 'Aundh, Pune',
      beds: 4,
      baths: 4,
      sqft: 2200,
      price: '₹1,20,000/month',
      type: 'Villa',
      features: ['Private Garden', 'Home Office', 'WiFi']
    }
  ];

  // Key advantages
  const advantages = [
    {
      icon: Key,
      title: 'Move-In Ready',
      description: 'Just bring your suitcase! Everything from furniture to kitchen essentials is provided'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Save thousands on furniture purchases and avoid moving hassles'
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'High-quality branded furniture and appliances in all properties'
    },
    {
      icon: Calendar,
      title: 'Flexible Tenures',
      description: 'Short-term or long-term leases available based on your needs'
    },
    {
      icon: Shield,
      title: 'Full Maintenance',
      description: 'Repairs and replacements included at no extra cost'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Move in within 24-48 hours of booking confirmation'
    },
    {
      icon: Award,
      title: 'Designer Interiors',
      description: 'Professionally designed spaces with modern aesthetics'
    },
    {
      icon: Heart,
      title: 'Home-Like Comfort',
      description: 'Thoughtfully furnished for maximum comfort and functionality'
    }
  ];

  // Complete furniture package
  const furniturePackage = [
    {
      room: 'Living Room',
      icon: Sofa,
      items: [
        'Premium Sofa Set (3+2)',
        'Coffee Table',
        'TV Unit with 43" Smart TV',
        'Decorative Lighting',
        'Curtains & Blinds',
        'Wall Decor & Plants',
        'Side Tables',
        'Storage Cabinet'
      ]
    },
    {
      room: 'Bedroom',
      icon: Bed,
      items: [
        'Queen/King Size Bed',
        'Premium Mattress',
        'Wardrobe (6-8 ft)',
        'Bedside Tables (2)',
        'Study/Work Desk',
        'Ergonomic Chair',
        'Full-Length Mirror',
        'Bedding & Linens'
      ]
    },
    {
      room: 'Kitchen & Dining',
      icon: Utensils,
      items: [
        'Dining Table with Chairs',
        'Refrigerator (Double Door)',
        'Microwave Oven',
        'Gas Stove & Cylinder',
        'Complete Cookware Set',
        'Crockery & Cutlery',
        'Water Purifier',
        'Kitchen Storage'
      ]
    },
    {
      room: 'Utilities',
      icon: Package,
      items: [
        'Washing Machine',
        'Water Heater (Geyser)',
        'Air Conditioner',
        'Ceiling & Table Fans',
        'WiFi Router',
        'Inverter/Power Backup',
        'Vacuum Cleaner',
        'Iron & Ironing Board'
      ]
    }
  ];

  // Who it's perfect for
  const perfectFor = [
    {
      icon: TrendingUp,
      title: 'Working Professionals',
      description: 'No hassle setup, focus on your career from day one',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600'
    },
    {
      icon: Users,
      title: 'Newly Married Couples',
      description: 'Start your new life in a beautifully furnished home',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600'
    },
    {
      icon: MapPin,
      title: 'City Relocations',
      description: 'Settling in a new city made easy and comfortable',
      image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600'
    },
    {
      icon: Home,
      title: 'Temporary Housing',
      description: 'Perfect during home renovation or construction',
      image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600'
    }
  ];

  // Comparison section
  const comparison = [
    {
      aspect: 'Initial Investment',
      unfurnished: '₹3-5 Lakhs',
      furnished: '₹0 (Included)',
      icon: DollarSign
    },
    {
      aspect: 'Setup Time',
      unfurnished: '2-4 Weeks',
      furnished: '24-48 Hours',
      icon: Clock
    },
    {
      aspect: 'Maintenance',
      unfurnished: 'Your Responsibility',
      furnished: 'Fully Covered',
      icon: Shield
    },
    {
      aspect: 'Flexibility',
      unfurnished: 'Long Commitment',
      furnished: 'Short/Long Term',
      icon: Calendar
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Neha Kapoor',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      rating: 5,
      text: 'Moving to Pune for work was stressful until I found this furnished home. Everything was perfect - from the furniture quality to the kitchen setup. Saved me so much time and money!'
    },
    {
      name: 'Rahul & Priya',
      role: 'Newly Married Couple',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      rating: 5,
      text: 'Starting our married life in this beautifully furnished apartment was a dream come true. The interior design is stunning and everything we needed was already there. Highly recommend!'
    },
    {
      name: 'David Miller',
      role: 'Expat Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'As an expat, I needed a hassle-free housing solution. This furnished home exceeded my expectations. Premium furniture, great location, and excellent service. Worth every penny!'
    },
    {
      name: 'Kavita Sharma',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      rating: 5,
      text: 'My home was under renovation and I needed temporary housing. This furnished apartment was perfect - comfortable, well-maintained, and felt just like home. Great experience overall!'
    }
  ];

  // Process steps
  const process = [
    {
      step: '01',
      title: 'Choose Your Home',
      description: 'Browse our collection and select the perfect furnished home for your needs'
    },
    {
      step: '02',
      title: 'Schedule Viewing',
      description: 'Visit the property virtually or in-person to see the furnishings and layout'
    },
    {
      step: '03',
      title: 'Quick Paperwork',
      description: 'Simple documentation process with flexible lease terms'
    },
    {
      step: '04',
      title: 'Move In Same Week',
      description: 'Collect keys and move in within 24-48 hours of confirmation'
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
                          FURNISHED HOMES
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
                            Explore Homes
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-black hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
                            Book a Viewing
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
              Premium Furnished Homes for Modern Living
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed mb-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Skip the hassle of buying furniture and setting up utilities. Our fully furnished homes come with premium furniture, modern appliances, and everything you need to start living comfortably from day one.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Whether you're a working professional, newly married couple, or relocating for work, our furnished homes offer the perfect blend of comfort, style, and convenience at competitive rental rates.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Furnished Homes</h2>
            <p className="text-xl text-gray-600">Beautifully furnished properties ready for immediate move-in</p>
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
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {property.type}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
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

      {/* Key Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Furnished Homes?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience hassle-free living with these incredible benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <advantage.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{advantage.title}</h3>
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Furniture Package */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Complete Furniture Package</h2>
            <p className="text-xl text-gray-600">Everything you need, nothing you don't</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {furniturePackage.map((room, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                      <room.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{room.room}</h3>
                  </div>
                  <ul className="space-y-2">
                    {room.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Furnished vs Unfurnished</h2>
            <p className="text-xl text-gray-600">See the difference for yourself</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {comparison.map((item, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-700 ${
                    contentLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-gray-600" />
                        </div>
                        <span className="font-semibold text-gray-900">{item.aspect}</span>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Unfurnished</p>
                        <p className="font-semibold text-gray-600">{item.unfurnished}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-red-600 mb-1">Furnished</p>
                        <p className="font-bold text-red-600">{item.furnished}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Perfect For</h2>
            <p className="text-xl text-gray-600">Ideal accommodation for various life situations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {perfectFor.map((item, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-700 group ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                      <item.icon className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Beautiful Interiors</h2>
            <p className="text-xl text-gray-600">Professionally designed spaces with attention to detail</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
              'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600',
              'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600',
              'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600',
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600'
            ].map((image, index) => (
              <div
                key={index}
                className={`relative h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={image}
                  alt={`Interior ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">Move into your dream home in just 4 simple steps</p>
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

      {/* Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Residents Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
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
                      <div className="flex items-center mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Move Into Your Furnished Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our collection of beautifully furnished homes and start living comfortably today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/search')}
            >
              Explore All Homes
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Visit
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
