import { Story } from '@storybook/react';

import Search from './SearchBar';

export default {
  title: 'UI/Search',
  component: Search,
};

const Template: Story<{}> = args => <Search {...args} />;

export const search = Template.bind({});
search.args = {};
