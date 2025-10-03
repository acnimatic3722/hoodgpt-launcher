
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500 rounded-2xl shadow-2xl shadow-orange-950/20 p-8 w-full max-w-lg">
      {children}
    </div>
  );
};

export default Card;