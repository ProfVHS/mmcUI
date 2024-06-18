import React from "react";
import { SVGProps } from "react";

const TagCloseButton = () => {
  return (
    <div className="mmcUI__tag-closeBtn">
      <CloseSvg />
    </div>
  );
};

export default TagCloseButton;

const CloseSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={29}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 27L14.5 14.5L27 27M27 2L14.4976 14.5L2 2"
      stroke="white"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
