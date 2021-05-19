import { Story } from '@storybook/react';

import WeatherDetails from './WeatherDetails';
import { WeatherDetailsProps } from './WeatherDetails';

export default {
  title: 'Card/Weather/WeatherComponents/Details',
  component: WeatherDetails,
  argTypes: {},
};

const Template: Story<WeatherDetailsProps> = props => (
  <WeatherDetails {...props} />
);

export const Details = Template.bind({});
Details.argTypes = {};
