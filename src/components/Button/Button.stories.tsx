import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    outlined: { controls: [true, false] },
  },
  args: {
    outlined: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Hello</Button>;

const createStory = ({ outlined, buttonType }: ButtonProps) => {
  const story = Template.bind({});

  story.args = {
    outlined,
    buttonType,
  };

  return story;
};

export const Outlined = createStory({ outlined: true });
export const Default = createStory({ buttonType: 'default' });
export const Success = createStory({ buttonType: 'success' });
export const Info = createStory({ buttonType: 'info' });
export const Warning = createStory({ buttonType: 'warning' });
export const Error = createStory({ buttonType: 'error' });
