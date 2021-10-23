import React from 'react';

import Zoom from 'react-reveal/Zoom';

import { AppColoredCard } from '../../../components/Card';

export const ParticipationSection = () => {
  return (
    <div className="px-4 pt-10 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-screen-xl mx-auto md:pt-20">
        <h3 className="text-center header-font text-lg text-custom-secondary">
          IDO PARTICIPATION & TIER STRUCTURE
        </h3>
        <p className="text-lg text-gray-400 mt-8">
          The Lightning Launchpad uses a two-round system for IDO participation.
          This approach initially reserves an allocation for every tier,
          allowing for fairer distributions and purchase sizes that are
          worthwhile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-14">
          <div>
            <h5 className="text-gray-400 text-base font-bold header-font mb-2">
              ROUND 1
            </h5>
            <h2 className="header-font font-bold text-xl mb-6">
              RESERVED ALLOCATION ROUND
            </h2>
            <p className="text-gray-400 text-lg">
              Each tier gets a share of the total hard cap that they may
              purchase during the round. Users can purchase up to their
              tier-defined maximum allowed contribution size within that share
              until either the supply or time limit exhausts.
            </p>
          </div>
          <div>
            <h5 className="text-gray-400 text-base font-bold header-font mb-2">
              ROUND 2
            </h5>
            <h2 className="header-font font-bold text-xl mb-6">FCFS ROUND</h2>
            <p className="text-gray-400 text-lg">
              Following Round 1’s expiration, Round 2 immediately opens for all
              tiers simultaneously. All remaining tokens from Round 1 are
              available in one nonsegregated pool. Users may purchase up to
              their remaining maximum allowed contribution size.
            </p>
          </div>
        </div>
        <Zoom ssrFadeout>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AppColoredCard color="#d38237">
              <h3 className="card-header header-font mb-10">Bronze</h3>
              <div className="sub-sections">
                <h5>REQ. LIGHT</h5>
                <h2>5 000 - 10 000</h2>
              </div>
              <div className="sub-sections">
                <h5>MAX. CONTRIBUTIONS</h5>
                <h2>$250</h2>
              </div>
              <div className="sub-sections">
                <h5>RESERVED POOL WEIGHT</h5>
                <h2>10%</h2>
              </div>
            </AppColoredCard>
            <AppColoredCard color="#d7d7d7">
              <h3 className="card-header header-font mb-10">Silver</h3>
              <div className="sub-sections">
                <h5>REQ. LIGHT</h5>
                <h2>10 000 - 30 000</h2>
              </div>
              <div className="sub-sections">
                <h5>MAX. CONTRIBUTIONS</h5>
                <h2>$500</h2>
              </div>
              <div className="sub-sections">
                <h5>RESERVED POOL WEIGHT</h5>
                <h2>20%</h2>
              </div>
            </AppColoredCard>
            <AppColoredCard color="#e1d354">
              <h3 className="card-header header-font mb-10">Gold</h3>
              <div className="sub-sections">
                <h5>REQ. LIGHT</h5>
                <h2>30 000 - 100 000</h2>
              </div>
              <div className="sub-sections">
                <h5>MAX. CONTRIBUTIONS</h5>
                <h2>$750</h2>
              </div>
              <div className="sub-sections">
                <h5>RESERVED POOL WEIGHT</h5>
                <h2>30%</h2>
              </div>
            </AppColoredCard>
            <AppColoredCard color="#56ecf6">
              <h3 className="card-header header-font mb-10">Diamond</h3>
              <div className="sub-sections">
                <h5>REQ. LIGHT</h5>
                <h2>100 000+</h2>
              </div>
              <div className="sub-sections">
                <h5>MAX. CONTRIBUTIONS</h5>
                <h2>$1250</h2>
              </div>
              <div className="sub-sections">
                <h5>RESERVED POOL WEIGHT</h5>
                <h2>40%</h2>
              </div>
            </AppColoredCard>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
