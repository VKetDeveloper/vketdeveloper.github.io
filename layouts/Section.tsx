// layouts/Section.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => (
  <section id={id} className="py-12">
    <div className="container mx-auto px-4">
      {title && <h2 className="text-3xl font-bold text-white mb-6 text-center">{title}</h2>}
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  </section>
);

export default Section;