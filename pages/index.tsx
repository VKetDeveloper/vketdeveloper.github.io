'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { Alert } from "@heroui/alert";
import { GithubIcon } from '@/components/icons';
import { SeoHead } from '@/components/SeoHead';

const Header = () => (
  <header className="border-b border-gray-800 py-4">
    <div className="container mx-auto flex items-center justify-between px-4">
      <h1 className="text-2xl font-bold text-white">
        <a className="hover:text-gray-300 transition-colors" href="/">
          VketREAL 有志開発チーム
        </a>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              href="https://github.com/VKetDeveloper"
              rel="noopener noreferrer"
              target="_blank"
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

const Footer = () => (
  <footer className="border-t border-gray-800 py-6">
    <div className="container mx-auto px-4 text-center text-gray-400">
      &copy; {new Date().getFullYear()} VketREAL Development Department All rights reserved.
    </div>
  </footer>
);

const Section: React.FC<{ children: React.ReactNode; title: string; id?: string }> = ({
  title,
  children,
  id,
}) => (
  <section className="py-12" id={id}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  </section>
);

const Home: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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
      <SeoHead />
      <Header />
      <main>
        <Alert
          className="bg-gray-800 text-gray-300"
          description="現在サイトのリニューアル中のため、デザインが崩れている場合があります。"
          icon={<GithubIcon size={20} />}
          title="お知らせ"
        />
        <Section title="VketREAL 有志開発チーム">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block text-center">
              VketREAL 有志開発チームは、熱意のある有志スタッフの方々とシステムを作って欲しい
              VketReal 札幌チームが連携して生まれたチームです。
            </span>
          </motion.p>
        </Section>
        <Section id="mission" title="私たちのミッション">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ユーザーもスタッフも、Vket
            に関わるすべての人が気持ちよく活動できる場所であること。
            <br />
            それは、VketREAL
            の開発チームが目指す「Vket
            のリアルイベントを支える」ことに他なりません。<br />
            私たちは、Vket
            のリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
            それが、私たちが何より大切にしていることです。
          </motion.p>
        </Section>
        <Section id="recruitment" title="募集">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            多様性を重視する有志開発チームでは、「あなたらしさ」を歓迎します。
            <br />
            異なるスキルを持った人々が集まることは、生産性と革新性を高めることにつながるからです。<br />
            あなたが動けば、あなたの未来も、Vket
            の未来も変わる。
            この環境をどう生かすかは、あなた次第です。<br />
            バーチャル
            ⇆
            リアル
            世界を開く“鍵”になってください。
          </motion.p>
        </Section>
        <Section id="activities" title="活動内容">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            VketREAL
            の開発チームは、Vket
            のリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
            私たちは、Vket のリアルイベントをより良いものにするために、日々努力しています。
          </motion.p>
        </Section>
        <Section id="development" title="開発">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              <a
                className="text-blue-400 hover:text-blue-300 transition-colors"
                href="https://github.com/VKetDeveloper/VketToast"
                rel="noopener noreferrer"
                target="_blank"
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
