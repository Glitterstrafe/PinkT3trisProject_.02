import React from 'react';
import { Trophy } from 'lucide-react';

interface HighScoresProps {
  scores: number[];
}

const HighScores: React.FC<HighScoresProps> = ({ scores }) => (
  <div className="bg-pink-950/50 backdrop-blur-sm p-4 rounded-lg border-2 border-pink-400">
    <div className="flex items-center gap-2 mb-4">
      <Trophy className="w-5 h-5 text-pink-300" />
      <h3 className="pixel-text text-lg text-pink-300">High Scores</h3>
    </div>
    <div className="space-y-2">
      {scores.map((score, index) => (
        <div key={index} className="pixel-text text-sm flex justify-between">
          <span className="text-pink-300">#{index + 1}</span>
          <span className="text-white">{score}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HighScores;