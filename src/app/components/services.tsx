'use client';

import React from 'react';
import Image from 'next/image';
import { Pen, Search, Share2, Code, Database, Layout } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    { icon: <Pen className="w-6 h-6" />, name: "GRAPHIC\nDESIGN", delay: "0" },
    { icon: <Search className="w-6 h-6" />, name: "UI/UX", delay: "100" },
    { icon: <Layout className="w-6 h-6" />, name: "BRANDING", delay: "200" },
    { icon: <Share2 className="w-6 h-6" />, name: "SOCIAL\nMEDIA", delay: "300" },
    { icon: <Code className="w-6 h-6" />, name: "WEB\nDEV", delay: "400" },
    { icon: <Database className="w-6 h-6" />, name: "APP\nDEV", delay: "500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/p01(1).png"
          alt="Space background"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Services Grid & Astronaut with Centered Text */}
        <div className="flex items-center justify-between gap-8">
          {/* Services Icons Circle */}
          <div className="relative w-[600px] h-[600px]">
            {services.map((service, index) => {
              const angle = (index * 60 * Math.PI) / 180;
              const radius = 200;
              const x = radius * Math.cos(angle) + radius;
              const y = radius * Math.sin(angle) + radius;

              return (
                <div
                  key={service.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                  style={{
                    left: x,
                    top: y,
                    animationDelay: `${service.delay}ms`,
                  }}
                >
                  <div className="group relative">
                    <div className="w-16 h-16 bg-blue-900/80 rounded-full flex items-center justify-center backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700/80">
                      {service.icon}
                    </div>
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center whitespace-pre-line text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {service.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Text Content */}
          <div className="max-w-md flex flex-col items-start">
            <h2 className="text-4xl font-bold mb-6">—OUR SERVICES</h2>
            <p className="text-gray-300 text-lg">
              Our expertise, as well as our passion for web design, sets us apart from other agencies.
            </p>
          </div>

          {/* Astronaut Image */}
          <div className="relative w-[955px] h-[955px]">
            <Image
              src="/images/IMG_0473 (1).png"
              alt="Astronaut pointing"
              width={955}
              height={955}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}