import React from 'react';
import { Phone, Linkedin, Mail, MapPin } from 'lucide-react';

const SocialTestimonials = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, href: "#" },
    { icon: <Phone className="w-6 h-6" />, href: "#" },
    { icon: <Mail className="w-6 h-6" />, href: "#" },
    { icon: <MapPin className="w-6 h-6" />, href: "#" },
  ];

  const testimonials = [
    {
      name: "ARIYA MOOSAVI",
      role: "Social Media",
      rating: 2,
      text: "Our expertise, as well as our passion for web design, sets us apart from other web design.",
      image: "/api/placeholder/40/40"
    },
    {
      name: "MIKE MOOSAVI",
      role: "Social Media",
      rating: 3,
      text: "Our expertise, as well as our passion for web design, sets us apart from other web design.",
      image: "/api/placeholder/40/40"
    },
    {
      name: "ARIYA MOOSAVI",
      role: "Social Media",
      rating: 2,
      text: "Our expertise, as well as our passion for web design, sets us apart from other web design.",
      image: "/api/placeholder/40/40"
    },
    {
      name: "ALI MOOSAVI",
      role: "Social Media",
      rating: 2,
      text: "Our expertise, as well as our passion for web design, sets us apart from other web design.",
      image: "/api/placeholder/40/40"
    },
    {
      name: "ARIYA MOOSAVI",
      role: "Social Media",
      rating: 2,
      text: "Our expertise, as well as our passion for web design, sets us apart from other web design.",
      image: "/api/placeholder/40/40"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      {/* Social Links */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="flex justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-16 h-16 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 border border-gray-700"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Phone Number */}
        <div className="text-center mt-12">
          <h2 className="text-blue-500 text-lg mb-2">— PHONE NUMBER</h2>
          <p className="text-2xl font-bold">+44 55667788</p>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="max-w-full overflow-hidden px-4">
        <div className="flex gap-6 animate-scroll">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 5));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialTestimonials;