import React from 'react';

const GlowingCard = ({ children, className = "", style = {} }) => {
  return (
    <div className={`relative group ${className}`} style={style}>
      {/* Glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Card content */}
      <div className="relative glass-morphism rounded-xl p-6 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;
