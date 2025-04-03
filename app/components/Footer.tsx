'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/new_logo.png" 
                alt="Autometa Logo" 
                width={50} 
                height={50} 
                className="mr-2"
              />
              <span className="text-xl font-bold">Autometa</span>
            </div>
            <p className="text-indigo-200 mb-4">
              AI-Enabled Solutions for Your Most Ambitious Challenges
            </p>
            <div className="mt-4 mb-2 border-l-4 border-indigo-400 pl-3">
              <p className="text-indigo-200 text-sm">
                Building AI solutions that transform businesses.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-indigo-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-indigo-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-indigo-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-indigo-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-indigo-200 hover:text-white transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-indigo-200 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-indigo-200 hover:text-white transition-colors">
                  Social Media & Video
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-indigo-200 hover:text-white transition-colors">
                  Automations & Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-indigo-200">
                  Apartment 24 Parkside, 180 Granville Street Birmingham B11SFt
                </span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-indigo-200">+44 7383 036701</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-indigo-200">adil@autometa.dev</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 pt-6 mt-8">
          <p className="text-center text-indigo-300">
            &copy; {new Date().getFullYear()} Autometa Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
