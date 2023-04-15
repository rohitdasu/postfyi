import Link from 'next/link';
import React from 'react';

export const Topbar = () => {
  return (
    <header className="shadow-sm bg-gray-100">
      <nav className="w-full h-16 md:h-20 flex items-center max-w-7xl mx-auto px-4 lg:px-0">
        <Link href="/">
          <p className="font-canon text-gray-900 text-2xl md:text-3xl">
            POST<span className="text-green-600">FYI</span>
          </p>
        </Link>
      </nav>
    </header>
  );
};
