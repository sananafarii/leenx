import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background with Earth */}
      <div className="absolute inset-0">
        <Image
          src="/images/HeroImage.png"
          alt="Earth from space"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">LOGO</div>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/services" className="hover:text-blue-400">Our Services</Link>
            <Link href="/about" className="hover:text-blue-400">About Us</Link>
            <Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact Us</Link>
            <Link href="/blog" className="hover:text-blue-400">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero Content - Now Right Aligned */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="flex justify-end">
          <div className="max-w-2xl">
            <div className="bg-blue-500/20 backdrop-blur-sm p-1 inline-block rounded mb-4">
              <h1 className="text-5xl font-bold p-4 border-2 border-white/20 rounded">
                OUR<br />SERVICES
              </h1>
            </div>
            <p className="text-xl mb-8 max-w-xl">
              Our expertise in web design sets us apart from other agencies.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md transition duration-300">
              Call Us
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 ml-4 space-y-4 z-20">
        <Link href="#" className="block text-white hover:text-blue-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </Link>
        <Link href="#" className="block text-white hover:text-blue-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;