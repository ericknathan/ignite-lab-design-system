import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '../../components/typography/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading as h1</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};
