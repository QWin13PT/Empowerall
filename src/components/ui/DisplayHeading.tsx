import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const displayVariants = cva(
  "text-balance font-sans font-medium text-text hyphens-auto",
  {
    variants: {
      size: {
        xl: "text-display-xl",
        lg: "text-display-lg",
        md: "text-display-md",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

export type DisplayHeadingProps = Omit<React.ComponentProps<"h1">, "size"> &
  VariantProps<typeof displayVariants> & {
    as?: "h1" | "h2" | "h3";
  };

export function DisplayHeading({
  as: Tag = "h1",
  size,
  className,
  ...props
}: DisplayHeadingProps) {
  return <Tag className={cn(displayVariants({ size }), className)} {...props} />;
}
