import React from 'react';
import './FAQSection.css';

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title">FAQ / BANTUAN</h2>

      <div className="faq-container">

        <details className="pixel-details">
          <summary className="pixel-summary">Siapa saja yang bisa mendaftar ICON 2026?</summary>
          <div className="faq-answer">
            <p>Kompetisi ini terbuka untuk seluruh siswa SMA/SMK sederajat dan Mahasiswa aktif di seluruh Indonesia, tergantung pada kategori lomba yang dipilih.</p>
          </div>
        </details>

        <details className="pixel-details">
          <summary className="pixel-summary">Bagaimana cara membayar biaya pendaftaran?</summary>
          <div className="faq-answer">
            <p>Pembayaran dapat dilakukan melalui transfer bank atau e-wallet ke nomor rekening resmi yang tertera pada dashboard pendaftaran peserta.</p>
          </div>
        </details>

        <details className="pixel-details">
          <summary className="pixel-summary">Apakah boleh mendaftar lebih dari satu cabang lomba?</summary>
          <div className="faq-answer">
            <p>Tentu saja! Satu peserta diperbolehkan mengikuti maksimal 2 cabang lomba yang berbeda selama jadwal pelaksanaannya tidak bentrok.</p>
          </div>
        </details>

        <details className="pixel-details">
          <summary className="pixel-summary">Di mana saya bisa mendapatkan buku panduan (Guidebook)?</summary>
          <div className="faq-answer">
            <p>Buku panduan lengkap dapat diunduh melalui tombol "Download Guidebook" yang ada di masing-masing halaman kategori lomba.</p>
          </div>
        </details>

      </div>
    </section>
  );
};

export default FAQSection;