// pages/portfolio.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {

  const mobileScreens = [
    { id: 1, src: '/images/Potfolio/imagephone.png', top: '0%', left: '0%', zIndex: 10 },
    { id: 2, src: '/images/Potfolio/image (1).png', top: '10%', left: '20%', zIndex: 20 },
    { id: 3, src: '/images/Potfolio/image (2).png', top: '5%', left: '40%', zIndex: 30 },
    { id: 4, src: '/images/Potfolio/image (3).png', top: '15%', left: '60%', zIndex: 40 },
    { id: 5, src: '/images/Potfolio/image (4).png', top: '8%', left: '80%', zIndex: 50 },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image
               src="/images/p01(1).png"
               alt="Space background"
               fill
               className="object-cover opacity-50"
             />
        </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-between items-center">
          {/* Left Side - Portfolio Showcase */}
          <div className="w-3/5 relative h-[600px]">
            {/* Featured Project Card */}
            <div className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl mb-8">
              <h3 className="text-xl font-semibold mb-4">English App Design</h3>
              <p className="text-gray-400 text-sm mb-6">
                Our expertise, as well as our passion for web design, sets us apart from other...
              </p>
              <Link 
                href="/portfolio/english-app"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile Screenshots */}
            <div className="relative w-full h-[400px]">
              {mobileScreens.map((screen) => (
                <div
                  key={screen.id}
                  className="absolute transform hover:scale-105 transition-all duration-300"
                  style={{
                    top: screen.top,
                    left: screen.left,
                    zIndex: screen.zIndex,
                    width: '200px', // اندازه هر اسکرین‌شات
                    height: '400px'
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-500/20">
                    <Image
                      src={screen.src}
                      alt={`App Screenshot ${screen.id}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Title and Astronaut */}
          <div className="w-2/5 flex flex-col items-end">
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-4">PORTFOLIO</h1>
              <p className="text-gray-400 max-w-md">
                Our expertise, as well as our passion for web design, sets us apart from other agencies.
              </p>
            </div>
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/Potfolio/PortfolioAs.png"
                alt="Astronaut"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}