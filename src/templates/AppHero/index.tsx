import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SearchContainer } from '../../components/SearchContainer';

export const AppHero = () => {
  return (
    <div className="px-4 pt-10 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-10 sm:text-center sm:mb-0">
          <Link href="/">
            <a className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50">
                <Image
                  src="/assets/images/startup.svg"
                  width="38"
                  height="38"
                  alt="I"
                />
              </div>
            </a>
          </Link>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-xl mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">The</span>
              </span>{' '}
              best and most reliable job marketplace.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Looking for a job as a software engineer, customer service rep,
              designer or sales professional? Looking for top professionals to
              fill up those roles in your company?
            </p>
          </div>
        </div>
      </div>
      <div>
        <SearchContainer />
      </div>
    </div>
  );
};
