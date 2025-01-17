import React from 'react';
import Link from 'next/link';

const SpaceAbout = () => {
  return (
    <div className="relative min-h-screen bg-[#040D1C] overflow-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Call Us Button */}
          <button className="px-6 py-2 bg-blue-500/20 text-white text-sm rounded-full hover:bg-blue-500/30 transition-all">
            Call Us
          </button>

          {/* Center - Navigation Items */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white text-sm">
              Home
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white text-sm">
              Our Services
            </Link>
            <Link href="/about" className="text-white bg-[#1B2B44] px-4 py-2 rounded-full text-sm">
              About Us
            </Link>
            <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
              Contact Us
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
              Blog
            </Link>
          </div>

          {/* Right Side - Logo */}
          <div className="w-8 h-8">
            <img 
              src="/images/OBJECTS.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative h-screen">
        {/* Background Image with Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D1C] via-[#040D1C]/80 to-transparent z-10"></div>
          <img
            src="/images/‌backwithastr.png"
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 container mx-auto h-full">
          <div className="grid grid-cols-2 h-full items-center gap-20 pt-20">
            {/* Right Side - Text Content */}
            <div className="col-start-2 space-y-6">
              <div className="relative">
                {/* Blue Border */}
                <div className="absolute -left-4 top-0 w-0.5 h-20 bg-blue-500"></div>
                
                {/* Text Content */}
                <div className="pl-8 text-right">
                  <h1 className="text-white font-bold text-7xl leading-tight tracking-wide">
                    ABOUT
                    <br />
                    <span className="font-light">US</span>
                  </h1>
                  <p className="text-gray-400 mt-6 text-lg max-w-md">
                    Our expertise, as well as our passion for web design, sets us apart from other agencies.
                  </p>
                  <button className="mt-8 px-8 py-3 bg-transparent border border-blue-500 text-white rounded-full hover:bg-blue-500/20 transition-all">
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040D1C] to-transparent"></div>
      </div>
    </div>
  );
};

export default SpaceAbout;