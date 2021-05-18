import HelloWorld from './HelloWorld';

export default {
  title: 'Hello World!',
  component: HelloWorld,
};

const Template = props => <HelloWorld {...props} />;

export const Text = Template.bind({});
Text.props = {};
