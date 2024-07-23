import type { StoryObj, Meta } from "@storybook/react";
import { CartoonButton } from "../../components";

const meta: Meta = {
  component: CartoonButton,
  title: "mmcUI/Inputs/CartoonButton",
};

export default meta;
type Story = StoryObj<typeof CartoonButton>;

export const Default: Story = {
  args: {
    children: "Cartoon Button",
  },
};
