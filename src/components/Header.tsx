
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-hsv-blue sticky top-0 z-50">
      <div className="hsv-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Stadion Steakhaus SV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>
            <Link to="/visit" className="nav-link">Visit Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-hsv-blue">
          <div className="hsv-container py-4 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-2 text-white hover:bg-hsv-lightblue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 text-white hover:bg-hsv-lightblue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/menu" 
              className="block px-4 py-2 text-white hover:bg-hsv-lightblue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/gallery" 
              className="block px-4 py-2 text-white hover:bg-hsv-lightblue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/reviews" 
              className="block px-4 py-2 text-white hover:bg-hsv-lightblue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              to="/visit" 
              className="block px-4 py-2 text-white hover:bg-hsv-lightblue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Visit Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-white hover:bg-hsv-lightblue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
