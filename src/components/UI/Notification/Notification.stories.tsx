import { Story } from '@storybook/react';

import Notification from './Notification';
import { NotificationProps } from './Notification';

export default {
  title: 'UI/Notification',
  component: Notification,
};

const Template: Story<NotificationProps> = args => <Notification {...args} />;

export const notification = Template.bind({});
notification.args = {
  status: 'error',
  title: 'Error!',
  message: 'Fetching weather data failed!',
};
