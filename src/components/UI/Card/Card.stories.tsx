import { Story } from '@storybook/react';

import { Card } from 'components/UI/Card/Card';

export default {
  title: 'UI/Card',
  component: Card,
};

const Template: Story<{}> = args => <Card {...args} />;

export const card = Template.bind({});
card.args = {};
