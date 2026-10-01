import { ImageCard, SectionIndex, Text } from "@/components/ui";
import type { NeedSurface } from "@/content/needs";
import { cn } from "@/lib/cn";

const surfaceClass: Record<NeedSurface, string> = {
  forest: "bg-surface-inverse text-text-inverse",
  sprout: "bg-surface-highlight text-text",
  photo: "text-text-on-media",
};

const indexClass: Record<NeedSurface, string> = {
  forest: "text-text-inverse-muted",
  sprout: "text-text-muted",
  photo: "text-text-on-media",
};

type NeedCardProps = {
  index: string;
  title: string;
  body: string;
  surface: NeedSurface;
  src?: string;
};

export function NeedCard({ index, title, body, surface, src }: NeedCardProps) {
  return (
    <article
      className={cn(
        "aspect-landscape lg:aspect-portrait relative flex flex-col justify-end overflow-hidden rounded-2xl p-6",
        surfaceClass[surface],
      )}
    >
      {surface === "photo" && src ? (
        <>
          <ImageCard
            src={src}
            alt=""
            aspect="auto"
            sizes="(min-width: 64rem) 25vw, (min-width: 40rem) 50vw, 100vw"
            className="outline-image-outline-inverse absolute inset-0 rounded-2xl"
          />
          <div aria-hidden="true" className="bg-hero-scrim absolute inset-0" />
        </>
      ) : null}
      <div className="z-raised relative flex flex-col gap-2">
        <SectionIndex
          current={index}
          total="04"
          className={indexClass[surface]}
        />
        <h3 className="text-heading-lg font-sans font-semibold text-balance hyphens-auto">
          {title}
        </h3>
        {surface === "photo" ? (
          <Text size="sm" className="text-text-on-media">
            {body}
          </Text>
        ) : (
          <Text
            size="sm"
            tone={surface === "forest" ? "inverseMuted" : "muted"}
          >
            {body}
          </Text>
        )}
      </div>
    </article>
  );
}
