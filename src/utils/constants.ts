export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const INITIAL_SPEED = 1000;
export const SPEED_INCREASE = 0.8;
export const INITIAL_LIVES = 3;

// Updated with more contrasting pink shades
export const PIECE_COLORS = {
  I: 'bg-pink-200', // Very Light pink
  O: 'bg-pink-600', // Dark pink
  T: 'bg-pink-400', // Medium pink
  S: 'bg-pink-800', // Very Dark pink
  Z: 'bg-pink-300', // Light pink
  J: 'bg-pink-500', // Regular pink
  L: 'bg-pink-700'  // Darker pink
};

export const TETROMINOS = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  O: [
    [2, 2],
    [2, 2]
  ],
  T: [
    [0, 3, 0],
    [3, 3, 3],
    [0, 0, 0]
  ],
  S: [
    [0, 4, 4],
    [4, 4, 0],
    [0, 0, 0]
  ],
  Z: [
    [5, 5, 0],
    [0, 5, 5],
    [0, 0, 0]
  ],
  J: [
    [6, 0, 0],
    [6, 6, 6],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 7],
    [7, 7, 7],
    [0, 0, 0]
  ]
};