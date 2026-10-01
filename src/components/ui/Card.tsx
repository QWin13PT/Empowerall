import { cn } from "@/lib/cn";

type CardProps = React.ComponentProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-surface p-6 shadow-md md:p-8",
        className,
      )}
      {...props}
    />
  );
}
