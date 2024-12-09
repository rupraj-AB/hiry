import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const LinkIcon: React.FC<IconProps> = ({
  width = 20, // Default width
  height = 20, // Default height
  color = '#71717A', // Default color
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9919 7.24035C11.3661 7.4191 11.7167 7.66343 12.0267 7.97335C13.4911 9.43782 13.4911 11.8122 12.0267 13.2766L8.27665 17.0267C6.81218 18.4911 4.43782 18.4911 2.97335 17.0267C1.50888 15.5622 1.50888 13.1878 2.97335 11.7234L4.43749 10.2592M15.5625 9.74079L17.0267 8.27665C18.4911 6.81218 18.4911 4.43782 17.0267 2.97335C15.5622 1.50888 13.1878 1.50888 11.7234 2.97335L7.97335 6.72335C6.50888 8.18782 6.50888 10.5622 7.97335 12.0267C8.28327 12.3366 8.63394 12.5809 9.00812 12.7597"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkIcon;
