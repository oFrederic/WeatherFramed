import React from 'react';

import {
  Container,
  Title,
  Message,
} from 'components//UI/Notification/Notification.styles';

export interface NotificationProps {
  status: string;
  title: string;
  message: string;
}

export const Notification: React.FC<NotificationProps> = props => {
  return (
    <Container status={props.status}>
      <Title>{props.title}</Title>
      <Message>{props.message}</Message>
    </Container>
  );
};
