// components/Section.tsx

import React from 'react';

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties; // ← これを追加
}

const Section: React.FC<SectionProps> = ({ title, children, style }) => {
  return (
    <section style={style}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
