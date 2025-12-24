import { cn } from '@/lib/utils';
import { WordData } from '@/lib/phonology';
import { Volume2 } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { speakText } from '@/lib/phonology';
import { useGameSounds } from '@/hooks/useGameSounds';

interface GameBoard6x10Props {
  board: (string | null)[];
  activeWord?: WordData | null;
  onCellClick?: (index: number) => void;
  onActiveWordClick?: () => void;
  className?: string;
}

export function GameBoard6x10({ 
  board, 
  activeWord, 
  onCellClick, 
  onActiveWordClick,
  className 
}: GameBoard6x10Props) {
  const { settings } = useGameStore();
  const { playPlace, playClick } = useGameSounds();
  
  const handleCellClick = (index: number) => {
    if (board[index] === null) {
      playPlace();
    }
    onCellClick?.(index);
  };
  
  const handleWordClick = () => {
    if (activeWord && settings.soundEnabled) {
      playClick();
      const word = settings.script === 'latin' ? activeWord.word_lat : activeWord.word_cyr;
      speakText(word);
    }
    onActiveWordClick?.();
  };
  
  return (
    <div className={cn('space-y-6', className)}>
      {/* Active word display */}
      <div className="flex justify-center">
        <div 
          className="relative group cursor-pointer"
          onClick={handleWordClick}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-token-red to-destructive rounded-3xl 
                          flex items-center justify-center shadow-xl
                          transition-transform duration-300 group-hover:scale-105">
            {activeWord ? (
              <div className="text-center p-2">
                <img 
                  src={activeWord.image} 
                  alt={activeWord.word_lat}
                  className="w-16 h-16 object-contain mx-auto mb-1"
                />
                <p className="text-white font-bold text-sm drop-shadow-lg">
                  {settings.script === 'latin' ? activeWord.word_lat : activeWord.word_cyr}
                </p>
              </div>
            ) : (
              <div className="text-white/80 text-4xl font-bold">?</div>
            )}
          </div>
          
          {/* TTS indicator */}
          {activeWord && settings.soundEnabled && (
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full 
                            flex items-center justify-center shadow-lg
                            transition-transform group-hover:scale-110">
              <Volume2 className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </div>
      
      {/* Phoneme info */}
      {activeWord && (
        <div className="flex justify-center gap-2 flex-wrap">
          {activeWord.phonemes.map((phoneme, idx) => (
            <div 
              key={idx}
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-md",
                "transition-all duration-300 hover:scale-110",
                activeWord.vowels_idx.includes(idx) 
                  ? "bg-gradient-to-br from-token-yellow to-warning text-black" 
                  : "bg-gradient-to-br from-token-black to-foreground text-white"
              )}
            >
              {phoneme}
            </div>
          ))}
        </div>
      )}
      
      {/* 6x10 Grid */}
      <div className="game-board-6x10">
        {board.map((cell, index) => (
          <div
            key={index}
            className={cn(
              'board-cell aspect-square',
              cell && 'board-cell-filled'
            )}
            onClick={() => handleCellClick(index)}
          >
            {cell && (
              <div className={cn(
                'w-6 h-6 rounded-full shadow-md animate-bounce-in',
                cell === 'black' && 'token-black',
                cell === 'yellow' && 'token-yellow',
                cell === 'red' && 'token-red'
              )} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
