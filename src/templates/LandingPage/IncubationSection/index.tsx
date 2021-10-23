import React from 'react';

import { ButtonPrimary } from '../../../components/Button';

export const IncubationSection = () => {
  return (
    <div id="incubator" className="bg-custom-primary-dark pb-20">
      <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-screen-xl mx-auto md:pt-20">
          <h2 className="text-center header-font text-base text-custom-secondary">
            LIGHTNING INCUBATORS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 py-14 lg:py-24 gap-7">
            <div>
              <h3 className="header-font text-xl md:text-4xl font-bold text-left">
                AN INCUBATOR FOCUSING ON THE MOST TRUSTWORTHY, HIGH-QUALITY
                PROJECTS
              </h3>
            </div>
            <div className="mt-5 lg:mt-0">
              <p className="text-lg text-gray-400 text-left">
                Project Developers and teams who meet our strict acceptance
                criteria for the Lightning Incubator have the unique opportunity
                to leverage our hand-selected network of resources, including
                partnerships with many of the most respected companies in the
                industry via our Trust-as-a-Service (TaaS) offering. Investors
                benefit from our approach by having access to secure,
                trustworthy projects that are nurtured to succeed.
              </p>
              <div className="mt-5 md:mt-10">
                <ButtonPrimary className="header-font">
                  Apply For Incubation
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
