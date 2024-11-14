import React from 'react';

interface NextPieceProps {
  piece: number[][];
}

const NextPiece: React.FC<NextPieceProps> = ({ piece }) => (
  <div className="bg-pink-950/50 backdrop-blur-sm p-4 rounded-lg border-2 border-pink-400">
    <h3 className="pixel-text text-lg mb-2 text-pink-300">Next Piece</h3>
    <div className="grid gap-px">
      {piece.map((row, y) => (
        <div key={y} className="flex">
          {row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`
                w-4 h-4 border border-pink-900/20
                ${cell ? 'bg-pink-400' : 'bg-transparent'}
              `}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default NextPiece;