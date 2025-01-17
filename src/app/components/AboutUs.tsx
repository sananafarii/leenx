import React from 'react';  
import Image from 'next/image';

export default function AboutUS() {  
  const stats = [
    { icon: '🚀', number: 10, prefix: '+', label: 'Years of Experience' },
    { icon: '🌐', number: 50, prefix: '+', label: 'Projects Completed' },
    { icon: '👨‍💻', number: 20, prefix: '+', label: 'Team Members' },
    { icon: '🏆', number: 15, prefix: '+', label: 'Awards Won' },
  ];

return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background Image */}
        <Image
          src="/images/p01(1).png"
          alt="Space background"
          layout="fill"
          className="object-cover opacity-50"
        />
      
     


      {/* Content Container */}  
      <div className="container mx-auto px-4 relative z-10">  
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">  
          {/* Left side - Astronaut */}  
          <div className="lg:w-1/2">  
            <img  
              src="/images/1 6.png"  
              alt="Floating astronaut"  
              className="w-full h-auto max-w-lg mx-auto animate-float"  
            />  
          </div>  

          {/* Right side - Content */}  
          <div className="lg:w-1/2">  
            <h2 className="text-4xl font-bold mb-6">—ABOUT US</h2>  
            <p className="text-gray-300 text-lg mb-16">  
              Our expertise, as well as our passion for web design, sets us apart from other agencies.  
            </p>  

            {/* Stats Grid */}  
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">  
              {stats.map((stat, index) => (  
                <div key={index} className="text-center group">  
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-900/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-700/50 transition-all duration-300">  
                    {stat.icon}  
                  </div>  
                  <div className="text-3xl font-bold mb-2">  
                    {stat.number}{stat.prefix}  
                  </div>  
                  <div className="text-sm text-gray-400 whitespace-pre-line">  
                    {stat.label}  
                  </div>  
                </div>  
              ))}  
            </div>  
          </div>  
        </div>  
      </div>  

      {/* Floating animation */}  
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