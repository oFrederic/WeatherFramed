import { Story } from '@storybook/react';

import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
};

const Template: Story<{}> = args => <Card {...args} />;

export const card = Template.bind({});
card.args = {};
