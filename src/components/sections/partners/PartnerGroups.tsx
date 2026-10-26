import { Eyebrow, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { PartnerTile } from "./PartnerTile";

type PartnerGroupItem = {
  id: string;
  name: string;
  href: string;
  logos: readonly {
    src: string;
    width: number;
    height: number;
  }[];
};

type PartnerGroupBlock = {
  id: string;
  heading: string;
  partners: PartnerGroupItem[];
};

type PartnerGroupsProps = {
  groups: PartnerGroupBlock[];
  connected: {
    eyebrow: string;
    body: string;
  };
};

export function PartnerGroups({ groups, connected }: PartnerGroupsProps) {
  return (
    <div className="mt-12 flex flex-col gap-12">
      {groups.map((group) => (
        <div key={group.id}>
          <Eyebrow>{group.heading}</Eyebrow>
          <ul
            className={cn(
              "mt-5 grid gap-4",
              group.partners.length === 1
                ? "max-w-xs grid-cols-1"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
            )}
          >
            {group.partners.map((partner) => (
              <li
                key={partner.id}
                className={
                  partner.logos.length > 1 ? "md:col-span-2" : undefined
                }
              >
                <PartnerTile
                  name={partner.name}
                  href={partner.href}
                  logos={partner.logos}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="max-w-narrow">
        <Eyebrow>{connected.eyebrow}</Eyebrow>
        <Text tone="muted" className="mt-4">
          {connected.body}
        </Text>
      </div>
    </div>
  );
}
