// pages/Contact.tsx
import { useState, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useToast } from '@/hooks/useToast';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageCircle,
  Headphones,
  ArrowRight,
  Loader2
} from 'lucide-react';

export function Contact() {
  const { toast } = useToast();
  const [contentLoaded, setContentLoaded] = useState(false);
  const [status, setStatus] = useState('Submit');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your message has been sent successfully. We will get back to you soon.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setStatus('Submit');
    }
  };

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920',
      title: 'Get In Touch',
      subtitle: 'We\'re here to help you find the perfect accommodation'
    },
    {
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920',
      title: '24/7 Support Available',
      subtitle: 'Our team is ready to assist you anytime, anywhere'
    },
    {
      url: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920',
      title: 'Expert Consultation',
      subtitle: 'Professional guidance for all your housing needs'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8788 800 500',
      subtitle: 'Mon-Sat, 9AM-6PM IST',
      link: 'tel:+918788800500',
      color: 'bg-blue-100 text-blue-600',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 8788 800 500',
      subtitle: '24/7 Quick Response',
      link: 'https://wa.me/918788800500',
      color: 'bg-green-100 text-green-600',
      action: 'Chat Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@corporatehousing.co.in',
      subtitle: 'Response within 24 hours',
      link: 'mailto:info@corporatehousing.co.in',
      color: 'bg-red-100 text-red-600',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Pune, Maharashtra',
      subtitle: 'India',
      link: null,
      color: 'bg-purple-100 text-purple-600',
      action: 'Get Directions'
    }
  ];

  const officeLocations = [
    {
      city: 'Pune',
      address: 'Baner Road, Pune',
      state: 'Maharashtra 411045',
      phone: '+91 8788 800 500',
      email: 'pune@corporatehousing.co.in'
    },
    {
      city: 'Bangalore',
      address: 'Whitefield Main Road',
      state: 'Karnataka 560066',
      phone: '+91 8788 800 500',
      email: 'bangalore@corporatehousing.co.in'
    },
    {
      city: 'Mumbai',
      address: 'Bandra Kurla Complex',
      state: 'Maharashtra 400051',
      phone: '+91 8788 800 500',
      email: 'mumbai@corporatehousing.co.in'
    }
  ];

  const faqs = [
    {
      q: 'What is your typical response time?',
      a: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.'
    },
    {
      q: 'Do you offer property viewing services?',
      a: 'Yes! We offer both virtual tours via video call and in-person property viewings at your convenience.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept credit/debit cards, bank transfers, UPI, digital wallets, and international wire transfers for NRIs.'
    },
    {
      q: 'Can I book properties for long-term stays?',
      a: 'Absolutely! We specialize in both short-term (1 month+) and long-term (6 months+) corporate housing solutions.'
    },
    {
      q: 'Do you provide services for international clients?',
      a: 'Yes, we have extensive experience serving expats and NRIs with remote booking, virtual tours, and international payment options.'
    },
    {
      q: 'Is there a booking fee or commission?',
      a: 'No hidden fees! Our pricing is transparent. You only pay the rental amount and security deposit as agreed.'
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
                      <div className="max-w-3xl text-white animate-slide-up">
                        <Badge className="mb-4 bg-white/20 text-white border-white/30">
                          <Headphones className="h-3 w-3 mr-1" />
                          24/7 Support Available
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8">
                          {slide.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            size="lg"
                            className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl"
                            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8"
                            onClick={() => window.location.href = 'tel:+918788800500'}
                          >
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now
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
      <section className="py-16 bg-white -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer group ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => method.link && (method.link.startsWith('http') ? window.open(method.link, '_blank') : window.location.href = method.link)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{method.title}</h3>
                  <p className="font-semibold text-gray-700 mb-1">{method.details}</p>
                  <p className="text-sm text-gray-500 mb-4">{method.subtitle}</p>
                  {method.link && (
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Form (60%) */}
            <div className={`lg:col-span-3 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <Card className="shadow-xl border-0">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject <span className="text-red-600">*</span>
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Inquiry about corporate housing"
                        className="h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message <span className="text-red-600">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your requirements, preferred location, budget, and move-in date..."
                        className="border-gray-300 focus:border-red-600 focus:ring-red-600 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === 'Sending...'}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-14 text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      {status === 'Sending...' ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-red-600 hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Info (40%) */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              {/* Why Contact Us */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Contact Us?</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: CheckCircle2,
                        title: 'Quick Response',
                        description: 'Get replies within 24 hours from our dedicated team'
                      },
                      {
                        icon: Building2,
                        title: 'Expert Guidance',
                        description: 'Professional consultation for your housing needs'
                      },
                      {
                        icon: Headphones,
                        title: '24/7 Support',
                        description: 'Round-the-clock assistance for urgent matters'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Monday - Friday</span>
                      <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Saturday</span>
                      <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700 font-medium">Sunday</span>
                      <span className="text-red-600 font-semibold">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      <CheckCircle2 className="h-4 w-4 inline mr-2" />
                      Emergency support available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find us in major cities across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {officeLocations.map((location, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{location.city}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{location.address}</p>
                        <p className="text-sm">{location.state}</p>
                      </div>
                    </div>
                    <a href={`tel:${location.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Phone className="h-5 w-5 text-red-600" />
                      <span>{location.phone}</span>
                    </a>
                    <a href={`mailto:${location.email}`} className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Mail className="h-5 w-5 text-red-600" />
                      <span className="text-sm">{location.email}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-7">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              onClick={() => window.location.href = '/faq'}
            >
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to assist you every step of the way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8"
              onClick={() => window.location.href = '/search'}
            >
              Browse Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8"
              onClick={() => window.open('https://wa.me/918788800500', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
