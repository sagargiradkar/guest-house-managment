// pages/services/Support.tsx
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
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Headphones,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  AlertCircle,
  Wrench,
  Home,
  Bug,
  Droplets,
  Lightbulb,
  Lock,
  Wifi,
  Wind,
  Flame,
  FileQuestion,
  HeartHandshake,
  Languages,
  MapPin,
  Package,
  Calendar,
  Video,
  Send
} from 'lucide-react';

export function Support() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920',
      title: '24/7 Guest Support',
      subtitle: 'We\'re here for you, anytime, anywhere'
    },
    {
      url: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920',
      title: 'Round-the-Clock Assistance',
      subtitle: 'Expert help whenever you need it'
    },
    {
      url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920',
      title: 'Your Comfort, Our Priority',
      subtitle: 'Dedicated support team at your service'
    }
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us anytime for immediate assistance',
      contact: '+91 8788 800 500',
      available: '24/7',
      color: 'bg-blue-100 text-blue-600',
      action: 'tel:+918788800500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick messages and instant responses',
      contact: '+91 8788 800 500',
      available: '24/7',
      color: 'bg-green-100 text-green-600',
      action: 'https://wa.me/918788800500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed queries and documentation',
      contact: 'support@corporatehousing.com',
      available: 'Response within 2 hours',
      color: 'bg-red-100 text-red-600',
      action: 'mailto:support@corporatehousing.com'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Face-to-face virtual support',
      contact: 'Schedule via phone/WhatsApp',
      available: '9 AM - 9 PM',
      color: 'bg-purple-100 text-purple-600',
      action: null
    }
  ];

  // Support categories
  const supportCategories = [
    {
      category: 'Emergency Services',
      icon: AlertCircle,
      color: 'bg-red-100 text-red-600',
      urgent: true,
      services: [
        { icon: Flame, name: 'Fire Emergency', description: 'Immediate fire safety response' },
        { icon: Droplets, name: 'Water Leakage', description: 'Urgent plumbing emergencies' },
        { icon: Lock, name: 'Lockout Assistance', description: 'Lost keys or locked out help' },
        { icon: Lightbulb, name: 'Power Outage', description: 'Electrical emergency support' },
        { icon: Shield, name: 'Security Issues', description: 'Safety and security concerns' },
        { icon: AlertCircle, name: 'Medical Emergency', description: 'Ambulance and medical assistance' }
      ]
    },
    {
      category: 'Maintenance Requests',
      icon: Wrench,
      color: 'bg-orange-100 text-orange-600',
      urgent: false,
      services: [
        { icon: Wind, name: 'AC Repair', description: 'Air conditioning service' },
        { icon: Wifi, name: 'WiFi Issues', description: 'Internet connectivity problems' },
        { icon: Droplets, name: 'Plumbing', description: 'Tap, sink, and toilet repairs' },
        { icon: Lightbulb, name: 'Electrical', description: 'Lights, switches, and outlets' },
        { icon: Home, name: 'Appliance Repair', description: 'Fridge, microwave, washing machine' },
        { icon: Bug, name: 'Pest Control', description: 'Pest infestation issues' }
      ]
    },
    {
      category: 'General Inquiries',
      icon: FileQuestion,
      color: 'bg-blue-100 text-blue-600',
      urgent: false,
      services: [
        { icon: Package, name: 'Amenities', description: 'Questions about facilities' },
        { icon: Calendar, name: 'Housekeeping', description: 'Cleaning schedule queries' },
        { icon: MapPin, name: 'Local Information', description: 'Area recommendations' },
        { icon: Users, name: 'Guest Relations', description: 'General assistance' },
        { icon: FileQuestion, name: 'Policies', description: 'Rules and regulations' },
        { icon: Package, name: 'Package Delivery', description: 'Mail and courier handling' }
      ]
    }
  ];

  // Response times
  const responseTimes = [
    {
      type: 'Emergency',
      time: 'Immediate',
      description: 'Fire, medical, security issues',
      icon: Zap,
      color: 'text-red-600'
    },
    {
      type: 'Urgent',
      time: '< 30 minutes',
      description: 'Water leaks, lockouts, power issues',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      type: 'High Priority',
      time: '< 2 hours',
      description: 'AC, WiFi, appliance repairs',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      type: 'Standard',
      time: '< 24 hours',
      description: 'General maintenance and inquiries',
      icon: Clock,
      color: 'text-green-600'
    }
  ];

  // Support features
  const features = [
    {
      icon: Clock,
      title: 'Always Available',
      description: 'Our support team is online 24/7, 365 days a year, including holidays'
    },
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Get help in English, Hindi, and regional languages'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick acknowledgment and fast resolution of your concerns'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Trained professionals who understand your needs'
    },
    {
      icon: Shield,
      title: 'Priority Access',
      description: 'Long-term residents get dedicated account managers'
    },
    {
      icon: HeartHandshake,
      title: 'Guest-First Approach',
      description: 'Your comfort and satisfaction are our top priorities'
    }
  ];

  // How to reach us
  const reachProcess = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Call, WhatsApp, or email us with your issue or query'
    },
    {
      step: '02',
      title: 'Issue Logged',
      description: 'We immediately log your request and assign priority'
    },
    {
      step: '03',
      title: 'Expert Dispatch',
      description: 'Appropriate team member is dispatched to help you'
    },
    {
      step: '04',
      title: 'Problem Solved',
      description: 'Issue resolved and feedback collected for quality'
    }
  ];

  // Common issues & solutions
  const commonIssues = [
    {
      issue: 'WiFi not working',
      solution: 'Try restarting the router. If issue persists, call us immediately.',
      icon: Wifi
    },
    {
      issue: 'AC not cooling',
      solution: 'Check if filters are clean. Set temperature to 18°C and wait. Contact us if still not working.',
      icon: Wind
    },
    {
      issue: 'Water pressure low',
      solution: 'Check if main valve is fully open. Contact us if issue continues.',
      icon: Droplets
    },
    {
      issue: 'Key lost',
      solution: 'Call us immediately for lockout assistance. Duplicate keys available.',
      icon: Lock
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Priya Mehta',
      role: 'Business Consultant',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'Had an AC issue at 2 AM and the support team had someone at my door within 30 minutes! Incredible service and very professional. This is why I always choose Corporate Housing.'
    },
    {
      name: 'John Smith',
      role: 'Expat Professional',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'The 24/7 support is a lifesaver! As someone new to India, having English-speaking support available anytime gives me peace of mind. They helped me with everything from WiFi to local recommendations.'
    },
    {
      name: 'Amit Kumar',
      role: 'IT Professional',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      text: 'Quick response time and efficient problem-solving. Had a plumbing emergency on Sunday evening and it was fixed within an hour. The support team is very professional and courteous.'
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
                          <Clock className="h-4 w-4" />
                          24/7 SUPPORT AVAILABLE
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
                            onClick={() => window.location.href = 'tel:+918788800500'}
                          >
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-black hover:bg-white hover:text-gray-900 font-semibold px-8"
                            onClick={() => window.open('https://wa.me/918788800500', '_blank')}
                          >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            WhatsApp Us
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

      {/* Contact Methods - Quick Access */}
      <section className="py-16 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => method.action && (method.action.startsWith('http') ? window.open(method.action, '_blank') : window.location.href = method.action)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} mb-4`}>
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  <p className="font-semibold text-gray-900 mb-2">{method.contact}</p>
                  <Badge variant="secondary" className="text-xs">
                    {method.available}
                  </Badge>
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
              Always Here When You Need Us
            </h2>
            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Whether it's an emergency at 3 AM or a simple question at noon, our dedicated support team is available 24/7 to ensure your stay is comfortable and hassle-free. From maintenance requests to local recommendations, we're just a phone call away.
            </p>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Response Times</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick action when it matters most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {responseTimes.map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <item.icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
                  <p className={`text-3xl font-bold mb-3 ${item.color}`}>{item.time}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      {supportCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 ${catIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-8 w-8" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{category.category}</h2>
              {category.urgent && (
                <Badge className="bg-red-600 text-white">Urgent Response Available</Badge>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {category.services.map((service, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-4`}>
                      <service.icon className="h-6 w-6" />
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Our Support Stands Out</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exceptional service that makes a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How We Handle Your Request</h2>
            <p className="text-xl text-gray-600">Streamlined process for quick resolution</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {reachProcess.map((item, index) => (
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
                  {index < reachProcess.length - 1 && (
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

      {/* Common Issues Quick Fix */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Quick Troubleshooting</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Try these solutions before calling us (but we're always here if needed!)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {commonIssues.map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.issue}</h3>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Guests Say</h2>
            <p className="text-xl text-gray-600">Real experiences with our support team</p>
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

      {/* Emergency Contact Card */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-red-200 bg-red-50">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white mb-4">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">In Case of Emergency</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  For immediate emergencies like fire, medical issues, or security concerns, call us right away. Our team will respond immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
                    onClick={() => window.location.href = 'tel:+918788800500'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency Line
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8"
                    onClick={() => window.open('https://wa.me/918788800500', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Emergency
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">We're Here for You</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience peace of mind with our 24/7 support. Book your stay today!
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
              Contact Support Now
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
            <a href="mailto:support@corporatehousing.com" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Mail className="h-5 w-5 text-red-500" />
              <span className="font-semibold">support@corporatehousing.com</span>
            </a>
            <a href="https://wa.me/918788800500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <MessageCircle className="h-5 w-5 text-red-500" />
              <span className="font-semibold">WhatsApp Support</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
