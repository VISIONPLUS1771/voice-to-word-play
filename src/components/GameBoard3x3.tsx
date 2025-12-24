import { cn } from '@/lib/utils';
import { useGameStore } from '@/store/gameStore';

interface GameBoard3x3Props {
  board: (string | null)[];
  onCellClick?: (index: number) => void;
  winningLine?: number[] | null;
  className?: string;
}

export function GameBoard3x3({ board, onCellClick, winningLine, className }: GameBoard3x3Props) {
  const { dictionary } = useGameStore();
  
  const getPlayerColor = (playerId: string | null) => {
    if (!playerId) return '';
    
    const word = dictionary.find(w => w.id === playerId);
    if (!word) return 'bg-primary/20';
    
    // Map different words to different colors
    const colorMap: Record<string, string> = {
      'macka': 'bg-gradient-to-br from-primary to-primary-glow',
      'pas': 'bg-gradient-to-br from-accent to-accent-glow',
      'jabuka': 'bg-gradient-to-br from-success to-success-glow',
      'jaje': 'bg-gradient-to-br from-warning to-warning/80',
      'sunce': 'bg-gradient-to-br from-secondary to-secondary-glow',
    };
    
    return colorMap[playerId] || 'bg-gradient-to-br from-primary to-primary-glow';
  };
  
  return (
    <div className={cn('game-board-3x3', className)}>
      {board.map((cell, index) => {
        const word = cell ? dictionary.find(w => w.id === cell) : null;
        const isWinning = winningLine?.includes(index);
        
        return (
          <div
            key={index}
            className={cn(
              'board-cell min-h-[100px]',
              cell && 'board-cell-filled',
              isWinning && 'board-cell-winning animate-success'
            )}
            onClick={() => !cell && onCellClick?.(index)}
          >
            {word && (
              <div className={cn(
                'w-full h-full rounded-xl flex flex-col items-center justify-center p-2',
                getPlayerColor(cell)
              )}>
                <img 
                  src={word.image} 
                  alt={word.word_lat}
                  className="w-12 h-12 object-contain animate-bounce-in"
                />
                <span className="text-xs font-bold text-white mt-1 drop-shadow-lg">
                  {word.word_lat}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
