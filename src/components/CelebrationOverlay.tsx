import { useEffect } from 'react';
import { Trophy, Star, Sparkles } from 'lucide-react';
import { useConfetti } from '@/hooks/useConfetti';
import { useGameSounds } from '@/hooks/useGameSounds';

interface CelebrationOverlayProps {
  show: boolean;
  type?: 'win' | 'levelUp' | 'correct';
  message?: string;
  subMessage?: string;
  onComplete?: () => void;
}

export function CelebrationOverlay({ 
  show, 
  type = 'win', 
  message,
  subMessage,
  onComplete 
}: CelebrationOverlayProps) {
  const { fireWinConfetti, fireLevelUp, fireStars } = useConfetti();
  const { playWin, playLevelUp, playSuccess } = useGameSounds();
  
  useEffect(() => {
    if (show) {
      switch (type) {
        case 'win':
          fireWinConfetti();
          playWin();
          break;
        case 'levelUp':
          fireLevelUp();
          playLevelUp();
          break;
        case 'correct':
          fireStars();
          playSuccess();
          break;
      }
      
      if (onComplete) {
        const timer = setTimeout(onComplete, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [show, type, fireWinConfetti, fireLevelUp, fireStars, playWin, playLevelUp, playSuccess, onComplete]);
  
  if (!show) return null;
  
  const icons = {
    win: Trophy,
    levelUp: Star,
    correct: Sparkles,
  };
  
  const colors = {
    win: 'from-success to-success-glow',
    levelUp: 'from-primary to-primary-glow',
    correct: 'from-warning to-warning/80',
  };
  
  const messages = {
    win: message || 'Čestitamo!',
    levelUp: message || 'Nova razina!',
    correct: message || 'Točno!',
  };
  
  const Icon = icons[type];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in">
      <div className="text-center animate-bounce-in">
        <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${colors[type]} 
                        flex items-center justify-center shadow-2xl animate-celebrate`}>
          <Icon className="w-16 h-16 text-white" />
        </div>
        
        <h2 className="text-5xl font-bold text-foreground mb-3 sparkle">
          {messages[type]}
        </h2>
        
        {subMessage && (
          <p className="text-xl text-muted-foreground animate-fade-in stagger-2">
            {subMessage}
          </p>
        )}
      </div>
    </div>
  );
}
