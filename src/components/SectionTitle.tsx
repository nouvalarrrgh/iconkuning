import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  text: string;
  type?: 'green' | 'blue' | 'orange' | 'red';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, type = 'green', className = '' }) => {
  return (
    <div className={`section-title-container ${className}`}>
      <h2 className={`section-title-label ${type}`} data-text={text}>
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
