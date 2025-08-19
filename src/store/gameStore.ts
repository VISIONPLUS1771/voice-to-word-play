import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WordData } from '@/lib/phonology';

export type AgeGroup = '3-4' | '5-6';
export type Script = 'latin' | 'cyrillic';
export type GameType = 'line3-assoc' | 'line3-letter' | 'phoneme-grid';

export interface GameSettings {
  ageGroup: AgeGroup;
  script: Script;
  soundEnabled: boolean;
  teacherMode: boolean;
}

export interface GameState {
  currentGame: GameType | null;
  isPlaying: boolean;
  score: number;
  level: number;
  targetPhoneme?: string;
  targetPosition?: number;
}

export interface Line3State {
  board: (string | null)[];
  currentPlayer: number;
  players: { id: string; name: string; wordId: string; cards: number }[];
  winner: string | null;
  winningLine: number[] | null;
}

export interface PhonemeGridState {
  currentLevel: number; // 1-6
  activeWord: WordData | null;
  board: (string | null)[]; // 60 cells
  targetPhoneme: string | null;
  targetPosition: number | null;
  completed: boolean;
}

export interface GameStore {
  // Settings
  settings: GameSettings;
  updateSettings: (settings: Partial<GameSettings>) => void;
  
  // Dictionary
  dictionary: WordData[];
  addWord: (word: WordData) => void;
  updateWord: (id: string, word: Partial<WordData>) => void;
  removeWord: (id: string) => void;
  
  // Game state
  gameState: GameState;
  line3State: Line3State;
  phonemeGridState: PhonemeGridState;
  
  // Actions
  startGame: (gameType: GameType) => void;
  endGame: () => void;
  resetGame: () => void;
  updateScore: (points: number) => void;
  
  // Line 3 actions
  placeLine3Card: (position: number, playerId: string) => boolean;
  checkLine3Win: () => number[] | null;
  
  // Phoneme Grid actions
  setPhonemeGridLevel: (level: number) => void;
  setActiveWord: (word: WordData) => void;
  placeToken: (position: number, tokenType: string) => void;
  clearPhonemeGrid: () => void;
  validatePhonemeLevel: () => boolean;
}

const initialLine3State: Line3State = {
  board: Array(9).fill(null),
  currentPlayer: 0,
  players: [],
  winner: null,
  winningLine: null
};

const initialPhonemeGridState: PhonemeGridState = {
  currentLevel: 1,
  activeWord: null,
  board: Array(60).fill(null),
  targetPhoneme: null,
  targetPosition: null,
  completed: false
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      settings: {
        ageGroup: '3-4',
        script: 'latin',
        soundEnabled: true,
        teacherMode: false
      },
      
      dictionary: [],
      
      gameState: {
        currentGame: null,
        isPlaying: false,
        score: 0,
        level: 1
      },
      
      line3State: initialLine3State,
      phonemeGridState: initialPhonemeGridState,
      
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings }
        })),
      
      addWord: (word) =>
        set((state) => ({
          dictionary: [...state.dictionary, word]
        })),
      
      updateWord: (id, updates) =>
        set((state) => ({
          dictionary: state.dictionary.map((word) =>
            word.id === id ? { ...word, ...updates } : word
          )
        })),
      
      removeWord: (id) =>
        set((state) => ({
          dictionary: state.dictionary.filter((word) => word.id !== id)
        })),
      
      startGame: (gameType) =>
        set((state) => ({
          gameState: {
            ...state.gameState,
            currentGame: gameType,
            isPlaying: true,
            score: 0,
            level: 1
          },
          line3State: gameType.startsWith('line3') ? initialLine3State : state.line3State,
          phonemeGridState: gameType === 'phoneme-grid' ? initialPhonemeGridState : state.phonemeGridState
        })),
      
      endGame: () =>
        set((state) => ({
          gameState: {
            ...state.gameState,
            currentGame: null,
            isPlaying: false
          }
        })),
      
      resetGame: () =>
        set((state) => ({
          gameState: {
            ...state.gameState,
            score: 0,
            level: 1
          },
          line3State: initialLine3State,
          phonemeGridState: initialPhonemeGridState
        })),
      
      updateScore: (points) =>
        set((state) => ({
          gameState: {
            ...state.gameState,
            score: state.gameState.score + points
          }
        })),
      
      placeLine3Card: (position, playerId) => {
        const state = get();
        if (state.line3State.board[position] !== null) return false;
        
        set((state) => ({
          line3State: {
            ...state.line3State,
            board: state.line3State.board.map((cell, index) =>
              index === position ? playerId : cell
            ),
            currentPlayer: (state.line3State.currentPlayer + 1) % state.line3State.players.length
          }
        }));
        
        return true;
      },
      
      checkLine3Win: () => {
        const { board } = get().line3State;
        const winPatterns = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
          [0, 4, 8], [2, 4, 6] // diagonals
        ];
        
        for (const pattern of winPatterns) {
          const [a, b, c] = pattern;
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            set((state) => ({
              line3State: {
                ...state.line3State,
                winner: board[a],
                winningLine: pattern
              }
            }));
            return pattern;
          }
        }
        
        return null;
      },
      
      setPhonemeGridLevel: (level) =>
        set((state) => ({
          phonemeGridState: {
            ...state.phonemeGridState,
            currentLevel: level,
            board: Array(60).fill(null),
            completed: false
          }
        })),
      
      setActiveWord: (word) =>
        set((state) => ({
          phonemeGridState: {
            ...state.phonemeGridState,
            activeWord: word
          }
        })),
      
      placeToken: (position, tokenType) =>
        set((state) => ({
          phonemeGridState: {
            ...state.phonemeGridState,
            board: state.phonemeGridState.board.map((cell, index) =>
              index === position ? tokenType : cell
            )
          }
        })),
      
      clearPhonemeGrid: () =>
        set((state) => ({
          phonemeGridState: {
            ...state.phonemeGridState,
            board: Array(60).fill(null)
          }
        })),
      
      validatePhonemeLevel: () => {
        const { phonemeGridState, settings } = get();
        const { currentLevel, activeWord, board } = phonemeGridState;
        
        if (!activeWord) return false;
        
        const tokens = board.filter(cell => cell !== null);
        
        switch (currentLevel) {
          case 1:
            // Check if number of black tokens equals number of phonemes
            return tokens.filter(t => t === 'black').length === activeWord.phonemes.length;
          
          case 2:
            // Check vowel positions and total phonemes
            const yellowTokens = tokens.filter(t => t === 'yellow').length;
            const blackTokens = tokens.filter(t => t === 'black').length;
            return yellowTokens === activeWord.vowels_idx.length && 
                   (yellowTokens + blackTokens) === activeWord.phonemes.length;
          
          default:
            return false;
        }
      }
    }),
    {
      name: 'game-storage',
      partialize: (state) => ({
        settings: state.settings,
        dictionary: state.dictionary
      })
    }
  )
);