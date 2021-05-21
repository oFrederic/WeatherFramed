import { Story } from '@storybook/react';

import { Notification } from 'components/UI/Notification/Notification';
import { NotificationProps } from 'components/UI/Notification/Notification';

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
