import { cn } from "@/lib/cn";

type MarqueeProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function Marquee({ label, children, className }: MarqueeProps) {
  return (
    <div className={cn("marquee", className)} role="region" aria-label={label}>
      <div className="marquee-track">
        <ul className="marquee-list">{children}</ul>
        <ul className="marquee-list marquee-clone" aria-hidden="true" inert>
          {children}
        </ul>
      </div>
    </div>
  );
}
