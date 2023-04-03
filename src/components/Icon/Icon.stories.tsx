import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon, { IconType } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    iconType: { controls: ['info', 'success', 'warning', 'error', 'next'] },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;
const createStory = (icon: IconType) => {
  const story = Template.bind({});

  story.args = {
    icon,
  };

  return story;
};

export const List = createStory('list');
export const Sort = createStory('sort');
export const Trash = createStory('trash');
export const Home = createStory('home');
export const Next = createStory('next');
