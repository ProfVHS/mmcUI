import type { StoryObj, Meta } from "@storybook/react";
import { Heading } from "../components";

const meta: Meta = {
  component: Heading,
  title: "mmcUI/Typography/Heading",
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};
