import React from 'react';

interface ArrowBackProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

const ArrowBack: React.FC<ArrowBackProps> = ({ height = 16, width = 16, color = '#52525B' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13L2 8M2 8L7 3M2 8H14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowBack;
