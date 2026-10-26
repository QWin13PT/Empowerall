import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Section } from "@/components/layout/Section";
import { Button, Container, DisplayHeading, Icon, Text } from "@/components/ui";
import { media } from "@/content/media";
import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { KeyFacts } from "@/components/sections/hero/KeyFacts";

export async function Hero() {
  const t = await getTranslations();

  return (
    <Section id="top" labelledBy="hero-title" space="none">
      <div className="relative h-svh">
        <HeroBackground src={media.hero} alt={t("hero.visualAlt")} />
        <div aria-hidden="true" className="bg-hero-scrim absolute inset-0" />
        <Container
          width="wide"
          className="absolute inset-x-0 bottom-0 pb-10 md:pb-14"
        >
          <Stagger
            aboveFold
            className="max-w-content flex flex-col items-start gap-4 text-start md:gap-6"
          >
            <StaggerItem>
              <DisplayHeading
                id="hero-title"
                size="xl"
                className="text-text-inverse"
              >
                {t.rich("hero.title", {
                  accent: (chunks) => (
                    <em className="font-serif font-medium tracking-normal italic">
                      {chunks}
                    </em>
                  ),
                  subline: (chunks) => (
                    <span className="text-display-md mt-3 block font-medium">
                      {chunks}
                    </span>
                  ),
                })}
              </DisplayHeading>
            </StaggerItem>
            <StaggerItem>
              <Text size="lg" tone="inverse" className="max-w-narrow">
                {t("hero.description")} {t("hero.distinctive")}
              </Text>
            </StaggerItem>
            <StaggerItem className="z-sticky relative">
              <Button asChild size="lg" variant="secondary">
                <Link href="/#about">
                  {t("hero.cta")}
                  <Icon icon={ArrowRight} className="rtl:rotate-180" />
                </Link>
              </Button>
            </StaggerItem>
          </Stagger>
        </Container>
      </div>
      <div className="bg-bg-subtle">
        <Container width="wide" className="pt-10 md:pt-14">
          <div className="border-border border-b pb-10 md:pb-14">
            <KeyFacts />
          </div>
        </Container>
      </div>
    </Section>
  );
}
