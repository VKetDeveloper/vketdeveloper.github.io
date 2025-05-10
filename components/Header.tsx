'use client';

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-background border-b border-border shadow-sm">
    <div className="text-lg font-bold text-foreground">
      <Link href="/">VketREAL有志開発チーム on GitHub</Link>
    </div>
    <nav>
      <ul className="flex gap-4 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground hover:underline">
            Home
          </Link>
        </li>
        {/* <li>
          <Link href="/projects" className="hover:text-foreground hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/link" className="hover:text-foreground hover:underline">
            Link
          </Link>
        </li> */}
      </ul>
    </nav>
  </header>
);

export default Header;
