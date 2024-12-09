import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const PencilIcon: React.FC<IconProps> = ({
  width = 16, // Default width
  height = 16, // Default height
  color = '#7730F7', // Default color
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1416_3676)">
        <path
          d="M11.2411 2.99111L12.3661 1.86612C12.8543 1.37796 13.6457 1.37796 14.1339 1.86612C14.622 2.35427 14.622 3.14573 14.1339 3.63388L4.55479 13.213C4.20234 13.5654 3.76762 13.8245 3.28993 13.9668L1.5 14.5L2.03319 12.7101C2.17548 12.2324 2.43456 11.7977 2.78701 11.4452L11.2411 2.99111ZM11.2411 2.99111L13 4.74999"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1416_3676">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PencilIcon;
