import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
};

const Template = props => <Card {...props} />;

export const card = Template.bind({});
card.props = {};
