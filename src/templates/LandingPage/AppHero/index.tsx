import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';

import { ButtonPrimary } from '../../../components/Button';

export const AppHero = () => {
  return (
    <div className="px-4 pt-10 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center md:pt-20">
        <Zoom>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-black header-font mb-5 md:mb-10">
            REVOLUTIONIZING THE PRESALE EXPERIENCE TO DELIVER MAXIMUM VALUE TO
            INVESTORS AND DEVELOPERS
          </h1>
        </Zoom>
        <div className="md:mb-10">
          <Zoom>
            <Link href="#about">
              <ButtonPrimary>Learn More</ButtonPrimary>
            </Link>
          </Zoom>
        </div>
        <div className="relative w-full header-img">
          <Image
            src="/assets/images/landing-screenshot.png"
            layout="fill"
            objectFit="contain"
            alt="I"
          />
        </div>
      </div>
    </div>
  );
};
