import React from 'react';
import FloatingParticle from './FloatingParticle';

// How many particles you want in the background
const PARTICLE_COUNT = 24;

const AnimatedBackground = ({
  width = '100vw',
  height = '100vh',
  style = {},
  className = '',
  particleColor = 'rgba(156, 39, 176, 0.09)',
  minSize = 30,
  maxSize = 120,
  minDuration = 14,
  maxDuration = 28,
}) => (
  <div
    className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    style={{ width, height, ...style }}
    aria-hidden="true"
  >
    {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
      <FloatingParticle
        key={i}
        color={particleColor}
        minSize={minSize}
        maxSize={maxSize}
        minDuration={minDuration}
        maxDuration={maxDuration}
      />
    ))}
  </div>
);

export default AnimatedBackground;
