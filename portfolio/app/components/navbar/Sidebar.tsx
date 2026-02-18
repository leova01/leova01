import Link from "next/link";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { IconClose } from "../ui/icons/IconClose";
import { LanguageToggle } from "./LanguageToggle";

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function Sidebar({ isVisible, onClose, onLinkClick }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-background-dark z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-primary-opacity-02">
        <Link
          href="/"
          className="text-[24px] font-bold leading-[32px] font-[family-name:var(--font-arimo)]"
          onClick={onClose}
        >
          <Logo />
        </Link>
        <button
          className="text-text-gray hover:text-primary transition-colors"
          aria-label="Close menu"
          onClick={onClose}
        >
          <IconClose />
        </button>
      </div>

      <NavLinks
        onLinkClick={onLinkClick}
        className="flex flex-col py-4"
        itemClassName="block px-6 py-3 text-[16px] font-normal leading-[24px] text-text-gray hover:text-primary hover:bg-primary-opacity-02 transition-all"
      />

      <div className="px-6 py-4 border-t border-primary-opacity-02">
        <LanguageToggle />
      </div>
    </div>
  );
}
