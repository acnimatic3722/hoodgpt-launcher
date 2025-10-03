
import React from 'react';

interface IconProps {
  className?: string;
}

const NetworkIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 00-9-9m9 9a9 9 0 01-9 9m9-9h-9m0 0a9 9 0 00-9-9m9 9a9 9 0 01-9 9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3a9 9 0 00-9 9m9-9a9 9 0 019 9m-9-9v18"
      />
    </svg>
  );
};

export default NetworkIcon;
