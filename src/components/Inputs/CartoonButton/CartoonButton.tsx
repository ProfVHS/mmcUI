import React from "react";
import "./CartoonButton.scss";
import { color } from "../../../types/color";

export interface CartoonButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color: color;
  onClick?: () => void;
}

const CartoonButton = ({
  children,
  size = "medium",
  color = "blue",
  onClick,
}: CartoonButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={[
        "mmcUI__cartoonButton",
        `mmcUI__cartoonButton--${color}`,
        `mmcUI__cartoonButton--${size}`,
      ].join(" ")}>
      {children}
    </button>
  );
};

export default CartoonButton;
