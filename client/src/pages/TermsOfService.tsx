// pages/TermsOfService.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FileText,
  Scale,
  AlertTriangle,
  ShieldCheck,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Download,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Users,
  CreditCard,
  Home,
  Lock
} from 'lucide-react';


export function TermsOfService() {
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Table of contents
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'services', title: 'Description of Services' },
    { id: 'user-account', title: 'User Accounts' },
    { id: 'bookings', title: 'Bookings and Reservations' },
    { id: 'payments', title: 'Payments and Pricing' },
    { id: 'cancellation', title: 'Cancellation Policy' },
    { id: 'user-conduct', title: 'User Conduct' },
    { id: 'property-rules', title: 'Property Rules' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'intellectual', title: 'Intellectual Property' },
    { id: 'disputes', title: 'Dispute Resolution' },
    { id: 'termination', title: 'Termination' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' }
  ];

  // Key terms highlights
  const highlights = [
    {
      icon: Scale,
      title: 'Legal Agreement',
      description: 'Binding contract between you and Corporate Housing'
    },
    {
      icon: ShieldCheck,
      title: 'Your Rights',
      description: 'Clear understanding of your rights and responsibilities'
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      description: 'Transparent pricing and payment policies'
    },
    {
      icon: AlertTriangle,
      title: 'Important Notices',
      description: 'Key terms highlighted for your attention'
    }
  ];

  return (
    <div className="min-h-screen -mt-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920)',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
              <FileText className="h-4 w-4" />
              LEGAL AGREEMENT
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-4">
              Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: November 29, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Highlights */}
      <section className="py-16 bg-white -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Table of Contents - Sticky Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-red-600" />
                      Contents
                    </h3>
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                            activeSection === section.id
                              ? 'bg-red-50 text-red-600 font-semibold'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-red-600 text-red-600 hover:bg-red-50"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Terms Content */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">
                      
                      {/* Acceptance of Terms */}
                      <section id="acceptance" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            1
                          </div>
                          Acceptance of Terms
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          By accessing and using Corporate Housing's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations.
                        </p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-yellow-800">
                              <strong>Important:</strong> If you do not agree with any part of these terms, you must not use our services.
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          These terms apply to all visitors, users, and others who access or use our services, including but not limited to guests, property owners, and corporate clients.
                        </p>
                      </section>

                      {/* Description of Services */}
                      <section id="services" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            2
                          </div>
                          Description of Services
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          Corporate Housing provides a platform for booking service apartments, corporate housing, and guest houses. Our services include:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <Home className="h-6 w-6 text-red-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Property Listings</h4>
                            <p className="text-sm text-gray-600">Browse and book verified properties</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <Users className="h-6 w-6 text-red-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Booking Management</h4>
                            <p className="text-sm text-gray-600">Manage reservations and stays</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <CreditCard className="h-6 w-6 text-red-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Payment Processing</h4>
                            <p className="text-sm text-gray-600">Secure online payment options</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <ShieldCheck className="h-6 w-6 text-red-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Customer Support</h4>
                            <p className="text-sm text-gray-600">24/7 assistance and support</p>
                          </div>
                        </div>
                      </section>

                      {/* User Accounts */}
                      <section id="user-account" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            3
                          </div>
                          User Accounts
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          To access certain features, you may need to create an account. You agree to:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Provide accurate, current, and complete information</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Maintain the security of your password and account</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Accept responsibility for all activities under your account</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Notify us immediately of any unauthorized use</span>
                          </li>
                        </ul>
                        <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
                          <div className="flex">
                            <XCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-800">
                              We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* Bookings and Reservations */}
                      <section id="bookings" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            4
                          </div>
                          Bookings and Reservations
                        </h2>
                        <div className="space-y-4">
                          <div className="border-l-4 border-red-600 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Booking Confirmation</h3>
                            <p className="text-gray-600">All bookings are subject to availability and confirmation. A booking is confirmed only when you receive a confirmation email from us.</p>
                          </div>
                          <div className="border-l-4 border-red-600 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Check-in Requirements</h3>
                            <p className="text-gray-600">Valid government-issued ID and booking confirmation are required at check-in. Early check-in or late checkout may incur additional charges.</p>
                          </div>
                          <div className="border-l-4 border-red-600 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Minimum Stay</h3>
                            <p className="text-gray-600">Some properties may require a minimum stay duration. Please check property details before booking.</p>
                          </div>
                        </div>
                      </section>

                      {/* Payments and Pricing */}
                      <section id="payments" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            5
                          </div>
                          Payments and Pricing
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          All prices are listed in Indian Rupees (INR) unless otherwise stated. Payment terms include:
                        </p>
                        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-blue-600 mb-4">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900">Payment Methods</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Credit/Debit Cards (Visa, Mastercard, RuPay)</span>
                            </li>
                            <li className="flex items-start">
                              <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">UPI and Digital Wallets</span>
                            </li>
                            <li className="flex items-start">
                              <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Bank Transfer (for corporate bookings)</span>
                            </li>
                            <li className="flex items-start">
                              <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">International Cards (for NRI customers)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Additional Charges</h4>
                          <p className="text-sm text-gray-600">Security deposits, taxes, and service charges may apply. All fees will be clearly disclosed before payment.</p>
                        </div>
                      </section>

                      {/* Cancellation Policy */}
                      <section id="cancellation" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            6
                          </div>
                          Cancellation Policy
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          Cancellation policies vary by property. Standard cancellation terms:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Flexible</h4>
                            <p className="text-sm text-green-800 mb-2">Cancel up to 24 hours before check-in</p>
                            <p className="text-xs text-green-700">100% refund</p>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                            <h4 className="font-semibold text-yellow-900 mb-2">Moderate</h4>
                            <p className="text-sm text-yellow-800 mb-2">Cancel up to 7 days before check-in</p>
                            <p className="text-xs text-yellow-700">50% refund within 48 hours</p>
                          </div>
                          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2">Strict</h4>
                            <p className="text-sm text-red-800 mb-2">Cancel up to 14 days before check-in</p>
                            <p className="text-xs text-red-700">No refund after 7 days</p>
                          </div>
                        </div>
                      </section>

                      {/* User Conduct */}
                      <section id="user-conduct" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            7
                          </div>
                          User Conduct
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          You agree not to engage in the following prohibited activities:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Violate any laws or regulations</span>
                          </div>
                          <div className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Damage property or amenities</span>
                          </div>
                          <div className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Disturb other guests or neighbors</span>
                          </div>
                          <div className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Sublet or transfer your booking without permission</span>
                          </div>
                          <div className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Use the platform for fraudulent purposes</span>
                          </div>
                        </div>
                      </section>

                      {/* Property Rules */}
                      <section id="property-rules" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            8
                          </div>
                          Property Rules
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          Each property may have specific house rules that you must follow. Common rules include:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">No Smoking:</span>
                                <span className="text-gray-600"> Smoking is prohibited in most properties</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Pets:</span>
                                <span className="text-gray-600"> Check property details for pet policy</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Quiet Hours:</span>
                                <span className="text-gray-600"> Typically 10 PM to 8 AM</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Guest Limit:</span>
                                <span className="text-gray-600"> Maximum occupancy must be respected</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </section>

                      {/* Limitation of Liability */}
                      <section id="liability" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            9
                          </div>
                          Limitation of Liability
                        </h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
                          <p className="text-gray-700 leading-relaxed mb-3">
                            To the maximum extent permitted by law, Corporate Housing shall not be liable for:
                          </p>
                          <ul className="space-y-2">
                            <li className="text-sm text-gray-700">• Indirect, incidental, or consequential damages</li>
                            <li className="text-sm text-gray-700">• Loss of profits, data, or business opportunities</li>
                            <li className="text-sm text-gray-700">• Actions or omissions of third-party property owners</li>
                            <li className="text-sm text-gray-700">• Force majeure events beyond our control</li>
                          </ul>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Our total liability shall not exceed the amount you paid for the specific booking in question.
                        </p>
                      </section>

                      {/* Intellectual Property */}
                      <section id="intellectual" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            10
                          </div>
                          Intellectual Property
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          All content on our platform, including text, graphics, logos, images, and software, is the property of Corporate Housing or its licensors and is protected by intellectual property laws.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          You may not copy, reproduce, distribute, or create derivative works without our express written permission.
                        </p>
                      </section>

                      {/* Dispute Resolution */}
                      <section id="disputes" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            11
                          </div>
                          Dispute Resolution
                        </h2>
                        <div className="space-y-4">
                          <p className="text-gray-600 leading-relaxed">
                            In the event of any dispute, you agree to first attempt to resolve it through good faith negotiations with us.
                          </p>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Governing Law</h4>
                            <p className="text-sm text-gray-600">These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.</p>
                          </div>
                        </div>
                      </section>

                      {/* Termination */}
                      <section id="termination" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            12
                          </div>
                          Termination
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We reserve the right to suspend or terminate your access to our services at any time for:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Violation of these terms</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Fraudulent or illegal activity</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Repeated complaints or violations</span>
                          </li>
                        </ul>
                      </section>

                      {/* Changes to Terms */}
                      <section id="changes" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            13
                          </div>
                          Changes to Terms
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          We will notify you of significant changes via email or prominent notice on our website.
                        </p>
                      </section>

                      {/* Contact Information */}
                      <section id="contact" className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            14
                          </div>
                          Contact Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          For questions about these Terms of Service, please contact us:
                        </p>
                        <Card className="bg-gradient-to-r from-red-50 to-white border-red-200">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <Mail className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                                <div>
                                  <p className="text-sm text-gray-500">Email</p>
                                  <a href="mailto:legal@corporatehousing.com" className="text-red-600 hover:underline font-semibold">
                                    legal@corporatehousing.com
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <Phone className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                                <div>
                                  <p className="text-sm text-gray-500">Phone</p>
                                  <a href="tel:+918788800500" className="text-red-600 hover:underline font-semibold">
                                    +91 8788 800 500
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                                <div>
                                  <p className="text-sm text-gray-500">Address</p>
                                  <p className="text-gray-900 font-semibold">
                                    Corporate Housing<br />
                                    Pune, Maharashtra, India
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </section>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Terms?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our legal team is available to clarify any questions you may have
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl"
            onClick={() => navigate('/contact')}
          >
            Contact Legal Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
