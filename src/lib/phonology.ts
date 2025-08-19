// Phonology utilities for Serbian/Croatian language processing

export interface WordData {
  id: string;
  word_lat: string;
  word_cyr: string;
  phonemes: string[];
  vowels_idx: number[];
  image: string;
  initial: { lat: string; cyr: string };
  syllables: string[];
  category?: string;
}

// Serbian/Croatian vowels
const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

// Serbian/Croatian digraphs (treated as single phonemes)
const DIGRAPHS = ['LJ', 'NJ', 'DŽ'];

export function isVowel(phoneme: string): boolean {
  return VOWELS.has(phoneme.toUpperCase());
}

export function normalizeDigraphs(text: string): string[] {
  const normalized = text.toUpperCase();
  const phonemes: string[] = [];
  let i = 0;
  
  while (i < normalized.length) {
    // Check for digraphs first
    const twoChar = normalized.slice(i, i + 2);
    if (DIGRAPHS.includes(twoChar)) {
      phonemes.push(twoChar);
      i += 2;
    } else {
      phonemes.push(normalized[i]);
      i += 1;
    }
  }
  
  return phonemes;
}

export function getVowelIndices(phonemes: string[]): number[] {
  return phonemes
    .map((phoneme, index) => isVowel(phoneme) ? index : -1)
    .filter(index => index !== -1);
}

// Latin to Cyrillic transliteration map
const LATIN_TO_CYRILLIC: Record<string, string> = {
  'A': 'А', 'B': 'Б', 'V': 'В', 'G': 'Г', 'D': 'Д', 'Đ': 'Ђ', 'E': 'Е',
  'Ž': 'Ж', 'Z': 'З', 'I': 'И', 'J': 'Ј', 'K': 'К', 'L': 'Л', 'LJ': 'Љ',
  'M': 'М', 'N': 'Н', 'NJ': 'Њ', 'O': 'О', 'P': 'П', 'R': 'Р', 'S': 'С',
  'T': 'Т', 'Ć': 'Ћ', 'U': 'У', 'F': 'Ф', 'H': 'Х', 'C': 'Ц', 'Č': 'Ч',
  'DŽ': 'Џ', 'Š': 'Ш'
};

// Cyrillic to Latin transliteration map
const CYRILLIC_TO_LATIN: Record<string, string> = Object.fromEntries(
  Object.entries(LATIN_TO_CYRILLIC).map(([lat, cyr]) => [cyr, lat])
);

export function latinToCyrillic(text: string): string {
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    const twoChar = text.slice(i, i + 2);
    if (LATIN_TO_CYRILLIC[twoChar]) {
      result += LATIN_TO_CYRILLIC[twoChar];
      i += 2;
    } else if (LATIN_TO_CYRILLIC[text[i]]) {
      result += LATIN_TO_CYRILLIC[text[i]];
      i += 1;
    } else {
      result += text[i];
      i += 1;
    }
  }
  
  return result;
}

export function cyrillicToLatin(text: string): string {
  return text.split('').map(char => CYRILLIC_TO_LATIN[char] || char).join('');
}

export function processWord(wordLatin: string): Partial<WordData> {
  const phonemes = normalizeDigraphs(wordLatin);
  const vowels_idx = getVowelIndices(phonemes);
  const wordCyrillic = latinToCyrillic(wordLatin);
  
  return {
    word_lat: wordLatin.toUpperCase(),
    word_cyr: wordCyrillic,
    phonemes,
    vowels_idx,
    initial: {
      lat: phonemes[0],
      cyr: latinToCyrillic(phonemes[0])
    }
  };
}

// Text-to-speech utility
export function speakText(text: string, language = 'sr-RS'): void {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8; // Slower for children
    utterance.pitch = 1.1; // Slightly higher pitch
    speechSynthesis.speak(utterance);
  }
}

export function getPhonemeAtPosition(word: WordData, position: number): string | null {
  if (position >= 0 && position < word.phonemes.length) {
    return word.phonemes[position];
  }
  return null;
}

export function createEmptyWordData(id: string): WordData {
  return {
    id,
    word_lat: '',
    word_cyr: '',
    phonemes: [],
    vowels_idx: [],
    image: '',
    initial: { lat: '', cyr: '' },
    syllables: []
  };
}