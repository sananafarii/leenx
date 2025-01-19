import React, { useState } from 'react';
import Link from 'next/link';

const SpaceContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Untitled-2.png"
          alt="Space background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Call Us
          </button>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-blue-400 transition-colors">
              Our Services
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              About Us
            </Link>
            <Link href="/portfolio" className="text-white hover:text-blue-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-white">🌐</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 flex items-center">
        {/* Astronaut Image */}
        <div className="flex-1">
          <img
            src="/images/Contactusimage.png"
            alt="Astronaut in space"
            className="w-full h-auto max-w-2xl"
          />
        </div>

        {/* Contact Form */}
        <div className="flex-1 text-white">
          <div className="max-w-md backdrop-blur-sm bg-gray-900/30 p-8 rounded-lg border border-gray-700">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
              <span className="text-gray-400">—</span>
              CONTACT US
            </h1>
            <p className="text-gray-300 mb-8">
              Our expertise, as well as our passion for web design, sets us apart from other.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2">
                  ▶ Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2">
                  ▶ Your Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2">
                  ▶ Your Message
                </label>
                <textarea
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-4 py-3 text-white hover:bg-gray-700/50 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceContactHero;