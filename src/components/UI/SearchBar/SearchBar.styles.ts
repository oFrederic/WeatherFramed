import styled from '@emotion/styled';

export const Label = styled.label`
  font-size: 3rem;
  color: #f3f3f3;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  font-family: league-gothic;
  font-size: 2rem;

  &:focus {
    outline: none;
  }
`;
