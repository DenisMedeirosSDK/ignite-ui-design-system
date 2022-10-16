import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from '@ignite-ui-denis/react';

export default {
  title: 'Surfaces/Toast',
  component: Toast,

  args: {
    title: 'Title toast',
    description: 'Description toast',
  },
  argTypes: {},
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
