import React from 'react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Former Product Lead at Google with 10+ years of experience in bringing digital products to market.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack developer with expertise in React, Node.js, and cloud infrastructure. Previously at Amazon Web Services.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning designer with a passion for creating intuitive, beautiful user experiences that solve real problems.',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'David Kim',
    role: 'Growth Strategist',
    bio: 'Marketing expert who has helped multiple startups achieve product-market fit and scale their user acquisition.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">About Us</h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            We're a team of passionate creators, developers, and strategists dedicated to helping entrepreneurs bring their visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
            <p className="text-primary-700 mb-6">
              At Validly, we believe that great ideas deserve to be validated and built properly. Our mission is to help entrepreneurs and businesses reduce the risk of product development by validating ideas quickly and building MVPs that can be tested in the market.
            </p>
            <p className="text-primary-700 mb-6">
              We combine design thinking, lean startup methodology, and agile development practices to create products that users love and businesses can scale.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-500 mb-2">85+</div>
                <div className="text-primary-700">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-500 mb-2">93%</div>
                <div className="text-primary-700">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-500 mb-2">12M+</div>
                <div className="text-primary-700">User Reach</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-500 mb-2">4+</div>
                <div className="text-primary-700">Years of Experience</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-4/5 h-full border-4 border-accent-500 rounded-lg -z-10"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-primary-900 text-center mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-neutral-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-primary-900 mb-1">{member.name}</h4>
              <p className="text-accent-500 font-medium mb-4">{member.role}</p>
              <p className="text-primary-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;