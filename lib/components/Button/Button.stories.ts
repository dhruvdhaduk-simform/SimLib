import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../lib/main";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["style1", "style2"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "style1",
  },
};

export const Secondary: Story = {
  args: {
    variant: "style2",
  },
};
