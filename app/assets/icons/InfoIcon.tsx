import React from 'react';

interface InfoIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({
  width = 14,
  height = 14,
  color = '#71717A',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5625 6.5625L6.5867 6.5504C6.92102 6.38324 7.29745 6.6852 7.2068 7.04782L6.7932 8.70218C6.70255 9.0648 7.07898 9.36676 7.4133 9.1996L7.4375 9.1875M12.25 7C12.25 9.89949 9.89949 12.25 7 12.25C4.10051 12.25 1.75 9.89949 1.75 7C1.75 4.10051 4.10051 1.75 7 1.75C9.89949 1.75 12.25 4.10051 12.25 7ZM7 4.8125H7.00438V4.81688H7V4.8125Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;
