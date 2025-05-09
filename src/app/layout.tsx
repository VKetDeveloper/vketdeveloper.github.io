import type { Metadata } from "next";
import { Geist, Geist_Mono, Yusei_Magic} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const YuseiMagic = Yusei_Magic({ weight: "400", subsets: ["latin"] });

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
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${YuseiMagic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
