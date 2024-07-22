import React from "react";
import "./ButtonStyle.scss";
import { color } from "../../../types/color";

export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "normal" | "outline";
  color?: color;
}

const Button = ({
  size = "medium",
  variant = "normal",
  color = "blue",
  children,
}: ButtonProps) => {
  return (
    <button
      className={[
        "mmcUI__button",
        `mmcUI__button--${variant}`,
        `mmcUI__button--${variant}--${color}`,
        `mmcUI__button--${size}`,
      ].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
