import React from 'react';

interface PlusIconProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ height = 16, width = 16, color = '#18181B' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3V13M13 8L3 8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusIcon;
