import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Container, DisplayHeading, Eyebrow, Text } from "@/components/ui";
import { europeDots } from "@/content/europeDots";
import { livingLabs, type LabPlacement } from "@/content/livingLabs";
import { cn } from "@/lib/cn";
import { EuropeMap } from "./EuropeMap";
import { LivingLabCard } from "./LivingLabCard";
import { MapConnector } from "./MapConnector";

const cardPosition: Record<LabPlacement, string> = {
  "top-start":
    "lg:absolute lg:end-[var(--spacing-map-pin)] lg:bottom-[var(--spacing-map-pin)]",
  "bottom-start":
    "lg:absolute lg:end-[var(--spacing-map-pin)] lg:top-[var(--spacing-map-pin)]",
  "top-end":
    "lg:absolute lg:start-[var(--spacing-map-pin)] lg:bottom-[var(--spacing-map-pin)]",
  "bottom-end":
    "lg:absolute lg:start-[var(--spacing-map-pin)] lg:top-[var(--spacing-map-pin)]",
};

export async function LivingLabs() {
  const t = await getTranslations();

  return (
    <Section
      id="living-labs"
      labelledBy="living-labs-title"
      tone="subtle"
      className="z-raised relative"
    >
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal className="max-w-narrow min-w-0 lg:col-start-2">
            <Eyebrow>{t("livingLabs.eyebrow")}</Eyebrow>
            <DisplayHeading
              as="h2"
              id="living-labs-title"
              size="md"
              className="mt-4"
            >
              {t("livingLabs.title")}
            </DisplayHeading>
            <Text tone="muted" className="mt-5">
              {t("livingLabs.intro")}
            </Text>
            <Text tone="muted" className="mt-5">
              {t("livingLabs.research")}
            </Text>
            <Text tone="muted" className="mt-5">
              {t("livingLabs.advisoryCouncil")}
            </Text>
            <p className="text-heading-sm text-text mt-10 font-sans font-medium text-pretty">
              {t("livingLabs.tagline")}
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="max-w-map relative mx-auto w-full lg:col-start-1 lg:row-start-1 lg:me-0"
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: `${europeDots.width} / ${europeDots.height}`,
              }}
            >
              <EuropeMap label={t("livingLabs.mapLabel")} />
              <MapConnector />
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-6 lg:absolute lg:inset-0 lg:mt-0 lg:block">
              {livingLabs.map((lab) => {
                const card = europeDots.cardAnchors[lab.id];
                const description = t(lab.descriptionKey);

                return (
                  <li
                    key={lab.id}
                    className="lg:z-raised lg:absolute lg:size-0"
                    style={{
                      top: `${(card.y / europeDots.height) * 100}%`,
                      insetInlineStart: `${(card.x / europeDots.width) * 100}%`,
                    }}
                  >
                    <div
                      className={cn(
                        "lg:w-map-card",
                        cardPosition[lab.placement],
                      )}
                    >
                      <LivingLabCard
                        country={t(lab.countryKey)}
                        platform={t(lab.platformKey)}
                        description={description}
                        src={lab.image}
                        alt={t(lab.imageAltKey)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
