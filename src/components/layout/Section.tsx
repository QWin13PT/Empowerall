import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const sectionVariants = cva("", {
  variants: {
    tone: {
      default: "bg-bg",
      subtle: "bg-bg-subtle",
      brand: "bg-brand text-brand-foreground",
      inverse: "bg-bg-inverse text-text-inverse",
    },
    space: {
      default: "py-section",
      none: "p-0",
    },
  },
  defaultVariants: {
    tone: "default",
    space: "default",
  },
});

export type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    labelledBy: string;
  };

export function Section({
  className,
  tone,
  space,
  labelledBy,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(sectionVariants({ tone, space }), className)}
      {...props}
    />
  );
}
