import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  ImageCard,
  Text,
} from "@/components/ui";
import { media } from "@/content/media";
import { ObservationMonitored } from "./ObservationMonitored";

export async function Observation() {
  const t = await getTranslations();

  return (
    <Section id="observation" labelledBy="observation-title">
      <Container
        width="wide"
        className="grid items-center gap-12 lg:grid-cols-2"
      >
        <Reveal className="max-w-narrow flex flex-col gap-5 lg:col-start-2">
          <Eyebrow>{t("observation.eyebrow")}</Eyebrow>
          <DisplayHeading as="h2" id="observation-title" size="md">
            {t("observation.title")}
          </DisplayHeading>
          <Text tone="muted">{t("observation.paragraph1")}</Text>
          <Text tone="muted">{t("observation.paragraph2")}</Text>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-start-1 lg:row-start-1">
          <ImageCard
            src={media.observation}
            aspect="landscape"
            alt={t("observation.visualAlt")}
            className="min-h-72"
            sizes="(min-width: 64rem) 50vw, 100vw"
          >
            <div className="z-raised absolute start-4 bottom-4">
              <ObservationMonitored />
            </div>
          </ImageCard>
        </Reveal>
      </Container>
    </Section>
  );
}
