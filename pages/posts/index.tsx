import Head from 'next/head';
import type { NextPage } from 'next';
import { PostForm, Topbar } from '@/components';
import { Posts } from '@/components/Posts';
import { useState } from 'react';

const Post: NextPage = () => {
  // change the state whenever a post request happens
  const [mutateKey, setMutateKey] = useState<number | null>(Math.random());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Posts | PostFYI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col flex-1 w-full bg-gradient-to-br from-gray-100 to-gray-200">
        <Topbar />
        <div className="flex-1 w-full max-w-xl mx-auto">
          <div className="px-4 py-4 md:py-8 lg:px-0">
            <PostForm fn={() => setMutateKey(Math.random())} />
            <Posts mutateKey={mutateKey} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;
