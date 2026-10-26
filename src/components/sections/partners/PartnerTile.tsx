import Image from "next/image";
import { cn } from "@/lib/cn";

type PartnerLogo = {
  src: string;
  width: number;
  height: number;
};

type PartnerTileProps = {
  name: string;
  href: string;
  logos: readonly PartnerLogo[];
};

function encodePublicPath(src: string) {
  return src
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

const tileClassName =
  "flex min-h-partner-tile min-w-0 flex-col items-center justify-center gap-3 rounded-xl bg-surface p-4";

export function PartnerTile({ name, href, logos }: PartnerTileProps) {
  const showName = logos.length !== 1;
  const content = (
    <>
      {logos.length > 0 ? (
        <span className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
          {logos.map((logo) => (
            <Image
              key={logo.src}
              src={encodePublicPath(logo.src)}
              alt={showName ? "" : name}
              width={logo.width}
              height={logo.height}
              sizes="12rem"
              unoptimized={logo.src.endsWith(".svg")}
              className="h-partner-logo w-auto max-w-full object-contain"
            />
          ))}
        </span>
      ) : null}
      {showName ? (
        <p className="text-heading-sm text-text text-center font-sans font-semibold text-pretty">
          {name}
        </p>
      ) : null}
    </>
  );

  if (!href) {
    return <div className={tileClassName}>{content}</div>;
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        tileClassName,
        "duration-fast active:scale-press transition-[opacity,transform] ease-out hover:opacity-80",
      )}
    >
      {content}
    </a>
  );
}
