import type { AppProps } from 'next/app';
import '../styles/globals.css';
import axios from 'axios';
import { SWRConfig } from 'swr';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
