import React from 'react';

import { ButtonSecondary } from '../Button';

export const SearchContainer = () => {
  return (
    <div
      id="search"
      className="py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4"
    >
      <div className="app-shadow bg-deep-purple-400 w-full z-10 py-6 px-2 rounded text-center">
        <form>
          <div className="grid grid-cols-1 md:gap-3 md:grid-cols-2 lg px-5">
            <section className="relative w-full px-1 py2 sm:py-4 mx-auto rounded-md ">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full py-3 pl-10 pr-4 text-base placeholder-gray-600 font-light text-gray-900 bg-white border border-gray-300 rounded-md input-shadow focus:outline-none focus:border-gray-200 focus:ring-0 focus:shadow-md"
                  placeholder="Title, Keyword, Company Name"
                />
              </div>
            </section>
            <section className="flex flex-col sm:flex-row w-full px-1 py-2 sm:py-4 items-center">
              <div className="w-full sm:w-8/12 sm:pr-2 pb-2 sm:pb-0">
                <select
                  id="category"
                  defaultValue="DEFAULT"
                  name="category"
                  className="bg-gray-50 focus:outline-none focus:ring-0 focus:border-gray-200 py-3 pl-2 pr-7 w-full cursor-pointer input-shadow h-full border-gray-300 text-gray-500 sm:text-sm rounded-md"
                >
                  <option value="DEFAULT" disabled hidden>
                    Select Category
                  </option>
                  <option>Software Development</option>
                  <option>Design</option>
                  <option>Support</option>
                  <option>Product</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div className="w-full sm:w-4/12">
                <ButtonSecondary className="w-full cursor-pointer">
                  Search
                </ButtonSecondary>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
};
