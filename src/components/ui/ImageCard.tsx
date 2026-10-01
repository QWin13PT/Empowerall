import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const imageCardVariants = cva(
  "relative overflow-hidden rounded-2xl bg-bg-subtle outline outline-offset-[-1px] outline-image-outline",
  {
    variants: {
      aspect: {
        portrait: "aspect-portrait",
        landscape: "aspect-landscape",
        wide: "aspect-wide",
        hero: "aspect-hero",
        auto: "",
      },
    },
    defaultVariants: {
      aspect: "landscape",
    },
  },
);

export type ImageCardProps = VariantProps<typeof imageCardVariants> & {
  src?: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
};

export function ImageCard({
  src,
  alt,
  aspect,
  priority = false,
  sizes = "(min-width: 64rem) 50vw, 100vw",
  className,
  children,
}: ImageCardProps) {
  return (
    <div className={cn(imageCardVariants({ aspect }), className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden={alt ? undefined : true}
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          className="absolute inset-0 bg-linear-to-br from-brand via-forest-700 to-clay-500"
        />
      )}
      {children}
    </div>
  );
}
