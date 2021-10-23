import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 uppercase mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link href="/">
          <a
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/assets/images/logo-lightning.svg"
              width="38"
              height="38"
              alt="I"
            />
          </a>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link href="#incubator">
              <a
                aria-label="Our product"
                title="Our product"
                className="header-font text-sm font-medium tracking-wide transition-colors duration-200 hover:text-custom-secondary"
              >
                Incubator
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                aria-label="Our product"
                className="header-font text-sm font-medium tracking-wide transition-colors duration-200 hover:text-custom-secondary"
              >
                Buy Token
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                aria-label="Our product"
                className="header-font text-sm font-medium tracking-wide transition-colors duration-200 hover:text-custom-secondary"
              >
                Open LaunchPad App
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/">
              <ButtonPrimary aria-label="Sign up">Post a job</ButtonPrimary>
            </Link>
          </li> */}
        </ul>
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-300" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-20">
              <div className="p-5 bg-custom-primary-light border border-custom-primary-light rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/">
                      <a
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <Image
                          src="/assets/images/logo-lightning.svg"
                          width="38"
                          height="38"
                          alt="I"
                        />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      type="button"
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-300" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link href="#incubator">
                        <a
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-custom-secondary"
                        >
                          Incubator
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-custom-secondary"
                        >
                          Buy Token
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-custom-secondary"
                        >
                          Open LaunchPad App
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
