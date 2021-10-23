import styled from 'styled-components';

export const AppCard = styled.div.attrs(() => ({
  className: `rounded-xl bg-custom-primary`,
}))`
  transition: all 0.25s;
  border: 1px solid transparent;
  padding: 2.7rem;

  &:hover {
    transform: scale(1.05);
    border-color: hsla(0, 0%, 100%, 0.2);
  }
  .card-header {
    font-weight: bold;
    margin: 1rem 0;
    font-size: 1rem;
  }
  .card-text {
    font-size: 1.1rem;
    color: #bdbdbd;
  }
`;

interface IColoredCardProps {
  color: string;
}

export const AppColoredCard = styled.div.attrs<IColoredCardProps>(() => ({
  className: `rounded-xl bg-custom-primary`,
}))`
  transition: all 0.25s;
  border: 1px solid transparent;
  border-top: 2px solid ${(props) => props.color};
  padding: 2.7rem;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  .card-header {
    color: ${(props) => props.color};
  }
  .sub-sections {
    padding: 1.2rem 0;
    border: 1px solid hsla(0, 0%, 100%, 0.15);
    border-right-width: 0;
    border-left-width: 0;
    h5 {
      font-weight: bold;
      font-size: 0.9rem;
      color: #bdbdbd;
    }
    h2 {
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;
