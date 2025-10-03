
import React from 'react';

interface LaunchButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LaunchButton: React.FC<LaunchButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-black font-bold rounded-lg shadow-lg shadow-orange-500/20 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-orange-600/40 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </button>
  );
};

export default LaunchButton;