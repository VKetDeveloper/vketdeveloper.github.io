'use client';

import React, { useEffect } from 'react';
import { cn } from "@/lib/utils" //tailwindユーティリティ

const Footer: React.FC = () => {
  useEffect(() => {
    const footerId = "footer";

    const footerFixed = () => {
      const body = document.documentElement; // document.body ではなく document.documentElement
      const footer = document.getElementById(footerId);
      if (!footer) return;

      const dh = body.clientHeight;
      footer.style.top = "0px";
      const ft = footer.offsetTop;
      const fh = footer.offsetHeight;
      const wh = window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || 0;

      if (ft + fh < wh) {
        footer.style.position = "relative";
        footer.style.top = (wh - fh - ft - 1) + "px";
      } else {
        footer.style.position = ""; // または "static" など、デフォルトのスタイルに戻す
        footer.style.top = "";
      }
    };

    const checkFontSize = (func: () => void) => {
      const e = document.createElement("div");
      const s = document.createTextNode("S");
      e.appendChild(s);
      e.style.visibility = "hidden";
      e.style.position = "absolute";
      e.style.top = "0";
      document.body.appendChild(e);
      let defHeight = e.offsetHeight;

      const checkBoxSize = () => {
        if (defHeight !== e.offsetHeight) {
          func();
          defHeight = e.offsetHeight;
        }
      };
      const intervalId = setInterval(checkBoxSize, 1000);
      return intervalId; // interval ID を返す
    };

    footerFixed(); // 初回ロード時に実行
    const resizeListener = () => footerFixed();
    const intervalId = checkFontSize(footerFixed);

    window.addEventListener("load", resizeListener);
    window.addEventListener("resize", resizeListener);

    // コンポーネントのアンマウント時にイベントリスナーを解除
    return () => {
      window.removeEventListener("load", resizeListener);
      window.removeEventListener("resize", resizeListener);
      clearInterval(intervalId); // intervalID を clear
    };
  }, []);

  return (
    <footer id="footer" className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground mt-auto bg-background">
      <div>© 2025 VketREAL Development Department. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
