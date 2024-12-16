// src/layout.tsx

import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import News from './components/news';
import Home from './components/Home';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <News />
      <Home />

    </div>
  );
};

export default Layout;
