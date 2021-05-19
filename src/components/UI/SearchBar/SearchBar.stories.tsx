import { Story } from '@storybook/react';

import Search from './SearchBar';
import { SearchBarProps } from './SearchBar';

export default {
  title: 'UI/Search',
  component: Search,
  argTypes: {},
};

const Template: Story<SearchBarProps> = props => <Search {...props} />;

export const search = Template.bind({});
search.argTypes = {};
