import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Topbar } from '@/components';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>PostFYI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gradient-to-br from-gray-100 to-gray-200">
        <Topbar />
        <div className="max-w-7xl mx-auto w-full h-full flex-1 flex flex-col items-center justify-center px-4 lg:px-0">
          <div className="flex flex-col gap-12">
            <p className="text-center w-full lg:w-3/4 mx-auto text-xl md:text-3xl lg:text-6xl font-inter font-medium text-gray-900 !leading-[1.1]">
              Unleash your inner thoughts with our{' '}
              <span className="text-green-600 font-semibold">secure</span> and{' '}
              <span className="text-green-600 font-semibold">anonymous</span>{' '}
              status posting app
            </p>
            <p className="text-center mx-auto text-lg md:text-2xl lg:text-3xl font-inter font-medium text-gray-600">
              Be heard without the fear of judgment
            </p>
            <div className="w-full text-center">
              <Link href={'/posts'}>
                <button className="text-green-100 uppercase font-medium hover:bg-green-700 bg-green-600 transition-all hover:shadow-md h-10 w-36 md:w-48 md:h-12  rounded-md text-base md:text-lg focus-visible:outline-none">
                  get started
                </button>
              </Link>
            </div>
          </div>
          <div />
        </div>
      </main>
    </div>
  );
};

export default Home;
