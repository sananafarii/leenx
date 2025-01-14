import React from 'react';
import { Image, Layout, Pen } from 'lucide-react';

const SpaceDesign = () => {
  return (
    <div className="min-h-screen bg-[#000814] bg-opacity-95 relative overflow-hidden">
       <div className="absolute inset-0 z-0">
              <Image
                src="/images/p01(1).png"
                alt="Space background"
                fill
                className="object-cover opacity-50"
              />

 
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            { icon: <Image />, title: 'POSTER DESIGN' },
            { icon: <Layout />, title: 'LAYOUT DESIGN' },
            { icon: <Pen />, title: 'CONTENT DESIGN' }
          ].map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                <div className="bg-blue-500/20 rounded-full p-3 w-fit mb-4">
                  {React.cloneElement(service.icon, { className: 'w-6 h-6 text-blue-400' })}
                </div>
                <h3 className="text-white text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">
                  Our expertise, as well as our passion for web design, sets us apart from other...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 relative">
          {/* Team Cards */}
          {[
            { name: 'MIKE MOOSAVI', stars: 3 },
            { name: 'ARIYA MOOSAVI', stars: 2 },
            { name: 'ALI MOOSAVI', stars: 2 }
          ].map((member, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-blue-400 font-bold">{member.name}</h3>
                    <p className="text-blue-300 text-sm">Social Media</p>
                  </div>
                  <div className="flex">
                    {Array(member.stars).fill('★').map((star, i) => (
                      <span key={i} className="text-white">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Our expertise, as well as our passion for web design, sets us apart from other for web design.
                </p>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50" />
                </div>
              </div>
            </div>
          ))}

          {/* Astronaut Image */}
          <div className="absolute right-0 bottom-0 w-96 h-96">
            <img
              src="/images/spacedesign.png"
              alt="Astronaut"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SpaceDesign;