import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "../components";

const meta: Meta = {
  component: Button,
  title: "mmcUI/Inputs/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  args: {
    children: "Button",
    variant: "normal",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};
