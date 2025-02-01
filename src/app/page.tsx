import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white main-page pt-10">
      {/* Navigation */}
      <nav className="flex justify-between items-center mx-56">
        <button className="w-24 bg-gradient-to-r from-[#5ca8ff] to-[#ffffff] font-medium text-[#415588] px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Call Us
        </button>

        <div className=" p-4 h-[70px] rounded-[35px] flex items-center space-x-8 bg-[rgba(0,0,0,0.1)]">
          <a
            href="#"
            className="hover:text-blue-400 border-b-2 border-blue-500"
          >
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            Our Services
          </a>
          <a href="#" className="hover:text-blue-400">
            About Us
          </a>
          <a href="#" className="hover:text-blue-400">
            Portfolio
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact Us
          </a>
          <a href="#" className="hover:text-blue-400">
            Blog
          </a>
        </div>
        <Image  alt="leenx logo" src="/logo.png" width={60} height={16}/>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-16 flex justify-between items-center relative z-10">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-6">
            LEENX
            <br />
            AGENCY
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Our expertise, as well as our passion for web design, sets us apart
            from other agencies.
          </p>

          <button className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Call Us
          </button>

          {/* Contact Information */}
          <div className="mt-16 space-y-2">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="flex items-center gap-2">E: linksteam@gmail.com</p>
            <p className="flex items-center gap-2">T: +7 55667788</p>
          </div>

          {/* Social Media */}
          <div className="fixed left-4 bottom-16 flex flex-col gap-4"></div>
        </div>

        {/* Astronaut Image */}
        <div className="relative">
          <Image
            src="/images/astronaut-in-outer.png"
            alt="Astronaut floating in space"
            width={500}
            height={600}
            className="animate-float"
          />
        </div>
      </main>
    </div>
  );
}
