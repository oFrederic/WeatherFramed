import Search from './SearchBar';

export default {
  title: 'Header/components/Search',
  component: Search,
};

const Template = props => <Search {...props} />;

export const search = Template.bind({});
search.props = {};
