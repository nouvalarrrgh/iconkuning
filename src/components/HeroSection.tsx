import React from 'react';
import AdvancedPixelText3D from './AdvancedPixelText3D';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="beranda" className="hero-section-with-floor">
       {/* Lantai Kotak 3D Putih Glow */}
       <div className="hero-floor-grid-3d"></div>
       
       {/* Pendaran Cahaya Global di Donut */}
       <div className="global-pendaran"></div>

       {/* Konten Teks Hero (Z-index tinggi) */}
       <div className="hero-content-wrapper">
          {/* 1. Teks Tahun Kecil 3D (Warna Indigo) */}
          <div className="main-year-small">
             <span className="layer shadow-deep">2026</span>
             <span className="layer main-text">2026</span>
          </div>

          {/* 2. Judul Utama SUPER-TEBAL 3D */}
          <div className="main-title-3d-advanced">
             {/* INFORMATICS - Tipe Orange dengan Rainbow Aura */}
             <AdvancedPixelText3D text="INFORMATICS" type="orange" />
             
             {/* COMPETITION - Tipe Blue dengan Blue Aura */}
             <AdvancedPixelText3D text="COMPETITION" type="blue" className="offset-down-1" />
             
             {/* (ICON) - Tipe Green dengan Green Aura */}
             <AdvancedPixelText3D text="(ICON)" type="green" className="offset-down-2" />
          </div>

          {/* Bagian Donut Tengah */}
          <div className="central-element-3d">
             <div className="donut-group-thick">
                <div className="donut-segment thick-green"></div>
                <div className="donut-segment thick-blue"></div>
                <div className="floating-text-group">
                   <div className="icon-lab-text-3d">ICON LAB</div>
                </div>
             </div>
          </div>

          {/* Registration Button */}
          <div className="registration-section-3d" style={{ position: 'relative', zIndex: 30 }}>
            <div className="sub-header-text-deep">PENDAFTARAN SEGERA DIBUKA!</div>
            <button className="daftar-link" style={{ cursor: 'pointer', padding: '10px 20px' }}>
              DAFTAR SEKARANG!
            </button>
          </div>
       </div>
    </section>
  );
};

export default HeroSection;