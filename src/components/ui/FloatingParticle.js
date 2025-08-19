import React, { useMemo } from 'react';

// Utility functions (no imports, placed here to avoid circular dependency)
function getRandomPosition() {
  return {
    top: Math.random() * 100,
    left: Math.random() * 100,
  };
}

function getRandomSize(min = 30, max = 120) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDuration(min = 14, max = 28) {
  return Math.random() * (max - min) + min;
}

const FloatingParticle = ({
  color = 'rgba(156, 39, 176, 0.09)',
  minSize = 30,
  maxSize = 120,
  minDuration = 14,
  maxDuration = 28,
}) => {
  // Memoize properties so they only get set on mount, never on every render
  const { top, left } = useMemo(() => getRandomPosition(), []);
  const size = useMemo(() => getRandomSize(minSize, maxSize), []);
  const duration = useMemo(() => getRandomDuration(minDuration, maxDuration), []);
  const delay = useMemo(() => getRandomDuration(0, 14), []);

  return (
    <div
      className="rounded-full absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: size,
        height: size,
        background: color,
        opacity: 0.75,
        animation: `floatY ${duration}s ease-in-out ${delay}s infinite alternate`,
        filter: 'blur(1px)'
      }}
    />
  );
};

export default FloatingParticle;
