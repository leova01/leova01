import type { ActionButtonProps } from "../../typescript/ui.types";

export default function ActionButton({
  text,
  href,
  variant,
  onClick,
  download = false,
}: ActionButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-2xl font-semibold transition-all hover:scale-105 cursor-pointer";

  const primaryStyles = "bg-primary text-white";

  const secondaryStyles = "border-2 border-primary text-primary";

  const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles}`}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        download={download ? true : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {text}
    </button>
  );
}
