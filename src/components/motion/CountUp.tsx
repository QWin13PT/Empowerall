"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { motionConfig } from "@/config/motion";
import { cn } from "@/lib/cn";

type CountUpProps = {
  value: number;
  formatted: string;
  className?: string;
};

export function CountUp({ value, formatted, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: motionConfig.viewport.margin });
  const reduced = useReducedMotion();
  const [frameValue, setFrameValue] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (reduced || !inView) {
      return;
    }

    const duration = motionConfig.duration.enter * 1000;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setFrameValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setFinished(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  const display = reduced ? formatted : finished ? formatted : String(frameValue);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <span className="sr-only">{formatted}</span>
      <span aria-hidden="true" suppressHydrationWarning>
        {display}
      </span>
    </span>
  );
}
