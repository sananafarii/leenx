// pages/index.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LastPage() {
  return (
    <div className="min-h-screen bg-black bg-opacity-95 text-white relative overflow-hidden">

     <div className="absolute inset-0 z-0">
             <Image
               src="/images/p01(1).png"
               alt="Space background"
               fill
               className="object-cover opacity-50"
             />

      {/* Main content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-8">
          {/* Header */}
          <header className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <Image 
                  src="/logo.svg" 
                  alt="Leenx Agency Logo" 
                  width={32} 
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold tracking-wider">LEENX AGENCY</h1>
            </div>
          </header>

          {/* Main section */}
          <div className="flex items-start justify-between">
            {/* Left side content */}
            <div className="max-w-xl pt-12">
              <p className="text-lg leading-relaxed mb-8">
                Our expertise, as well as our passion for web design, sets us apart from other agencies.
              </p>
              
              <button className="bg-transparent border border-blue-400 text-blue-400 px-8 py-2 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 mb-16">
                Call Us
              </button>

              {/* Navigation */}
              <nav className="flex flex-col gap-4">
                <div className="flex gap-8">
                  <Link 
                    href="/" 
                    className="px-8 py-2 bg-blue-900 bg-opacity-40 rounded-full text-white hover:bg-opacity-60 transition-all"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="px-4 py-2 hover:text-blue-400 transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-4 py-2 hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
                
                <div className="flex gap-8">
                  <Link 
                    href="/services" 
                    className="px-4 py-2 hover:text-blue-400 transition-colors"
                  >
                    Our Services
                  </Link>
                  <Link 
                    href="/about" 
                    className="px-4 py-2 hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/blog" 
                    className="px-4 py-2 hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              </nav>
            </div>

          
            <div className="flex-1 relative h-[600px]">
              <Image
                src="/images/astronaut_waving_space.png"
                alt="Astronaut waving"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}