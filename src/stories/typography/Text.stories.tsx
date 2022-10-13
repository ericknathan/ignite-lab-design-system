import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '../../components/typography/Text';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Hello world',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text as paragraph</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};
