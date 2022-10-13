import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../../components/form/Button';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Create an account',
    size: 'md'
  },
  argTypes: {}
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

