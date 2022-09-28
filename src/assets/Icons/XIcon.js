import * as React from "react";

const XIcon = (props) => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m8 8 3.496 3.495m-6.99 0L8 8l-3.495 3.495Zm6.99-6.99L8.001 8l3.495-3.495ZM8.001 8 4.506 4.505 8 8Z"
        stroke="#4D4D4D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XIcon;
