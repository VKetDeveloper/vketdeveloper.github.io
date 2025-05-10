'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import 'core-js';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from "@/lib/utils" //tailwindユーティリティ

const Home: React.FC = () => {
  const [isSliderLoaded, setIsSliderLoaded] = useState(false);

  useEffect(() => {
    setIsSliderLoaded(true); // web component をimport しているので、useEffect内でloadする必要はない。
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
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">  {/* Container の代替 - Tailwind CSS クラス */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>私たちのミッション</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  ユーザーもスタッフも、Vketに関わるすべての人が気持ちよく活動場所であること。<br />
                  それは、VketREALの開発チームが目指す「Vketのリアルイベントを支える」ことに他なりません。<br />
                  私たちは、Vketのリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
                  それが、私たちが何より大切にしていることです。
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>募集</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  多様性を重視する有志開発チームでは、「あなたらしさ」を歓迎します。<br />
                  異なるスキルを持った人々が集まることは、生産性と革新性を高めることにつながるからです。<br />
                  あなたが動けば、あなたの未来も、Vketの未来も変わる。 この環境をどう生かすかは、あなた次第です。<br />
                  バーチャル⇆リアル 世界を開く“鍵”になってください。
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>活動内容</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  VketREALの開発チームは、Vketのリアルイベントを支えるために、様々な技術を駆使して開発を行っています。<br />
                  私たちは、Vketのリアルイベントをより良いものにするために、日々努力しています。
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>開発</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  <Link href="https://github.com/VKetDeveloper/VketToast" className="text-blue-500 underline">
                    Vket Toast
                  </Link><br />
                  lang: SwiftUI
                </p>
              </CardContent>
            </Card>
            {/* Slider コンポーネントを使用する場合のコメント削除 */}
          </div>
        </main>

        <footer className="px-4 py-6 border-t text-sm text-muted bg-background">
          &copy; {new Date().getFullYear()} VketREAL 開発チーム
        </footer>
      </div>
    </>
  );
};

export default Home;
