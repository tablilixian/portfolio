"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "rounded-full font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 hover:shadow-md",
    ghost: "text-blue-600 hover:bg-blue-50 hover:text-blue-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
