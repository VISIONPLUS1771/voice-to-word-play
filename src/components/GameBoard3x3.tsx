import { cn } from '@/lib/utils';

interface GameBoard3x3Props {
  board: (string | null)[];
  onCellClick?: (index: number) => void;
  winningLine?: number[] | null;
  className?: string;
}

export function GameBoard3x3({ board, onCellClick, winningLine, className }: GameBoard3x3Props) {
  return (
    <div className={cn('game-board-3x3', className)}>
      {board.map((cell, index) => (
        <div
          key={index}
          className={cn(
            'board-cell',
            cell && 'board-cell-filled',
            winningLine?.includes(index) && 'ring-2 ring-success animate-success'
          )}
          onClick={() => onCellClick?.(index)}
        >
          {cell && (
            <div className="text-2xl font-bold text-primary">
              {cell}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}