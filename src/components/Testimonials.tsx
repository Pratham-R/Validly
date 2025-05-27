import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Alex Morgan',
    company: 'FinTech Startup',
    testimonial: 'Validly helped us go from idea to a functioning MVP in just 6 weeks. Their approach to validation saved us months of development time and thousands of dollars.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    name: 'Jessica Wong',
    company: 'EdTech Platform',
    testimonial: 'The team at Validly understood our vision immediately and turned it into a beautiful, functional product. Their expertise in UX design was invaluable for our educational platform.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    name: 'Robert Chen',
    company: 'Healthcare App',
    testimonial: 'Working with Validly was the best decision we made. They helped us validate our healthcare app with real users before fully investing in development, which completely changed our product roadmap for the better.',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    name: 'Sophie Martinez',
    company: 'E-commerce Startup',
    testimonial: 'From strategy to design to development, Validly delivered excellence at every stage. Our e-commerce platform has received amazing feedback from users and investors alike.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left
      nextTestimonial();
    }

    if (touchStart - touchEnd < -50) {
      // swipe right
      prevTestimonial();
    }
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We've helped numerous startups and businesses bring their ideas to life. Here's what they have to say about working with us.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white text-primary-900 rounded-lg p-8 shadow-lg">
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            fill={i < testimonial.rating ? "#F79B72" : "none"} 
                            color={i < testimonial.rating ? "#F79B72" : "#D1D5DB"} 
                          />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic">"{testimonial.testimonial}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-primary-700 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-primary-900 p-3 rounded-full shadow-md hover:bg-accent-500 hover:text-white transition-colors duration-200 z-10 hidden md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-primary-900 p-3 rounded-full shadow-md hover:bg-accent-500 hover:text-white transition-colors duration-200 z-10 hidden md:block"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index ? 'bg-accent-500 w-6' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;