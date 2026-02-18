import { useState, useEffect } from "react";

const animationDuration = 1000;
const animationSteps = 50;

export function useStatCardAnimation(statValue: string) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const targetValue = parseInt(statValue.replace(/\D/g, ""));
    const valueIncrement = targetValue / animationSteps;
    const stepDuration = animationDuration / animationSteps;

    let currentValue = 0;
    const animationTimer = setInterval(() => {
      currentValue += valueIncrement;
      if (currentValue >= targetValue) {
        setDisplayValue(targetValue);
        clearInterval(animationTimer);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, stepDuration);

    return () => clearInterval(animationTimer);
  }, [statValue]);

  const valueSuffix = statValue.replace(/[0-9]/g, "");

  return { displayValue, suffix: valueSuffix };
}
