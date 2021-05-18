import styled from '@emotion/styled';

const Title = styled.h1`
  font-family: league-gothic;
  font-size: 5rem;
  color: blue;
`;

const HelloWorld = () => {
  return (
    <>
      <Title>Hello World!</Title>
      <button>test</button>
    </>
  );
};

export default HelloWorld;
