'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendlyButton } from './CalendlyWidget';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/new_logo.png" 
            alt="Autometa Logo" 
            width={50} 
            height={50} 
            className="mr-2"
          />
          <span className="text-xl font-bold text-indigo-800">Autometa</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
          >
            Home
          </Link>
          <Link 
            href="/aboutus" 
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
          >
            About Us
          </Link>
          <Link 
            href="/services" 
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
          >
            Services
          </Link>
          <CalendlyButton 
            url="https://calendly.com/autometa-dev/30min"
            text="Schedule a Call"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition-colors font-medium inline-flex items-center justify-center"
          />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile side menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      
      {/* Mobile side navigation menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/new_logo.png" 
                alt="Autometa Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-lg font-bold text-indigo-800">Autometa</span>
            </Link>
            <button 
              className="text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/aboutus" 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <div onClick={() => setIsMenuOpen(false)}>
                <CalendlyButton 
                  url="https://calendly.com/autometa-dev/30min"
                  text="Schedule a Call"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition-colors font-medium text-center w-full"
                />
              </div>
            </div>
            
            <div className="pt-6 mt-auto">
              <div className="flex space-x-4 justify-center">
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
