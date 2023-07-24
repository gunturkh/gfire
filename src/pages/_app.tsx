import { AppProps } from 'next/app';
import '../styles/global.css';
import 'react-slideshow-image/dist/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // @ts-ignore
  <Component {...pageProps} />
);

export default MyApp;
