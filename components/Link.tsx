// src/app/link.tsx
import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a style={{ textDecoration: 'none', color: '#333' }}>{children}</a>
  </Link>
);

export default CustomLink; // 修正: 'link' → 'CustomLink' をエクスポート
