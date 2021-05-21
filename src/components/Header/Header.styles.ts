import styled from '@emotion/styled';

export const Container = styled.header`
  padding: 1.5rem;
  background-color: #004f9e;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 450px) {
    display: none;
  }
`;
