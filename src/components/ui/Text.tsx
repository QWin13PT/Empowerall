import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const textVariants = cva("text-pretty font-body", {
  variants: {
    size: {
      lg: "text-body-lg",
      md: "text-body",
      sm: "text-body-sm",
    },
    tone: {
      default: "text-text",
      muted: "text-text-muted",
      inverse: "text-text-inverse",
      inverseMuted: "text-text-inverse-muted",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "default",
  },
});

export type TextProps = React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div";
  };

export function Text({
  as: Tag = "p",
  size,
  tone,
  className,
  ...props
}: TextProps) {
  return <Tag className={cn(textVariants({ size, tone }), className)} {...props} />;
}
