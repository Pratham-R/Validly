import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-accent-500">V</span>alidly
            </h3>
            <p className="text-white/80 mb-6">
              We help startups validate and build their MVPs with our expert team of designers and developers.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'instagram', 'github'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-white/70 hover:text-accent-500 transition-colors duration-200"
                  aria-label={`Visit our ${social}`}
                >
                  <div className="w-5 h-5"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Work', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/70 hover:text-accent-500 transition-colors duration-200 block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['UI/UX Design', 'MVP Development', 'Mobile Apps', 'Growth Strategy', 'Rapid Prototyping', 'Market Validation'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-accent-500 transition-colors duration-200 block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-white/80 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-primary-900"
              />
              <button 
                type="submit" 
                className="bg-accent-500 text-white px-4 py-2 rounded-r-md hover:bg-accent-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Validly. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-accent-500 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-accent-500 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="bg-accent-500 text-white p-3 rounded-full fixed bottom-6 right-6 shadow-md hover:bg-accent-600 transition-colors duration-200 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;