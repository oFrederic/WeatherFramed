import { Story } from '@storybook/react';

import Search from './SearchBar';
import { SearchBarProps } from './SearchBar';

export default {
  title: 'UI/Search',
  component: Search,
};

const Template: Story<SearchBarProps> = args => <Search {...args} />;

export const search = Template.bind({});
search.args = {};
