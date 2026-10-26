import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Container, DisplayHeading, Eyebrow, Text } from "@/components/ui";
import {
  partnerGroupHeadingKey,
  partnerGroupOrder,
  partners,
} from "@/content/partners";
import { PartnerGroups } from "./PartnerGroups";

export async function Partners() {
  const t = await getTranslations();

  const groups = partnerGroupOrder.map((groupId) => ({
    id: groupId,
    heading: t(partnerGroupHeadingKey[groupId]),
    partners: partners
      .filter((partner) => partner.group === groupId)
      .map((partner) => ({
        id: partner.id,
        name: t(partner.nameKey),
        href: partner.href,
        logos: partner.logos,
      })),
  }));

  return (
    <Section id="partners" labelledBy="partners-title">
      <Container width="wide">
        <Reveal className="max-w-narrow">
          <Eyebrow>{t("partners.eyebrow")}</Eyebrow>
          <DisplayHeading
            as="h2"
            id="partners-title"
            size="md"
            className="mt-4"
          >
            {t("partners.title")}
          </DisplayHeading>
          <Text tone="muted" className="mt-5">
            {t("partners.intro")}
          </Text>
        </Reveal>
        <Reveal>
          <PartnerGroups
            groups={groups}
            connected={{
              eyebrow: t("partners.connected.eyebrow"),
              body: t("partners.connected.body"),
            }}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
