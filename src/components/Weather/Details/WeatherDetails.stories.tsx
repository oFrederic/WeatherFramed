import { Story } from '@storybook/react';

import { WeatherDetails } from 'components/Weather/Details/WeatherDetails';

export default {
  title: 'Card/Weather/WeatherComponents/Details',
  component: WeatherDetails,
};

const Template: Story<{}> = args => <WeatherDetails {...args} />;

export const Details = Template.bind({});
Details.args = {};
