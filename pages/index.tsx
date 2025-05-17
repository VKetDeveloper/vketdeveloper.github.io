'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Alert } from "@heroui/alert";
// import { Link } from '@heroui/link'; // 使用しないのでコメントアウト
import { GithubIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Divider } from '@heroui/divider';

// Header コンポーネント
const Header = () => (
  <header className="py-4 border-b border-gray-800">
    <div className="container mx-auto px-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">
        <a href="/" className="hover:text-gray-300 transition-colors">
          VketREAL 有志開発チーム
        </a>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://github.com/VKetDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <GithubIcon size={20} />
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

// Footer コンポーネント
const Footer = () => (
  <footer className="py-6 border-t border-gray-800">
    <div className="container mx-auto px-4 text-center text-gray-400">
      &copy; {new Date().getFullYear()} VketREAL Development Department All rights reserved.
    </div>
  </footer>
);

// Section コンポーネント
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  </section>
);

// Home コンポーネント
const Home: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>VketREAL 有志開発チーム on Github</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
        />
      </Head>
      <Header />
      <main>
        <Alert
          className="bg-gray-800 text-gray-300"
          title="お知らせ"
          description="現在サイトのリニューアル中のため、デザインが崩れている場合があります。"
          icon={<GithubIcon size={20} />}
        />
        <Section title="VketREAL 有志開発チーム">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VketREAL 有志開発チームは、熱意のある有志スタッフの方々とシステムを作って欲しい VketReal 札幌チームが連携して生まれたチームです。
          </motion.p>
        </Section>
        <Section title="私たちのミッション" id="mission">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ユーザーもスタッフも、Vket に関わるすべての人が気持ちよく活動できる場所であること。<br />
            それは、VketREAL の開発チームが目指す「Vket のリアルイベントを支える」ことに他なりません。<br />
            私たちは、Vket のリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
            それが、私たちが何より大切にしていることです。
          </motion.p>
        </Section>
        <Section title="募集" id="recruitment">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            多様性を重視する有志開発チームでは、「あなたらしさ」を歓迎します。<br />
            異なるスキルを持った人々が集まることは、生産性と革新性を高めることにつながるからです。<br />
            あなたが動けば、あなたの未来も、Vket の未来も変わる。 この環境をどう生かすかは、あなた次第です。<br />
            バーチャル ⇆ リアル 世界を開く“鍵”になってください。
          </motion.p>
        </Section>
        <Section title="活動内容" id="activities">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            VketREAL の開発チームは、Vket のリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
            私たちは、Vket のリアルイベントをより良いものにするために、日々努力しています。
          </motion.p>
        </Section>
        <Section title="開発" id="development">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              <a
                href="https://github.com/VKetDeveloper/VketToast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Vket Toast
              </a>
            </h3>
            <p className="text-gray-400">lang: SwiftUI</p>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
