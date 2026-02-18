import { IconMenu } from "../ui/icons/IconMenu";

interface MenuButtonProps {
  onToggle: () => void;
}

export function MenuButton({ onToggle }: MenuButtonProps) {
  return (
    <button
      className="md:hidden text-text-gray hover:text-primary transition-colors z-10"
      aria-label="Menu"
      onClick={onToggle}
    >
      <IconMenu />
    </button>
  );
}
