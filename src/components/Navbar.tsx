import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="retro-navbar">
      <div className="nav-logo-group">
        <span className="logo-text">UNNES</span>
        <span className="logo-divider">|</span>
        <span className="logo-text sub">HIMA ILKOM</span>
      </div>

      <div className="nav-links">
        <a href="#beranda">Beranda</a>
        <a href="#tentang-kami">Tentang Kami</a>
        <a href="#acara">Kompetisi</a>
        <a href="#timeline">Timeline</a>
        <a href="#sponsorship">Sponsorship</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" className="btn-hubungi">Hubungi Kami</a>
      </div>
    </nav>
  );
};

export default Navbar;