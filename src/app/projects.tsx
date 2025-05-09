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

const projects: React.FC = () => {
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
          <Section title="プロジェクト">
            <h3>準備中</h3>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default projects;
