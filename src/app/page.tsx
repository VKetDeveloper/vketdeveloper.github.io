'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import 'core-js';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // ✅ OK
import { Container } from '@charcoal-ui/react';
import { Text } from '@charcoal-ui/react';
import 'swiper/css/bundle';

const loadSlider = () => import('../../web-components/Slider');

const Home: React.FC = () => {
  useEffect(() => {
    loadSlider(); // カスタム要素の登録を行う
  }, []);

  return (
    <>
      <Head>
        <title>VketREAL 開発チーム</title>
      </Head>
      <div className="bg-background text-foreground min-h-screen">
        <header className="px-4 py-6 border-b">
          <h1 className="text-2xl font-bold">VketREAL 開発チーム</h1>
        </header>

        <main className="py-8">
          <Container>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>私たちのミッション</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  ユーザーもスタッフも、Vketに関わるすべての人が気持ちよく活動場所であること。<br />
                  それは、VketREALの開発チームが目指す「Vketのリアルイベントを支える」ことに他なりません。<br />
                  私たちは、Vketのリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
                  それが、私たちが何より大切にしていることです。
                </Text>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>募集</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  多様性を重視する有志開発チームでは、「あなたらしさ」を歓迎します。<br />
                  異なるスキルを持った人々が集まることは、生産性と革新性を高めることにつながるからです。<br />
                  あなたが動けば、あなたの未来も、Vketの未来も変わる。 この環境をどう生かすかは、あなた次第です。<br />
                  バーチャル⇆リアル 世界を開く“鍵”になってください。
                </Text>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>活動内容</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  VketREALの開発チームは、Vketのリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
                  私たちは、Vketのリアルイベントをより良いものにするために、日々努力しています。
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>開発</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  <Link href="https://github.com/VKetDeveloper/VketToast" className="text-blue-500 underline">
                    Vket Toast
                  </Link><br />
                  lang: SwiftUI
                </Text>
              </CardContent>
            </Card>
          </Container>
        </main>

        <footer className="px-4 py-6 border-t text-sm text-muted">
          &copy; {new Date().getFullYear()} VketREAL 開発チーム
        </footer>
      </div>
    </>
  );
};

export default Home;
