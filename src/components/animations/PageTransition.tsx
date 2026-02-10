"use client";

import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  location?: string;
}

export default function PageTransition({
  children,
  location = "",
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
