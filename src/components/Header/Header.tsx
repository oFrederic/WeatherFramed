import mainLogo from '../../assets/Icons/logo.png';
import styled from '@emotion/styled';

const Container = styled.header`
  padding: 1.5rem;
  background-color: #004f9e;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  height: 6rem;
`;

const Title = styled.h1`
  color: #f3f3f3;
  text-transform: uppercase;
  font-size: 5rem;
  margin-left: 3rem;
`;

const Brand = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 3rem;
  color: #f3f3f3;
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

  &:focus {
    outline: none;
  }
`;

const Header: React.FC<{}> = props => {
  return (
    <Container>
      <Brand>
        <Logo src={mainLogo} alt="brand logo" />
        <Title>Weather Framed</Title>
      </Brand>
      <Form>
        <Label>Search Different Location</Label>
        <Input type="text" placeholder="City Name"></Input>
      </Form>
    </Container>
  );
};

export default Header;
