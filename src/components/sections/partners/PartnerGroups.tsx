import { Eyebrow, Text } from "@/components/ui";

type PartnerGroupItem = {
  id: string;
  name: string;
  href: string;
};

type PartnerGroupBlock = {
  id: string;
  heading: string;
  note: string | null;
  partners: PartnerGroupItem[];
};

type PartnerGroupsProps = {
  groups: PartnerGroupBlock[];
  advisory: string;
};

export function PartnerGroups({ groups, advisory }: PartnerGroupsProps) {
  return (
    <div className="mt-12">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.id}>
            <Eyebrow>{group.heading}</Eyebrow>
            <ul className="mt-4 flex flex-col">
              {group.partners.map((partner) => (
                <li
                  key={partner.id}
                  className="border-border border-t py-3 first:border-t-0 first:pt-0"
                >
                  {partner.href ? (
                    <a
                      href={partner.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="min-h-hit duration-fast active:scale-press text-heading-sm text-text inline-flex items-center font-sans font-medium text-pretty transition-[opacity,transform] ease-out hover:opacity-80"
                    >
                      {partner.name}
                    </a>
                  ) : (
                    <p className="text-heading-sm text-text font-sans font-medium text-pretty">
                      {partner.name}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            {group.note ? (
              <Text tone="muted" size="sm" className="mt-4">
                {group.note}
              </Text>
            ) : null}
          </div>
        ))}
      </div>
      <Text tone="muted" size="sm" className="mt-8">
        {advisory}
      </Text>
    </div>
  );
}
