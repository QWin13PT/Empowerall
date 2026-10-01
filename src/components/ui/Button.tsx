import { cva, type VariantProps } from "class-variance-authority";
import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-pill font-sans font-medium transition-[background-color,color,transform,box-shadow] duration-fast ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-brand-foreground shadow-sm hover:bg-forest-700",
        secondary:
          "bg-surface text-text shadow-sm hover:shadow-md",
        ghost: "bg-transparent text-text hover:bg-bg-subtle",
      },
      size: {
        sm: "min-h-hit-dense px-4 text-body-sm has-[svg]:pe-3.5",
        md: "min-h-hit px-5 text-body has-[svg]:pe-4",
        lg: "min-h-hit px-6 text-body-lg has-[svg]:pe-5",
      },
      isStatic: {
        true: "",
        false: "active:scale-press",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      isStatic: false,
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    static?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  static: isStaticProp = false,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants({ variant, size, isStatic: isStaticProp }),
    className,
  );

  if (asChild && isValidElement<{ className?: string }>(children)) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
    });
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
