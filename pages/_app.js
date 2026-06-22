import '../styles/index.css';
import { AnimatePresence } from 'framer-motion';
import { Lato } from 'next/font/google';

// Self-hosted via next/font: no render-blocking request, no layout shift.
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-lato',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={lato.variable}>
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
