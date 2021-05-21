import { Brand } from 'components/UI/Brand/Brand';
import { SearchBar } from 'components/UI/SearchBar/SearchBar';

import { Container } from 'components/Header/Header.styles';

export const Header: React.FC<{}> = props => {
  return (
    <Container>
      <Brand />
      <SearchBar />
    </Container>
  );
};
