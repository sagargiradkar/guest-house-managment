// pages/FAQ.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Search,
  HelpCircle,
  Phone,
  Mail,
  BookOpen,
  CreditCard,
  Home,
  Calendar,
  Shield,
  Users,
  Clock,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Star
} from 'lucide-react';

export function FAQ() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920',
      title: 'Got Questions?',
      subtitle: 'Find answers to all your queries about our services'
    },
    {
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920',
      title: 'We\'re Here to Help',
      subtitle: 'Comprehensive guide to booking and managing your stay'
    },
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920',
      title: '24/7 Support Available',
      subtitle: 'Quick answers to help you make informed decisions'
    }
  ];

  // FAQ Categories
  const categories = [
    { id: 'all', name: 'All Questions', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { id: 'booking', name: 'Booking & Reservations', icon: Calendar, color: 'bg-green-100 text-green-600' },
    { id: 'payment', name: 'Payment & Pricing', icon: CreditCard, color: 'bg-purple-100 text-purple-600' },
    { id: 'property', name: 'Property & Amenities', icon: Home, color: 'bg-orange-100 text-orange-600' },
    { id: 'policies', name: 'Policies & Terms', icon: Shield, color: 'bg-red-100 text-red-600' },
    { id: 'account', name: 'Account & Support', icon: Users, color: 'bg-indigo-100 text-indigo-600' }
  ];

  // FAQ Data
  const faqs = [
    {
      category: 'booking',
      question: 'How do I make a booking?',
      answer: 'Making a booking is simple! Browse our available properties, select your desired dates, choose a property, and click "Book Now". You\'ll be guided through a secure checkout process where you can review your booking details and make payment. Once confirmed, you\'ll receive an email confirmation with all the details.',
      popular: true
    },
    {
      category: 'booking',
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking through your account dashboard. Go to "My Bookings", select the booking you want to change, and click on "Modify" or "Cancel". Please note that cancellation policies vary by property. Free cancellation is typically available up to 48 hours before check-in, subject to the property\'s specific terms.',
      popular: true
    },
    {
      category: 'booking',
      question: 'What is the minimum and maximum booking duration?',
      answer: 'We offer flexible booking durations to suit your needs. The minimum stay is typically 1 night for short-term bookings. For corporate housing, we specialize in extended stays ranging from 1 week to 12+ months. Long-term bookings often qualify for special discounted rates.'
    },
    {
      category: 'booking',
      question: 'Do I need to create an account to book?',
      answer: 'While you can browse properties without an account, creating one makes the booking process faster and allows you to track your reservations, save favorite properties, and receive personalized recommendations. Registration is free and takes less than a minute.'
    },
    {
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards (Visa, MasterCard, American Express), bank transfers, and digital payment methods like PayPal, Google Pay, and PhonePe. All payments are processed through secure, encrypted channels to protect your financial information.',
      popular: true
    },
    {
      category: 'payment',
      question: 'When will I be charged for my booking?',
      answer: 'Payment is processed immediately upon booking confirmation. For long-term stays (30+ days), we offer flexible payment plans where you can pay in installments. The first payment (typically 30% deposit) is due at booking, with the balance payable before check-in or in agreed monthly installments.'
    },
    {
      category: 'payment',
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in transparent pricing. The total amount shown during checkout includes all applicable taxes and service fees. There are no hidden charges. The only additional costs you might incur are optional services like extra housekeeping, late checkout, or damages beyond normal wear and tear.',
      popular: true
    },
    {
      category: 'payment',
      question: 'Do you offer corporate billing or invoices?',
      answer: 'Yes, we provide comprehensive corporate billing services. We can invoice your company directly and provide detailed receipts with GST for expense reimbursement. Contact our corporate team to set up billing arrangements tailored to your company\'s requirements.'
    },
    {
      category: 'property',
      question: 'Are all properties fully furnished?',
      answer: 'Yes, all our properties come fully furnished and equipped for comfortable living. This includes furniture, kitchen appliances, cookware, linens, towels, WiFi, TV, and basic toiletries. Each property listing details the specific amenities available.',
      popular: true
    },
    {
      category: 'property',
      question: 'Is WiFi included?',
      answer: 'Yes, high-speed WiFi is included in all our properties at no additional cost. We understand the importance of reliable internet for remote work and staying connected. If you experience any connectivity issues, our support team is available 24/7 to assist.'
    },
    {
      category: 'property',
      question: 'Do you provide housekeeping services?',
      answer: 'Yes, housekeeping is included for all bookings. For short stays (under 7 days), we provide pre-arrival cleaning. For longer stays, we offer weekly housekeeping services including cleaning, linen changes, and basic maintenance. Daily housekeeping is available for an additional fee.'
    },
    {
      category: 'property',
      question: 'Are pets allowed?',
      answer: 'Pet policies vary by property. Some properties are pet-friendly while others are not. You can filter for pet-friendly properties during your search. Pet-friendly properties may require an additional deposit and have specific rules regarding pet size and breed.'
    },
    {
      category: 'property',
      question: 'Is parking available?',
      answer: 'Most of our properties include dedicated parking spaces. This information is clearly stated in each property listing. Some properties in busy city centers may offer nearby parking arrangements. Check the property details or contact us for specific parking information.'
    },
    {
      category: 'policies',
      question: 'What is your cancellation policy?',
      answer: 'Our standard cancellation policy allows free cancellation up to 48 hours before check-in for a full refund. Cancellations made within 48 hours of check-in are subject to a one-night charge. However, policies may vary by property and booking type. Long-term bookings may have different terms, which will be clearly stated during booking.',
      popular: true
    },
    {
      category: 'policies',
      question: 'What is the check-in and check-out time?',
      answer: 'Standard check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability and possible additional charges. Contact the property directly or through our customer service to arrange flexible timings.'
    },
    {
      category: 'policies',
      question: 'What happens if I need to extend my stay?',
      answer: 'You can extend your stay subject to availability. Log into your account, go to "My Bookings", and select "Extend Stay". The system will check availability and show you the rates for the extended period. We recommend requesting extensions at least 48 hours before your scheduled checkout.'
    },
    {
      category: 'policies',
      question: 'What is your damage policy?',
      answer: 'We expect guests to treat properties with care. Normal wear and tear is acceptable, but any damages beyond this will be charged to the guest. A security deposit may be held during your stay and refunded after checkout inspection. We recommend reporting any pre-existing damages immediately upon check-in.'
    },
    {
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page. Enter your registered email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password. If you don\'t receive the email within 5 minutes, check your spam folder or contact support.'
    },
    {
      category: 'account',
      question: 'Can I update my booking details after confirmation?',
      answer: 'Some details like guest name and contact information can be updated through your account dashboard. However, changes to dates, property, or number of guests may be subject to availability and price adjustments. Contact our support team for assistance with major changes.'
    },
    {
      category: 'account',
      question: 'How do I contact customer support?',
      answer: 'We offer 24/7 customer support through multiple channels: call us at +91 8788 800 500, email us at info@corporatehousing.co.in, use the live chat feature on our website, or submit a request through your account dashboard. We typically respond within 2 hours during business hours and 4-6 hours outside business hours.',
      popular: true
    },
    {
      category: 'account',
      question: 'Do you offer property viewing before booking?',
      answer: 'Yes, we offer both virtual and in-person property viewings. Virtual tours are available for most properties through our website. For in-person viewings, contact us at least 24 hours in advance to schedule an appointment. This service is particularly recommended for long-term bookings.'
    }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Popular FAQs
  const popularFAQs = faqs.filter(faq => faq.popular);

  // Group FAQs by category for display
  const groupedFAQs = categories
    .filter(cat => cat.id !== 'all')
    .map(cat => ({
      ...cat,
      questions: filteredFAQs.filter(faq => faq.category === cat.id)
    }))
    .filter(cat => cat.questions.length > 0);

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
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                          <HelpCircle className="h-4 w-4" />
                          HELP CENTER
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                          {slide.subtitle}
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl relative">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 pr-4 h-14 text-lg bg-white border-0 shadow-xl focus:ring-2 focus:ring-blue-600"
                          />
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

      {/* Category Cards */}
      <section className="py-16 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-700 hover:-translate-y-2 ${
                  activeCategory === category.id ? 'shadow-2xl ring-2 ring-blue-600' : 'hover:shadow-xl'
                } ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setActiveCategory(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-3`}>
                    {/* ategory.icon className="h-6 w-6" /> */}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {activeCategory === 'all' && !searchQuery && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                <TrendingUp className="h-3 w-3 mr-1" />
                Most Asked
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to our most frequently asked questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {popularFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`popular-${index}`}>
                        <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                          <div className="flex items-start gap-3">
                            <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                            <span className="font-semibold">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {searchQuery && (
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                Found <span className="font-bold text-blue-600">{filteredFAQs.length}</span> result{filteredFAQs.length !== 1 ? 's' : ''} for "<span className="font-semibold">{searchQuery}</span>"
                {filteredFAQs.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-4 text-blue-600 hover:text-blue-700"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </Button>
                )}
              </p>
            </div>
          )}

          {filteredFAQs.length === 0 ? (
            <Card className="text-center py-16 shadow-xl">
              <CardContent>
                <HelpCircle className="h-20 w-20 mx-auto mb-6 text-gray-300" />
                <h3 className="text-3xl font-bold text-gray-900 mb-3">No results found</h3>
                <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
                  We couldn't find any questions matching your search. Try different keywords or browse by category.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setSearchQuery('')} size="lg">
                    <Search className="mr-2 h-5 w-5" />
                    Clear Search
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/contact')} size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : activeCategory === 'all' && !searchQuery ? (
            // Display by category when "All Questions" is selected
            <div className="space-y-8">
              {groupedFAQs.map((category, catIndex) => (
                <Card
                  key={category.id}
                  className={`shadow-xl border-0 transition-all duration-700 ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${catIndex * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6 pb-6 border-b">
                      <div className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center mr-4`}>
                        {/* ategory.icon className="h-7 w-7" /> */}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                        <p className="text-gray-600">{category.questions.length} questions</p>
                      </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${catIndex}-${index}`}>
                          <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                            <span className="font-semibold pr-4">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Display filtered category or search results
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                {activeCategory !== 'all' && (
                  <div className="flex items-center mb-6 pb-6 border-b">
                    <div className={`w-14 h-14 rounded-full ${categories.find(c => c.id === activeCategory)?.color} flex items-center justify-center mr-4`}>
                      {categories.find(c => c.id === activeCategory)?.icon && 
                        React.createElement(categories.find(c => c.id === activeCategory)!.icon, { className: "h-7 w-7" })
                      }
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {categories.find(c => c.id === activeCategory)?.name}
                      </h2>
                      <p className="text-gray-600">{filteredFAQs.length} questions</p>
                    </div>
                  </div>
                )}
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                        <span className="font-semibold pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Total Questions', value: faqs.length, icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
              { label: 'Categories', value: categories.length - 1, icon: HelpCircle, color: 'bg-green-100 text-green-600' },
              { label: 'Avg Response', value: '2 hrs', icon: Clock, color: 'bg-purple-100 text-purple-600' },
              { label: 'Satisfaction', value: '98%', icon: Sparkles, color: 'bg-orange-100 text-orange-600' }
            ].map((stat, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} mb-3`}>
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

      {/* Still Have Questions? CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly customer support team is here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 transition-all hover:scale-105"
              onClick={() => window.location.href = 'tel:+918788800500'}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call +91 8788 800 500
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 transition-all hover:scale-105"
              onClick={() => window.open('https://wa.me/918788800500', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Helpful Resources</h2>
            <p className="text-xl text-gray-600">
              Explore our guides and resources for more information
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Booking Guide',
                description: 'Step-by-step guide to booking your perfect property',
                icon: Calendar,
                color: 'bg-green-100 text-green-600'
              },
              {
                title: 'Payment Guide',
                description: 'Learn about our secure payment options and methods',
                icon: CreditCard,
                color: 'bg-purple-100 text-purple-600'
              },
              {
                title: 'Property Standards',
                description: 'What to expect from our verified properties',
                icon: Home,
                color: 'bg-orange-100 text-orange-600'
              }
            ].map((resource, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 cursor-pointer hover:-translate-y-1 group ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => navigate('/search')}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${resource.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <resource.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
