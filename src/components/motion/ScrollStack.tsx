"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

export type ScrollStackItem = {
  id: string;
  indexText: string;
  title: string;
  body: string;
};

type ScrollStackProps = {
  items: readonly ScrollStackItem[];
  className?: string;
};

export function ScrollStack({ items, className }: ScrollStackProps) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) {
      return;
    }

    return scrollYProgress.on("change", (value) => {
      const last = Math.max(0, items.length - 1);
      const next = Math.min(last, Math.max(0, Math.round(value * last)));
      setActive(next);
    });
  }, [items.length, reduced, scrollYProgress]);

  const current = items[active];

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {current && !reduced ? (
        <p
          aria-hidden="true"
          className="sticky top-28 z-raised mb-6 hidden font-sans text-heading-sm font-medium tabular-nums text-text-muted lg:block"
        >
          {current.indexText}
        </p>
      ) : null}
      <ol className="flex flex-col gap-6 lg:gap-0">
        {items.map((item, index) => (
          <StackCard
            key={item.id}
            item={item}
            index={index}
            progress={scrollYProgress}
            count={items.length}
            enhanced={!reduced}
          />
        ))}
      </ol>
    </div>
  );
}

function StackCard({
  item,
  index,
  progress,
  count,
  enhanced,
}: {
  item: ScrollStackItem;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  count: number;
  enhanced: boolean;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const opacity = useTransform(
    progress,
    [start, end],
    [1, index === count - 1 ? 1 : 0.55],
  );
  const scale = useTransform(
    progress,
    [start, end],
    [1, index === count - 1 ? 1 : 0.97],
  );

  return (
    <li className="lg:sticky lg:top-40 lg:pb-section motion-reduce:static motion-reduce:pb-0">
      <m.article
        style={enhanced ? { opacity, scale } : undefined}
        className="rounded-2xl bg-surface p-6 shadow-md md:p-8 lg:shadow-lg"
      >
        <p className="mb-4 font-sans text-body-sm tabular-nums text-text-muted">
          {item.indexText}
        </p>
        <h3 className="text-balance font-sans text-heading-lg font-semibold text-text">
          {item.title}
        </h3>
        <p className="mt-3 max-w-narrow text-pretty font-body text-body text-text-muted lg:text-body-lg">
          {item.body}
        </p>
      </m.article>
    </li>
  );
}
