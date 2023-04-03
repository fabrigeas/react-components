import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToastNotificationList from './ToastNotificationList';
import { fakeToastNotificationList } from '../../fake';
import { Message } from '../../types';

const notifications = fakeToastNotificationList(2);
const success = fakeToastNotificationList(2, { type: 'success' });
const error = fakeToastNotificationList(2, { type: 'error' });
const info = fakeToastNotificationList(2, { type: 'info' });
const warning = fakeToastNotificationList(2, { type: 'warning' });

export default {
  title: 'Components/ToastNotificationList',
  component: ToastNotificationList,
  args: {
    notifications,
    destroy: console.log,
  },
  argTypes: {
    notifications: {
      controls: {
        info,
        success,
        error,
        warning,
      },
    },
  },
} as ComponentMeta<typeof ToastNotificationList>;

const Template: ComponentStory<typeof ToastNotificationList> = args => (
  <ToastNotificationList {...args} />
);
const createStory = (notifications: Message[]) => {
  const story = Template.bind({});

  story.args = {
    notifications,
  };

  return story;
};

export const Info = createStory(info);
export const Success = createStory(success);
export const Error = createStory(error);
export const Warning = createStory(warning);
