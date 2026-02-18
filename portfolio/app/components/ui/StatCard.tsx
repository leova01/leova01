"use client";

import type { StatCardProps } from "../../typescript/ui.types";
import { useStatCardAnimation } from "./hooks/useStatCardAnimation";

export default function StatCard({ value, label }: StatCardProps) {
  const { displayValue, suffix } = useStatCardAnimation(value);

  return (
    <div className="p-4 rounded-2xl border border-text-gray/20 transition-all hover:scale-105">
      <div className="text-[30px] font-bold mb-1 text-primary">
        {displayValue}
        {suffix}
      </div>
      <div className="text-xs text-text-gray">
        {label}
      </div>
    </div>
  );
}
