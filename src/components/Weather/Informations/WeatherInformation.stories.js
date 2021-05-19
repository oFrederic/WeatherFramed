import WeatherInformation from './WeatherInformation';

export default {
  title: 'Card/Weather/WeatherComponents/Information',
  component: WeatherInformation,
};

const Template = props => <WeatherInformation {...props} />;

export const Information = Template.bind({});
Information.props = {};
