import React from 'react';
import './App.css';
import AdvancedPixelText3D from './components/AdvancedPixelText3D';

const App: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Lapisan Latar Belakang & Efek Sparkles Intens */}
      <div className="background-layers">
        <div className="stars-layer-intensified"></div>
        <div className="perspective-grid-bold"></div>
        <div className="global-pendaran"></div> {/* Pendaran cahaya besar di donut */}
      </div>

      {/* Navigasi Retro Terstruktur (Kuning/Beige) */}
      <nav className="retro-navbar">
        <div className="nav-logo-group">
          {/* Logo Placeholder (Ganti teks dengan gambar asli nanti) */}
          <span className="logo-placeholder">UNNES</span>
          <span className="logo-divider">|</span>
          <span className="logo-placeholder sub">HIMA ILKOM FMIPA UNNES</span>
        </div>
        <div className="nav-links">
          <a href="#beranda">Beranda</a>
          <a href="#kompetisi">Kompetisi</a>
          <a href="#timeline">Timeline</a>
          <a href="#faq">FAQ</a>
          <a href="#daftar" className="daftar-link">Daftar</a>
        </div>
      </nav>

      {/* Konten Utama Hero Section */}
      <main className="main-content">
        
        {/* Teks Tahun Kecil 3D */}
        <div className="main-year-small">
           <span className="layer shadow-deep">2026</span>
           <span className="layer main-text">2026</span>
        </div>

        {/* Judul Utama SUPER-TEBAL 3D (Fokus Utama) */}
        <div className="main-title-3d-advanced">
          <AdvancedPixelText3D text="INFORMATICS" type="orange" />
          <AdvancedPixelText3D text="COMPETITION" type="blue" className="offset-down-1" />
          <AdvancedPixelText3D text="(ICON)" type="green" className="offset-down-2" />
        </div>

        {/* Elemen Tengah Donut Tebal dengan Sparkles Terbang */}
        <div className="central-element-3d">
          <div className="donut-group-thick">
            <div className="donut-segment thick-green"></div>
            <div className="donut-segment thick-blue"></div>
            {/* Teks Terapung di Donut */}
            <div className="floating-text-group">
                <div className="icon-lab-text-3d">ICON LAB</div>
            </div>
          </div>
          {/* Sparkles Terbang Independen */}
          <div className="flying-sparkle s1"></div>
          <div className="flying-sparkle s2"></div>
          <div className="flying-sparkle s3"></div>
        </div>

        {/* Bagian Pendaftaran 3D */}
        <div className="registration-section-3d">
            <div className="sub-header-text-deep">PENDAFTARAN WORKSHOP!</div>
            <button className="cta-button-3d-multi">
                <span className="btn-layer shadow-btn">DAFTAR SEKARANG!</span>
                <span className="btn-layer main-btn">DAFTAR SEKARANG!</span>
            </button>
        </div>

        {/* Jendela Jendela OS di Bawah (Timeline) */}
        <div className="os-window-timeline-deep">
            <div className="window-header-deep">
                <span className="window-title-deep">Timeline</span>
                <div className="window-controls-deep">_ [] X</div>
            </div>
            <div className="window-content-deep">
                <div className="timeline-visualization-deep">
                    {/* Visualisasi Timeline di gambar */}
                    <div className="node-deep node1"></div>
                    <div className="line-deep line1"></div>
                    <div className="node-deep node2 blue"></div>
                    <div className="line-deep line2"></div>
                    <div className="node-deep node3 green"></div>
                    <div className="line-deep line3"></div>
                    <div className="node-deep node4 red"></div>
                </div>
            </div>
        </div>

      </main>

      {/* Footer Navigasi Sederhana */}
      <footer className="footer-nav-deep">
        <a href="#tentang">Tentang</a>
        <a href="#kompetisi">Kompetisi</a>
        <a href="#prizes">Prizes</a>
        <a href="#timeline">Timeline</a>
        <a href="#kontak">Kontak</a>
      </footer>

      {/* CRT Scanline Global Overlay */}
      <div className="crt-overlay-global"></div>
    </div>
  );
};

export default App;