// pages/services/GuestHouses.tsx
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
  Users,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  Bed,
  Coffee,
  Sparkles,
  ThumbsUp,
  Trees,
  Sofa,
  Bath,
  Maximize,
  Heart
} from 'lucide-react';

export function GuestHouses() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920',
      title: 'Welcome to Your Home Away From Home',
      subtitle: 'Comfortable and affordable guest houses for extended stays'
    },
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920',
      title: 'Cozy & Convenient Living',
      subtitle: 'Perfect for families, groups, and long-term guests'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920',
      title: 'Fully Furnished Guest Houses',
      subtitle: 'Everything you need for a comfortable stay'
    }
  ];

  // Guest house properties
  const guestHouses = [
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      title: 'Cozy 2BHK Guest House',
      location: 'Kothrud, Pune',
      beds: 2,
      baths: 2,
      sqft: 850,
      capacity: 4,
      price: '₹42,000/month',
      features: ['Kitchen', 'Balcony', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800',
      title: 'Spacious 3BHK Villa',
      location: 'Aundh, Pune',
      beds: 3,
      baths: 2,
      sqft: 1250,
      capacity: 6,
      price: '₹68,000/month',
      features: ['Garden', 'Parking', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      title: 'Luxury 4BHK Guest House',
      location: 'Koregaon Park, Pune',
      beds: 4,
      baths: 3,
      sqft: 1850,
      capacity: 8,
      price: '₹95,000/month',
      features: ['Pool', 'Gym', 'WiFi']
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      title: 'Premium 5BHK Villa',
      location: 'Baner, Pune',
      beds: 5,
      baths: 4,
      sqft: 2400,
      capacity: 10,
      price: '₹1,25,000/month',
      features: ['Terrace', 'BBQ', 'WiFi']
    }
  ];

  // Key features
  const features = [
    {
      icon: Home,
      title: 'Private Living Space',
      description: 'Entire house or villa for your exclusive use with complete privacy'
    },
    {
      icon: Utensils,
      title: 'Full Kitchen',
      description: 'Spacious kitchen with modern appliances for home-cooked meals'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Perfect for families with kids, multiple bedrooms and common areas'
    },
    {
      icon: Trees,
      title: 'Outdoor Space',
      description: 'Garden, terrace, or balcony for outdoor relaxation'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Reliable WiFi throughout the property for all your needs'
    },
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Dedicated parking space for multiple vehicles'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Gated communities with 24/7 security and CCTV'
    },
    {
      icon: Sparkles,
      title: 'Regular Cleaning',
      description: 'Weekly housekeeping and maintenance included'
    }
  ];

  // What's included
  const included = [
    {
      category: 'Living Areas',
      items: ['Comfortable Sofas', 'Smart TV', 'Dining Table', 'Air Conditioning', 'Ceiling Fans', 'Curtains & Blinds']
    },
    {
      category: 'Bedrooms',
      items: ['Premium Mattresses', 'Wardrobes', 'Side Tables', 'Bed Linens', 'Pillows & Blankets', 'Study Tables']
    },
    {
      category: 'Kitchen',
      items: ['Gas Stove', 'Refrigerator', 'Microwave', 'Cookware & Utensils', 'Dining Ware', 'Water Purifier']
    },
    {
      category: 'Bathrooms',
      items: ['Hot Water Geyser', 'Shower', 'Toiletries', 'Towels', 'Washing Machine', 'Storage Cabinets']
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Anand & Family',
      role: 'Relocated from Delhi',
      image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400',
      rating: 5,
      text: 'Perfect guest house for our family! The kids loved the garden and the neighborhood is very peaceful. The owner was extremely helpful throughout our 6-month stay.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Expat Professional',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      rating: 5,
      text: 'As an expat, finding a comfortable home in India was challenging until I found this guest house. It has everything I need and feels just like home. Highly recommend!'
    },
    {
      name: 'Vikram Reddy',
      role: 'Business Traveler',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 5,
      text: 'Stayed for 3 months during my project. The spacious villa was perfect for hosting colleagues. Great location, excellent amenities, and responsive property management.'
    },
    {
      name: 'The Mehta Family',
      role: 'Temporary Relocation',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=400',
      rating: 5,
      text: 'We needed temporary housing while our home was being renovated. This guest house was a blessing! Fully furnished, clean, and in a great location. Made the transition easy.'
    }
  ];

  // Ideal for section
  const idealFor = [
    {
      icon: Users,
      title: 'Large Families',
      description: 'Multiple bedrooms and common spaces for comfortable family living'
    },
    {
      icon: Heart,
      title: 'Extended Stays',
      description: 'Perfect for stays longer than a month with home-like amenities'
    },
    {
      icon: MapPin,
      title: 'Relocation',
      description: 'Temporary housing during job transfers or home transitions'
    },
    {
      icon: Sparkles,
      title: 'Vacation Rentals',
      description: 'Spacious accommodation for family holidays and gatherings'
    }
  ];

  // Process steps
  const process = [
    {
      step: '01',
      title: 'Browse Our Collection',
      description: 'Explore our verified guest houses in prime locations across the city'
    },
    {
      step: '02',
      title: 'Schedule a Visit',
      description: 'Book a property tour to see the guest house in person'
    },
    {
      step: '03',
      title: 'Complete Booking',
      description: 'Simple online booking with transparent pricing and no hidden costs'
    },
    {
      step: '04',
      title: 'Move In Seamlessly',
      description: 'Key handover and property orientation on your move-in date'
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
                          CORPORATE GUEST HOUSES
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
                            View Guest Houses
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-black hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
                            Get Quote
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
              Corporate Guest Houses for Extended Stays
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed mb-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Our guest houses provide the perfect alternative to hotels for extended business stays, relocations, or family visits. Enjoy the privacy and comfort of an entire home with all the amenities you need for a pleasant and productive stay.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Each guest house is carefully selected, fully furnished, and maintained to our high standards, ensuring you feel at home from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Guest Houses Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Available Guest Houses</h2>
            <p className="text-xl text-gray-600">Choose from our selection of well-maintained properties</p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {guestHouses.map((property, index) => (
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
                        <MapPin className="h-4 w-4 mr-2" />
                        {property.location}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          {property.beds} Beds
                        </span>
                        <span className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          {property.baths} Baths
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Maximize className="h-4 w-4 mr-1" />
                          {property.sqft} sqft
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          Up to {property.capacity} guests
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

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Our Guest Houses?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the comfort and convenience of home with these premium features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Everything You Need is Included</h2>
            <p className="text-xl text-gray-600">Fully furnished and equipped for your convenience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {included.map((section, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2" />
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-red-600 mr-2">•</span>
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

      {/* Ideal For Section with Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ideal For</h2>
            <p className="text-xl text-gray-600">Perfect accommodation solution for various needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {idealFor.map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-4">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">See Our Guest Houses</h2>
            <p className="text-xl text-gray-600">Beautiful, well-maintained properties across the city</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600',
              'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600',
              'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600',
              'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600',
              'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600',
              'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600',
              'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600'
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
                  alt={`Guest House ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Simple Booking Process</h2>
            <p className="text-xl text-gray-600">From inquiry to move-in, we make it easy</p>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Happy Guests</h2>
            <p className="text-xl text-gray-600">Read what our guests have to say</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Guest House Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a comfortable, fully-furnished guest house for your extended stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/search')}
            >
              Browse Guest Houses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call for Assistance
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
