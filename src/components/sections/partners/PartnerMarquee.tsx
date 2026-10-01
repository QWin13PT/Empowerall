import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";

type PartnerLogoItem = {
  id: string;
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
};

type PartnerMarqueeProps = {
  label: string;
  partners: PartnerLogoItem[];
};

function encodePublicPath(src: string) {
  return src
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export function PartnerMarquee({ label, partners }: PartnerMarqueeProps) {
  return (
    <Marquee label={label} className="mt-12 py-stack-lg">
      {partners.map((partner) => {
        const logo = (
          <Image
            src={encodePublicPath(partner.src)}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            sizes="20rem"
            className="marquee-logo"
          />
        );

        return (
          <li key={partner.id}>
            {partner.href ? (
              <a
                href={partner.href}
                rel="noopener noreferrer"
                target="_blank"
                className="min-h-hit duration-fast active:scale-press flex items-center transition-[opacity,transform] ease-out hover:opacity-80"
              >
                {logo}
              </a>
            ) : (
              <span className="min-h-hit flex items-center">{logo}</span>
            )}
          </li>
        );
      })}
    </Marquee>
  );
}
