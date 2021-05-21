import { Story } from '@storybook/react';

import { SearchBar } from 'components/UI/SearchBar/SearchBar';

export default {
  title: 'UI/Search',
  component: SearchBar,
};

const Template: Story<{}> = args => <SearchBar {...args} />;

export const search = Template.bind({});
search.args = {};
