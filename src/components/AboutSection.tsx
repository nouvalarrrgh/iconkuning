import React from 'react';
import SectionTitle from './SectionTitle';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="about-section">
      <SectionTitle text="TENTANG ICON 2026" type="blue" />
      
      <div className="about-container">
        <div className="pixel-card about-card">
          <div className="card-header">SYSTEM_INFO.EXE</div>
          <div className="card-body">
            <p className="about-text">
              <strong>INFORMATICS COMPETITION (ICON)</strong> adalah ajang kompetisi IT bergengsi tahunan yang diselenggarakan oleh <strong>HIMA ILKOM Universitas Negeri Semarang</strong>. 
            </p>
            <p className="about-text">
              Tahun ini, ICON 2026 hadir dengan tema <strong>"Arcade of Innovation"</strong>, mengajak para pelajar dan mahasiswa di seluruh Indonesia untuk menunjukkan skill, kreativitas, dan sportivitas dalam berbagai cabang lomba teknologi.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">500+</span>
                <span className="stat-label">PARTICIPANTS</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">15.5JT+</span>
                <span className="stat-label">PRIZE POOL</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">4</span>
                <span className="stat-label">MAIN EVENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
