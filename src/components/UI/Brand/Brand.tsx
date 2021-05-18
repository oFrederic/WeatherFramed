import styled from '@emotion/styled';
import mainLogo from '../../../assets/Icons/logo.png';

const Logo = styled.img`
  height: 6rem;
`;

const Title = styled.h1`
  color: #f3f3f3;
  text-transform: uppercase;
  font-size: 5rem;
  margin-left: 3rem;
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
