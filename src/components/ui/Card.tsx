"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
