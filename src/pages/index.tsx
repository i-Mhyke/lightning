import React from 'react';

import { SectionHeader } from '../components/SectionHeader';
import { Meta } from '../layout/Meta';
import { AboutSection } from '../templates/AboutSection';
import { AppHero } from '../templates/AppHero';
import { BlogList } from '../templates/BlogList';
import { Main } from '../templates/Main';
import SearchResultsTemplate from '../templates/SearchResultsTemplate';
import { BlogObject } from '../types/blog-object.model';
import { JobsObject } from '../types/jobs-object.model';

const Index = () => {
  const jobs: JobsObject[] = [
    {
      title: 'Senior React Developer',
      company: {
        name: 'Interswitch',
        image: 'image',
      },
      duration: 'Full Time',
      industry: 'Technology',
      location: 'Remote: Nigeria',
      remuneration: '$80k - $100k',
      tags: ['Frontend', 'Fin Tech'],
    },
    {
      title: 'Senior Backend Developer',
      company: {
        name: 'Toptal',
        image: 'image',
      },
      duration: 'Full Time',
      industry: 'Technology',
      location: 'Remote: Nigeria',
      remuneration: '$90k - $120k',
      tags: ['Backend', 'Fin Tech'],
    },
  ];

  const blogs: BlogObject[] = [
    {
      author: 'John Doe',
      title: '20 Startups Hiring',
      excerpt:
        'Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      datePublished: '2nd Jun 2021',
      tag: 'Start Ups',
    },
    {
      author: 'Gabriel Mason',
      title: 'UI/UX Designers',
      excerpt:
        "Forging your path as a creative in tech isn't the most straightforward proposition.",
      datePublished: '23rd Oct 2021',
      tag: 'Design',
    },
    {
      author: 'Michael James',
      title: 'Marketing Jobs',
      excerpt:
        'Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      datePublished: '15th Nov 2021',
      tag: 'Marketing',
    },
  ];

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
      <AboutSection />
      <div className="pt-20 px-4 md:px-20 lg:px-4">
        <SectionHeader>Featured Jobs</SectionHeader>
        <SearchResultsTemplate jobs={jobs} title="" />
      </div>
      <div className="pt-20 px-4 md:px-20 lg:px-4">
        <SectionHeader>Blog</SectionHeader>
        <BlogList blogs={blogs} />
      </div>
    </Main>
  );
};

export default Index;
