"use client";

import { AnimatePresence, m } from "motion/react";
import { cn } from "@/lib/cn";
import { iconSwapTransition } from "./presets";

type IconSwapProps = {
  active: boolean;
  on: React.ReactNode;
  off: React.ReactNode;
  className?: string;
};

export function IconSwap({ active, on, off, className }: IconSwapProps) {
  return (
    <span className={cn("relative inline-grid size-5 place-items-center", className)}>
      <AnimatePresence initial={false} mode="sync">
        <m.span
          key={active ? "on" : "off"}
          className="col-start-1 row-start-1 inline-flex"
          initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          transition={iconSwapTransition}
        >
          {active ? on : off}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
