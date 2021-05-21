import { Story } from '@storybook/react';

import { WeatherInformation } from 'components/Weather/Informations/WeatherInformation';

export default {
  title: 'Card/Weather/WeatherComponents/Information',
  component: WeatherInformation,
};

const Template: Story<{}> = args => <WeatherInformation {...args} />;

export const Information = Template.bind({});
Information.args = {};
