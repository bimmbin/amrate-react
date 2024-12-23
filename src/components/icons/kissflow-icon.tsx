import type React from 'react';

interface IconProps {
  className?: string; // Optional additional classes
}

const KissflowIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <rect width={8} height={8} x={3} y={3} rx={2}></rect>
        <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
        <rect width={8} height={8} x={13} y={13} rx={2}></rect>
      </g>
    </svg>
  );
};

export default KissflowIcon;
