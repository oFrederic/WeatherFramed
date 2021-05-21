import mainLogo from 'assets/Logo/logo.png';
import { Logo, Title, Container } from 'components/UI/Brand/Brand.styles';

export const Brand: React.FC<{}> = props => {
  return (
    <Container>
      <Logo src={mainLogo} alt="brand logo" />
      <Title>Weather Framed</Title>
    </Container>
  );
};
