import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Ready to validate your idea and build your MVP? Contact us today and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-8 h-full">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Mail size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary-700 mb-1">Email Us</h4>
                    <a href="mailto:hello@validly.com" className="text-primary-900 hover:text-accent-500 transition-colors">hello@validly.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Phone size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary-700 mb-1">Call Us</h4>
                    <a href="tel:+1-555-123-4567" className="text-primary-900 hover:text-accent-500 transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <MapPin size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary-700 mb-1">Our Office</h4>
                    <address className="text-primary-900 not-italic">
                      123 Innovation Way<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-neutral-200">
                <h4 className="text-sm font-medium text-primary-700 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'instagram', 'github'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="bg-primary-50 p-2 rounded-full text-primary-900 hover:bg-accent-500 hover:text-white transition-colors duration-200"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Send Us a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 animate-fadeIn">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">Your Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-300 focus:ring-red-200' : 'border-neutral-300 focus:ring-accent-200 focus:border-accent-400'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">Your Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-300 focus:ring-red-200' : 'border-neutral-300 focus:ring-accent-200 focus:border-accent-400'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-200 focus:border-accent-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="MVP Development">MVP Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Growth Strategy">Growth Strategy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">Your Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-300 focus:ring-red-200' : 'border-neutral-300 focus:ring-accent-200 focus:border-accent-400'
                    }`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-accent-500 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent-600 hover:shadow-md'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;