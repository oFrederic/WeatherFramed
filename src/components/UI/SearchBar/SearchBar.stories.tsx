import { Story } from '@storybook/react';

import { SearchBar } from './SearchBar';

export default {
  title: 'UI/Search',
  component: SearchBar,
};

const Template: Story<{}> = args => <SearchBar {...args} />;

export const search = Template.bind({});
search.args = {};
