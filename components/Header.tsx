import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header>
    <div className="logo">VketREAL有志開発チーム on Github</div>
    <nav>
      <ul className="nav-menu">
        <li><Link href="/">Home</Link></li>
        {/* <li><Link href="/about">About</Link></li> */}
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/link">Link</Link></li>
        {/* <li><Link href="/contact">Contact</Link></li> */}
      </ul>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #f8f8f8;
        border-bottom: 1px solid #ddd;
      }

      .logo {
        font-weight: bold;
        font-size: 1.2rem;
      }

      nav ul.nav-menu {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
      }

      nav ul.nav-menu li a {
        text-decoration: none;
        color: #333;
      }

      nav ul.nav-menu li a:hover {
        text-decoration: underline;
      }
    `}</style>
  </header>
);

export default Header;
