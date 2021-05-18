import Header from './Header';

export default {
  title: 'Header/Header',
  component: Header,
};

const Template = props => <Header {...props} />;

export const header = Template.bind({});
header.props = {};
