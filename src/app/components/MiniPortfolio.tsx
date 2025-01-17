import React from 'react';

const MiniPortfolio = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] bg-slate-950 overflow-hidden">
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      
      {/* Stars effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-slate-950 [background-size:32px_32px] opacity-30" />
      </div>
      
      {/* Astronaut Image */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full">
        <img 
          src="/images/spacedesign.png"
          alt="Astronaut"
          className="object-contain object-bottom w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto h-full px-4">
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            OUR PORTFOLIO
          </h1>
          <p className="text-slate-300 text-lg">
            Our expertise, as well as our passion for web design, sets us apart from other agencies.
          </p>
        </div>
      </div>
      
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
};

export default MiniPortfolio;