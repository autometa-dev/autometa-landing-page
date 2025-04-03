import Image from "next/image";
import Link from "next/link";
import { CalendlyButton, CalendlyInline, CalendlyFloatingButton } from "./components/CalendlyWidget";

// Add a div with id for Calendly root at the top level
const calendlyUrl = "https://calendly.com/autometa-dev/30min";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-6">
              Automating Your <span className="text-indigo-600">Success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Autometa empowers businesses with cutting-edge AI automation solutions that streamline operations, reduce costs, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors font-medium text-lg text-center">
                Explore Services
              </Link>
              <CalendlyButton 
                url={calendlyUrl}
                text="Schedule a Call"
                className="border-2 border-indigo-600 hover:bg-indigo-50 text-indigo-600 px-6 py-3 rounded-full transition-colors font-medium text-lg text-center"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/hero-image.svg" 
              alt="AI Automation Illustration" 
              width={600} 
              height={450} 
              className="w-full h-auto max-w-lg mx-auto"
              priority
            />
          </div>
        </div>
        
        {/* Highlights */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We deliver excellence in every project</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Fast implementation of AI solutions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent and affordable rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image 
                src="/about-image.svg" 
                alt="About AutoMeta" 
                width={600} 
                height={450} 
                className="w-full h-auto max-w-lg mx-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">About Autometa</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to revolutionize how businesses operate, Autometa specializes in designing and implementing 
                intelligent automation solutions powered by cutting-edge AI technology.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our team of experts combines deep technical knowledge with business acumen to deliver tailored solutions 
                that address your unique challenges and drive measurable results.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 font-medium">Innovative</div>
                <div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 font-medium">Reliable</div>
                <div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 font-medium">Client-Focused</div>
                <div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 font-medium">Results-Driven</div>
              </div>
              <Link href="/aboutus" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                Learn more about us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-indigo-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a comprehensive suite of AI-powered automation solutions designed to 
              transform your business operations and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Development */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center text-indigo-600">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                    <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="currentColor"/>
                    <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3 text-center">AI Development</h3>
              <div className="flex flex-col h-full">
                <p className="text-gray-600 mb-6">
                  Custom AI solutions including machine learning models, natural language processing, and computer vision applications. We develop intelligent systems that learn from data and adapt to changing conditions.
                </p>
                <div className="mt-auto text-center pt-4">
                  <Link href="/services" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Software Development */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center text-indigo-600">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6Z" fill="currentColor"/>
                    <path d="M14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3 text-center">Software Development</h3>
              <div className="flex flex-col h-full">
                <p className="text-gray-600 mb-6">
                  End-to-end software solutions custom-built to address your specific business challenges and opportunities. We build robust applications that are fast, secure, and scalable for growing businesses.
                </p>
                <div className="mt-auto text-center pt-4">
                  <Link href="/services" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Social Media and Video Generation */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center text-indigo-600">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20V16H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 10L15 13L10 16V10Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3 text-center">Social Media & Video Generation</h3>
              <div className="flex flex-col h-full">
                <p className="text-gray-600 mb-6">
                  AI-powered content creation for social media platforms and automated video generation for marketing and communication. Generate engaging content at scale for all your digital channels.
                </p>
                <div className="mt-auto text-center pt-4">
                  <Link href="/services" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Automations and Integrations */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center text-indigo-600">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 13V7H21V13H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 13V7H11V13H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 17V23H21V17H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17V23H11V17H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 21V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 21V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3 text-center">Automations & Integrations</h3>
              <div className="flex flex-col h-full">
                <p className="text-gray-600 mb-6">
                  Streamline workflows by connecting your tools and automating repetitive tasks across your business systems. Boost productivity and reduce errors with intelligent process automation.
                </p>
                <div className="mt-auto text-center pt-4">
                  <Link href="/services" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors font-medium text-lg inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Autometa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-indigo-50 rounded-xl shadow-md p-8 relative h-full flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="mt-4 mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "Autometa's AI automation solutions helped us reduce processing time by 75% and eliminated manual errors. Their team was professional and responsive throughout the entire implementation process."
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-indigo-100 flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden" style={{ minWidth: '3rem' }}>
                  <span className="text-indigo-700 font-bold text-lg">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 text-lg">Jane Doe</h4>
                  <p className="text-gray-600 text-sm">CTO, TechInnovate Inc.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-indigo-50 rounded-xl shadow-md p-8 relative h-full flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="mt-4 mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "The team at Autometa truly understands how to leverage AI for business impact. Their solutions helped us automate our customer support, resulting in a 40% increase in satisfaction ratings."
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-indigo-100 flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden" style={{ minWidth: '3rem' }}>
                  <span className="text-indigo-700 font-bold text-lg">MS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 text-lg">Michael Smith</h4>
                  <p className="text-gray-600 text-sm">Director of Operations, CloudServe</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-indigo-50 rounded-xl shadow-md p-8 relative h-full flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="mt-4 mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "We approached Autometa with a complex data processing challenge. Not only did they create a custom solution that met our needs, but they also identified additional opportunities for automation we hadn't considered."
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-indigo-100 flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden" style={{ minWidth: '3rem' }}>
                  <span className="text-indigo-700 font-bold text-lg">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">VP of Technology, DataFlow Systems</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a href="https://calendly.com/autometa-dev/30min" target="_blank" rel="noopener noreferrer" className="border-2 border-indigo-600 hover:bg-indigo-50 text-indigo-600 px-6 py-3 rounded-full transition-colors font-medium text-lg text-center">
              Become Our Next Success Story
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="bg-indigo-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-indigo-100 text-lg mb-8">
                  Contact us today to discuss how our AI automation solutions can help your organization achieve its goals.
                </p>
                <div className="space-y-4 text-indigo-100">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+44 7383 036701</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>adil@autometa.dev</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Apartment 24 Parkside, 180 Granville Street Birmingham B11SFt</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Schedule a Meeting</h3>
                <p className="text-gray-700 mb-6">
                  The best way to learn more about how Autometa Limited can help your business is to book a 30-minute consultation with our team. We'll discuss your needs and how our AI-enabled solutions can address your specific challenges.
                </p>
                
                <div className="space-y-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-indigo-900 mb-3">Select a time that works for you:</h4>
                    <CalendlyInline 
                      url={calendlyUrl}
                      styles={{ height: '630px' }}
                    />
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 text-center">Prefer to send a message? Email us at <a href="mailto:adil@autometa.com" className="text-indigo-600 hover:text-indigo-800">adil@autometa.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
