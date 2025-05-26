'use client';

import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  targetNumber: number;
  duration?: number;
};

export default function Counter({ targetNumber, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const startTime = performance.now();

        const animate = (time: number) => {
          const elapsed = time - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentNumber = Math.ceil(progress * targetNumber);
          setCount(currentNumber);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(targetNumber);
          }
        };

        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [targetNumber, duration]);

  return <span ref={ref}>{count}</span>;
}
