import type { Metadata } from "next";
import { Geist, Geist_Mono, Yusei_Magic } from "next/font/google";
import "./globals.css";

// ✅ 各フォントに `variable` を指定する
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const yuseiMagic = Yusei_Magic({
  variable: "--font-yusei-magic",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "VketREAL有志開発チーム on Github",
  description: "VketREAL有志スタッフチーム内にあるシステムチームのホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} ${yuseiMagic.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
