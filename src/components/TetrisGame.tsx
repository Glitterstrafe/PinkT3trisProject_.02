import React from 'react';
import { useGameLogic } from '../hooks/useGameLogic';
import Board from './Board';
import GameStats from './GameStats';
import TitleScreen from './TitleScreen';
import GameOver from './GameOver';
import NextPiece from './NextPiece';
import HighScores from './HighScores';
import Lives from './Lives';
import HeartEffects from './HeartEffects';
import PauseOverlay from './PauseOverlay';
import { RefreshCw, Pause, Play } from 'lucide-react';

const TetrisGame: React.FC = () => {
  const {
    board,
    score,
    level,
    gameOver,
    isPlaying,
    isPaused,
    startGame,
    moveBlock,
    rotateBlock,
    dropBlock,
    togglePause,
    currentPiece,
    currentPosition,
    nextPiece,
    highScores,
    lives,
    linesCleared,
    setLinesCleared
  } = useGameLogic();

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      
      switch (e.key.toLowerCase()) {
        case 'a':
        case 'arrowleft':
          moveBlock('left');
          break;
        case 'd':
        case 'arrowright':
          moveBlock('right');
          break;
        case 's':
        case 'arrowdown':
          moveBlock('down');
          break;
        case 'w':
        case 'arrowup':
          rotateBlock();
          break;
        case ' ':
          dropBlock();
          break;
        case 'p':
        case 'escape':
          togglePause();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, moveBlock, rotateBlock, dropBlock, togglePause]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-900 to-pink-950 text-white">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-pink-300"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>
      
      {!isPlaying && !gameOver && <TitleScreen onStart={startGame} />}

      {(isPlaying || gameOver) && (
        <div className="container mx-auto px-4 py-8 flex justify-center items-start gap-8">
          <div className="hidden md:block">
            <HighScores scores={highScores} />
          </div>
          
          <div className="game-container relative">
            <GameStats score={score} level={level} />
            <div className="relative">
              <Board 
                board={board} 
                currentPiece={currentPiece} 
                currentPosition={currentPosition}
              />
              {isPaused && <PauseOverlay />}
              {gameOver && <GameOver score={score} onRestart={startGame} />}
              {linesCleared > 0 && (
                <HeartEffects 
                  linesCleared={linesCleared} 
                  onEffectComplete={() => setLinesCleared(0)} 
                />
              )}
            </div>
            <div className="mt-4 text-center pixel-text text-sm text-pink-300 space-y-2">
              <p>↑/W - Rotate</p>
              <p>←/A, →/D - Move Left/Right</p>
              <p>↓/S - Soft Drop</p>
              <p>Space - Hard Drop</p>
              <p>P/ESC - Pause</p>
            </div>
          </div>

          <div className="hidden md:flex md:flex-col gap-4">
            <NextPiece piece={nextPiece} />
            <Lives lives={lives} />
            {isPlaying && (
              <button
                onClick={togglePause}
                className="pixel-button bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 text-sm flex items-center justify-center gap-2"
              >
                {isPaused ? (
                  <>
                    <Play className="w-4 h-4" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                )}
              </button>
            )}
            {isPlaying && (
              <button
                onClick={startGame}
                className="pixel-button bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 text-sm flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Restart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TetrisGame;