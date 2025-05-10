'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../src/components/ui/card';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', style }) => {
  return (
    <section className={`mb-6 ${className}`} style={style}>
      <Card className="shadow-lg rounded-lg overflow-hidden bg-white">
        <CardHeader className="p-4 border-b border-gray-200">
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-base text-muted-foreground leading-relaxed">
          {children}
        </CardContent>
      </Card>
    </section>
  );
};

export default Section;
