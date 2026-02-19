interface NavLinkItemProps {
  name: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
}

export function NavLinkItem({ name, href, onClick, className }: NavLinkItemProps) {
  const baseClassName =
    "text-[16px] font-normal leading-[24px] text-text-gray hover:text-primary transition-colors font-[family-name:var(--font-arimo)]";

  return (
    <a
      href={href}
      onClick={(e) => onClick?.(e, href)}
      className={className || baseClassName}
    >
      {name}
    </a>
  );
}
