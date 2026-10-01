import { cn } from "@/lib/cn";

type SectionIndexProps = {
  current: string;
  total: string;
  className?: string;
};

export function SectionIndex({ current, total, className }: SectionIndexProps) {
  return (
    <span
      className={cn(
        "font-sans text-body-sm tabular-nums tracking-wide text-text-muted",
        className,
      )}
    >
      {current}
      <span aria-hidden="true"> / </span>
      <span className="sr-only"> </span>
      {total}
    </span>
  );
}
