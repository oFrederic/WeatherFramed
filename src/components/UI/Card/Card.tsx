import styled from '@emotion/styled';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35rem;
  height: 60rem;
  background: rgba(0, 0, 0, 0.3);
  /* filter: blur(0.8rem); */
  margin: 10rem auto;
  border-radius: 3rem;
  box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25),
    0 1rem 1rem rgba(0, 0, 0, 0.22);
`;

export interface CardProps {}

const Card: React.FC<CardProps> = props => {
  return <Container>{props.children}</Container>;
};

export default Card;
