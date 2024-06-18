import React from "react";
import "./Card.scss";

export interface CardProps {
  children?: React.ReactNode;
  maxWidth?: string;
  variant?: "shadow" | "border";
  direction?: "row" | "column";
}

const Card = ({
  children,
  maxWidth,
  variant = "shadow",
  direction = "column",
}: CardProps) => {
  return (
    <div
      className={["mmcUI__card", `mmcUI__card--${variant}`].join(" ")}
      style={{ maxWidth: maxWidth, flexDirection: direction }}>
      {children}
    </div>
  );
};

export default Card;
