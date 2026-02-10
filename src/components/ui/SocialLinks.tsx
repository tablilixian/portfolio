"use client";

import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
}

const socialLinks = [
  { name: "GitHub", icon: "GH", url: "#" },
  { name: "Twitter", icon: "TW", url: "#" },
  { name: "LinkedIn", icon: "LI", url: "#" },
  { name: "Dribbble", icon: "DR", url: "#" },
];

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          aria-label={link.name}
        >
          <span className="font-semibold">{link.icon}</span>
        </motion.a>
      ))}
    </div>
  );
}
