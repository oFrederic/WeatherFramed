import WeatherCard from './WeatherCard';

export default {
  title: 'Card/Weather',
  component: WeatherCard,
};

const Template = props => <WeatherCard {...props} />;

export const weather = Template.bind({});
weather.props = {};
