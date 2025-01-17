import React from 'react';


interface ServiceCardProps {
  title: string;
  imagePlaceholder: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imagePlaceholder, index }) => (
  <div className={`relative w-full max-w-md mx-auto mb-16 ${index !== 0 ? '-mt-12' : ''}`}>
    <div className="group cursor-pointer">
      <div className="relative bg-slate-900 rounded-xl p-6 hover:bg-slate-800 transition-all duration-300 border border-slate-700">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <h3 className="text-blue-400 text-xl font-semibold">{title}</h3>
            <p className="text-slate-400 text-sm">
              Our expertise, as well as our passion for web design, sets us apart from...
            </p>
          </div>
          <div className="relative w-48 h-32 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-slate-800 rounded-lg">
              <span className="text-center block py-12 text-slate-500">{imagePlaceholder}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="Next">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ServicesShowcase = () => {
  const services = [
    {
      title: "Application UI Design",
      imagePlaceholder: "Image 1"
    },
    {
      title: "Website UI Design",
      imagePlaceholder: "Image 2"
    },
    {
      title: "Graphic Design",
      imagePlaceholder: "Image 3"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="relative space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imagePlaceholder={service.imagePlaceholder}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;