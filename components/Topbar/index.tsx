import Link from 'next/link';
import React from 'react';
import { SiGithub, SiTwitter } from 'react-icons/si';

export const Topbar = () => {
  return (
    <header className="shadow-sm bg-gray-100">
      <nav className="w-full h-16 md:h-20 flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-0">
        <Link href="/">
          <p className="font-canon text-gray-900 text-2xl md:text-3xl">
            POST<span className="text-green-600">FYI</span>
          </p>
        </Link>
        <div className="flex flex-row items-center gap-4">
          <a href="https://github.com/rohitdasu/postfyi" target="_blank">
            <SiGithub className="text-3xl" />
          </a>
          <a href="https://twitter.com/rohit_dasu_" target="_blank">
            <SiTwitter className="text-3xl" />
          </a>
        </div>
      </nav>
    </header>
  );
};
