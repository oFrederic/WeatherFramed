import Brand from './Brand';

export default {
  title: 'Header/components/Brand',
  component: Brand,
};

const Template = props => <Brand {...props} />;

export const brand = Template.bind({});
brand.props = {};
