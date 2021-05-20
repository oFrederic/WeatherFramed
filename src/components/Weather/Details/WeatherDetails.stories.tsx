import { Story } from '@storybook/react';

import WeatherDetails from './WeatherDetails';
import { WeatherDetailsProps } from './WeatherDetails';

export default {
  title: 'Card/Weather/WeatherComponents/Details',
  component: WeatherDetails,
};

const Template: Story<WeatherDetailsProps> = args => (
  <WeatherDetails {...args} />
);

export const Details = Template.bind({});
Details.args = {};
