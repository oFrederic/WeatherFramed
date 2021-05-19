import WeatherDetails from './WeatherDetails';

export default {
  title: 'Card/Weather/WeatherComponents/Details',
  component: WeatherDetails,
};

const Template = props => <WeatherDetails {...props} />;

export const Details = Template.bind({});
Details.props = {};
