import Head from 'next/head';
import type { NextPage } from 'next';
import { PostForm, Topbar } from '@/components';
import { Posts } from '@/components/Posts';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Posts | PostFYI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col bg-gradient-to-br from-gray-100 to-gray-200">
        <Topbar />
        <div className="max-w-xl mx-auto flex-1 w-full">
          <div className="py-4 md:py-8 px-4 lg:px-0">
            <Posts />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
