"use client";

import { m, useReducedMotion } from "motion/react";
import { motionConfig } from "@/config/motion";
import { cn } from "@/lib/cn";
import { revealPresets, revealTransition } from "./presets";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = m[as];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Tag
      className={cn(className)}
      initial={revealPresets.hidden}
      whileInView={revealPresets.visible}
      viewport={motionConfig.viewport}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </Tag>
  );
}
