import type { AppProps } from 'next/app';
import '../styles/globals.css';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
