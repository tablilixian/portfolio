"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const variants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: 30 },
    right: { opacity: 0, x: -30 },
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
