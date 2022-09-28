import * as React from "react";

const XIcon = (props) => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000">
      <path
        d="M6.758 17.243 12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XIcon;
