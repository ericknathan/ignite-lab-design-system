import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextField, TextFieldRootProps } from '../../components/form/TextField';

export default {
  title: 'Form/TextField',
  component: TextField.Root,
  args: {
    children: [
      <TextField.Icon>
        <Envelope />
      </TextField.Icon>,
      <TextField.Input placeholder="Type your e-mail address" type="email" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextFieldRootProps>;

export const Default: StoryObj<TextFieldRootProps> = {};

export const WithoutIcon: StoryObj<TextFieldRootProps> = {
  args: {
    children: <TextField.Input placeholder="Type your e-mail address" type="email" />
  },
};

