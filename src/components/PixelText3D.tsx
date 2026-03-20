import React from 'react';
import './PixelText3D.css';

interface PixelText3DProps {
  text: string;
  gradientStart: string;
  gradientEnd: string;
  className?: string;
}

const PixelText3D: React.FC<PixelText3DProps> = ({ text, gradientStart, gradientEnd, className }) => {
  const gradientStyle = {
    background: `linear-gradient(${gradientStart}, ${gradientEnd})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <span className={`pixel-text-3d ${className}`}>
      <span className="layer shadow-1">{text}</span>
      <span className="layer shadow-2">{text}</span>
      <span className="layer main-text" style={gradientStyle}>{text}</span>
    </span>
  );
};

export default PixelText3D;