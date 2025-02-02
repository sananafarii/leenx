import Image from "next/image";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className="text-white pt-10 main-page px-56 min-h-screen">
      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main className="flex">
        <div className="">
          <Image
            src="/images/astro.png"
            alt="Astronaut floating in space"
            width={360}
            height={535}
            className="animate-float"
          />
        </div>
        <div className="">
          <h1 className="text-6xl font-bold mb-6 mt-14">
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
        </div>

        {/* Astronaut Image */}
      </main>
    </div>
  );
}
