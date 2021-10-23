import React from 'react';

import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export const MissionSection = () => {
  return (
    <div
      id="about"
      className="px-4 pt-10 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div className="max-w-screen-xl mx-auto md:pt-20">
        <Fade ssrFadeout>
          <h2 className="text-center header-font text-base text-custom-secondary">
            ABOUT LIGHTNING
          </h2>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-14 lg:py-24">
          <div>
            <Fade ssrFadeout bottom>
              <h3 className="header-font text-xl md:text-4xl font-bold text-center md:text-left">
                A THRIVING ECOSYSTEM BRINGING VALUE THROUGH BLOCKCHAIN
                DEVELOPMENT
              </h3>
            </Fade>
            <Fade ssrFadeout bottom delay={100}>
              <p className="text-lg text-gray-400 my-7 text-center md:text-left">
                As the first multi-chain Incubator and Launchpad, we create a
                single, safe destination for both presale investors and
                prelaunch projects.
              </p>
            </Fade>
            <div className="grid grid-cols-3 gap-5 mt-20">
              <Zoom ssrFadeout>
                <div>
                  <h3 className="md:text-3xl header-font text-custom-secondary font-bold">
                    500+
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg">
                    Investors and Business Owners
                  </p>
                </div>
              </Zoom>
              <Zoom ssrFadeout delay={200}>
                <div>
                  <h3 className="md:text-3xl header-font text-custom-secondary font-bold">
                    2500+
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg">
                    Developers and Engineers
                  </p>
                </div>
              </Zoom>
              <Zoom ssrFadeout delay={400}>
                <div>
                  <h3 className="md:text-3xl header-font text-custom-secondary font-bold">
                    10+
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg">
                    Cooperation with big companies
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
          <div
            style={{ height: '100%', minHeight: '400px' }}
            className="relative mt-10 lg:mt-0"
          >
            <Image
              className="opacity-70 hover:opacity-100 transition-opacity duration-700"
              src="/assets/images/world-map.png"
              layout="fill"
              objectFit="contain"
              alt="I"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
