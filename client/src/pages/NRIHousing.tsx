// pages/services/NRIHousing.tsx
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
  Plane,
  IndianRupee,
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
  Video,
  Globe2,
  Building2,
  Bath,
  Maximize,
  Banknote,
  TrendingUp,
  UserCheck,
  Calendar,
  Package,
  Landmark,
  ScrollText,
  KeyRound,
  Camera
} from 'lucide-react';


export function NRIHousing() {
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
      title: 'Welcome Home, NRIs!',
      subtitle: 'Premium housing solutions for Non-Resident Indians'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920',
      title: 'Your Home in India',
      subtitle: 'Investment, vacation, or permanent return - we have you covered'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920',
      title: 'Hassle-Free Property Management',
      subtitle: 'Remote management for NRIs living abroad'
    }
  ];


  // NRI housing properties
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      title: 'NRI-Ready 2BHK Apartment',
      location: 'Whitefield, Bangalore',
      beds: 2,
      baths: 2,
      sqft: 1200,
      price: '₹45,000/month',
      type: 'Rental',
      features: ['Managed', 'Furnished', 'Security']
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      title: 'Luxury 3BHK Villa',
      location: 'Goa',
      beds: 3,
      baths: 3,
      sqft: 1800,
      price: '₹80,000/month',
      type: 'Vacation',
      features: ['Pool', 'Garden', 'Beach']
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      title: 'Premium 4BHK Penthouse',
      location: 'Gurugram',
      beds: 4,
      baths: 4,
      sqft: 2500,
      price: '₹1,20,000/month',
      type: 'Investment',
      features: ['Managed', 'Rental Income', 'Modern']
    },
    {
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      title: 'Family Home 3BHK',
      location: 'Pune',
      beds: 3,
      baths: 2,
      sqft: 1500,
      price: '₹55,000/month',
      type: 'Family Stay',
      features: ['Safe Area', 'Schools', 'Hospitals']
    }
  ];


  // NRI-specific benefits
  const nriBenefits = [
    {
      icon: Wallet,
      title: 'International Payments',
      description: 'Pay via wire transfer, international cards, or NRE/NRO accounts'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'Handle all legal paperwork, rental agreements, and registrations'
    },
    {
      icon: Video,
      title: 'Virtual Property Tours',
      description: 'Explore properties via video calls before booking'
    },
    {
      icon: Shield,
      title: 'Property Management',
      description: 'Full maintenance and management while you\'re abroad'
    },
    {
      icon: UserCheck,
      title: 'Trusted Caretakers',
      description: 'Background-verified staff to manage your property'
    },
    {
      icon: TrendingUp,
      title: 'Investment Opportunities',
      description: 'Properties with rental income potential'
    },
    {
      icon: Calendar,
      title: 'Flexible Duration',
      description: 'Short vacation stays to long-term rentals'
    },
    {
      icon: HeartHandshake,
      title: 'Family Support',
      description: 'Assistance for family members staying in India'
    }
  ];


  // NRI Services
  const nriServices = [
    {
      category: 'For Visiting NRIs',
      icon: Plane,
      color: 'bg-blue-100 text-blue-600',
      services: [
        { icon: Home, name: 'Vacation Rentals', description: 'Short-term stays for visits' },
        { icon: Users, name: 'Family Accommodation', description: 'Housing for your family in India' },
        { icon: Package, name: 'Fully Furnished', description: 'Move-in ready properties' },
        { icon: Calendar, name: 'Flexible Booking', description: 'Book months in advance' }
      ]
    },
    {
      category: 'For Returning NRIs',
      icon: Home,
      color: 'bg-green-100 text-green-600',
      services: [
        { icon: Building2, name: 'Permanent Housing', description: 'Properties for permanent return' },
        { icon: KeyRound, name: 'Immediate Possession', description: 'Ready-to-move-in homes' },
        { icon: Landmark, name: 'Prime Locations', description: 'Near schools, hospitals, offices' },
        { icon: Shield, name: 'Secure Communities', description: 'Gated societies with security' }
      ]
    },
    {
      category: 'For NRI Investors',
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-600',
      services: [
        { icon: IndianRupee, name: 'Rental Income', description: 'Properties with guaranteed returns' },
        { icon: FileText, name: 'Legal Compliance', description: 'All documentation handled' },
        { icon: Video, name: 'Remote Management', description: 'Manage property from abroad' },
        { icon: Banknote, name: 'NRE/NRO Support', description: 'Payment via NRI accounts' }
      ]
    }
  ];


  // Payment options for NRIs
  const paymentOptions = [
    {
      icon: Banknote,
      title: 'NRE/NRO Accounts',
      description: 'Direct payments from your NRI bank accounts'
    },
    {
      icon: Wallet,
      title: 'International Wire Transfer',
      description: 'Swift/bank transfers from any country'
    },
    {
      icon: Globe2,
      title: 'International Cards',
      description: 'Credit/debit cards from any bank'
    },
    {
      icon: IndianRupee,
      title: 'Online Payment Gateways',
      description: 'PayPal, Wise, and other platforms'
    }
  ];


  // Countries with large NRI population
  const nriCountries = [
    { name: 'United States', flag: '🇺🇸', count: 520 },
    { name: 'United Kingdom', flag: '🇬🇧', count: 380 },
    { name: 'Canada', flag: '🇨🇦', count: 290 },
    { name: 'Australia', flag: '🇦🇺', count: 260 },
    { name: 'UAE', flag: '🇦🇪', count: 410 },
    { name: 'Singapore', flag: '🇸🇬', count: 220 },
    { name: 'Saudi Arabia', flag: '🇸🇦', count: 180 },
    { name: 'Other Countries', flag: '🌍', count: 340 }
  ];


  // Process for NRIs
  const process = [
    {
      step: '01',
      title: 'Virtual Consultation',
      description: 'Discuss your needs via video call at your convenient time'
    },
    {
      step: '02',
      title: 'Property Shortlisting',
      description: 'We curate properties matching your requirements and budget'
    },
    {
      step: '03',
      title: 'Virtual/Proxy Tours',
      description: 'Explore via video or we can arrange family visits'
    },
    {
      step: '04',
      title: 'Documentation & Move-In',
      description: 'Complete paperwork remotely and start your stay'
    }
  ];


  // Popular cities for NRIs
  const popularCities = [
    {
      city: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600',
      properties: 120,
      description: 'Tech hub with modern infrastructure',
      highlights: ['IT Jobs', 'Weather', 'International Schools']
    },
    {
      city: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600',
      properties: 85,
      description: 'Retirement and vacation paradise',
      highlights: ['Beaches', 'Peaceful', 'Expat Community']
    },
    {
      city: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600',
      properties: 150,
      description: 'Financial capital and business hub',
      highlights: ['Opportunities', 'Connectivity', 'Healthcare']
    },
    {
      city: 'Delhi NCR',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600',
      properties: 140,
      description: 'National capital with everything',
      highlights: ['Central Location', 'Infrastructure', 'Education']
    }
  ];


  // Testimonials
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'IT Professional, USA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      country: '🇺🇸',
      rating: 5,
      text: 'Perfect service for NRIs! I booked an apartment for my parents from the US. Everything was handled remotely - from virtual tours to documentation. My parents are very happy with the property and service.'
    },
    {
      name: 'Priya Sharma',
      role: 'Doctor, UK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      country: '🇬🇧',
      rating: 5,
      text: 'Returning to India after 15 years was seamless thanks to their NRI services. They understood my needs, showed properties via video, and handled all paperwork. Found my dream home without visiting India!'
    },
    {
      name: 'Amit Patel',
      role: 'Business Owner, UAE',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      country: '🇦🇪',
      rating: 5,
      text: 'Invested in a rental property through them. The property management service is excellent - they handle tenants, maintenance, and send me monthly reports. Great passive income!'
    },
    {
      name: 'Sneha Reddy',
      role: 'Consultant, Singapore',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      country: '🇸🇬',
      rating: 5,
      text: 'Book a vacation home every year for family visits. The booking process is so smooth - I do everything online. The properties are always clean and well-maintained. Highly recommend for NRIs!'
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
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
                          <Globe2 className="h-4 w-4" />
                          NRI HOUSING SOLUTIONS
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
                            Explore Properties
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-black hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
                            Schedule Virtual Tour
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
              Premium Housing Solutions for Non-Resident Indians
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed mb-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Whether you're visiting India, planning to return, or investing in property, we provide comprehensive housing solutions designed specifically for NRIs. Manage everything remotely with our specialized services that understand your unique needs.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              With over 2,600 NRI families served across 40+ countries, we're your trusted partner for housing in India.
            </p>
          </div>
        </div>
      </section>


      {/* NRI Countries Stats */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Serving NRIs Worldwide</h2>
            <p className="text-xl text-gray-600">Trusted by Indian professionals across the globe</p>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {nriCountries.map((country, index) => (
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
                  <p className="text-xs text-gray-500">NRI Families</p>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">NRI-Friendly Properties</h2>
            <p className="text-xl text-gray-600">Curated homes for visiting, investing, or returning NRIs</p>
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
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white">{property.type}</Badge>
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


      {/* NRI Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why NRIs Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Services designed specifically for Non-Resident Indians
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {nriBenefits.map((benefit, index) => (
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


      {/* NRI Services by Category */}
      {nriServices.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-8 w-8" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{category.category}</h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {category.services.map((service, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${category.color} mb-4`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}


      {/* Payment Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">NRI-Friendly Payment Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple convenient ways to pay from anywhere in the world
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {paymentOptions.map((option, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <option.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Popular Cities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Cities for NRIs</h2>
            <p className="text-xl text-gray-600">Top destinations for returning and investing NRIs</p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {popularCities.map((location, index) => (
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works for NRIs</h2>
            <p className="text-xl text-gray-600">Simple remote process from anywhere in the world</p>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What NRIs Say</h2>
            <p className="text-xl text-gray-600">Real experiences from Non-Resident Indians</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Find Your Home in India?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether visiting, returning, or investing - we're here to help you every step of the way
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
              className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Video className="h-5 w-5 mr-2" />
              Schedule Virtual Tour
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
            <a href="mailto:nri@corporatehousing.com" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Mail className="h-5 w-5 text-red-500" />
              <span className="font-semibold">nri@corporatehousing.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
