import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import Icon from '../Icon/Icon';

export default {
  title: 'Components/IconButton',
  component: Button,
  argTypes: {
    outlined: { controls: [true, false] },
  },
} as ComponentMeta<typeof Button>;

export const ListButton: ComponentStory<typeof Button> = args => (
  <Button {...args}>
    <Icon icon="list" />
    List
  </Button>
);

export const SortButton: ComponentStory<typeof Button> = args => (
  <Button {...args}>
    <Icon icon="sort" />
    sort
  </Button>
);

export const DeleteButton: ComponentStory<typeof Button> = args => (
  <Button {...args}>
    <Icon icon="trash" />
    Delete
  </Button>
);
