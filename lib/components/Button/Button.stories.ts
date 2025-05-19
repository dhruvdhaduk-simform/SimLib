import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../lib/main";

const meta: Meta<typeof Button> = {
  title: "Components/Buton",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
