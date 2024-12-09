import React from "react";

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const BuildingIcon: React.FC<IconProps> = ({
  width = 16, // Default width
  height = 14, // Default height
  color = "#0E0CFF", // Default color
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 13H14.5M2.5 1V13M9.5 1V13M13.5 4V13M4.5 3.5H5M4.5 5.5H5M4.5 7.5H5M7 3.5H7.5M7 5.5H7.5M7 7.5H7.5M4.5 13V10.75C4.5 10.3358 4.83579 10 5.25 10H6.75C7.16421 10 7.5 10.3358 7.5 10.75V13M2 1H10M9.5 4H14M11.5 6.5H11.505V6.505H11.5V6.5ZM11.5 8.5H11.505V8.505H11.5V8.5ZM11.5 10.5H11.505V10.505H11.5V10.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BuildingIcon;
