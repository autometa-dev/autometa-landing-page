import React from 'react';
import Link from 'next/link';
import { CalendlyInline } from '../components/CalendlyWidget';

export default function Services() {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions including machine learning models, natural language processing, and computer vision applications. We develop intelligent systems that learn from data and adapt to changing conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Software Development",
      description: "End-to-end software solutions custom-built to address your specific business challenges and opportunities. We develop robust applications that are fast, secure, and scalable for growing businesses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Social Media & Video Generation",
      description: "AI-powered content creation for social media platforms and automated video generation for marketing and communication. We develop engaging content at scale for all your digital marketing channels.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      title: "Automations & Integrations",
      description: "Streamline workflows by connecting your tools and automating repetitive tasks across your business systems. We enhance productivity and reduce errors with intelligent process automation solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Offering a comprehensive suite of automation and AI services tailored to meet your unique needs, 
          all delivered with a customer-focused approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-5 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="text-center mt-auto pt-4">
                  <Link 
                    href="#contact-form"
                    className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors"
                  >
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Why Choose Autometa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Cutting-edge Technology</h3>
              <p className="text-gray-600">We utilize the latest AI and automation technologies to deliver innovative solutions.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Industry-leading expertise at competitive and transparent pricing.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Clear Communication</h3>
              <p className="text-gray-600">We maintain transparent and consistent communication throughout every project.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Our solutions are designed to grow with your business and adapt to changing needs.</p>
            </div>
          </div>
        </div>
        
        <div id="contact-form" className="bg-white p-8 md:p-12 rounded-xl shadow-lg mt-20">
          <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            The best way to learn more about how Autometa can help your business is to schedule a 30-minute consultation with our team.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4 text-center">Select a time that works for you:</h3>
            <CalendlyInline 
              url="https://calendly.com/autometa-dev/30min"
              styles={{ height: '630px' }}
            />
          </div>
        </div>
      </div>
      
    </main>
  );
}
