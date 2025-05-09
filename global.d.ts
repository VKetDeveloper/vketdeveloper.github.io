// global.d.ts
import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'v-slider': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
