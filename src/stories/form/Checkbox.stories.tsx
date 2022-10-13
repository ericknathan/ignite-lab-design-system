import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/form/Checkbox';
import { Text } from '../../components/typography/Text';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        <Story />
        <Text size="sm">Lembrar-me de mim por 30 dias</Text>
      </div>
    )
  ]
} as Meta;

export const Default: StoryObj = {};

