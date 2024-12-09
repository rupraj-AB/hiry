import React from 'react';

interface ArrowDownProps {
  color?: string;
  width?: number;
  height?: number;
}

const ArrowDownIcon: React.FC<ArrowDownProps> = ({
  color = '#71717A', // Default color
  width = 12,        // Default width
  height = 8,        // Default height
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1.5L6 6.5L1 1.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
