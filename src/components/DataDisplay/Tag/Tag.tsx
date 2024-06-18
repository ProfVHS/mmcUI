import React from "react";
import "./Tag.scss";
import { color } from "../../../types/color";
import TagCloseButton from "./TagCloseButton";

export interface TagProps {
  children: React.ReactNode;
  color: color;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
  borderRadius?: "normal" | "round";
}

const Tag = ({
  children,
  color = "gray",
  size = "medium",
  variant = "filled",
  borderRadius = "normal",
}: TagProps) => {
  return (
    <div
      className={[
        "mmcUI__tag",
        `mmcUI__tag-${variant}--${color}`,
        `mmcUI__tag--${size}`,
        `mmcUI__tag--${borderRadius}`,
      ].join(" ")}>
      {children}
      <TagCloseButton />
    </div>
  );
};

export default Tag;
