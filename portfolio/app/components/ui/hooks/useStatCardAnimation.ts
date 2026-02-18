import { useState, useEffect } from "react";

export function useStatCardAnimation(statValue: string) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const numericValue = parseInt(statValue.replace(/\D/g, ""));
    const animationDuration = 1000;
    const animationSteps = 50;
    const valueIncrement = numericValue / animationSteps;
    const stepDuration = animationDuration / animationSteps;

    let currentAnimatedValue = 0;
    const animationTimer = setInterval(() => {
      currentAnimatedValue += valueIncrement;
      if (currentAnimatedValue >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(animationTimer);
      }
      else {
        setDisplayValue(Math.floor(currentAnimatedValue));
      }
    }, stepDuration);

    return () => clearInterval(animationTimer);
  }, [statValue]);

  const valueSuffix = statValue.replace(/[0-9]/g, "");

  return { displayValue, suffix: valueSuffix };
}
