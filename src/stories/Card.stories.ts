import type { StoryObj, Meta } from "@storybook/react";
import { Card } from "../components";

const meta: Meta = {
  component: Card,
  title: "mmcUI/Data Display/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};
