import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CompetitionsSection from './components/CompetitionsSection';
import TimelineSection from './components/TimelineSection';
import SponsorsSection from './components/SponsorsSection'; 
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

const App: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar /> 
      
      {/* Background Layers Global */}
      <div className="background-layers">
        <div className="stars-layer-intensified"></div>
      </div>

      <div className="crt-overlay-global"></div>

      <main className="main-content">
        {/* 1. Beranda */}
        <section id="beranda">
          <HeroSection />
        </section>

        {/* 2. Tentang Kami */}
        <AboutSection />

        {/* 3. Kompetisi */}
        <section id="acara">
          <CompetitionsSection />
        </section>

        {/* 4. Timeline */}
        <section id="timeline">
          <TimelineSection />
        </section>

        {/* 5. Sponsorship */}
        <section id="sponsorship">
          <SponsorsSection />
        </section>

        {/* 6. FAQ */}
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      {/* 7. Kontak */}
      <FooterSection />
    </div>
  );
};

export default App;