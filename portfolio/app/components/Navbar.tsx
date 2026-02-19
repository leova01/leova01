"use client";

import { useState } from "react";
import { Logo } from "./navbar/Logo";
import { NavLinks } from "./navbar/NavLinks";
import { Sidebar } from "./navbar/Sidebar";
import { Overlay } from "./navbar/Overlay";
import { MenuButton } from "./navbar/MenuButton";
import { LanguageToggle } from "./navbar/LanguageToggle";

const navbarHeight = 80;
const sidebarCloseDelay = 100;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const scrollPosition = elementTop - navbarHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }, sidebarCloseDelay);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background-dark border-b border-primary-opacity-02">
        <div className="flex items-center justify-between max-w-[1620px] mx-auto">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="text-[24px] font-bold leading-[32px] hover:opacity-80 transition-opacity font-[family-name:var(--font-arimo)]"
          >
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks className="flex items-center gap-8" />
            <LanguageToggle />
          </div>

          <MenuButton onToggle={() => setIsMenuOpen((prev) => !prev)} />
        </div>
      </nav>

      <Overlay isVisible={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <Sidebar
        isVisible={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onLinkClick={scrollToSection}
      />
    </>
  );
}
