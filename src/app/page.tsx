import Layout from "./layout";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section className="relative flex items-center justify-center h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center p-4">
          <h2 className="text-4xl font-bold">Call Us</h2>
          <p className="mt-2 text-lg">
            Our expertise, as well as our passion for web design, sets us apart from other agencies.
          </p>
          <a href="#contact" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded">
            Call Us
          </a>
        </div>

        <div className="social-links absolute left-4 h-full flex flex-col justify-center space-y-4">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
          <Image
            src="/images/astronaut-in-outer-space.png"
            alt="Astronaut"
            width={360}
            height={535}
            className="animate-bounce"
          />

        <div className="contact-info absolute bottom-4 left-4">
          <p>E: links.team@gmail.com</p>
          <p>T: +7 55667788</p>
        </div>
      </section>
    </Layout>
  );
}