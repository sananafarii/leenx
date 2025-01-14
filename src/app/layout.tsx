
'use client';

import '../styles/globals.css';

import Services from './components/services';
import About from './components/About';
import Portfolio from './components/portfolio';
import Contact from './components/Contact';
import News from './components/News';
import LastPage from './components/LastPage';
import HeroSection from './components/HeroSection';
import GraphicDesignServices from './components/GraphicDesignServices';
import React, { ReactNode } from 'react';
import SpaceDesign from './components/spacedesign';
import AboutPage from './components/AboutUs';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Leenx Agency</title>
        <meta name="description" content="Leenx Agency - Web Design and Development" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Services />
          <About />
          <Portfolio />
          <Contact />
          <News />
          <LastPage />
          <HeroSection />
          <GraphicDesignServices />
          <SpaceDesign />
          <AboutPage />
        </div>
      </body>
    </html>
  );
};

export default Layout;