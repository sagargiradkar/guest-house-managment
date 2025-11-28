// pages/services/CorporateStay.tsx
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
  Building2,
  Wifi,
  Coffee,
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
  Home,
  Bed,
  Bath,
  Maximize
} from 'lucide-react';

export function CorporateStay() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920',
      title: 'Premium Corporate Accommodations',
      subtitle: 'Fully furnished apartments for business professionals'
    },
    {
      url: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1920',
      title: 'Modern Living Spaces',
      subtitle: 'Designed for comfort and productivity'
    },
    {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920',
      title: 'Prime Business Locations',
      subtitle: 'Close to major corporate hubs and offices'
    }
  ];

  // Property showcase images
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      title: 'Executive Studio',
      location: 'Baner, Pune',
      beds: 1,
      baths: 1,
      sqft: 450,
      price: '₹35,000/month'
    },
    {
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      title: 'Deluxe 1BHK',
      location: 'Hinjewadi, Pune',
      beds: 1,
      baths: 1,
      sqft: 650,
      price: '₹45,000/month'
    },
    {
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      title: 'Premium 2BHK',
      location: 'Wakad, Pune',
      beds: 2,
      baths: 2,
      sqft: 950,
      price: '₹65,000/month'
    },
    {
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      title: 'Luxury 3BHK',
      location: 'Koregaon Park, Pune',
      beds: 3,
      baths: 2,
      sqft: 1450,
      price: '₹95,000/month'
    }
  ];

  // Amenities
  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Reliable internet for remote work and video calls'
    },
    {
      icon: Wind,
      title: 'Air Conditioning',
      description: 'Climate control in all rooms for comfort'
    },
    {
      icon: Tv,
      title: 'Smart TV',
      description: 'Entertainment with streaming services'
    },
    {
      icon: Coffee,
      title: 'Fully Equipped Kitchen',
      description: 'Modern appliances and cookware included'
    },
    {
      icon: Bed,
      title: 'Premium Bedding',
      description: 'Luxury linens and comfortable mattresses'
    },
    {
      icon: Car,
      title: 'Parking',
      description: 'Dedicated parking space for your vehicle'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Gated community with CCTV surveillance'
    },
    {
      icon: Users,
      title: 'Housekeeping',
      description: 'Weekly cleaning and maintenance service'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'IT Manager, TCS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'Excellent corporate housing solution. The apartment was spotless, well-maintained, and perfectly located near my office. Made my 6-month project stay very comfortable.'
    },
    {
      name: 'Priya Mehta',
      role: 'Business Consultant',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'Outstanding service! The property manager was very responsive, and the amenities exceeded my expectations. Highly recommend for long-term corporate stays.'
    },
    {
      name: 'Amit Patel',
      role: 'Project Lead, Infosys',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      text: 'Best corporate housing experience in Pune. The apartment felt like home with all modern amenities. Great value for money and professional service throughout.'
    },
    {
      name: 'Sneha Desai',
      role: 'HR Director, Wipro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      text: 'We have been using their services for our relocating employees for 2 years. Consistent quality, great locations, and hassle-free booking process.'
    }
  ];

  // Process steps
  const process = [
    {
      step: '01',
      title: 'Tell Us Your Needs',
      description: 'Share your requirements - location, duration, budget, and preferences'
    },
    {
      step: '02',
      title: 'Get Personalized Options',
      description: 'Receive curated property recommendations that match your criteria'
    },
    {
      step: '03',
      title: 'Virtual or In-Person Tours',
      description: 'Schedule property viewings at your convenience'
    },
    {
      step: '04',
      title: 'Easy Booking & Move-In',
      description: 'Complete paperwork online and move in hassle-free'
    }
  ];

  return (
    <div className="min-h-screen -mt-12">
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
                          CORPORATE STAY SOLUTIONS
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
                            Browse Properties
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
                            Schedule Tour
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
              Corporate Stay Solutions
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Whether you're on a business assignment, training program, or project deployment, our corporate stay solutions provide comfortable, fully-furnished accommodations tailored for business professionals. Experience the perfect blend of comfort, convenience, and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Properties</h2>
            <p className="text-xl text-gray-600">Handpicked accommodations for corporate professionals</p>
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
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.price}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4 flex items-center">
                        <Home className="h-4 w-4 mr-2" />
                        {property.location}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
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

      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Premium Amenities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every property comes equipped with modern amenities designed for your comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <amenity.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{amenity.title}</h3>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Our Corporate Stay Solutions?</h2>
            <p className="text-xl text-gray-600">Experience the difference of professional corporate housing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Cost-Effective',
                  description: 'Save up to 40% compared to extended hotel stays with our competitive monthly rates and flexible lease terms.'
                },
                {
                  icon: Clock,
                  title: 'Move-In Ready',
                  description: 'Fully furnished apartments with all essentials. Just bring your suitcase and start living immediately.'
                },
                {
                  icon: Shield,
                  title: 'Verified Properties',
                  description: 'All properties are personally inspected and meet our strict quality and safety standards.'
                },
                {
                  icon: Users,
                  title: 'Dedicated Support',
                  description: '24/7 customer support and local property managers to assist you throughout your stay.'
                }
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-700 ${
                    contentLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                        <benefit.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
                alt="Living Room"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600"
                alt="Kitchen"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600"
                alt="Bedroom"
                className="w-full h-64 object-cover rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600"
                alt="Workspace"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">Simple and transparent process from inquiry to move-in</p>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by professionals from leading companies</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Find Your Perfect Corporate Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you find the ideal accommodation for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/search')}
            >
              Browse All Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Request a Callback
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
