import { useCallback } from 'react';
import { useGameStore } from '@/store/gameStore';

// Sound frequencies for different game events
const SOUNDS = {
  click: { frequency: 440, duration: 100, type: 'sine' as OscillatorType },
  success: { frequency: 523, duration: 200, type: 'sine' as OscillatorType },
  win: { frequencies: [523, 659, 784], duration: 150, type: 'sine' as OscillatorType },
  error: { frequency: 220, duration: 300, type: 'sawtooth' as OscillatorType },
  place: { frequency: 330, duration: 80, type: 'triangle' as OscillatorType },
  select: { frequency: 392, duration: 100, type: 'sine' as OscillatorType },
  levelUp: { frequencies: [392, 523, 659, 784], duration: 200, type: 'sine' as OscillatorType },
};

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', startTime = 0) {
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + startTime);
  
  gainNode.gain.setValueAtTime(0.3, ctx.currentTime + startTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration / 1000);
  
  oscillator.start(ctx.currentTime + startTime);
  oscillator.stop(ctx.currentTime + startTime + duration / 1000);
}

export function useGameSounds() {
  const { settings } = useGameStore();
  
  const playSound = useCallback((soundType: keyof typeof SOUNDS) => {
    if (!settings.soundEnabled) return;
    
    const sound = SOUNDS[soundType];
    
    try {
      if ('frequencies' in sound) {
        // Play chord/melody
        sound.frequencies.forEach((freq, index) => {
          playTone(freq, sound.duration, sound.type, index * 0.1);
        });
      } else {
        playTone(sound.frequency, sound.duration, sound.type);
      }
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }, [settings.soundEnabled]);
  
  const playClick = useCallback(() => playSound('click'), [playSound]);
  const playSuccess = useCallback(() => playSound('success'), [playSound]);
  const playWin = useCallback(() => playSound('win'), [playSound]);
  const playError = useCallback(() => playSound('error'), [playSound]);
  const playPlace = useCallback(() => playSound('place'), [playSound]);
  const playSelect = useCallback(() => playSound('select'), [playSound]);
  const playLevelUp = useCallback(() => playSound('levelUp'), [playSound]);
  
  return {
    playClick,
    playSuccess,
    playWin,
    playError,
    playPlace,
    playSelect,
    playLevelUp,
  };
}
