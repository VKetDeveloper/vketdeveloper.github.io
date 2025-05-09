import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    const footerId = 'footer';

    function footerFixed() {
      const body = document.getElementsByTagName('body')[0];
      const footer = document.getElementById(footerId);
      if (!footer) return;

      const dh = body.clientHeight;
      footer.style.top = '0px';
      const ft = footer.offsetTop;
      const fh = footer.offsetHeight;

      let wh = 0;
      if (window.innerHeight) {
        wh = window.innerHeight;
      } else if (
        document.documentElement &&
        document.documentElement.clientHeight !== 0
      ) {
        wh = document.documentElement.clientHeight;
      }

      if (ft + fh < wh) {
        footer.style.position = 'relative';
        footer.style.top = `${wh - fh - ft - 1}px`;
      }
    }

    function checkFontSize(callback: () => void) {
      const e = document.createElement('div');
      const s = document.createTextNode('S');
      e.appendChild(s);
      e.style.visibility = 'hidden';
      e.style.position = 'absolute';
      e.style.top = '0';
      document.body.appendChild(e);

      let defHeight = e.offsetHeight;

      const checkBoxSize = () => {
        if (defHeight !== e.offsetHeight) {
          callback();
          defHeight = e.offsetHeight;
        }
      };

      const interval = setInterval(checkBoxSize, 1000);

      return () => {
        clearInterval(interval);
        document.body.removeChild(e);
      };
    }

    // イベント登録
    footerFixed();
    const cleanupFontSize = checkFontSize(footerFixed);
    window.addEventListener('resize', footerFixed);

    return () => {
      window.removeEventListener('resize', footerFixed);
      cleanupFontSize();
    };
  }, []);

  return (
    <footer id="footer" style={{ textAlign: 'center', padding: '1em 0' }}>
      <div>Copyright © 2025 VketREAL Development Department. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
