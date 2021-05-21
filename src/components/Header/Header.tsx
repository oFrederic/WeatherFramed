import styled from '@emotion/styled';
import { Brand } from '../UI/Brand/Brand';
import { SearchBar } from '../UI/SearchBar/SearchBar';

const Container = styled.header`
  padding: 1.5rem;
  background-color: #004f9e;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Header: React.FC<{}> = props => {
  return (
    <Container>
      <Brand />
      <SearchBar />
    </Container>
  );
};
