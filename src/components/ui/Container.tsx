import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    width: {
      narrow: "max-w-narrow",
      content: "max-w-content",
      wide: "max-w-wide",
    },
  },
  defaultVariants: {
    width: "content",
  },
});

export type ContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants>;

export function Container({ className, width, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ width }), className)} {...props} />;
}
