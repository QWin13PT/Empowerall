import { cn } from "@/lib/cn";

type BadgeProps = React.ComponentProps<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-hit-dense items-center rounded-pill bg-highlight px-3 font-sans text-body-sm font-medium text-text",
        className,
      )}
      {...props}
    />
  );
}
