import { cn } from '@/lib/utils';
import { WordData } from '@/lib/phonology';
import { WordCard } from './WordCard';

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
  return (
    <div className={cn('space-y-4', className)}>
      {/* Active word display (red field) */}
      <div className="flex justify-center">
        <div 
          className="w-24 h-24 bg-token-red rounded-2xl flex items-center justify-center
                     cursor-pointer hover:scale-105 transition-transform shadow-lg"
          onClick={onActiveWordClick}
        >
          {activeWord ? (
            <WordCard word={activeWord} size="sm" />
          ) : (
            <div className="text-white font-bold">?</div>
          )}
        </div>
      </div>
      
      {/* 6x10 Grid */}
      <div className="game-board-6x10">
        {board.map((cell, index) => (
          <div
            key={index}
            className={cn(
              'board-cell aspect-square text-xs',
              cell && 'board-cell-filled'
            )}
            onClick={() => onCellClick?.(index)}
          >
            {cell && (
              <div className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold',
                cell === 'black' && 'bg-token-black',
                cell === 'yellow' && 'bg-token-yellow text-black',
                cell === 'red' && 'bg-token-red'
              )}>
                {cell === 'word-card' ? '📄' : 
                 cell === 'letter-card' ? '🔤' : ''}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}