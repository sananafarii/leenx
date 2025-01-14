// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8">
            <Image 
              src="/logo.svg" 
              alt="Leenx Agency Logo" 
              width={32} 
              height={32}
            />
          </div>
          <span className="text-xl font-bold">LEENX AGENCY</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="px-4 py-2 bg-gray-800 rounded-full">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-gray-300">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Our Services
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}