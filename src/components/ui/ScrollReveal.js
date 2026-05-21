"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  direction = "up", // "up", "down", "left", "right", "fade", "scale"
  className = "",
  delay = 0,
  duration = 0.8,
  amount = 0.2, // amount of element that must intersect to trigger
  once = true, // only animate once
}) {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    fade: { x: 0, y: 0 },
    scale: { x: 0, y: 0, scale: 0.9 },
  };

  const offset = directionOffset[direction] || directionOffset.up;

  const hiddenState = {
    opacity: 0,
    ...offset,
  };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: duration,
      ease: [0.16, 1, 0.3, 1], // Cinematic ease out
      delay: delay / 1000, // framer-motion uses seconds
    },
  };

  return (
    <motion.div
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{ once: once, amount: amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
