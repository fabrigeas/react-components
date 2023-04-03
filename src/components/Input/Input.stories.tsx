import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    isValid: { controls: [false, true, undefined] },
    validFeedback: { controls: ['Well done'] },
    invalidFeedback: { controls: ['Please fill in'] },
  },
  args: {
    label: 'Lorem Ipsum:',
    onChange: console.log,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args}></Input>;
const createStory = (args?: InputProps) => {
  const story = Template.bind({});
  
  story.args = args;

  return story;
};

export const NeutralInput = createStory();
export const UnLabelled = createStory({ label: undefined });
export const ValidInput = createStory({
  validFeedback: 'well done',
  isValid: true,
});
export const InvalidInput = createStory({
  invalidFeedback: 'Please fill this',
  isValid: false,
});
export const Textarea = createStory({
  textarea: true,
  rows: 4,
});
export const ValidTextarea = createStory({
  ...Textarea.args,
  isValid: true,
  validFeedback: 'Looks fine',
});
export const InvalidTextarea = createStory({
  ...Textarea.args,
  isValid: false,
  invalidFeedback: 'Looks fine',
});
