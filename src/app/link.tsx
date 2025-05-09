// src/app/link.tsx
'use client';

import './globals.css';
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import Link from 'next/link';

const LinkPage: React.FC = () => {  // コンポーネント名を `LinkPage` に変更
  return (
    <>
      <Head>
        <title>関連イベント | VketREAL有志開発チーム on Github</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
        />
      </Head>
      <div className="app">
        <Header />
        <main>
          <Section title="関連イベント">
            <h3>VketREAL in 札幌</h3>
            <p>
              <Link href="https://vris.jp/" target="_blank" rel="noopener noreferrer">
                VketREAL in 札幌
              </Link>は、世界最大級のメタバースイベント 「バーチャルマーケット(Vket)」から派生した、 「バーチャルの姿のままリアルに飛び出す！」リアルイベント！初の有志主催で開催！
            </p>
            <h3>VketREAL</h3>
            <p>
              <Link href="https://vket.com/lp/2025Summer_real" target="_blank" rel="noopener noreferrer">
                VketREAL
              </Link>
              は、バーチャルとリアルをつなぐ新しい形のイベントです。<br />
              バーチャルとリアルの境界を越えた体験を提供します。
            </p>
            <h3>Vket</h3>
            <p>
              <Link href="https://vket.com/" target="_blank" rel="noopener noreferrer">
                Vket
              </Link>
              メタバース上にある会場で、アバターなどの3Dアイテムやリアル商品（洋服、PC、飲食物など）を売り買いできる世界最大級のVRイベント。<br />
              バーチャルリアリティマーケットイベントにおけるブースの最多数としてギネス世界記録™に認定されています。
            </p>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LinkPage;  // 変更後の名前をエクスポート
