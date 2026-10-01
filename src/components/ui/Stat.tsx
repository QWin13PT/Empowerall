import { cn } from "@/lib/cn";

type StatProps = {
  value: React.ReactNode;
  unit?: string;
  caption?: string;
  valueSize?: "stat" | "text";
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
          "text-brand font-serif font-medium text-balance tabular-nums",
          valueSize === "stat" ? "text-stat" : "text-heading-lg tracking-tight",
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
