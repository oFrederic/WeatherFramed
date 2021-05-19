import { Story } from '@storybook/react';

import Card from './Card';
import { CardProps } from './Card';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {},
};

const Template: Story<CardProps> = props => <Card {...props} />;

export const card = Template.bind({});
card.argTypes = {};
