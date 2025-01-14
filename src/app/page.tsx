'use client';

import Image from 'next/image';
import { Twitter, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 relative z-10">
        <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Call Us
        </button>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="hover:text-blue-400 border-b-2 border-blue-500">Home</a>
          <a href="#" className="hover:text-blue-400">Our Services</a>
          <a href="#" className="hover:text-blue-400">About Us</a>
          <a href="#" className="hover:text-blue-400">Portfolio</a>
          <a href="#" className="hover:text-blue-400">Contact Us</a>
          <a href="#" className="hover:text-blue-400">Blog</a>
        </div>

        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-xl">©</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-16 flex justify-between items-center relative z-10">
        <div className="max-w-xl">
          <div className="mb-8">
            <span className="bg-blue-900/50 px-3 py-1 rounded">777 × 70</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            LEENX<br />
            AGENCY
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            Our expertise, as well as our passion for web design, sets us apart from other agencies.
          </p>
          
          <button className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Call Us
          </button>

          {/* Contact Information */}
          <div className="mt-16 space-y-2">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="flex items-center gap-2">
              E: linksteam@gmail.com
            </p>
            <p className="flex items-center gap-2">
              T: +7 55667788
            </p>
          </div>

          {/* Social Media */}
          <div className="fixed left-4 bottom-16 flex flex-col gap-4">
            <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Astronaut Image */}
        <div className="relative">
          <Image 
            src="/images/astronaut-in-outer.png"
            alt="Astronaut floating in space"
            width={500}
            height={600}
            className="animate-float"
          />
        </div>
      </main>

      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/backgroundfirstpage.jpg')] opacity-20 z-0" />

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      </div>
    );
  }