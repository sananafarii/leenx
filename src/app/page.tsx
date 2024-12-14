import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import React from "react";
import Layout from "./layout";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-image">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center p-4">
          <h2 className="text-4xl font-bold">Call Us</h2>
          <p className="mt-2 text-lg">Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>
          <a href="#contact" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Contact Us</a>
        </div>

        <div className="mt-8">
            <Image 
              src="/images/astronaut-in-outer-space.png" 
              alt="Astronaut"
              width={300} 
              height={400} 
              className="animate-bounce" 
            />
        </div>
      </section>
    </Layout>
  );
}