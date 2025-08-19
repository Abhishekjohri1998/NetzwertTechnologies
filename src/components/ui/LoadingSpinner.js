import React from 'react';

const LoadingSpinner = ({ className = '', size = 48, color = 'border-purple-500' }) => (
  <div className={`flex justify-center items-center ${className}`}>
    <div
      className={`animate-spin rounded-full h-${size} w-${size} border-4 border-t-transparent ${color}`}
      style={{
        width: size,
        height: size,
        borderWidth: size / 12,
      }}
      aria-label="Loading"
    />
  </div>
);

export default LoadingSpinner;
