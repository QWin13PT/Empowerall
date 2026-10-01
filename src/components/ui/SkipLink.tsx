import { cn } from "@/lib/cn";

type SkipLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function SkipLink({ href, children, className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "bg-brand font-sans text-brand-foreground focus:z-toast sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:rounded-pill focus:px-4 focus:py-2",
        className,
      )}
    >
      {children}
    </a>
  );
}
