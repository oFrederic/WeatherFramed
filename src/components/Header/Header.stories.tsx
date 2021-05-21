import { Story } from '@storybook/react';

import { Header } from 'components/Header/Header';

export default {
  title: 'Header/Header',
  component: Header,
};

const Template: Story<{}> = args => <Header {...args} />;

export const header = Template.bind({});
header.args = {};
