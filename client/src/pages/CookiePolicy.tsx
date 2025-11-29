// pages/CookiePolicy.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Cookie,
  Shield,
  Eye,
  Settings,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Download,
  Calendar,
  Mail,
  Phone,
  FileText,
  BarChart3,
  Target,
  Globe,
  AlertCircle,
  Info
} from 'lucide-react';


export function CookiePolicy() {
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
    { id: 'what-are-cookies', title: 'What Are Cookies?' },
    { id: 'how-we-use', title: 'How We Use Cookies' },
    { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
    { id: 'third-party', title: 'Third-Party Cookies' },
    { id: 'managing-cookies', title: 'Managing Cookies' },
    { id: 'cookie-list', title: 'Cookies We Use' },
    { id: 'updates', title: 'Updates to Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  // Key highlights
  const highlights = [
    {
      icon: Cookie,
      title: 'Cookie Transparency',
      description: 'Clear explanation of all cookies we use'
    },
    {
      icon: Settings,
      title: 'Your Control',
      description: 'Manage your cookie preferences anytime'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'We respect your privacy choices'
    },
    {
      icon: Eye,
      title: 'Full Disclosure',
      description: 'Complete list of cookies and their purposes'
    }
  ];

  // Cookie types
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      color: 'bg-red-100 text-red-600',
      canDisable: false,
      description: 'Required for the website to function properly',
      examples: [
        'Session management',
        'Security and authentication',
        'Load balancing',
        'Shopping cart functionality'
      ]
    },
    {
      name: 'Analytics Cookies',
      icon: BarChart3,
      color: 'bg-blue-100 text-blue-600',
      canDisable: true,
      description: 'Help us understand how visitors use our website',
      examples: [
        'Google Analytics',
        'Page visit tracking',
        'User behavior analysis',
        'Performance metrics'
      ]
    },
    {
      name: 'Functional Cookies',
      icon: Settings,
      color: 'bg-green-100 text-green-600',
      canDisable: true,
      description: 'Enable enhanced functionality and personalization',
      examples: [
        'Language preferences',
        'User settings',
        'Chat widget functionality',
        'Video playback'
      ]
    },
    {
      name: 'Marketing Cookies',
      icon: Target,
      color: 'bg-purple-100 text-purple-600',
      canDisable: true,
      description: 'Track visitors across websites for advertising',
      examples: [
        'Facebook Pixel',
        'Google Ads',
        'Remarketing tags',
        'Conversion tracking'
      ]
    }
  ];

  // Specific cookies list
  const specificCookies = [
    {
      name: '_ga',
      provider: 'Google Analytics',
      duration: '2 years',
      type: 'Analytics',
      purpose: 'Distinguish unique users'
    },
    {
      name: '_gid',
      provider: 'Google Analytics',
      duration: '24 hours',
      type: 'Analytics',
      purpose: 'Distinguish unique users'
    },
    {
      name: 'session_id',
      provider: 'Corporate Housing',
      duration: 'Session',
      type: 'Essential',
      purpose: 'Maintain user session'
    },
    {
      name: 'csrf_token',
      provider: 'Corporate Housing',
      duration: 'Session',
      type: 'Essential',
      purpose: 'Security protection'
    },
    {
      name: 'language',
      provider: 'Corporate Housing',
      duration: '1 year',
      type: 'Functional',
      purpose: 'Remember language preference'
    },
    {
      name: '_fbp',
      provider: 'Facebook',
      duration: '90 days',
      type: 'Marketing',
      purpose: 'Track conversions from Facebook ads'
    }
  ];

  return (
    <div className="min-h-screen -mt-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
              <Cookie className="h-4 w-4" />
              COOKIE POLICY
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-300 mb-4">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: November 29, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Highlights */}
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
                      
                      {/* What Are Cookies */}
                      <section id="what-are-cookies" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            1
                          </div>
                          What Are Cookies?
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember information about your visit, making it easier to visit the site again and making the site more useful to you.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-4">
                          <div className="flex">
                            <Info className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-2">How Cookies Work</h4>
                              <p className="text-sm text-blue-800">
                                Cookies contain information that is transferred to your device's hard drive. They allow us to recognize your device and store information about your preferences or past actions.
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.
                        </p>
                      </section>

                      {/* How We Use Cookies */}
                      <section id="how-we-use" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            2
                          </div>
                          How We Use Cookies
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We use cookies for several reasons:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Essential Functionality:</span>
                              <span className="text-gray-600"> To enable core features like user authentication and security</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Performance:</span>
                              <span className="text-gray-600"> To understand how visitors use our site and improve performance</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Personalization:</span>
                              <span className="text-gray-600"> To remember your preferences and provide a better experience</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">Marketing:</span>
                              <span className="text-gray-600"> To deliver relevant advertisements and measure campaign effectiveness</span>
                            </div>
                          </li>
                        </ul>
                      </section>

                      {/* Types of Cookies */}
                      <section id="types-of-cookies" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            3
                          </div>
                          Types of Cookies We Use
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          We use different types of cookies on our website:
                        </p>
                        <div className="space-y-6">
                          {cookieTypes.map((type, index) => (
                            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                              <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex items-center">
                                    <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center mr-4`}>
                                      <type.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                                      <p className="text-sm text-gray-600">{type.description}</p>
                                    </div>
                                  </div>
                                  {type.canDisable ? (
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                      Optional
                                    </span>
                                  ) : (
                                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                                      Required
                                    </span>
                                  )}
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                                  <ul className="space-y-1">
                                    {type.examples.map((example, idx) => (
                                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                        {example}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </section>

                      {/* Third-Party Cookies */}
                      <section id="third-party" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            4
                          </div>
                          Third-Party Cookies
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and more.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-200">
                            <Globe className="h-6 w-6 text-blue-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Google Analytics</h4>
                            <p className="text-sm text-gray-600">Website analytics and reporting</p>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg border border-purple-200">
                            <Target className="h-6 w-6 text-purple-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Facebook Pixel</h4>
                            <p className="text-sm text-gray-600">Advertising and remarketing</p>
                          </div>
                          <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg border border-green-200">
                            <BarChart3 className="h-6 w-6 text-green-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">Google Ads</h4>
                            <p className="text-sm text-gray-600">Conversion tracking</p>
                          </div>
                        </div>
                      </section>

                      {/* Managing Cookies */}
                      <section id="managing-cookies" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            5
                          </div>
                          Managing Cookies
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in several ways:
                        </p>
                        <div className="space-y-4">
                          <div className="border-l-4 border-red-600 pl-4 bg-gray-50 p-4 rounded-r-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Browser Settings</h3>
                            <p className="text-gray-600 text-sm">
                              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to alert you when a cookie is being sent.
                            </p>
                          </div>
                          <div className="border-l-4 border-red-600 pl-4 bg-gray-50 p-4 rounded-r-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent Banner</h3>
                            <p className="text-gray-600 text-sm">
                              When you first visit our website, you'll see a cookie consent banner where you can accept or customize your cookie preferences.
                            </p>
                          </div>
                          <div className="border-l-4 border-red-600 pl-4 bg-gray-50 p-4 rounded-r-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Opt-Out Tools</h3>
                            <p className="text-gray-600 text-sm">
                              You can opt out of targeted advertising by visiting the Network Advertising Initiative opt-out page or using browser privacy tools.
                            </p>
                          </div>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                          <div className="flex">
                            <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-yellow-800">
                              <strong>Note:</strong> If you disable essential cookies, some features of our website may not function properly.
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* Cookie List */}
                      <section id="cookie-list" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            6
                          </div>
                          Cookies We Use
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Below is a list of the specific cookies we use on our website:
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b-2 border-gray-300">Cookie Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b-2 border-gray-300">Provider</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b-2 border-gray-300">Duration</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b-2 border-gray-300">Type</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b-2 border-gray-300">Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              {specificCookies.map((cookie, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                                  <td className="px-4 py-3 text-sm font-mono text-gray-900">{cookie.name}</td>
                                  <td className="px-4 py-3 text-sm text-gray-600">{cookie.provider}</td>
                                  <td className="px-4 py-3 text-sm text-gray-600">{cookie.duration}</td>
                                  <td className="px-4 py-3">
                                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                                      cookie.type === 'Essential' ? 'bg-red-100 text-red-700' :
                                      cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-700' :
                                      cookie.type === 'Functional' ? 'bg-green-100 text-green-700' :
                                      'bg-purple-100 text-purple-700'
                                    }`}>
                                      {cookie.type}
                                    </span>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-600">{cookie.purpose}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </section>

                      {/* Updates */}
                      <section id="updates" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            7
                          </div>
                          Updates to This Policy
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          We will notify you of any significant changes by updating the "Last Updated" date at the top of this policy and, where appropriate, providing notice through our website or via email.
                        </p>
                      </section>

                      {/* Contact */}
                      <section id="contact" className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg font-bold">
                            8
                          </div>
                          Contact Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          If you have any questions about our use of cookies, please contact us:
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
          <h2 className="text-3xl font-bold mb-4">Manage Your Cookie Preferences</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            You're in control of your privacy. Update your cookie settings anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl"
            >
              <Settings className="mr-2 h-5 w-5" />
              Cookie Settings
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8"
              onClick={() => navigate('/privacy-policy')}
            >
              View Privacy Policy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
