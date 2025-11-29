// pages/Sitemap.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  Search,
  Building2,
  Users,
  Phone,
  FileText,
  Shield,
  Cookie,
  ScrollText,
  Map,
  Briefcase,
  Globe2,
  Plane,
  ArrowRight,
  ChevronRight,
  Info,
  HelpCircle,
  MapPin
} from 'lucide-react';


export function Sitemap() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Sitemap structure
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'bg-red-100 text-red-600',
      links: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Search Properties', path: '/search', icon: Search },
        { name: 'About Us', path: '/about', icon: Info },
        { name: 'Contact Us', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'Our Services',
      icon: Briefcase,
      color: 'bg-blue-100 text-blue-600',
      links: [
        { name: 'Corporate Stay Solutions', path: '/services/corporate-stay', icon: Building2 },
        { name: 'Corporate Guest Houses', path: '/services/guest-houses', icon: Home },
        { name: 'Expat Housing', path: '/services/expat-housing', icon: Globe2 },
        { name: 'NRI Housing', path: '/services/nri-housing', icon: Plane },
        { name: 'Furnished Homes', path: '/services/furnished-homes', icon: Home },
        { name: 'Service Apartments', path: '/services/service-apartments', icon: Building2 }
      ]
    },
    {
      title: 'Locations',
      icon: MapPin,
      color: 'bg-green-100 text-green-600',
      links: [
        { name: 'Properties in Pune', path: '/search?location=Pune', icon: MapPin },
        { name: 'Properties in Mumbai', path: '/search?location=Mumbai', icon: MapPin },
        { name: 'Properties in Bangalore', path: '/search?location=Bangalore', icon: MapPin },
        { name: 'Properties in Delhi NCR', path: '/search?location=Delhi', icon: MapPin }
      ]
    },
    {
      title: 'Information',
      icon: FileText,
      color: 'bg-purple-100 text-purple-600',
      links: [
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'How It Works', path: '/how-it-works', icon: Info }
      ]
    },
    {
      title: 'Account & Booking',
      icon: Users,
      color: 'bg-yellow-100 text-yellow-600',
      links: [
        { name: 'Login', path: '/login', icon: Users },
        { name: 'Register', path: '/register', icon: Users },
        { name: 'My Bookings', path: '/bookings', icon: ScrollText },
        { name: 'My Profile', path: '/profile', icon: Users }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: Shield,
      color: 'bg-gray-100 text-gray-600',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', icon: Shield },
        { name: 'Terms of Service', path: '/terms-of-service', icon: FileText },
        { name: 'Cookie Policy', path: '/cookie-policy', icon: Cookie },
        { name: 'Sitemap', path: '/sitemap', icon: Map }
      ]
    }
  ];

  // Quick stats
  const stats = [
    { label: 'Total Pages', value: '25+', icon: FileText },
    { label: 'Service Categories', value: '6', icon: Briefcase },
    { label: 'Major Cities', value: '12+', icon: MapPin },
    { label: 'Help Resources', value: '50+', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen -mt-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920)',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
              <Map className="h-4 w-4" />
              WEBSITE NAVIGATION
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sitemap</h1>
            <p className="text-xl text-gray-300 mb-4">
              Complete overview of all pages and sections on our website. Find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Website Structure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through all available pages and sections. Click on any link to navigate directly.
              </p>
            </div>

            {/* Sitemap Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <Card
                  key={sectionIndex}
                  className={`hover:shadow-xl transition-all duration-700 ${
                    contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${sectionIndex * 100}ms` }}
                >
                  <CardContent className="p-6">
                    {/* Section Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mr-4`}>
                        <section.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    </div>

                    {/* Section Links */}
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <button
                            onClick={() => navigate(link.path)}
                            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="flex items-center">
                              <link.icon className="h-4 w-4 text-gray-400 mr-3 group-hover:text-red-600 transition-colors" />
                              <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                                {link.name}
                              </span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Popular Links</h2>
              <p className="text-lg text-gray-600">
                Most visited pages on our website
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Search Service Apartments', path: '/search', icon: Search, description: 'Browse all available properties' },
                { name: 'Corporate Housing Solutions', path: '/services/corporate-stay', icon: Building2, description: 'Business accommodation options' },
                { name: 'NRI Housing Services', path: '/services/nri-housing', icon: Plane, description: 'Housing for Non-Resident Indians' },
                { name: 'Contact Our Team', path: '/contact', icon: Phone, description: 'Get in touch with us' },
                { name: 'About Corporate Housing', path: '/about', icon: Info, description: 'Learn more about our company' },
                { name: 'Frequently Asked Questions', path: '/faq', icon: HelpCircle, description: 'Find answers to common questions' }
              ].map((link, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(link.path)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <link.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                  <HelpCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-900">Can't Find What You're Looking For?</h2>
                <p className="text-gray-600 mb-6">
                  Use our search feature or contact our support team for assistance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/search')}
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Properties
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-red-600 font-semibold rounded-lg border-2 border-red-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Support
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Sitemap</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This sitemap provides a comprehensive overview of all pages and sections available on Corporate Housing's website. 
                    It's designed to help you quickly find the information you need and understand the structure of our website.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our website offers extensive information about corporate housing solutions, service apartments, NRI housing, 
                    and expat accommodation across major Indian cities including Pune, Mumbai, Bangalore, and Delhi NCR.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    For technical SEO purposes, you can also access our XML sitemap at{' '}
                    <a href="/sitemap.xml" className="text-red-600 hover:underline font-semibold">
                      /sitemap.xml
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Accommodation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our properties or get in touch with our team for personalized assistance
          </p>
          <button
            onClick={() => navigate('/search')}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Start Your Search
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
