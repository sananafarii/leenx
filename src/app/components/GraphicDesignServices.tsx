import React from 'react';
import Image from 'next/image';

const GraphicDesignServices = () => {
  const topIcons = [
    { icon: '🌐', id: 1 },
    { icon: '🔍', id: 2 },
    { icon: '📱', id: 3 },
    { icon: '✏️', id: 4 },
    { icon: '💼', id: 5 },
    { icon: '👥', id: 6 }
  ];

  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'MOTION DESIGN',
      description: 'Our expertise brings your ideas to life through dynamic and engaging motion design.'
    },
    {
      id: 2,
      icon: '🖥️',
      title: 'VISUAL IDENTITY DESIGN',
      description: 'Create a unique and memorable brand identity that resonates with your audience.'
    },
    {
      id: 3,
      icon: '👥',
      title: 'SOCIAL MEDIA DESIGN',
      description: 'Engage your audience with compelling social media visuals and content.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
             <Image
               src="/images/p01(1).png"
               alt="Space background"
               fill
               className="object-cover opacity-50"
             />
           </div>


      {/* Top Icons */}
      <div className="flex justify-center gap-8 py-8">
        {topIcons.map((item) => (
          <div
            key={item.id}
            className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm
                     flex items-center justify-center border border-gray-700/50
                     hover:border-blue-500/50 transition-colors duration-300"
          >
            <span className="text-xl">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">GRAPHIC DESIGN</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our expertise in visual design sets us apart from other agencies with our creative approach.
          </p>
        </div>

        {/* Services Grid with Astronaut */}
        <div className="relative">
          {/* Astronaut */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2">
            <Image
              src="/images/Graphic.png"
              alt="Floating astronaut"
              width={400}
              height={400}
              className="animate-float"
            />
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-xl
                         border border-blue-500/20 hover:border-blue-500/50
                         transition-all duration-300"
              >
                <div className="text-blue-400 text-3xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md
                           transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignServices;