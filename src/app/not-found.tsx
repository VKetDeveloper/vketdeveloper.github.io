'use client';

import './globals.css'; // 先に読み込み
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>ページが見つかりません | VketREAL</title>
      </Head>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Section title="404 Not Found">
            <h1>404</h1>
            <h2>ページが見つかりません</h2>
            <p>お探しのページは存在しないか、移動されました。</p>
            <Link href="/">ホームに戻る</Link>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
