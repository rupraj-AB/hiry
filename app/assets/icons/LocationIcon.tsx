import React from 'react';

interface LocationIconProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

const LocationIcon: React.FC<LocationIconProps> = ({ height = 20, width = 20, color = '#71717A' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 8.75C12.5 10.1307 11.3807 11.25 10 11.25C8.61929 11.25 7.5 10.1307 7.5 8.75C7.5 7.36929 8.61929 6.25 10 6.25C11.3807 6.25 12.5 7.36929 12.5 8.75Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 8.75C16.25 14.7018 10 18.125 10 18.125C10 18.125 3.75 14.7018 3.75 8.75C3.75 5.29822 6.54822 2.5 10 2.5C13.4518 2.5 16.25 5.29822 16.25 8.75Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LocationIcon;
