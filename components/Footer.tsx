'use client';

import React, { useEffect } from 'react';
import { cn } from "@/lib/utils" //tailwindユーティリティ

const Footer: React.FC = () => {
  useEffect(() => {
    const footerId = "footer";

    const footerFixed = () => {
      const body = document.getElementsByTagName("body")[0];
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
        if (defHeight != e.offsetHeight) {
          func();
          defHeight = e.offsetHeight;
        }
      };
      const intervalId = setInterval(checkBoxSize, 1000);
      return intervalId; //interval IDを返す
    };

    const addEvent = (elm: Window | HTMLElement, listener: string, fn: EventListenerOrEventListenerObject) => {
      if (elm.addEventListener) {
        elm.addEventListener(listener, fn, false);
      } else if ((elm as HTMLElement).attachEvent) {
        (elm as HTMLElement).attachEvent("on" + listener, fn);
      }
    };

    footerFixed(); // 初回ロード時に実行
    const resizeListener = () => footerFixed();
    const intervalId = checkFontSize(footerFixed);

    addEvent(window, "load", resizeListener);
    addEvent(window, "resize", resizeListener);

    //コンポーネントのアンマウント時にイベントリスナーを解除
    return () => {
      window.removeEventListener("load", resizeListener);
      window.removeEventListener("resize", resizeListener);
      clearInterval(intervalId); //intervalIDをclear
    };
  }, []);

  return (
    <footer id="footer" className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground mt-auto bg-background">
      <div>© 2025 VketREAL Development Department. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
