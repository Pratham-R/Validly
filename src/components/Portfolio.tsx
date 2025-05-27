import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projectCategories = ['All', 'Web App', 'Mobile App', 'Design', 'Strategy'];

const projectsData = [
  {
    title: 'HealthTrack',
    category: 'Mobile App',
    description: 'A health monitoring mobile application that tracks user activities and provides personalized insights.',
    image: 'https://images.pexels.com/photos/3808849/pexels-photo-3808849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Healthcare', 'Analytics']
  },
  {
    title: 'InvestPro',
    category: 'Web App',
    description: 'A financial platform that helps users make informed investment decisions using AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Fintech', 'AI']
  },
  {
    title: 'EduLearn',
    category: 'Web App',
    description: 'An interactive e-learning platform designed to enhance the educational experience for students worldwide.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['EdTech', 'Vue.js', 'LMS']
  },
  {
    title: 'FoodDelivery',
    category: 'Mobile App',
    description: 'On-demand food delivery service connecting local restaurants with hungry customers in metropolitan areas.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Flutter', 'Delivery', 'Maps API']
  },
  {
    title: 'WorkspaceOS',
    category: 'Design',
    description: 'Comprehensive UX/UI design for a productivity platform focused on remote team collaboration.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['UX/UI', 'SaaS', 'Productivity']
  },
  {
    title: 'GrowthPlan',
    category: 'Strategy',
    description: 'Market entry strategy for a European startup expanding operations to North American markets.',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Growth', 'Market Analysis', 'Strategy']
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Work</h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Check out some of our recent projects where we've helped startups and businesses bring their ideas to life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category 
                  ? 'bg-primary-900 text-white' 
                  : 'bg-white text-primary-700 hover:bg-primary-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="#" className="bg-white text-primary-900 rounded-full p-3 hover:bg-accent-500 hover:text-white transition-colors duration-200">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{project.title}</h3>
                <p className="text-primary-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary-50 text-primary-700 text-xs py-1 px-2 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;