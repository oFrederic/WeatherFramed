import { Story } from '@storybook/react';

import { Brand } from './Brand';

export default {
  title: 'UI/Brand',
  component: Brand,
};

const Template: Story<{}> = args => <Brand {...args} />;

export const brand = Template.bind({});
brand.args = {};
