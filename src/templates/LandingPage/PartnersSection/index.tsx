import React from 'react';

import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';

export const PartnerSection = () => {
  return (
    <div className="w-full bg-custom-primary-dark bg-opacity-80 p-10 border-2 border-custom-secondary border-l-0 border-r-0 mt-10 mb-10">
      <div className="px-4 pt-5 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-center">
        <h2 className="header-font text-base mb-5">OUR PARTNERS</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-72 md:h-40 lg:h-16 relative pt-5">
          <Zoom>
            <div className="relative">
              <Image
                className="opacity-60 hover:opacity-100 transition-opacity duration-700"
                src="/assets/images/mtn-partner.svg"
                layout="fill"
                objectFit="contain"
                alt="I"
              />
            </div>
          </Zoom>
          <Zoom delay={100}>
            <div className="relative">
              <Image
                className="opacity-60 hover:opacity-100 transition-opacity duration-700"
                src="/assets/images/partners-certik-logo.svg"
                layout="fill"
                objectFit="contain"
                alt="I"
              />
            </div>
          </Zoom>
          <Zoom delay={200}>
            <div className="relative">
              <Image
                className="opacity-60 hover:opacity-100 transition-opacity duration-700"
                src="/assets/images/partners-hacken-logo.svg"
                layout="fill"
                objectFit="contain"
                alt="I"
              />
            </div>
          </Zoom>
          <Zoom delay={300}>
            <div className="relative">
              <Image
                className="opacity-60 hover:opacity-100 transition-opacity duration-700"
                src="/assets/images/dia-partner.svg"
                layout="fill"
                objectFit="contain"
                alt="I"
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};
