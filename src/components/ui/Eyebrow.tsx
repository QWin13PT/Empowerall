import { cn } from "@/lib/cn";

type EyebrowProps = React.ComponentProps<"p">;

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-sans text-eyebrow font-medium tracking-widest text-text-muted uppercase",
        className,
      )}
      {...props}
    />
  );
}
