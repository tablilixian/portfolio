"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextReveal({ children, className = "" }: TextRevealProps) {
  return (
    <div className={className}>
      <motion.h1
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "auto" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="overflow-hidden"
      >
        {children}
      </motion.h1>
    </div>
  );
}
