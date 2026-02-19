"use client";

import { NavLinkItem } from "./NavLinkItem";
import { useLanguage } from "../../contexts/LanguageContext";

interface NavLinksProps {
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
  itemClassName?: string;
}

export function NavLinks({
  onLinkClick,
  className,
  itemClassName,
}: NavLinksProps) {
  const { t } = useLanguage();

  const navLinks = [
    { name: t.navbar.links.home, href: "#hero" },
    { name: t.navbar.links.about, href: "#about" },
    { name: t.navbar.links.stack, href: "#stack" },
    { name: t.navbar.links.experience, href: "#experience" },
    { name: t.navbar.links.contact, href: "#contact" },
  ] as const;

  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li key={link.name}>
          <NavLinkItem
            name={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={itemClassName}
          />
        </li>
      ))}
    </ul>
  );
}
