// filepath: /home/sana/Documents/leenx/src/app/components/AboutUs.tsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 relative z-10">
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Our Services</a>
          <a href="#" className="text-blue-400">About Us</a>
          <a href="#" className="hover:text-blue-400 transition">Portfolio</a>
          <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
          <a href="#" className="hover:text-blue-400 transition">Blog</a>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white">©</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen flex items-center">
        {/* Background Image - Earth */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: `url('/images/space-background.jpg')`, // جایگزین با آدرس تصویر پس‌زمینه فضا
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-gray-300 text-lg mb-16">
            Our expertise, as well as our passion for web design, sets us apart from other agencies.
          </p>
          {/* Add more content here */}
        </div>
      </main>
    </div>
  );
};

export default AboutUs;