"use client";

import { useState, useEffect } from "react";
import type { TypewriterTextProps } from "../../typescript/ui.types";

export default function TypewriterText({
  titles,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
  glow = false,
  glowColor = "rgba(56, 189, 248, 0.5)",
}: TypewriterTextProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const characterAnimationSpeed = isDeleting ? deletingSpeed : typingSpeed;

    const animationTimer = setTimeout(() => {
      if (!isDeleting) {
        if (animatedText.length < currentTitle.length) {
          setAnimatedText(currentTitle.slice(0, animatedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (animatedText.length > 0) {
          setAnimatedText(currentTitle.slice(0, animatedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((previousTitleIndex) => (previousTitleIndex + 1) % titles.length);
        }
      }
    }, characterAnimationSpeed);

    return () => clearTimeout(animationTimer);
  }, [animatedText, isDeleting, currentTitleIndex, titles, typingSpeed, deletingSpeed, pauseDuration]);

  const glowStyle = glow
    ? { textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}` }
    : {};

  return (
    <p className={className} style={glowStyle}>
      {animatedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}
