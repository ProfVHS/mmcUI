import React from "react";
import "./Avatar.scss";

export interface AvatarProps {
  name: string;
  src?: string;
  size?: "small" | "medium" | "large";
}

const Avatar = ({ name, src }: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      className={[
        "mmcUI__avatar",
        `mmcUI__avatar--medium`,
        `mmcUI__avatar--red`,
      ].join(" ")}>
      {initials}
    </div>
  );
};

export default Avatar;
