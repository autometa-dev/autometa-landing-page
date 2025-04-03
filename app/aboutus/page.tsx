import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-6">About Us</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          AI-Enabled Solutions for Your Most Ambitious Challenges
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <Image 
              src="/about-image.svg" 
              alt="About Autometa" 
              width={500} 
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              At Autometa, we believe in combining the best of human creativity and AI technology to solve your toughest challenges. We're here to help you bring your ideas to life, whether through video production, software development, or web services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team is passionate about delivering outstanding results and using AI to make things happen faster and smarter. Clients trust us because we don't just deliver work, we deliver excellence.
            </p>
            <p className="text-lg text-gray-700">
              When you partner with us, you're getting a team of seasoned experts who leverage their experience and skills to deliver the best possible results and help you achieve your goals.
            </p>
          </div>
        </div>
        
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-16">How We Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Discover & Analyze</h3>
              <p className="text-gray-600">
                We work closely with clients to understand their business processes, requirements, and pain points. This includes research, interviews, and stakeholder meetings to create a detailed project plan with clear objectives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Design & Development</h3>
              <p className="text-gray-600">
                Our team of experts uses the information gathered during the discovery phase to design and develop tailored automation solutions. We use the latest technologies and tools to ensure high performance and scalability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation & Support</h3>
              <p className="text-gray-600">
                After development, we help implement the solution into your existing workflows and provide comprehensive training. Our team offers ongoing support and maintenance to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="my-20">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We constantly explore new technologies and methodologies to create cutting-edge solutions.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of teamwork, both internally and with our clients.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every project, ensuring high-quality solutions.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Efficiency</h3>
              <p className="text-gray-600">We focus on creating solutions that maximize efficiency and productivity.</p>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
