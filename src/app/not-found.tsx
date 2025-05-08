'use client';

import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import './globals.css'; // スタイルを読み込み

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>ページが見つかりません | VketREAL</title>
      </Head>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Section title="404 Not Found" style={{ margin: '0 auto', maxWidth: '600px' }}>
            <h1>404</h1>
            <h2>ページが見つかりません</h2>
            <p>お探しのページは存在しないか、移動されました。</p>
            <Link href="/" legacyBehavior>
              <a>ホームに戻る</a>
            </Link>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
