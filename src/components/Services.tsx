import React from 'react';
import { Code, PenTool, Smartphone, TrendingUp, Zap, BarChart } from 'lucide-react';

const servicesList = [
  {
    icon: <PenTool size={28} className="text-accent-500" />,
    title: 'UI/UX Design',
    description: 'Intuitive user experiences and visually stunning interfaces that engage your users and drive conversions.'
  },
  {
    icon: <Code size={28} className="text-accent-500" />,
    title: 'MVP Development',
    description: 'Rapid development of functional minimum viable products to test your idea in the market with real users.'
  },
  {
    icon: <Smartphone size={28} className="text-accent-500" />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that provide seamless experiences across all devices.'
  },
  {
    icon: <TrendingUp size={28} className="text-accent-500" />,
    title: 'Growth Strategy',
    description: 'Data-driven strategies to help you acquire and retain users, optimize conversion, and scale your product.'
  },
  {
    icon: <Zap size={28} className="text-accent-500" />,
    title: 'Rapid Prototyping',
    description: 'Quick validation of concepts through interactive prototypes before committing to full development.'
  },
  {
    icon: <BarChart size={28} className="text-accent-500" />,
    title: 'Market Validation',
    description: 'Research and testing to ensure your product meets real market needs and has a viable business model.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Services</h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            We provide end-to-end solutions to help startups and businesses build, launch, and scale their digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="p-3 bg-primary-50 rounded-lg inline-block mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">{service.title}</h3>
              <p className="text-primary-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;