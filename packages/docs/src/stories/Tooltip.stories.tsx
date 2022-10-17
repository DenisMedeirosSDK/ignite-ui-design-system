import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProps, Text, Box } from '@ignite-ui-denis/react';

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,

  args: {
    title: 'Tooltip',
    children: (
      <Box>
        <Text>Simple text to tooltip</Text>
      </Box>
    ),
  },
  argTypes: {},
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
