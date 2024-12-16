import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">Leenx Agency</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
        <a href="#contact" className="bg-blue-500 px-4 py-2 rounded">Call Us</a>
        <div className="logo">
        <Image src="/images/LOGO.png" alt="Leenx Agency Logo" width={50} height={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
