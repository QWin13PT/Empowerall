import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";

const wordmarkTones = {
  default: "text-brand/15",
  inverse: "text-text-inverse/10",
} as const;

type WordmarkProps = {
  className?: string;
  tone?: keyof typeof wordmarkTones;
};

export function Wordmark({ className, tone = "default" }: WordmarkProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("max-w-full", wordmarkTones[tone], className)}
    >
      <Logo decorative mark="wordmark" className="h-wordmark w-auto max-w-full" />
    </div>
  );
}
