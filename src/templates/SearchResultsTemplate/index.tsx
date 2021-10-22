import React from 'react';

import TimeAgo from 'react-timeago';
import styled from 'styled-components';

import { JobsObject } from '../../types/jobs-object.model';

interface ISearchResultsProps {
  jobs: JobsObject[];
  title: string;
}

const JobsContainer = styled.div.attrs(() => ({
  className: `flex flex-col md:flex-row w-full p-5 rounded-md bg-gray-300 mt-3`,
}))`
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 13px -1px rgb(22 25 28 / 3%);
  }
`;

const SearchResultsTemplate = ({ jobs, title }: ISearchResultsProps) => {
  return (
    <div className="py-8">
      <div className="mb-5">
        <h4>
          <span className="text-gray-900 font-semibold">
            {jobs.length} results
          </span>{' '}
          | {title}
        </h4>
      </div>
      {jobs.map((job) => (
        <JobsContainer key={job.title}>
          <div className="md:w-1/12 ">
            <div className="h-12 w-12 rounded-full border flex justify-center items-center border-gray-900">
              T
            </div>
          </div>
          <div className="flex md:w-6/12 flex-col">
            <h5 className="text-sm font-bold">{job.company.name}</h5>
            <h3 className="font-bold text-deep-purple-accent-700 cursor-pointer hover:underline">
              {job.title}
            </h3>
            <div className="flex mt-3">
              <p className="mr-5 text-base">📍 {job.location}</p>
              <p className="text-base">💸 {job.remuneration}</p>
            </div>
          </div>
          <div className="md:w-3/12 my-auto">
            <p className="mt-3 bg-indigo-50 text-deep-purple-accent-400 py-1 px-5 rounded-full w-min whitespace-nowrap text-base">
              {job.industry}
            </p>
          </div>
          <div className="md:w-2/12 my-auto">
            <p className="md:text-center text-base">
              📌
              <span>
                <TimeAgo date="July 5, 2021" />
              </span>
            </p>
          </div>
        </JobsContainer>
      ))}
    </div>
  );
};

export default SearchResultsTemplate;
