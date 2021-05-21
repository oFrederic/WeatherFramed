import { Story } from '@storybook/react';

import { WeatherDetails } from './WeatherDetails';

export default {
  title: 'Card/Weather/WeatherComponents/Details',
  component: WeatherDetails,
};

const Template: Story<{}> = args => <WeatherDetails {...args} />;

export const Details = Template.bind({});
Details.args = {};
