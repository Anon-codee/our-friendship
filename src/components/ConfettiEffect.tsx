import { useEffect } from "react";
import confetti from "canvas-confetti";

interface ConfettiEffectProps {
  trigger: boolean;
}

const ConfettiEffect = ({ trigger }: ConfettiEffectProps) => {
  useEffect(() => {
    if (!trigger) return;

    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Left side burst
      confetti({
        particleCount: Math.floor(particleCount),
        startVelocity: 30,
        spread: 60,
        origin: { x: 0, y: 0.6 },
        colors: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF69B4", "#87CEEB", "#98FB98"],
        angle: randomInRange(55, 80),
      });

      // Right side burst
      confetti({
        particleCount: Math.floor(particleCount),
        startVelocity: 30,
        spread: 60,
        origin: { x: 1, y: 0.6 },
        colors: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF69B4", "#87CEEB", "#98FB98"],
        angle: randomInRange(100, 125),
      });
    }, 250);

    return () => clearInterval(interval);
  }, [trigger]);

  return null;
};

export default ConfettiEffect;
