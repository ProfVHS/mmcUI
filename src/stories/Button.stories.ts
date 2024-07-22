import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "../components";

const meta: Meta = {
  component: Button,
  title: "mmcUI/Inputs/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
