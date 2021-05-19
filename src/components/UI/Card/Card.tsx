import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35rem;
  height: 60rem;
  margin: 10rem auto;
  background-color: #5e626b;
  border-radius: 3rem;
  box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25),
    0 1rem 1rem rgba(0, 0, 0, 0.22);
`;

const Card: React.FC<{}> = props => {
  return <Container>{props.children}</Container>;
};

export default Card;
