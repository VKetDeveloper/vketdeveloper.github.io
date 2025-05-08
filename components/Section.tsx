import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="section">
    <h2 className="section-title">{title}</h2>
    <p>{children}</p>
  </div>
);

export default Section;
