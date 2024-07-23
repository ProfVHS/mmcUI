import type { StoryObj, Meta } from "@storybook/react";
import { Input } from "../../components";

const meta: Meta = {
  component: Input,
  title: "mmcUI/Inputs/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};
