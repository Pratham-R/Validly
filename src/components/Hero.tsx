import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-radial from-accent-50 via-white to-neutral-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neutral-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/50 backdrop-blur-sm rounded-full border border-primary-100">
            <span className="text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text">
              We Build Game-Changing Products
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 leading-tight mb-6 animate-fadeIn bg-gradient-to-r from-accent-500 via-primary-500 to-accent-300 text-transparent bg-clip-text">
            Turn Your Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 mb-10 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            We help startups and innovators build exceptional digital products that users love and businesses can scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="group bg-primary-500 text-white font-medium px-8 py-4 rounded-full hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="bg-white text-primary-900 font-medium px-8 py-4 rounded-full border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg hover:shadow-primary-100/25 backdrop-blur-sm"
            >
              View Our Work
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-primary-100 flex flex-wrap justify-center gap-8 md:gap-16">
            {['TechCrunch', 'Forbes', 'Wired', 'Product Hunt'].map((brand) => (
              <div key={brand} className="text-primary-400 font-medium">
                Featured in {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;