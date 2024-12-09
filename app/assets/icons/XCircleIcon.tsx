import React from 'react';

interface XCircleIconProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

const XCircleIcon: React.FC<XCircleIconProps> = ({ height = 14, width = 14, color = '#E11D48' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.6875 5.6875L8.3125 8.3125M8.3125 5.6875L5.6875 8.3125M12.25 7C12.25 9.89949 9.89949 12.25 7 12.25C4.10051 12.25 1.75 9.89949 1.75 7C1.75 4.10051 4.10051 1.75 7 1.75C9.89949 1.75 12.25 4.10051 12.25 7Z"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default XCircleIcon;
