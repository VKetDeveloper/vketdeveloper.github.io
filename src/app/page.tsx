'use client'; // App RouterのClient Componentなら必要

import React from 'react';
import dynamic from 'next/dynamic';
import 'core-js/actual/promise';
import 'core-js/actual/set';
import 'core-js/actual/iterator';
import 'core-js/actual/array/from';
import 'core-js/actual/array/flat-map';
import 'core-js/actual/structured-clone';
import {autoUpdate} from '@floating-ui/react';
import {useFloating} from '@floating-ui/react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>VketREAL有志開発チーム on Github</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
        />
      </Head>
      <div className="app">
        <Header />
        <main>
          <Section title="私たちのミッション">
            ユーザーもスタッフも、Vketに関わるすべての人が気持ちよく活動場所であること。<br />
            それは、VketREALの開発チームが目指す「Vketのリアルイベントを支える」ことに他なりません。<br />
            私たちは、Vketのリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
            それが、私たちが何より大切にしていることです。
          </Section>
          <Section title="募集">
            多様性を重視する有志開発チームでは、「あなたらしさ」を歓迎します。<br />
            異なるスキルを持った人々が集まることは、生産性と革新性を高めることにつながるからです。<br />
            あなたが動けば、あなたの未来も、Vketの未来も変わる。 この環境をどう生かすかは、あなた次第です。<br />
            バーチャル⇆リアル 世界を開く“鍵”になってください。
          </Section>
          <Section title="活動内容">
            VketREALの開発チームは、Vketのリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
            私たちは、Vketのリアルイベントをより良いものにするために、日々努力しています。
          </Section>
          <Section title="実績">
            <h3>準備中</h3>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
