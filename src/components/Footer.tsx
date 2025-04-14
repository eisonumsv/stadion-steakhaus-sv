
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [localTime, setLocalTime] = useState(new Date());
  const [germanyTime, setGermanyTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      // Update local time
      setLocalTime(new Date());
      
      // Update Germany time (UTC+2)
      const now = new Date();
      const germanyNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
      setGermanyTime(germanyNow);
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <footer className="bg-hsv-blue text-white">
      <div className="hsv-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Volksparkstadion, Hamburg, Germany</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+49 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@stadionsteakhaussv.de</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span>Mon-Sun: 11:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-hsv-lightblue transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-hsv-lightblue transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-hsv-lightblue transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-hsv-lightblue transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-hsv-lightblue transition-colors">Reviews</Link></li>
              <li><Link to="/visit" className="hover:text-hsv-lightblue transition-colors">Visit Us</Link></li>
              <li><Link to="/contact" className="hover:text-hsv-lightblue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for special offers and updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-hsv-lightblue px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social & Time */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-hsv-lightblue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-hsv-lightblue transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-hsv-lightblue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Local Time:</h4>
              <p className="text-lg">{formatTime(localTime)}</p>
              
              <h4 className="font-semibold mt-4 mb-2">Germany Time:</h4>
              <p className="text-lg">{formatTime(germanyTime)}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Stadion Steakhaus SV. All rights reserved.</p>
          <div className="mt-2 text-sm">
            <a href="#" className="hover:text-hsv-lightblue transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-hsv-lightblue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
