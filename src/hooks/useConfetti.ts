import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export function useConfetti() {
  const fireConfetti = useCallback((options?: confetti.Options) => {
    const defaults: confetti.Options = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#8b5cf6', '#ec4899', '#22c55e', '#f97316', '#eab308'],
    };
    
    confetti({
      ...defaults,
      ...options,
    });
  }, []);
  
  const fireWinConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;
    
    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#3b82f6', '#8b5cf6', '#ec4899'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#22c55e', '#f97316', '#eab308'],
      });
      
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  }, []);
  
  const fireStars = useCallback(() => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ['star' as const],
      colors: ['#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#45B7D1'],
    };
    
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      origin: { x: 0.5, y: 0.5 },
    });
    
    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 0.75,
      origin: { x: 0.5, y: 0.5 },
    });
  }, []);
  
  const fireLevelUp = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.7 },
      colors: ['#22c55e', '#16a34a', '#4ade80'],
      shapes: ['circle'],
      scalar: 1.5,
    });
  }, []);
  
  return {
    fireConfetti,
    fireWinConfetti,
    fireStars,
    fireLevelUp,
  };
}
