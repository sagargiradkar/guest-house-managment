// components/Footer.tsx
import { Link } from "react-router-dom"
import { 
  Hotel, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube,
  Send
} from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { useToast } from "@/hooks/useToast"

export function Footer() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setEmail("")
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Hotel className="h-8 w-8 text-red-500 mr-2" />
              <div>
                <h3 className="text-xl font-bold text-white">CORPORATE</h3>
                <p className="text-sm text-gray-400">HOUSING</p>
              </div>
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              Leading provider of corporate housing solutions, service apartments, 
              and guest houses across India. We specialize in providing comfortable, 
              fully-furnished accommodations for business travelers, expatriates, and NRIs.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <a 
                href="tel:+918788800500" 
                className="flex items-start gap-3 hover:text-red-500 transition group"
              >
                <Phone className="h-5 w-5 text-red-500 mt-0.5 group-hover:scale-110 transition" />
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="font-semibold text-white">+91 8788 800 500</p>
                </div>
              </a>
              
              <a 
                href="mailto:info@corporatehousing.co.in" 
                className="flex items-start gap-3 hover:text-red-500 transition group"
              >
                <Mail className="h-5 w-5 text-red-500 mt-0.5 group-hover:scale-110 transition" />
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="font-semibold text-white">info@corporatehousing.co.in</p>
                </div>
              </a>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Head Office</p>
                  <p className="font-semibold text-white">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-500 transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-red-500 transition text-sm">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-500 transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                {/* <Link to="/blog" className="hover:text-red-500 transition text-sm">
                  Blog
                </Link> */}
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/corporate-stay" className="hover:text-red-500 transition text-sm">
                  Corporate Stay Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/guest-houses" className="hover:text-red-500 transition text-sm">
                  Corporate Guest Houses
                </Link>
              </li>
              <li>
                <Link to="/services/expat-housing" className="hover:text-red-500 transition text-sm">
                  Expat Housing
                </Link>
              </li>
              <li>
                <Link to="/services/nri-housing" className="hover:text-red-500 transition text-sm">
                  NRI Housing
                </Link>
              </li>
              <li>
                <Link to="/services/furnished-homes" className="hover:text-red-500 transition text-sm">
                  Furnished Homes
                </Link>
              </li>
              <li>
                <Link to="/services/service-apartments" className="hover:text-red-500 transition text-sm">
                  Service Apartments
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to get updates on latest properties and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3 text-sm">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors group"
                >
                  <Facebook className="h-5 w-5 group-hover:scale-110 transition" fill="currentColor" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition" fill="currentColor" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors group"
                >
                  <Twitter className="h-5 w-5 group-hover:scale-110 transition" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors group"
                >
                  <Youtube className="h-5 w-5 group-hover:scale-110 transition" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Corporate Housing. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-red-500 transition">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-red-500 transition">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-red-500 transition">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="hover:text-red-500 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
