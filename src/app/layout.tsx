
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
        </div>
      </body>
    </html>
  );
};

export default Layout;