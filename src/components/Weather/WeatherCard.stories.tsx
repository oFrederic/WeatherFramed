import { Story } from '@storybook/react';

import WeatherCard from './WeatherCard';
import { WeatherCardProps } from './WeatherCard';

export default {
  title: 'Card/Weather',
  component: WeatherCard,
  argTypes: {},
};

const Template: Story<WeatherCardProps> = props => <WeatherCard {...props} />;

export const weather = Template.bind({});
weather.argTypes = {};
