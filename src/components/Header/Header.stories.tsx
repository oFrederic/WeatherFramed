import { Story } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Header/Header',
  component: Header,
};

const Template: Story<{}> = args => <Header {...args} />;

export const header = Template.bind({});
header.args = {};
