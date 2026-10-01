import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Container, DisplayHeading, Eyebrow } from "@/components/ui";
import { needs } from "@/content/needs";
import { NeedCard } from "./NeedCard";

export async function Needs() {
  const t = await getTranslations();

  return (
    <Section id="needs" labelledBy="needs-title" tone="inverse">
      <Container width="wide">
        <Reveal className="max-w-narrow">
          <Eyebrow className="text-text-inverse-muted">
            {t("needs.eyebrow")}
          </Eyebrow>
          <DisplayHeading
            as="h2"
            id="needs-title"
            size="md"
            className="text-text-inverse mt-4"
          >
            {t("needs.title")}
          </DisplayHeading>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {needs.map((item) => (
            <NeedCard
              key={item.id}
              index={item.index}
              title={t(item.titleKey)}
              body={t(item.bodyKey)}
              surface={item.surface}
              src={"image" in item ? item.image : undefined}
            />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
