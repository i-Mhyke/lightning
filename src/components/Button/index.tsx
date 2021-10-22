import styled from 'styled-components';

interface IButtonProps {
  class?: string;
}

export const ButtonPrimary = styled.a.attrs<IButtonProps>(() => ({
  className: `inline-flex items-center justify-center h-12 px-6 text-sm font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`,
}))``;

export const ButtonSecondary = styled.a.attrs<IButtonProps>(() => ({
  className: `inline-flex items-center justify-center h-12 px-6 text-sm font-medium transition duration-200 bg-white shadow-md border border-gray-300 rounded hover:bg-gray-100 focus:shadow-outline focus:outline-none`,
}))``;
