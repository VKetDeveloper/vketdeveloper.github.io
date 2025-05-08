'use client';

import Link from 'next/link';
import React from 'react';
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
      <div className="app">
        <Header />
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>ページが見つかりません</h2>
          <p>お探しのページは存在しないか、移動されました。</p>
          <Link href="/" legacyBehavior>
            <a>ホームに戻る</a>
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
