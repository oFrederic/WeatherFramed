import React from 'react';

import styled from '@emotion/styled';

type ContainerType = {
  status: string;
};

const Container = styled.div`
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

const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;

const Message = styled.p`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;

export interface NotificationProps {
  status: string;
  title: string;
  message: string;
}

const Notification: React.FC<NotificationProps> = props => {
  return (
    <Container status={props.status}>
      <Title>{props.title}</Title>
      <Message>{props.message}</Message>
    </Container>
  );
};

export default Notification;
