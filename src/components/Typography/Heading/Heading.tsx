import React from "react";
import "./Heading.scss";

export interface HeadingProps {
  children: React.ReactNode;
  fontSize?: "small" | "medium" | "large" | "xlarge" | "2xlarge" | "3xlarge";
  color?: string;
  textStyle?:
    | "italic"
    | "underline"
    | "line-through"
    | "overline"
    | "capitalize"
    | "uppercase"
    | "lowercase";
}

const Heading = ({ children, fontSize, color, textStyle }: HeadingProps) => {
  return (
    <h1
      className={[
        "mmcUI__heading",
        `mmcUI__heading--${fontSize}`,
        textStyle ? `mmcUI__text--${textStyle}` : null,
      ].join(" ")}>
      {children}
    </h1>
  );
};

export default Heading;
