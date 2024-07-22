import React from "react";

import "./InputStyle.scss";

export interface InputProps {
  children: React.ReactNode;
  placeholder?: string;
  size?: "small" | "medium" | "large";
}

const Input = ({ placeholder, size = "medium" }: InputProps) => {
  return (
    <input
      className={["mmcUI__input", `mmcUI__input--${size}`].join(" ")}
      placeholder={placeholder}
    />
  );
};

export default Input;
