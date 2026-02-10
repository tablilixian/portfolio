"use client";

import { motion } from "framer-motion";

interface DesktopNavigationProps {
  className?: string;
}

const navItems = [
  { name: "首页", href: "/" },
  { name: "关于", href: "/about" },
  { name: "作品", href: "/portfolio" },
];

export default function DesktopNavigation({ className = "" }: DesktopNavigationProps) {
  return (
    <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
