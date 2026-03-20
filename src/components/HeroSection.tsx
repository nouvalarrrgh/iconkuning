import React from 'react';
import PixelText3D from './PixelText3D'; // Komponen yang sudah kita buat sebelumnya
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="main-year">2026</div>

      <div className="main-title">
        <PixelText3D text="INFORMATICS" gradientStart="#ffcc80" gradientEnd="#ff7043" />
        <PixelText3D text="COMPETITION" gradientStart="#81d4fa" gradientEnd="#29b6f6" className="offset-down-1" />
        <PixelText3D text="(ICON)" gradientStart="#aed581" gradientEnd="#66bb6a" className="offset-down-2" />
      </div>

      <div className="central-element">
        <div className="donut-group">
          <div className="donut-segment green"></div>
          <div className="donut-segment blue"></div>
          <div className="floating-group">
            <div className="icon-lab-text">ICON LAB</div>
          </div>
        </div>
      </div>

      <div className="registration-section">
        {/* Copywriting dari repo: Biasanya ada CTA pendaftaran atau workshop */}
        <div className="sub-header-text">PENDAFTARAN SEGERA DIBUKA!</div>
        <button className="cta-button">DAFTAR SEKARANG!</button>
      </div>
    </section>
  );
};

export default HeroSection;