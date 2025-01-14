// pages/news.js  
import React from 'react';  
import Head from 'next/head';  
import Image from 'next/image';  

export default function News() {  
  const projects = [  
    {  
      title: "Web Design",  
      image: "/images/Newsimage/image.png",  
     
    },  
    {  
      title: "Graphic Design",  
      image: "/images/Newsimage/image (1).png",  
     
    },  
    {  
      title: "UI/UX Design",  
      image: "/images/Newsimage/image (2).png",  
       
    },  
  ];  

  return (  
    <div className="relative min-h-screen bg-black text-white">  
      <Head>  
        <title>LEENX AGENCY - News</title>  
        <link rel="icon" href="/favicon.ico" />  
      </Head>  
      
      {/* Background Image */}  
      <div className="absolute inset-0 z-0">  
        <Image  
          src="/images/p01(1).png"  
          alt="Space background"  
          fill  
          className="object-cover opacity-50"  
        />  
      </div>  

      {/* Main Content */}  
      <main className="container mx-auto px-6 py-20 relative z-10">  
        <div className="flex items-center justify-between mb-12">  
          <div>  
            <h1 className="text-3xl font-bold mb-4">What&apos;s New?</h1>  
            <p className="max-w-lg">  
              Our expertise, as well as our passion for web design, sets us apart from other agencies.  
            </p>  
          </div>  
          <div>  
            <Image  
              src="/images/Newsimage/NewsAs.png"  
              alt="Astronaut reading"  
              width={300}  
              height={300}  
              className="object-contain"  
            />  
          </div>  
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {projects.map((project, index) => (  
            <div key={index} className="relative">  
              <Image  
                src={project.image}  
                alt={project.title}  
                width={500}  
                height={300}  
                className="rounded-md object-cover mb-4"  
              />  
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>  
              <p className="mb-4">{project.description}</p>  
              <button className="text-blue-400 hover:text-blue-300">  
                Read More  
              </button>  
            </div>  
          ))}  
        </div>  

        <div className="flex justify-center space-x-4 mt-8">  
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">←</button>  
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">→</button>  
        </div>  
      </main>  
    </div>  
  );  
}