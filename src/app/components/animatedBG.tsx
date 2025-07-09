"use client";
import { motion } from "framer-motion";

const SIGNS = ["+", "-", "×", "÷", "=", "≠", "∞", "√", "∑", "∏"];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function AnimatedMathBackground() {
  // Create 12 floating signs with random properties
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => {
        const sign = SIGNS[Math.floor(getRandom(0, SIGNS.length))];
        const left = getRandom(10, 95); // percent
        const size = getRandom(24, 48); // px
        const duration = getRandom(10, 16); // seconds
        const delay = getRandom(0, 6); // seconds
        const opacity = getRandom(0.3, 0.7);

        return (
          <motion.span
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${left}%`,
              fontSize: size,
              color: "#2563eb", // Tailwind blue-600
              fontWeight: "bold",
              userSelect: "none",
              filter: "blur(0.5px)",
            }}
          >
            {sign}
          </motion.span>
        );
      })}
    </div>
  );
}
