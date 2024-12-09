import React from 'react';

interface CrossIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const CrossIcon: React.FC<CrossIconProps> = ({
  color = '#71717A', // Default color
  width = 8,         // Default width
  height = 8,        // Default height
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L7 1M1 1L7 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
