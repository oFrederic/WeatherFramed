import styled from '@emotion/styled';

export const Logo = styled.img`
  height: 6rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #f3f3f3;
  text-transform: uppercase;
  font-size: 5rem;
  margin-left: 3rem;
  font-weight: normal;

  @media (max-width: 650px) {
    margin-left: 0rem;
    font-size: 4rem;
  }
`;

export const Container = styled.div`
  display: flex;
`;
