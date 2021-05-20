import { Story } from '@storybook/react';

import WeatherCard from './WeatherCard';
import { WeatherCardProps } from './WeatherCard';

export default {
  title: 'Card/Weather',
  component: WeatherCard,
};

const Template: Story<WeatherCardProps> = args => <WeatherCard {...args} />;

export const weather = Template.bind({});
weather.args = {};
