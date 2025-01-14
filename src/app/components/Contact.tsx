import Image from 'next/image';
import Head from 'next/head';
import React from 'react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>LEENX AGENCY - Contact</title>
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

      <main className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex items-center justify-between">
          <div className="w-1/2 max-w-md">
            <h1 className="text-3xl font-bold mb-6">CONTACT US</h1>
            <p className="mb-8">
              Our expertise, as well as our passion for web design, sets us apart from other agencies.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-gray-800 rounded-lg p-3"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-gray-800 rounded-lg p-3"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full bg-gray-800 rounded-lg p-3 h-32"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          <div className="w-1/2">
            <Image
              src="/images/Contactusimage.png"
              alt="Astronaut"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}