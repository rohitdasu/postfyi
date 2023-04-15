import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>PostFYI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto w-full h-full flex-1 flex flex-col justify-between px-4 lg:px-0">
          <nav className="w-full h-16 md:h-28 flex items-center">
            <p className="font-canon text-gray-900 text-2xl md:text-4xl">
              POST<span className="text-green-600">FYI</span>
            </p>
          </nav>
          <div className="flex flex-col gap-12">
            <p className="text-center text-xl md:text-3xl lg:text-6xl font-inter font-medium text-gray-900">
              Unleash your inner thoughts with our secure,{' '}
              <span className="text-green-600 font-semibold">anonymous</span>{' '}
              status posting app
            </p>
            <p className="text-center text-lg md:text-2xl lg:text-3xl font-inter font-medium text-gray-600">
              Be heard without the fear of judgment
            </p>
            <div className="w-full text-center mt-4">
              <Link href={'/home'}>
                <button className="text-green-900 uppercase font-medium bg-green-300 transition-all hover:shadow-md h-10 w-36 md:w-48 md:h-12  rounded-sm text-base md:text-lg focus-visible:outline-none">
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
