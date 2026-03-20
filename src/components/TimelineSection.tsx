import React from 'react';
import './TimelineSection.css';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">TIMELINE QUEST</h2>

      <div className="timeline-container">

        {/* Node 1 */}
        <div className="timeline-item left">
          <div className="timeline-date">10 MEI - 20 JUNI</div>
          <div className="timeline-content box-glow-yellow">
            <h3>Pendaftaran Gelombang 1</h3>
            <p>Segera daftarkan timmu sebelum kehabisan slot dan harga naik!</p>
          </div>
        </div>

        {/* Node 2 */}
        <div className="timeline-item right">
          <div className="timeline-date">21 JUNI - 10 JULI</div>
          <div className="timeline-content box-glow-blue">
            <h3>Pendaftaran Gelombang 2</h3>
            <p>Kesempatan terakhir untuk bergabung dalam kompetisi ICON 2026.</p>
          </div>
        </div>

        {/* Node 3 */}
        <div className="timeline-item left">
          <div className="timeline-date">15 JULI 2026</div>
          <div className="timeline-content box-glow-green">
            <h3>Babak Penyisihan (Online)</h3>
            <p>Pertandingan sengit secara daring untuk menentukan siapa yang layak lolos.</p>
          </div>
        </div>

        {/* Node 4 */}
        <div className="timeline-item right">
          <div className="timeline-date">25 JULI 2026</div>
          <div className="timeline-content box-glow-red">
            <h3>GRAND FINAL (Offline)</h3>
            <p>Pertandingan puncak yang diselenggarakan di Universitas Negeri Semarang!</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;