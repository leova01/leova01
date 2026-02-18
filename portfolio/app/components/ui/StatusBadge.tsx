import type { StatusBadgeProps } from "../../typescript/ui.types";

export default function StatusBadge({
  text,
  color = "text-primary",
  dotColor = "bg-primary",
}: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <div className={`w-2 h-2 ${dotColor} rounded-full animate-pulse`} />
      <span className={`text-[14px] font-normal ${color}`}>
        {text}
      </span>
    </div>
  );
}
