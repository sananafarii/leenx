import React from 'react';
import { Menu } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <span className="text-white font-bold text-xl">SpaceWeb</span>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Our Services</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">About Us</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Portfolio</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Blog</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Call Us
              </button>
              <button className="md:hidden text-white" title="Menu">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
        
        <div className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contact Form */}
              <div className="order-2 md:order-1">
                <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl">
                  <h1 className="text-4xl font-bold text-white mb-2">CONTACT US</h1>
                  <p className="text-gray-300 mb-8">
                    Our expertise, as well as our passion for web design, sets us apart from others.
                  </p>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-blue-400 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-400 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-400 mb-2">Message</label>
                      <textarea
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 h-32"
                        placeholder="Your Message"
                      />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                      Send
                    </button>
                  </form>
                </div>
              </div>

              {/* Astronaut Image Placeholder */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-96 h-96 bg-[url('/api/placeholder/400/400')] bg-cover bg-center rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;