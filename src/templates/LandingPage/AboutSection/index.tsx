import React from 'react';

import {
  IoShieldCheckmarkOutline,
  IoAccessibility,
  IoDiamondOutline,
} from 'react-icons/io5';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';

import { AppCard } from '../../../components/Card';

const IconCircle = styled.div.attrs(() => ({
  className: `rounded-full `,
}))`
  border: 2px solid #6a49fe;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutSection = () => {
  return (
    <div className="px-4 pt-10 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-screen-xl mx-auto md:pt-20">
        <h2 className="text-center text-custom-tertiary font-semibold text-base header-font mb-5">
          WHY LIGHTNING LAUNCHPAD?
        </h2>
        <p className="header-font text-center md:max-w-3xl text-xl lg:text-2xl font-bold mx-auto mb-5">
          We provide fair, secure & highly rewarding launches for investors and
          incubators.
        </p>
        <Zoom ssrFadeout>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
            <AppCard>
              <IconCircle>
                <IoShieldCheckmarkOutline color="#6a49fe" size={32} />
              </IconCircle>
              <h3 className="card-header header-font">Secured Investing</h3>
              <p className="card-text">
                All projects will be audited, KYC’d and have team tokens locked
                to give investors complete peace of mind.
              </p>
            </AppCard>
            <AppCard>
              <IconCircle>
                <IoAccessibility color="#6a49fe" size={32} />
              </IconCircle>
              <h3 className="card-header header-font">Fairer Investing</h3>
              <p className="card-text">
                Our fair two-round system reserves a percentage of each IDO for
                each tier, ensuring all holders large and small have access to
                high-quality investments.
              </p>
            </AppCard>
            <AppCard>
              <IconCircle>
                <IoDiamondOutline color="#6a49fe" size={32} />
              </IconCircle>
              <h3 className="card-header header-font">Better Investing</h3>
              <p className="card-text">
                We’re improving the launchpad experience by allowing holders in
                all tiers to invest worthwhile amounts into every IDO.
              </p>
            </AppCard>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
