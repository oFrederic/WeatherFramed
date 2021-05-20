import { Story } from '@storybook/react';

import WeatherInformation from './WeatherInformation';
import { WeatherInformationProps } from './WeatherInformation';

export default {
  title: 'Card/Weather/WeatherComponents/Information',
  component: WeatherInformation,
};

const Template: Story<WeatherInformationProps> = args => (
  <WeatherInformation {...args} />
);

export const Information = Template.bind({});
Information.args = {};
