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

export async function Challenge() {
  const t = await getTranslations();

  return (
    <Section id="about" labelledBy="challenge-title" tone="subtle">
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <Reveal className="max-w-narrow flex flex-col gap-5">
            <Eyebrow>{t("challenge.eyebrow")}</Eyebrow>
            <DisplayHeading as="h2" id="challenge-title" size="md">
              {t("challenge.title")}
            </DisplayHeading>
            <Text tone="muted">{t("challenge.paragraph1")}</Text>
            <Text tone="muted">{t("challenge.paragraph2")}</Text>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageCard
              src={media.about}
              alt={t("challenge.visualAlt")}
              aspect="landscape"
              className="min-h-72"
              sizes="(min-width: 64rem) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
