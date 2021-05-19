import { Story } from '@storybook/react';

import WeatherInformation from './WeatherInformation';
import { WeatherInformationProps } from './WeatherInformation';

export default {
  title: 'Card/Weather/WeatherComponents/Information',
  component: WeatherInformation,
  argTypes: {},
};

const Template: Story<WeatherInformationProps> = props => (
  <WeatherInformation {...props} />
);

export const Information = Template.bind({});
Information.argTypes = {};
