'use client';

import React from 'react';
import { ElCard, ElCardHeader } from 'element-ui'; // Element UI のコンポーネントをインポート
import ElCardBody from 'element-ui'; // ElCardBody をデフォルトエクスポートとしてインポート

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', style }) => {
  return (
    <section className={`mb-6 ${className}`} style={style}>
      <ElCard class="shadow-lg rounded-lg overflow-hidden">
        <ElCardHeader>
          <h3 className="text-xl font-semibold">{title}</h3>
        </ElCardHeader>
        <ElCardBody>
          <p className="text-base text-muted-foreground leading-relaxed">{children}</p>
        </ElCardBody>
      </ElCard>
    </section>
  );
};

export default Section;
