// pages/services/Housekeeping.tsx
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
  Sparkles,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Shirt,
  Droplets,
  Bed,
  Utensils,
  Bath,
  Home,
  Calendar,
  Shield,
  Star,
  Users,
  Zap,
  Package,
  Trash2,
  Wind,
  Lightbulb,
  Bug,
  Sofa,
  CircleDot,
  AlertCircle
} from 'lucide-react';

export function Housekeeping() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920',
      title: 'Professional Housekeeping Services',
      subtitle: 'Keeping your space spotless and comfortable'
    },
    {
      url: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920',
      title: 'Hygiene & Cleanliness',
      subtitle: 'Maintaining the highest standards of sanitation'
    },
    {
      url: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920',
      title: 'Your Comfort, Our Priority',
      subtitle: 'Regular cleaning for a fresh living environment'
    }
  ];

  // Housekeeping services
  const services = [
    {
      icon: Sparkles,
      title: 'Regular Cleaning',
      description: 'Weekly comprehensive cleaning of your entire unit',
      frequency: 'Weekly',
      included: true,
      details: [
        'Dusting all surfaces',
        'Vacuuming and mopping',
        'Bathroom sanitization',
        'Kitchen cleaning',
        'Trash removal'
      ]
    },
    {
      icon: Bed,
      title: 'Linen Change',
      description: 'Fresh bed linens and towels provided regularly',
      frequency: 'Weekly',
      included: true,
      details: [
        'Bed sheet replacement',
        'Pillowcase change',
        'Fresh towel supply',
        'Duvet cover cleaning',
        'Mattress flipping (monthly)'
      ]
    },
    {
      icon: Shirt,
      title: 'Laundry Service',
      description: 'Washing machine access and laundry facilities',
      frequency: 'On-demand',
      included: true,
      details: [
        'In-unit washing machine',
        'Detergent provided',
        'Drying facilities',
        'Iron and ironing board',
        'Dry cleaning arrangements'
      ]
    },
    {
      icon: Utensils,
      title: 'Kitchen Maintenance',
      description: 'Deep cleaning of kitchen appliances and surfaces',
      frequency: 'Weekly',
      included: true,
      details: [
        'Refrigerator cleaning',
        'Microwave sanitization',
        'Stove and oven cleaning',
        'Cabinet wiping',
        'Dishwashing area cleaning'
      ]
    },
    {
      icon: Bath,
      title: 'Bathroom Deep Clean',
      description: 'Thorough sanitization of all bathroom areas',
      frequency: 'Weekly',
      included: true,
      details: [
        'Toilet sanitization',
        'Shower/tub cleaning',
        'Mirror polishing',
        'Sink and counter cleaning',
        'Floor mopping'
      ]
    },
    {
      icon: Bug,
      title: 'Pest Control',
      description: 'Regular pest control and prevention treatments',
      frequency: 'Monthly',
      included: true,
      details: [
        'Preventive spraying',
        'Pest inspection',
        'Treatment as needed',
        'Safe chemicals used',
        'Follow-up service'
      ]
    },
    {
      icon: Trash2,
      title: 'Waste Management',
      description: 'Daily trash collection and disposal',
      frequency: 'Daily',
      included: true,
      details: [
        'Trash bag replacement',
        'Recycling sorting',
        'Garbage disposal',
        'Compost management',
        'Bin sanitization'
      ]
    },
    {
      icon: Wind,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning of all areas and hard-to-reach spots',
      frequency: 'Monthly',
      included: true,
      details: [
        'Window cleaning',
        'Ceiling fan cleaning',
        'Baseboard wiping',
        'Behind furniture cleaning',
        'Balcony/terrace cleaning'
      ]
    },
    {
      icon: Package,
      title: 'Replenishment',
      description: 'Regular restocking of essential supplies',
      frequency: 'As needed',
      included: true,
      details: [
        'Toiletries supply',
        'Cleaning products',
        'Tissue papers',
        'Trash bags',
        'Air fresheners'
      ]
    }
  ];

  // Service standards
  const standards = [
    {
      icon: Shield,
      title: 'Trained Professionals',
      description: 'Background-verified staff with professional training in housekeeping'
    },
    {
      icon: Sparkles,
      title: 'Quality Products',
      description: 'Eco-friendly and safe cleaning products for all surfaces'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Service timings that work with your schedule'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Checks',
      description: 'Regular inspections to ensure high cleaning standards'
    }
  ];

  // Cleaning schedule
  const schedule = [
    {
      day: 'Monday to Friday',
      tasks: ['Daily trash removal', 'Common area cleaning', 'Quick tidy-up'],
      icon: Calendar
    },
    {
      day: 'Weekly (Your Preferred Day)',
      tasks: ['Complete apartment cleaning', 'Linen change', 'Kitchen deep clean', 'Bathroom sanitization'],
      icon: Sparkles
    },
    {
      day: 'Monthly',
      tasks: ['Deep cleaning', 'Pest control', 'Appliance maintenance', 'Window cleaning'],
      icon: Star
    }
  ];

  // Additional services (on-demand)
  const additionalServices = [
    {
      icon: Shirt,
      title: 'Dry Cleaning Pickup',
      description: 'Arrange pickup and delivery of dry cleaning',
      price: 'On-demand'
    },
    {
      icon: Sofa,
      title: 'Furniture Cleaning',
      description: 'Deep cleaning of sofas, carpets, and upholstery',
      price: 'Extra charge'
    },
    {
      icon: Home,
      title: 'Move-In/Move-Out Cleaning',
      description: 'Comprehensive cleaning for transitions',
      price: 'Extra charge'
    },
    {
      icon: Zap,
      title: 'Emergency Cleaning',
      description: 'Same-day cleaning service for urgent needs',
      price: 'Extra charge'
    },
    {
      icon: Droplets,
      title: 'Water Tank Cleaning',
      description: 'Annual water tank sanitization',
      price: 'Included'
    },
    {
      icon: Wind,
      title: 'AC Filter Cleaning',
      description: 'Regular air conditioner maintenance',
      price: 'Quarterly'
    }
  ];

  // How it works
  const process = [
    {
      step: '01',
      title: 'Schedule Set',
      description: 'Choose your preferred day and time for weekly cleaning'
    },
    {
      step: '02',
      title: 'Professional Team',
      description: 'Trained housekeeping staff arrives at scheduled time'
    },
    {
      step: '03',
      title: 'Thorough Cleaning',
      description: 'Complete cleaning following our checklist'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Supervisor ensures all tasks are completed to standard'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Anjali Verma',
      role: 'Working Professional',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'The housekeeping service is exceptional! My apartment is always spotless when I come home. The staff is professional, punctual, and respectful of my space. Highly recommend!'
    },
    {
      name: 'Rahul Sharma',
      role: 'Corporate Executive',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'As someone with a busy schedule, this service is a lifesaver. Weekly cleaning keeps everything fresh and organized. The quality is consistent and the products used are safe.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Expat Professional',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      rating: 5,
      text: 'Coming from abroad, I appreciate the professional housekeeping service. The team is trustworthy and efficient. My apartment always looks and smells amazing!'
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
                          HOUSEKEEPING SERVICES
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
                            className="border-2 border-white text-black hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => navigate('/contact')}
                          >
                            Request Service
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
              Professional Housekeeping for Your Peace of Mind
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed mb-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Our comprehensive housekeeping services ensure your living space remains clean, hygienic, and comfortable. With regular cleaning schedules and professional staff, you can focus on your work and life while we take care of your home.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              All housekeeping services are included in your rent with no additional charges for regular maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Service Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Service Standards</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets our housekeeping apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {standards.map((standard, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <standard.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{standard.title}</h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Housekeeping Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Comprehensive Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a clean and comfortable living space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {service.frequency}
                      </Badge>
                      {service.included && (
                        <Badge className="ml-2 bg-green-600 text-xs">Included</Badge>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Cleaning Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Regular maintenance to keep your space pristine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-900">{item.day}</h3>
                  <ul className="space-y-3">
                    {item.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CircleDot className="h-4 w-4 text-red-600 flex-shrink-0 mt-1" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extra services available on request
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">Simple process for hassle-free housekeeping</p>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Residents Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied guests</p>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
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
                          className="w-12 h-12 rounded-full object-cover mr-3"
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

      {/* Important Note */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Important Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>All regular housekeeping services are included in your rent at no extra cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>You can reschedule your weekly cleaning up to 24 hours in advance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Additional cleaning requests can be made through your property manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>All cleaning products used are eco-friendly and safe for pets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience Hassle-Free Living</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay and enjoy professional housekeeping services included
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
