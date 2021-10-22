import styled from 'styled-components';

export const SectionHeader = styled.h3.attrs(() => ({
  className: `text-gray-800 text-2xl font-bold mb-5`,
}))`
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    bottom: -10px;
    width: 25px;
    height: 5px;
    border-radius: 15rem;
    background-color: #651fff;
  }
`;
