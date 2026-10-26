import { cn } from "@/lib/cn";

const valueSizeClass = {
  stat: "text-stat text-balance",
  text: "text-heading-lg tracking-tight text-balance",
  range:
    "text-stat-range flex min-h-stat-value w-full items-center justify-center whitespace-nowrap",
} as const;

type StatProps = {
  value: React.ReactNode;
  unit?: string;
  caption?: string;
  valueSize?: keyof typeof valueSizeClass;
  className?: string;
};

export function Stat({
  value,
  unit,
  caption,
  valueSize = "stat",
  className,
}: StatProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p
        className={cn(
          "text-brand font-serif font-medium tabular-nums",
          valueSizeClass[valueSize],
        )}
      >
        <span className="tabular-nums">{value}</span>
      </p>
      {unit ? (
        <p className="text-heading-sm text-text font-sans font-medium text-pretty">
          {unit}
        </p>
      ) : null}
      {caption ? (
        <p className="text-body-sm text-text-muted font-sans text-pretty">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
