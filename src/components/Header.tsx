import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-accent-500 to-primary-500 text-transparent bg-clip-text flex items-center">
            Validly
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'Work', 'About', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                  isScrolled ? 'text-primary-900' : 'text-primary-800'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary-500 text-white font-medium px-6 py-2.5 rounded-full hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-900 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-6 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {['Services', 'Work', 'About', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-primary-900 hover:text-primary-500 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary-500 text-white font-medium px-6 py-3 rounded-full text-center hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;