import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="pixel-navbar">
      <div className="navbar-logo-group">
        <span className="logo-text">UNNES</span>
        <span className="logo-text">Atsasa</span>
        <span className="logo-text">HIMA ILKOM</span>
      </div>
      <div className="navbar-links">
        <a href="#hero">Beranda</a>
        <a href="#competitions">Kompetisi</a>
        <a href="#timeline">Timeline</a>
        <a href="#faq">FAQ</a>
      </div>
      <button className="navbar-cta">Login / Daftar</button>
    </nav>
  );
};

export default Navbar;