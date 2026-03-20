import React from 'react';
import './AdvancedPixelText3D.css';

interface AdvancedPixelText3DProps {
  text: string;
  type: 'orange' | 'blue' | 'green';
  className?: string;
}

const AdvancedPixelText3D: React.FC<AdvancedPixelText3DProps> = ({ text, type, className }) => {
  return (
    <span className={`advanced-pixel-text-3d ${className || ''} ${type}`}>
      {/* Lapisan Aura/Pendaran */}
      <span className="text-layer bloom-background" data-text={text}></span>
      
      {/* Lapisan Bayangan 3D Tebal */}
      <span className="text-layer shadow-background" data-text={text}></span>
      
      {/* Lapisan Teks Utama */}
      <span className="text-layer main-text">{text}</span>
    </span>
  );
};

export default AdvancedPixelText3D;