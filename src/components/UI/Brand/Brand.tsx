import styled from '@emotion/styled';
import mainLogo from '../../../assets/Logo/logo.png';

const Logo = styled.img`
  height: 6rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

const Title = styled.h1`
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

const Container = styled.div`
  display: flex;
`;

const Brand: React.FC<{}> = props => {
  return (
    <Container>
      <Logo src={mainLogo} alt="brand logo" />
      <Title>Weather Framed</Title>
    </Container>
  );
};

export default Brand;
