import { Volume2 } from 'lucide-react';
import { WordData } from '@/lib/phonology';
import { speakText } from '@/lib/phonology';
import { useGameStore } from '@/store/gameStore';
import { useGameSounds } from '@/hooks/useGameSounds';
import { cn } from '@/lib/utils';

interface WordCardProps {
  word: WordData;
  size?: 'sm' | 'md' | 'lg';
  showPhonemes?: boolean;
  onClick?: () => void;
  selected?: boolean;
  draggable?: boolean;
  className?: string;
}

export function WordCard({ 
  word, 
  size = 'md', 
  showPhonemes = false, 
  onClick, 
  selected = false,
  draggable = false,
  className = '' 
}: WordCardProps) {
  const { settings } = useGameStore();
  const { playClick } = useGameSounds();
  
  const displayWord = settings.script === 'latin' ? word.word_lat : word.word_cyr;
  const initialLetter = settings.script === 'latin' ? word.initial.lat : word.initial.cyr;
  
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };
  
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };
  
  const imageSizes = {
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32'
  };
  
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (settings.soundEnabled) {
      playClick();
      speakText(displayWord);
    }
  };
  
  const handleClick = () => {
    if (onClick) {
      playClick();
      onClick();
    }
  };
  
  return (
    <div 
      className={cn(
        'word-card group',
        sizeClasses[size],
        selected && 'word-card-selected',
        className
      )}
      onClick={handleClick}
      draggable={draggable}
    >
      {/* Image */}
      <div className={cn(
        "relative aspect-square mb-3 rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50",
        imageSizes[size]
      )}>
        <img 
          src={word.image} 
          alt={displayWord}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Initial letter badge */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-primary to-primary-glow 
                        text-primary-foreground rounded-full flex items-center justify-center 
                        font-bold text-sm shadow-lg transition-transform duration-300 
                        group-hover:scale-110 group-hover:rotate-12">
          {initialLetter}
        </div>
      </div>
      
      {/* Word text */}
      <div className="text-center space-y-2">
        <h3 className={cn(
          "font-bold text-foreground font-display",
          textSizes[size]
        )}>
          {displayWord}
        </h3>
        
        {showPhonemes && (
          <div className="flex justify-center gap-1 flex-wrap">
            {word.phonemes.map((phoneme, idx) => (
              <span 
                key={idx}
                className={cn(
                  "inline-block px-1.5 py-0.5 rounded text-xs font-medium",
                  word.vowels_idx.includes(idx) 
                    ? "bg-warning/20 text-warning" 
                    : "bg-muted text-muted-foreground"
                )}
              >
                {phoneme}
              </span>
            ))}
          </div>
        )}
        
        {/* TTS Button */}
        {settings.soundEnabled && (
          <button
            onClick={handleSpeak}
            className="tts-button w-10 h-10 mx-auto"
            aria-label={`Izgovori ${displayWord}`}
          >
            <Volume2 className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
