import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Container, DisplayHeading, Eyebrow, Text } from "@/components/ui";
import { peopleActors } from "@/content/people";

export async function People() {
  const t = await getTranslations();

  return (
    <Section id="people" labelledBy="people-title" tone="inverse">
      <Container width="wide">
        <Reveal className="max-w-narrow">
          <Eyebrow className="text-text-inverse-muted">
            {t("people.eyebrow")}
          </Eyebrow>
          <DisplayHeading
            as="h2"
            id="people-title"
            size="md"
            className="text-text-inverse mt-4"
          >
            {t("people.title")}
          </DisplayHeading>
          <Text tone="inverseMuted" className="mt-5">
            {t("people.intro")}
          </Text>
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {peopleActors.map((actor, index) => (
            <li key={actor.id} className="border-border-inverse border-t pt-4">
              <p className="text-body-sm text-text-inverse-muted font-sans tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-display-md text-text-inverse mt-2 font-sans font-semibold">
                {t(actor.labelKey)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
