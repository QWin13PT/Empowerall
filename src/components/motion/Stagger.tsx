"use client";

import { m, useReducedMotion } from "motion/react";
import { motionConfig } from "@/config/motion";
import { cn } from "@/lib/cn";
import {
  heroTransition,
  revealPresets,
  staggerContainer,
} from "./presets";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  aboveFold?: boolean;
};

export function Stagger({ children, className, aboveFold = false }: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      initial="hidden"
      animate={aboveFold ? "visible" : undefined}
      whileInView={aboveFold ? undefined : "visible"}
      viewport={aboveFold ? undefined : motionConfig.viewport}
      variants={staggerContainer}
    >
      {children}
    </m.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      variants={revealPresets}
      transition={heroTransition}
    >
      {children}
    </m.div>
  );
}
