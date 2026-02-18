export interface TypewriterTextProps {
  titles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  glow?: boolean;
  glowColor?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
}

export interface ActionButtonProps {
  text: string;
  href?: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  download?: boolean;
}

export interface StatusBadgeProps {
  text: string;
  color?: string;
  dotColor?: string;
}

export interface AboutCardProps {
  title: string;
  description: string;
  index: number;
}
