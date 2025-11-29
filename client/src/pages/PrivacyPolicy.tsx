// pages/PrivacyPolicy.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Mail,
  Phone,
  FileText,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Download,
  Calendar,
  MapPin        
} from 'lucide-react';


export function PrivacyPolicy() {
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
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'data-sharing', title: 'Data Sharing and Disclosure' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-rights', title: 'Your Rights and Choices' },
    { id: 'cookies', title: 'Cookies and Tracking' },
    { id: 'third-party', title: 'Third-Party Services' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'changes', title: 'Changes to Privacy Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  // Key privacy highlights
  const highlights = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Industry-standard encryption and security measures'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is stored on secure servers with regular backups'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear information about how we collect and use data'
    },
    {
      icon: UserCheck,
      title: 'Your Control',
      description: 'Full control over your personal information'
    }
  ];

  return (
    <div className="min-h-screen -mt-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920)',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
              <Shield className="h-4 w-4" />
              PRIVACY & DATA PROTECTION
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: November 29, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
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

              {/* Policy Content */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">
                      
                      {/* Introduction */}
                      <section id="introduction" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            1
                          </div>
                          Introduction
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          Welcome to Corporate Housing ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access or use our services.
                        </p>
                      </section>

                      {/* Information We Collect */}
                      <section id="information-collection" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            2
                          </div>
                          Information We Collect
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We collect information that you provide directly to us, including:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mb-4">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900">Personal Information</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Name, email address, phone number</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Billing and payment information</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Government-issued ID for verification</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Booking preferences and history</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900">Automatically Collected Information</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">IP address, browser type, and device information</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Usage data and analytics</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">Cookies and similar tracking technologies</span>
                            </li>
                          </ul>
                        </div>
                      </section>

                      {/* How We Use Your Information */}
                      <section id="how-we-use" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            3
                          </div>
                          How We Use Your Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We use the information we collect for the following purposes:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Service Delivery:</span>
                              <span className="text-gray-600"> To process bookings, manage reservations, and provide customer support</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Communications:</span>
                              <span className="text-gray-600"> To send booking confirmations, updates, and promotional offers</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Improvement:</span>
                              <span className="text-gray-600"> To analyze usage patterns and improve our services</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Legal Compliance:</span>
                              <span className="text-gray-600"> To comply with legal obligations and prevent fraud</span>
                            </div>
                          </li>
                        </ul>
                      </section>

                      {/* Data Sharing */}
                      <section id="data-sharing" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            4
                          </div>
                          Data Sharing and Disclosure
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We may share your information in the following situations:
                        </p>
                        <div className="space-y-4">
                          <div className="border-l-4 border-red-600 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                            <p className="text-gray-600">We share data with third-party vendors who help us operate our business (payment processors, hosting providers, etc.)</p>
                          </div>
                          <div className="border-l-4 border-red-600 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Property Owners</h3>
                            <p className="text-gray-600">Your booking information is shared with property owners to facilitate your stay</p>
                          </div>
                          <div className="border-l-4 border-red-600 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                            <p className="text-gray-600">When required by law, court order, or government regulation</p>
                          </div>
                        </div>
                      </section>

                      {/* Data Security */}
                      <section id="data-security" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            5
                          </div>
                          Data Security
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We implement appropriate technical and organizational security measures to protect your personal information, including:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <Lock className="h-6 w-6 text-blue-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Encryption</h4>
                            <p className="text-sm text-gray-600">SSL/TLS encryption for data transmission</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <Shield className="h-6 w-6 text-green-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Secure Storage</h4>
                            <p className="text-sm text-gray-600">Protected servers with regular backups</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <UserCheck className="h-6 w-6 text-purple-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Access Control</h4>
                            <p className="text-sm text-gray-600">Limited employee access to personal data</p>
                          </div>
                          <div className="bg-red-50 p-4 rounded-lg">
                            <AlertCircle className="h-6 w-6 text-red-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Monitoring</h4>
                            <p className="text-sm text-gray-600">Regular security audits and monitoring</p>
                          </div>
                        </div>
                      </section>

                      {/* Your Rights */}
                      <section id="your-rights" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            6
                          </div>
                          Your Rights and Choices
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          You have the following rights regarding your personal information:
                        </p>
                        <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg border-l-4 border-red-600">
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Access:</span>
                                <span className="text-gray-600"> Request a copy of your personal data</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Correction:</span>
                                <span className="text-gray-600"> Update or correct inaccurate information</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Deletion:</span>
                                <span className="text-gray-600"> Request deletion of your personal data</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Opt-Out:</span>
                                <span className="text-gray-600"> Unsubscribe from marketing communications</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Data Portability:</span>
                                <span className="text-gray-600"> Receive your data in a structured format</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </section>

                      {/* Cookies */}
                      <section id="cookies" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            7
                          </div>
                          Cookies and Tracking Technologies
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          For more information, please see our <button onClick={() => navigate('/cookie-policy')} className="text-red-600 hover:underline font-semibold">Cookie Policy</button>.
                        </p>
                      </section>

                      {/* Third-Party Services */}
                      <section id="third-party" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            8
                          </div>
                          Third-Party Services
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                      </section>

                      {/* Children's Privacy */}
                      <section id="children" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            9
                          </div>
                          Children's Privacy
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                      </section>

                      {/* Changes to Policy */}
                      <section id="changes" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            10
                          </div>
                          Changes to This Privacy Policy
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We may update this Privacy Policy from time to time. We will notify you of any significant changes by:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Posting the updated policy on our website</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Sending you an email notification</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">Updating the "Last Updated" date at the top of this policy</span>
                          </li>
                        </ul>
                      </section>

                      {/* Contact Us */}
                      <section id="contact" className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            11
                          </div>
                          Contact Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <Card className="bg-gradient-to-r from-red-50 to-white border-red-200">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <Mail className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                                <div>
                                  <p className="text-sm text-gray-500">Email</p>
                                  <a href="mailto:privacy@corporatehousing.com" className="text-red-600 hover:underline font-semibold">
                                    privacy@corporatehousing.com
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
          <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to help answer any questions you have about how we protect your data
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl"
            onClick={() => navigate('/contact')}
          >
            Contact Privacy Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
