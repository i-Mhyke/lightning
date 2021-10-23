import React from 'react';

import { Meta } from '../layout/Meta';
import { AboutSection } from '../templates/LandingPage/AboutSection';
import { AppHero } from '../templates/LandingPage/AppHero';
import { FeaturedSection } from '../templates/LandingPage/FeaturedSection';
import { IncubationSection } from '../templates/LandingPage/IncubationSection';
import { MissionSection } from '../templates/LandingPage/MissionSection';
import { ParticipationSection } from '../templates/LandingPage/ParticipationSection';
import { PartnerSection } from '../templates/LandingPage/PartnersSection';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Sneck Jobs"
          description="Sneck jobs is the perfect place to get your dream job."
        />
      }
    >
      <AppHero />
      <MissionSection />
      <PartnerSection />
      <AboutSection />
      <ParticipationSection />
      <FeaturedSection />
      <IncubationSection />
    </Main>
  );
};

export default Index;
