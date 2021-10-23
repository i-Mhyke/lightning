import styled from 'styled-components';

interface IButtonProps {
  class?: string;
}

export const ButtonPrimary = styled.a.attrs<IButtonProps>(() => ({
  className: `rounded-full cursor-pointer inline-flex items-center justify-center h-14 px-8 
  text-sm font-medium tracking-wide text-white transition duration-300 shadow-md bg-custom-secondary focus:shadow-outline focus:outline-none`,
}))``;

export const ButtonSecondary = styled.a.attrs<IButtonProps>(() => ({
  className: `inline-flex items-center justify-center h-12 px-6 text-sm font-medium transition duration-200 bg-transparent shadow-md border border-custom-primary rounded-full text-custom-primary hover:bg-gray-100 focus:shadow-outline focus:outline-none`,
}))``;
