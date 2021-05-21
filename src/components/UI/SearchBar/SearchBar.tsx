import React from 'react';

import styled from '@emotion/styled';

const Label = styled.label`
  font-size: 3rem;
  color: #f3f3f3;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
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

export const SearchBar: React.FC<{}> = props => {
  return (
    <Form>
      <Label>Search Different Location</Label>
      <Input type="text" placeholder="City Name"></Input>
    </Form>
  );
};
