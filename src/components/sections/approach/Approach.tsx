import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollStack } from "@/components/motion/ScrollStack";
import { Container, DisplayHeading, Eyebrow, Text } from "@/components/ui";
import { approachSteps } from "@/content/approach";

export async function Approach() {
  const t = await getTranslations();
  const total = String(approachSteps.length).padStart(2, "0");
  const items = approachSteps.map((step) => ({
    id: step.id,
    indexText: t("approach.indexLabel", { current: step.index, total }),
    title: t(step.titleKey),
    body: t(step.bodyKey),
  }));

  return (
    <Section id="approach" labelledBy="approach-title">
      <Container width="wide">
        <Reveal className="mb-12 max-w-narrow">
          <Eyebrow>{t("approach.eyebrow")}</Eyebrow>
          <DisplayHeading as="h2" id="approach-title" size="md" className="mt-4">
            {t("approach.title")}
          </DisplayHeading>
          <Text tone="muted" className="mt-5">
            {t("approach.intro")}
          </Text>
        </Reveal>
        <ScrollStack items={items} />
      </Container>
    </Section>
  );
}
