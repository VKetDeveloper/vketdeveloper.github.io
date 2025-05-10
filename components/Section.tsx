'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@charcoal-ui/react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', style }) => {
  return (
    <section className={`mb-6 ${className}`} style={style}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </section>
  );
};

export default Section;
