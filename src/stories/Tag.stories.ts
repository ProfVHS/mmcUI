import type { StoryObj, Meta } from "@storybook/react";
import { Tag } from "../components";

const meta: Meta = {
  component: Tag,
  title: "mmcUI/Data Display/Tag",
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};
