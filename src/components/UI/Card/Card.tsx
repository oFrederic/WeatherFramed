import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #5e626b;
  border-radius: 6rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 35rem;
  height: 50rem;
  margin: 10rem auto;
`;

const Card: React.FC<{}> = props => {
  return <Container>{props.children}</Container>;
};

export default Card;
