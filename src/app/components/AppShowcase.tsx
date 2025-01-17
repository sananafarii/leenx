import React from 'react';

const AppShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* First App Preview Section */}
        <section className="space-y-8">
          <div className="flex justify-center">
            <div className="bg-blue-600/20 p-8 rounded-3xl">
              <img 
                src="/images/lastpageimg/image (1).png" 
                alt="Wallpaper App Mockup" 
                className="w-[800px]"
                // Replace with your mockup of 3 phones showing the wallpaper app screens
              />
            </div>
          </div>
          
          <div className="space-y-6 text-center">
            <h2 className="text-blue-400 text-2xl font-bold">Wallpaper App UI Design</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* App Icon Design Section */}
        <section className="space-y-6">
          <h2 className="text-blue-400 text-2xl font-bold">App Icon Design</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <ul className="text-gray-400 space-y-2 list-disc ml-6">
            <li>Lorem ipsum dolor sit amet, consectetur</li>
            <li>Lorem ipsum dolor sit</li>
          </ul>

          {/* App Icon Display */}
          <div className="flex gap-6 items-start mt-8">
            <div className="w-24 h-24 bg-blue-500 rounded-2xl overflow-hidden">
              <img 
                src="/images/lastpageimg/image 20.png" 
                alt="App Icon" 
                className="w-full h-full object-cover"
                // Replace with your app icon design
              />
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="space-y-6">
          <h2 className="text-blue-400 text-2xl font-bold">Lorem ipsum Dolor Sit</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
          
          {/* Color Squares */}
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
            <div className="w-16 h-16 bg-white rounded-lg"></div>
          </div>
        </section>

        {/* Second App Preview */}
        <section className="space-y-8">
          <div className="flex items-center gap-8">
            <div className="bg-blue-600/20 p-6 rounded-3xl">
              <img 
                src="/images/lastpageimg/image.png" 
                alt="Wallpaper App Screens" 
                className="w-[600px]"
                // Replace with your second set of app screens
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-blue-400 text-2xl font-bold mb-4">Wallpaper App UI Design</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* Final App Icon Section */}
        <section className="space-y-6">
          <h2 className="text-blue-400 text-2xl font-bold">App Icon Design</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
          
          <ul className="text-gray-400 space-y-2 list-disc ml-6">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit consectetur</li>
          </ul>

          {/* Final App Screenshots */}
          <div className="flex gap-6 mt-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-blue-600/20 p-4 rounded-2xl">
                <img 
                  src={`/images/lastpageimg/image (1).png`}
                  alt={`App Screen ${index}`}
                  className="w-[200px]"
                  // Replace with your final app screens
                />
              </div>
            ))}
          </div>
        </section>

        {/* Final Description */}
        <section>
          <h2 className="text-blue-400 text-2xl font-bold mb-4">Wallpaper App UI Design</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AppShowcase;