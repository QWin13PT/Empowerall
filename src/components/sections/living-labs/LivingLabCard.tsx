import { ImageCard, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

type LivingLabCardProps = {
  country: string;
  platform: string;
  description: string;
  src: string;
  alt: string;
  className?: string;
};

export function LivingLabCard({
  country,
  platform,
  description,
  src,
  alt,
  className,
}: LivingLabCardProps) {
  return (
    <article
      className={cn(
        "bg-surface lg:w-map-card w-full rounded-xl p-2 shadow-md",
        className,
      )}
    >
      <ImageCard
        aspect="landscape"
        src={src}
        alt={alt}
        className="rounded-lg"
        sizes="(min-width: 64rem) 10rem, (min-width: 40rem) 50vw, 100vw"
      />
      <div className="flex flex-col gap-1 px-1 pt-2 pb-1">
        <h3 className="text-heading-sm text-text font-sans font-semibold text-balance">
          {country}
        </h3>
        <Text tone="muted" size="sm">
          {platform}
        </Text>
        {description ? (
          <Text tone="muted" size="sm">
            {description}
          </Text>
        ) : null}
      </div>
    </article>
  );
}
