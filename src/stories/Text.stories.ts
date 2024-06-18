import type { StoryObj, Meta } from "@storybook/react";
import { Text } from "../components";

const meta: Meta = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "tekst",
    fontSize: "small",
  },
};
