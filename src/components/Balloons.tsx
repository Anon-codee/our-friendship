import { motion } from "framer-motion";

const balloonColors = [
  "#FF6B6B", // red
  "#4ECDC4", // teal
  "#FFE66D", // yellow
  "#95E1D3", // mint
  "#FF69B4", // pink
  "#87CEEB", // sky blue
];

interface BalloonProps {
  color: string;
  delay: number;
  x: number;
  side: "left" | "right";
}

const Balloon = ({ color, delay, x, side }: BalloonProps) => {
  const initialX = side === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ x: initialX, y: 200, opacity: 0, scale: 0.5 }}
      animate={{ x: x, y: 0, opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 1.2,
        type: "spring",
        bounce: 0.4,
      }}
      className="absolute"
      style={{ left: side === "left" ? `${Math.abs(x)}%` : "auto", right: side === "right" ? `${Math.abs(x)}%` : "auto" }}
    >
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, delay: delay * 0.5 }}
      >
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
          {/* Balloon */}
          <ellipse cx="30" cy="28" rx="26" ry="28" fill={color} />
          <ellipse cx="22" cy="20" rx="6" ry="8" fill="white" opacity="0.3" />
          {/* Knot */}
          <polygon points="30,56 26,62 34,62" fill={color} />
          {/* String */}
          <path
            d="M30 62 Q35 72, 28 82 Q32 88, 30 90"
            stroke="#888"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const Balloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Left side balloons */}
      {balloonColors.slice(0, 3).map((color, i) => (
        <Balloon
          key={`left-${i}`}
          color={color}
          delay={0.2 + i * 0.15}
          x={5 + i * 8}
          side="left"
        />
      ))}
      {/* Right side balloons */}
      {balloonColors.slice(3).map((color, i) => (
        <Balloon
          key={`right-${i}`}
          color={color}
          delay={0.3 + i * 0.15}
          x={5 + i * 8}
          side="right"
        />
      ))}
    </div>
  );
};

export default Balloons;
