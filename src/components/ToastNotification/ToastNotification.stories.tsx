import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToastNotification from './ToastNotification';
import { fakeMessage } from '../../fake';
import { Message } from '../../types';

const destroy = console.log;
const message = fakeMessage();
const success = fakeMessage({ type: 'success' });
const info = fakeMessage({ type: 'info' });
const warning = fakeMessage({ type: 'warning' });
const error = fakeMessage({ type: 'error' });

export default {
  title: 'Components/ToastNotification',
  component: ToastNotification,
  argTypes: {
    message: {
      controls: 'select',
      options: {
        info,
        success,
        warning,
        error,
      },
    },
  },
  args: {
    message,
    destroy,
  },
} as ComponentMeta<typeof ToastNotification>;

const Template: ComponentStory<typeof ToastNotification> = args => (
  <ToastNotification {...args} />
);
const createStory = (message: Message) => {
  const story = Template.bind({});
  story.args = {
    message,
  };

  return story;
};

export const Info = createStory(info);
export const Warning = createStory(warning);
export const Success = createStory(success);
export const Error = createStory(error);
