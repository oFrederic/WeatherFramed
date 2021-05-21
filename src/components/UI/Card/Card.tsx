import { Container } from 'components/UI/Card/Card.styles';

export const Card: React.FC<{}> = props => {
  return <Container>{props.children}</Container>;
};
