import { motion } from "framer-motion";

const Cake = () => {
  return (
    <motion.div
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
      className="relative"
    >
      <svg
        width="180"
        height="200"
        viewBox="0 0 180 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Candle flames */}
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <ellipse cx="60" cy="20" rx="6" ry="10" fill="#FF9500" />
          <ellipse cx="60" cy="18" rx="3" ry="6" fill="#FFD700" />
          <ellipse cx="90" cy="15" rx="6" ry="10" fill="#FF9500" />
          <ellipse cx="90" cy="13" rx="3" ry="6" fill="#FFD700" />
          <ellipse cx="120" cy="20" rx="6" ry="10" fill="#FF9500" />
          <ellipse cx="120" cy="18" rx="3" ry="6" fill="#FFD700" />
        </motion.g>

        {/* Candles */}
        <rect x="57" y="28" width="6" height="30" fill="#FF69B4" rx="2" />
        <rect x="87" y="23" width="6" height="35" fill="#87CEEB" rx="2" />
        <rect x="117" y="28" width="6" height="30" fill="#98FB98" rx="2" />

        {/* Top layer (cream/white) */}
        <path
          d="M30 60 H150 V100 Q140 110, 130 100 Q120 110, 110 100 Q100 110, 90 100 Q80 110, 70 100 Q60 110, 50 100 Q40 110, 30 100 Z"
          fill="#FFF5E6"
          stroke="#E8D4C4"
          strokeWidth="2"
        />

        {/* Middle layer (pink frosting) */}
        <rect x="25" y="100" width="130" height="40" fill="#FFB6C1" rx="3" />
        <path
          d="M25 100 Q35 90, 45 100 Q55 90, 65 100 Q75 90, 85 100 Q95 90, 105 100 Q115 90, 125 100 Q135 90, 145 100 Q155 90, 155 100"
          fill="#FFB6C1"
          stroke="#FF69B4"
          strokeWidth="2"
        />

        {/* Bottom layer (chocolate) */}
        <rect x="20" y="140" width="140" height="45" fill="#8B4513" rx="5" />

        {/* Decorations - dots */}
        <circle cx="50" cy="115" r="4" fill="#FFD700" />
        <circle cx="70" cy="120" r="4" fill="#FF69B4" />
        <circle cx="90" cy="115" r="4" fill="#FFD700" />
        <circle cx="110" cy="120" r="4" fill="#FF69B4" />
        <circle cx="130" cy="115" r="4" fill="#FFD700" />

        {/* Plate */}
        <ellipse cx="90" cy="190" rx="85" ry="10" fill="#E8E8E8" />
        <ellipse cx="90" cy="188" rx="80" ry="8" fill="#F5F5F5" />
      </svg>
    </motion.div>
  );
};

export default Cake;
