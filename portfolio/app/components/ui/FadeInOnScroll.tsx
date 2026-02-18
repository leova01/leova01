'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function FadeInOnScroll({
  children,
  className,
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className || ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7.5'} transition-[opacity_${duration}ms_ease-out_${delay}ms,transform_${duration}ms_ease-out_${delay}ms]`}
    >
      {children}
    </div>
  );
}
