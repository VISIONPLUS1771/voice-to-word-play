import { Volume2 } from 'lucide-react';
import { WordData } from '@/lib/phonology';
import { speakText } from '@/lib/phonology';
import { useGameStore } from '@/store/gameStore';

interface WordCardProps {
  word: WordData;
  size?: 'sm' | 'md' | 'lg';
  showPhonemes?: boolean;
  onClick?: () => void;
  draggable?: boolean;
  className?: string;
}

export function WordCard({ 
  word, 
  size = 'md', 
  showPhonemes = false, 
  onClick, 
  draggable = false,
  className = '' 
}: WordCardProps) {
  const { settings } = useGameStore();
  
  const displayWord = settings.script === 'latin' ? word.word_lat : word.word_cyr;
  const initialLetter = settings.script === 'latin' ? word.initial.lat : word.initial.cyr;
  
  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg'
  };
  
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (settings.soundEnabled) {
      speakText(displayWord);
    }
  };
  
  return (
    <div 
      className={`word-card ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      draggable={draggable}
    >
      {/* Image */}
      <div className="relative aspect-square mb-3 rounded-lg overflow-hidden bg-muted">
        <img 
          src={word.image} 
          alt={displayWord}
          className="w-full h-full object-cover"
        />
        
        {/* Initial letter badge */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-primary text-primary-foreground 
                        rounded-full flex items-center justify-center font-bold text-sm">
          {initialLetter}
        </div>
      </div>
      
      {/* Word text */}
      <div className="text-center">
        <h3 className="font-bold text-foreground mb-2">{displayWord}</h3>
        
        {showPhonemes && (
          <div className="text-xs text-muted-foreground mb-2">
            [{word.phonemes.join('-')}]
          </div>
        )}
        
        {/* TTS Button */}
        {settings.soundEnabled && (
          <button
            onClick={handleSpeak}
            className="tts-button w-8 h-8"
            aria-label={`Izgovori ${displayWord}`}
          >
            <Volume2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}