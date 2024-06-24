import type { StoryObj, Meta } from "@storybook/react";
import { Avatar } from "../components";

const meta: Meta = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "John Doe",
  },
};
