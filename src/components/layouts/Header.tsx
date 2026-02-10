"use client";

import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={className}>
      <MobileNavigation className="md:hidden" />
      <DesktopNavigation className="hidden md:block" />
    </header>
  );
}
