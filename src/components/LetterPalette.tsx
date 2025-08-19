import { Volume2 } from 'lucide-react';
import { speakText } from '@/lib/phonology';
import { useGameStore } from '@/store/gameStore';
import { cn } from '@/lib/utils';

interface LetterPaletteProps {
  letters: string[];
  onLetterSelect?: (letter: string) => void;
  selectedLetter?: string | null;
  showAll?: boolean;
  className?: string;
}

// Serbian/Croatian alphabet in both scripts
const SERBIAN_ALPHABET = {
  latin: ['A', 'B', 'V', 'G', 'D', 'Đ', 'E', 'Ž', 'Z', 'I', 'J', 'K', 'L', 'LJ', 'M', 'N', 'NJ', 'O', 'P', 'R', 'S', 'T', 'Ć', 'U', 'F', 'H', 'C', 'Č', 'DŽ', 'Š'],
  cyrillic: ['А', 'Б', 'В', 'Г', 'Д', 'Ђ', 'Е', 'Ж', 'З', 'И', 'Ј', 'К', 'Л', 'Љ', 'М', 'Н', 'Њ', 'О', 'П', 'Р', 'С', 'Т', 'Ћ', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш']
};

export function LetterPalette({ 
  letters, 
  onLetterSelect, 
  selectedLetter, 
  showAll = false,
  className 
}: LetterPaletteProps) {
  const { settings } = useGameStore();
  
  const displayLetters = showAll 
    ? SERBIAN_ALPHABET[settings.script]
    : letters;
    
  // For age 3-4, limit options to 2-3 letters max
  const limitedLetters = settings.ageGroup === '3-4' && !showAll
    ? displayLetters.slice(0, 3)
    : displayLetters;
  
  const handleLetterClick = (letter: string) => {
    if (settings.soundEnabled) {
      speakText(letter);
    }
    onLetterSelect?.(letter);
  };
  
  return (
    <div className={cn('bg-card rounded-2xl p-4 shadow-lg', className)}>
      <h3 className="text-sm font-bold text-muted-foreground mb-4 text-center">
        {showAll ? 'Sva slova' : 'Odaberi slovo'}
      </h3>
      
      <div className={cn(
        'grid gap-3',
        limitedLetters.length <= 3 ? 'grid-cols-3' : 
        limitedLetters.length <= 6 ? 'grid-cols-3 sm:grid-cols-6' : 
        'grid-cols-4 sm:grid-cols-6 md:grid-cols-8'
      )}>
        {limitedLetters.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={cn(
              'aspect-square rounded-xl border-2 border-muted flex items-center justify-center',
              'font-bold text-lg transition-all duration-300 hover:scale-105',
              'bg-background hover:bg-primary/10 hover:border-primary',
              selectedLetter === letter && 'bg-primary text-primary-foreground border-primary'
            )}
          >
            <div className="flex flex-col items-center">
              <span className={settings.ageGroup === '3-4' ? 'text-2xl' : 'text-lg'}>
                {letter}
              </span>
              {settings.soundEnabled && (
                <Volume2 className="w-3 h-3 mt-1 opacity-50" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}