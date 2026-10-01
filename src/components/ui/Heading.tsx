import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const headingVariants = cva("text-balance font-sans text-text", {
  variants: {
    size: {
      lg: "text-heading-lg font-semibold",
      md: "text-heading-md font-semibold",
      sm: "text-heading-sm font-medium",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type HeadingProps = React.ComponentProps<"h2"> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({
  as: Tag = "h2",
  size,
  className,
  ...props
}: HeadingProps) {
  return <Tag className={cn(headingVariants({ size }), className)} {...props} />;
}
