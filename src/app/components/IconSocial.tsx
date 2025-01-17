import React from 'react';
import { Linkedin, Phone, Mail, MapPin } from 'lucide-react';

import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  Icon: LucideIcon;
}

const SocialIcon = ({ Icon }: SocialIconProps) => (
  <div className="relative group cursor-pointer">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <div className="relative bg-slate-800 p-3 rounded-full border border-slate-700 group-hover:border-blue-400 transition duration-300">
      <Icon className="w-5 h-5 text-slate-300 group-hover:text-blue-400" />
    </div>
  </div>
);

interface TestimonialCardProps {
  name: string;
  role: string;
}

const TestimonialCard = ({ name, role }: TestimonialCardProps) => (
  <div className="relative bg-slate-800/50 rounded-lg p-4 border border-slate-700 min-w-[250px]">
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-slate-200 font-medium">{name}</h4>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"/>
          ))}
        </div>
      </div>
      <p className="text-sm text-slate-400">
        Our expertise, as well as our passion for web design, sets us apart from...
      </p>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 overflow-hidden">
          <img 
            src="/api/placeholder/40/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3 h-3 text-blue-400">❝</div>
      </div>
    </div>
  </div>
);

const ContactSection = () => {
  const testimonials = [
    { name: 'ARIYA MOOSAVI', role: 'Social Media' },
    { name: 'MIKE MOOSAVI', role: 'Social Media' },
    { name: 'ARIYA MOOSAVI', role: 'Social Media' },
    { name: 'ALI MOOSAVI', role: 'Social Media' },
    { name: 'ARIYA MOOSAVI', role: 'Social Media' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-16">
          <SocialIcon Icon={Linkedin} />
          <SocialIcon Icon={Phone} />
          <SocialIcon Icon={Mail} />
          <SocialIcon Icon={MapPin} />
        </div>

        {/* Phone Number */}
        <div className="text-center mb-20">
          <h3 className="text-blue-400 text-lg font-medium mb-2">PHONE NUMBER</h3>
          <p className="text-slate-200 text-2xl">+44 55667788</p>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none" />
          <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
