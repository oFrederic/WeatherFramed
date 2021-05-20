import { Story } from '@storybook/react';

import Card from './Card';
import { CardProps } from './Card';

export default {
  title: 'UI/Card',
  component: Card,
};

const Template: Story<CardProps> = args => <Card {...args} />;

export const card = Template.bind({});
card.args = {};
