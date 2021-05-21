import { Story } from '@storybook/react';

import { WeatherCard } from 'components/Weather/WeatherCard';

export default {
  title: 'Card/Weather',
  component: WeatherCard,
};

const Template: Story<{}> = args => <WeatherCard {...args} />;

export const weather = Template.bind({});
weather.args = {};
