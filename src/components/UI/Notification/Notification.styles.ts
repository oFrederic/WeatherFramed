import styled from '@emotion/styled';

type ContainerType = {
  status: string;
};

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${(props: ContainerType) =>
    props.status === 'error' ? '#690000' : '#1a8ed1'};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10%;
  align-items: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;

export const Message = styled.p`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;
