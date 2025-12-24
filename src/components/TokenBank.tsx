import { cn } from '@/lib/utils';
import { useGameSounds } from '@/hooks/useGameSounds';

interface TokenBankProps {
  blackTokens: number;
  yellowTokens: number;
  redTokens: number;
  onTokenSelect?: (tokenType: 'black' | 'yellow' | 'red') => void;
  selectedToken?: string | null;
  className?: string;
}

export function TokenBank({ 
  blackTokens, 
  yellowTokens, 
  redTokens, 
  onTokenSelect,
  selectedToken,
  className 
}: TokenBankProps) {
  const { playSelect } = useGameSounds();
  
  const handleSelect = (type: 'black' | 'yellow' | 'red', count: number) => {
    if (count > 0) {
      playSelect();
      onTokenSelect?.(type);
    }
  };
  
  const TokenGroup = ({ 
    type, 
    count, 
    label
  }: { 
    type: 'black' | 'yellow' | 'red', 
    count: number, 
    label: string
  }) => (
    <div className="flex flex-col items-center space-y-3">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
        {label}
      </span>
      
      <div
        className={cn(
          'token w-14 h-14 cursor-pointer',
          `token-${type}`,
          selectedToken === type && 'token-selected',
          count === 0 && 'opacity-40 cursor-not-allowed grayscale'
        )}
        onClick={() => handleSelect(type, count)}
      />
      
      <div className={cn(
        'px-3 py-1 rounded-full text-sm font-bold',
        count > 0 ? 'bg-muted text-foreground' : 'bg-muted/50 text-muted-foreground'
      )}>
        {count}
      </div>
    </div>
  );
  
  return (
    <div className={cn('bg-card rounded-3xl p-6 shadow-lg', className)}>
      <h3 className="text-lg font-bold text-foreground mb-5 text-center font-display">
        Žetoni
      </h3>
      
      <div className="flex justify-center gap-8">
        <TokenGroup type="black" count={blackTokens} label="Crni" />
        <TokenGroup type="yellow" count={yellowTokens} label="Žuti" />
        <TokenGroup type="red" count={redTokens} label="Crveni" />
      </div>
      
      {selectedToken && (
        <p className="text-center mt-4 text-sm text-muted-foreground">
          Odabran: <span className="font-bold capitalize">{selectedToken === 'black' ? 'crni' : selectedToken === 'yellow' ? 'žuti' : 'crveni'}</span> žeton
        </p>
      )}
    </div>
  );
}
