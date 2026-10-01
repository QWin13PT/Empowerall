import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Container, DisplayHeading, Eyebrow, Text } from "@/components/ui";
import { peopleActors } from "@/content/people";

export async function People() {
  const t = await getTranslations();

  return (
    <Section id="people" labelledBy="people-title" tone="subtle">
      <Container width="wide">
        <Reveal className="max-w-narrow">
          <Eyebrow>{t("people.eyebrow")}</Eyebrow>
          <DisplayHeading as="h2" id="people-title" size="md" className="mt-4">
            {t("people.title")}
          </DisplayHeading>
          <Text tone="muted" className="mt-5">
            {t("people.intro")}
          </Text>
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {peopleActors.map((actor, index) => (
            <li
              key={actor.id}
              className="border-t border-border pt-4"
            >
              <p className="font-sans text-body-sm tabular-nums text-text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-sans text-display-md font-semibold text-text">
                {t(actor.labelKey)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
