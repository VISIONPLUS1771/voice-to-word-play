import { cn } from '@/lib/utils';

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
  const TokenGroup = ({ 
    type, 
    count, 
    color 
  }: { 
    type: 'black' | 'yellow' | 'red', 
    count: number, 
    color: string 
  }) => (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={cn(
          'token cursor-pointer',
          `token-${type}`,
          selectedToken === type && 'ring-4 ring-primary',
          count === 0 && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => count > 0 && onTokenSelect?.(type)}
      />
      <span className="text-sm font-bold text-muted-foreground">
        {count}
      </span>
    </div>
  );
  
  return (
    <div className={cn('bg-card rounded-2xl p-4 shadow-lg', className)}>
      <h3 className="text-sm font-bold text-muted-foreground mb-4 text-center">
        Žetoni
      </h3>
      
      <div className="flex justify-center space-x-6">
        <TokenGroup type="black" count={blackTokens} color="black" />
        <TokenGroup type="yellow" count={yellowTokens} color="yellow" />
        <TokenGroup type="red" count={redTokens} color="red" />
      </div>
    </div>
  );
}