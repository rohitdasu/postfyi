import Head from 'next/head';
import type { NextPage } from 'next';
import { PostForm, Topbar } from '@/components';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Home | PostFYI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col bg-gradient-to-br from-gray-100 to-gray-200">
        <Topbar />
        <div className="max-w-xl mx-auto flex-1 w-full">
          <div className="py-4 px-4 lg:px-0">
            <PostForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
