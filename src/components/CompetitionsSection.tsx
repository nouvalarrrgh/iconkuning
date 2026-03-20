import SectionTitle from './SectionTitle';

const CompetitionsSection: React.FC = () => {
  return (
    <section id="competitions" className="competitions-section">
      <SectionTitle text="KATEGORI KOMPETISI" type="green" />
      
      <div className="section-intro-container">
        <div className="pixel-card alert-card">
          <div className="card-header">MISSION_LOG.TXT</div>
          <div className="card-body">
            <p className="intro-text">
              Pilih tantanganmu dan buktikan kemampuanmu di kancah nasional. Setiap kategori dirancang untuk menguji batas inovasi dan kreativitasmu!
            </p>
          </div>
        </div>
      </div>

      <div className="competition-grid">
        {/* Kartu 1: Mobile Legends */}
        <div className="pixel-card card-green">
          <div className="card-header">_ [] X</div>
          <div className="card-body">
            <h3>E-SPORT (MLBB)</h3>
            <p>Tunjukkan skill mekanik dan kerja sama timmu di turnamen Mobile Legends terbesar!</p>
          </div>
        </div>

        {/* Kartu 2: LKTI */}
        <div className="pixel-card card-blue">
          <div className="card-header">_ [] X</div>
          <div className="card-body">
            <h3>LKTI NASIONAL</h3>
            <p>Tuangkan inovasimu dalam Lomba Karya Tulis Ilmiah tingkat nasional.</p>
          </div>
        </div>

        {/* Kartu 3: Game Dev */}
        <div className="pixel-card card-red">
          <div className="card-header">_ [] X</div>
          <div className="card-body">
            <h3>GAME DEV</h3>
            <p>Ciptakan game kreatif dan menangkan hadiah jutaan rupiah!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;