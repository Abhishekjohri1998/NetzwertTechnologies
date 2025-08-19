// animation.js: Utility helpers for random animation properties

// Provides a random position for a floating particle as percentages
export const getRandomPosition = () => ({
  top: Math.random() * 100,
  left: Math.random() * 100
});

// Returns a random size between min and max (in px)
export const getRandomSize = (min = 32, max = 128) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Returns a random duration (seconds) for animation
export const getRandomDuration = (min = 14, max = 28) =>
  Math.random() * (max - min) + min;
