"use client";

import type { AboutCardProps } from "../../typescript/ui.types";
import { useState } from "react";

export default function AboutCard({ title, description, index }: AboutCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative p-8 rounded-3xl border border-primary-opacity-02 transition-all duration-300 hover:scale-105 bg-background-dark-50 backdrop-blur-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[100px] h-[100px] -top-[50px] left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,var(--primary-opacity-03)_0%,transparent_70%)]"
      />

      <div className="relative z-10 space-y-4">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300 bg-gradient-to-br from-gradient-light to-gradient-dark text-white ${
            isHovered ? "scale-110 rotate-5" : "scale-100 rotate-0"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <h3
          className="text-[24px] font-bold transition-all duration-300 bg-gradient-to-r from-text-gray to-text-light bg-clip-text text-transparent"
        >
          {title}
        </h3>

        <p className="text-[16px] leading-relaxed text-text-gray">
          {description}
        </p>

        <div
          className={`h-1 rounded-full transition-all duration-300 bg-gradient-to-r from-gradient-light to-gradient-dark ${
            isHovered ? "w-full" : "w-[30%]"
          }`}
        />
      </div>
    </div>
  );
}
