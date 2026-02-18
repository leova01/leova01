import { NavLinkItem } from "./NavLinkItem";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Herramientas", href: "#stack" },
  { name: "Experiencia", href: "#experience" },
  { name: "Contacto", href: "#contact" },
] as const;

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
