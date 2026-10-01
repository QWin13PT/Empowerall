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
    <Section id="living-labs" labelledBy="living-labs-title" tone="subtle">
      <Container width="wide">
        <Reveal className="max-w-narrow">
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
        </Reveal>
        <Reveal className="max-w-narrow relative mx-auto mt-12">
          <div
            className="w-full"
            style={{
              aspectRatio: `${europeDots.width} / ${europeDots.height}`,
            }}
          >
            <EuropeMap label={t("livingLabs.mapLabel")} />
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-6 lg:absolute lg:inset-0 lg:mt-0 lg:block">
            {livingLabs.map((lab) => {
              const pin = europeDots.pins[lab.id];
              const description = t(lab.descriptionKey);

              return (
                <li
                  key={lab.id}
                  className="lg:z-raised lg:absolute lg:size-0"
                  style={{
                    top: `${(pin.y / europeDots.height) * 100}%`,
                    insetInlineStart: `${(pin.x / europeDots.width) * 100}%`,
                  }}
                >
                  <MapConnector placement={lab.placement} />
                  <div
                    className={cn("lg:w-map-card", cardPosition[lab.placement])}
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
      </Container>
    </Section>
  );
}
