// pages/services/Amenities.tsx
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
  Wifi,
  Tv,
  Wind,
  Coffee,
  Utensils,
  Car,
  Shield,
  Dumbbell,
  Waves,
  Briefcase,
  Users,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Bed,
  Bath,
  Sparkles,
  Refrigerator,
  Shirt,
  UtensilsCrossed,
  Droplets,
  Lightbulb,
  Lock,
  Camera,
  Zap,
  Home,
  Trees,
  Baby,
  PawPrint,
  Accessibility,
  Globe,
  Headphones,
  Newspaper,
  ShoppingBag,
  Bike
} from 'lucide-react';

export function Amenities() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920',
      title: 'Premium Amenities',
      subtitle: 'Everything you need for a comfortable stay'
    },
    {
      url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920',
      title: 'World-Class Facilities',
      subtitle: 'Modern conveniences at your fingertips'
    },
    {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920',
      title: 'Comfort & Convenience',
      subtitle: 'Thoughtfully designed for your lifestyle'
    }
  ];

  // Amenity categories
  const amenityCategories = [
    {
      category: 'In-Room Amenities',
      icon: Bed,
      color: 'bg-blue-100 text-blue-600',
      description: 'Comfort and convenience in every room',
      amenities: [
        { icon: Wifi, name: 'High-Speed WiFi', description: 'Complimentary wireless internet' },
        { icon: Tv, name: 'Smart TV', description: '43" LED with streaming services' },
        { icon: Wind, name: 'Air Conditioning', description: 'Individual climate control' },
        { icon: Bed, name: 'Premium Bedding', description: 'Luxury linens and mattress' },
        { icon: Bath, name: 'Modern Bathroom', description: 'Hot water and toiletries' },
        { icon: Refrigerator, name: 'Mini Refrigerator', description: 'Keep your drinks cold' },
        { icon: Coffee, name: 'Tea/Coffee Maker', description: 'Fresh beverages anytime' },
        { icon: Lightbulb, name: 'Work Desk', description: 'Dedicated workspace with lamp' },
        { icon: Lock, name: 'Electronic Safe', description: 'Secure your valuables' },
        { icon: Droplets, name: 'Water Heater', description: 'Hot water 24/7' },
        { icon: Shirt, name: 'Wardrobe', description: 'Spacious storage space' },
        { icon: Phone, name: 'Intercom', description: 'Direct communication' }
      ]
    },
    {
      category: 'Kitchen & Dining',
      icon: Utensils,
      color: 'bg-green-100 text-green-600',
      description: 'Fully equipped for your culinary needs',
      amenities: [
        { icon: UtensilsCrossed, name: 'Modular Kitchen', description: 'Modern cooking facilities' },
        { icon: Refrigerator, name: 'Refrigerator', description: 'Double door with freezer' },
        { icon: Zap, name: 'Microwave Oven', description: 'Quick heating solutions' },
        { icon: Utensils, name: 'Gas Stove', description: 'Multi-burner cooktop' },
        { icon: Droplets, name: 'Water Purifier', description: 'Clean drinking water' },
        { icon: UtensilsCrossed, name: 'Cookware Set', description: 'Pots, pans, and utensils' },
        { icon: Utensils, name: 'Crockery & Cutlery', description: 'Complete dining set' },
        { icon: Coffee, name: 'Kitchen Appliances', description: 'Toaster, kettle, mixer' }
      ]
    },
    {
      category: 'Building Facilities',
      icon: Home,
      color: 'bg-purple-100 text-purple-600',
      description: 'Shared amenities for all residents',
      amenities: [
        { icon: Dumbbell, name: 'Fitness Center', description: 'Fully equipped gym' },
        { icon: Waves, name: 'Swimming Pool', description: 'Temperature controlled' },
        { icon: Trees, name: 'Landscaped Gardens', description: 'Green outdoor spaces' },
        { icon: Users, name: 'Community Hall', description: 'Event and meeting space' },
        { icon: Briefcase, name: 'Business Center', description: 'Work-friendly facilities' },
        { icon: Car, name: 'Covered Parking', description: 'Dedicated parking spots' },
        { icon: Zap, name: 'Power Backup', description: '24/7 electricity supply' },
        { icon: Droplets, name: 'Water Supply', description: 'Continuous water backup' }
      ]
    },
    {
      category: 'Security & Safety',
      icon: Shield,
      color: 'bg-red-100 text-red-600',
      description: 'Your safety is our priority',
      amenities: [
        { icon: Shield, name: '24/7 Security', description: 'Trained security personnel' },
        { icon: Camera, name: 'CCTV Surveillance', description: 'Complete coverage' },
        { icon: Lock, name: 'Gated Community', description: 'Restricted access' },
        { icon: Zap, name: 'Fire Safety', description: 'Alarms and extinguishers' },
        { icon: Phone, name: 'Emergency Contact', description: 'Round-the-clock support' },
        { icon: Lock, name: 'Digital Door Locks', description: 'Keyless entry system' }
      ]
    },
    {
      category: 'Housekeeping & Maintenance',
      icon: Sparkles,
      color: 'bg-yellow-100 text-yellow-600',
      description: 'Keep your space pristine',
      amenities: [
        { icon: Sparkles, name: 'Regular Cleaning', description: 'Weekly housekeeping' },
        { icon: Shirt, name: 'Laundry Service', description: 'Washing machine available' },
        { icon: Sparkles, name: 'Pest Control', description: 'Periodic maintenance' },
        { icon: Zap, name: 'Repair Service', description: 'Quick maintenance response' },
        { icon: Droplets, name: 'Plumbing Service', description: 'Emergency assistance' },
        { icon: Lightbulb, name: 'Electrical Service', description: 'Professional support' }
      ]
    },
    {
      category: 'Additional Services',
      icon: Globe,
      color: 'bg-indigo-100 text-indigo-600',
      description: 'Extra conveniences for your comfort',
      amenities: [
        { icon: Baby, name: 'Child-Friendly', description: 'Safe for families with kids' },
        { icon: PawPrint, name: 'Pet-Friendly', description: 'Selected properties allow pets' },
        { icon: Accessibility, name: 'Wheelchair Access', description: 'Accessible facilities' },
        { icon: Bike, name: 'Bicycle Storage', description: 'Secure bike parking' },
        { icon: ShoppingBag, name: 'Nearby Amenities', description: 'Shops and restaurants' },
        { icon: Newspaper, name: 'Package Reception', description: 'Mail and courier handling' }
      ]
    }
  ];

  // Premium features showcase
  const premiumFeatures = [
    {
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      title: 'Modern Fitness Center',
      description: 'State-of-the-art equipment for your workout routine'
    },
    {
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800',
      title: 'Swimming Pool',
      description: 'Relax and unwind in our temperature-controlled pool'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      title: 'Business Center',
      description: 'Professional workspace with high-speed internet'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      title: 'Landscaped Gardens',
      description: 'Beautiful outdoor spaces for relaxation'
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
                          AMENITIES & FACILITIES
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
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
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

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 text-gray-900 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              World-Class Amenities for Your Comfort
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Our properties are thoughtfully designed with premium amenities and modern facilities to ensure your stay is comfortable, convenient, and memorable. From in-room luxuries to building-wide facilities, we've got everything covered.
            </p>
          </div>
        </div>
      </section>

      {/* Amenity Categories */}
      {amenityCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 ${catIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${catIndex * 100}ms` }}>
              <div className="inline-flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center`}>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{category.category}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {category.amenities.map((amenity, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 group ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${catIndex * 100 + index * 50}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <amenity.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{amenity.name}</h3>
                    <p className="text-sm text-gray-600">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Premium Features Carousel */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Facilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our premium amenities through beautiful imagery
            </p>
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
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {premiumFeatures.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-transparent border-white/20">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-200">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white" />
          </Carousel>
        </div>
      </section>

      {/* Why Our Amenities Matter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Our Amenities Matter</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We go beyond the basics to enhance your living experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: CheckCircle2,
                title: 'Quality Assurance',
                description: 'All amenities are regularly maintained and tested for optimal performance'
              },
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Security and safety features are installed and monitored 24/7'
              },
              {
                icon: Sparkles,
                title: 'Always Available',
                description: 'Most amenities are accessible round-the-clock for your convenience'
              }
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience Premium Living</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy all these world-class amenities
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
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 transition-all hover:scale-105"
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
