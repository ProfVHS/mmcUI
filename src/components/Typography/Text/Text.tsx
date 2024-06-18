import React from "react";

import "./Text.scss";

export interface TextProps {
  children: React.ReactNode;
  fontSize?: "small" | "medium" | "large" | "xlarge" | "2xlarge" | "3xlarge";
  color?: string;
  fontWeight?: "light" | "normal" | "semi-bold" | "bold";
  textStyle?:
    | "italic"
    | "underline"
    | "line-through"
    | "overline"
    | "capitalize"
    | "uppercase"
    | "lowercase";
}

const Text = ({
  children,
  fontSize = "small",
  color,
  fontWeight = "normal",
  textStyle,
}: TextProps) => {
  return (
    <p
      className={[
        "mmcUI__text",
        `mmcUI__text--${fontSize}`,
        `mmcUI__text--${fontWeight}`,
        textStyle ? `mmcUI__text--${textStyle}` : null,
      ].join(" ")}
      style={{ color: color }}>
      {children}
    </p>
  );
};

export default Text;
