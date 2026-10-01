import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export type IconProps = {
  icon: LucideIcon;
  size?: keyof typeof iconSizes;
  weight?: "regular" | "semibold";
  className?: string;
};

export function Icon({
  icon: Lucide,
  size = "md",
  weight = "regular",
  className,
}: IconProps) {
  return (
    <Lucide
      aria-hidden
      className={cn("shrink-0", className)}
      size={iconSizes[size]}
      strokeWidth={weight === "semibold" ? 2 : 1.5}
    />
  );
}
