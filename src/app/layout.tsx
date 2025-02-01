
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
import SpaceAbout from './components/SpaceAbout';
import TimelineStats from './components/TimelineStats';
import ServicesShowcase from './components/ServicesShowcase';
import PortfolioHero from './components/PortfolioHero';
import AppShowcase from './components/AppShowcase';
import AboutUS from './components/AboutUs';
import MiniPortfolio from './components/MiniPortfolio';
import SpaceContactHero from './components/SpaceContactHero';
import SocialTestimonials from './components/SocialTestimonials';



const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Leenx Agency</title>
        <meta name="description" content="Leenx Agency - Web Design and Development" />
      </head>
      <body className='bg-black'>
       
          <main className="">{children}</main>
          {/* <Services />
          <About /> */}
          {/* <Portfolio />
          <Contact />
          <News /> */}
          {/* <LastPage />
          <HeroSection />
          <GraphicDesignServices />
          <SpaceDesign />
          <Contact />
          <LastPage />
          <SpaceAbout />
          <AboutUS />
          <Contact />
          <LastPage />
          <TimelineStats />
          <PortfolioHero />
          <MiniPortfolio />
          <ServicesShowcase />
          <PortfolioHero />
          <AppShowcase />
          <Contact />
          <LastPage />
          <SpaceContactHero />
          <SocialTestimonials />
          <LastPage/> */}
     
      </body>
    </html>
  );
};

export default Layout;