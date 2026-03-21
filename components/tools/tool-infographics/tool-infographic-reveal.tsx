"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ToolInfographicRevealProps = {
  children: (state: { isVisible: boolean; replayKey: number }) => ReactNode;
  className?: string;
};

export function ToolInfographicReveal({
  children,
  className,
}: ToolInfographicRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextVisible = entry.isIntersecting && entry.intersectionRatio > 0.28;

        if (nextVisible && !visibleRef.current) {
          visibleRef.current = true;
          setReplayKey((value) => value + 1);
          setIsVisible(true);
          return;
        }

        if (!nextVisible && visibleRef.current) {
          visibleRef.current = false;
          setIsVisible(false);
        }
      },
      {
        threshold: [0.12, 0.28, 0.45],
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} ref={containerRef}>
      {children({ isVisible, replayKey })}
    </div>
  );
}
