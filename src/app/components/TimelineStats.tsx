import React from 'react';

const TimelineStats = () => {
  const items = [
    {
      number: "1",
      title: "Projects World wide",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      number: "1",
      title: "Years of Experience",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      number: "1",
      title: "Skilled Professional",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      number: "2",
      title: "Attend Conferences",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Left circle with number */}
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold relative z-10">
              {item.number}
            </div>
            
            {/* Content box */}
            <div className="flex-grow bg-gray-800 rounded-lg p-6 text-white relative">
              {/* Small circle connector */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
              </div>
              
              <div className="pr-12">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineStats;