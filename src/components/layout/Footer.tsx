import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { getFormatter, getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems, site } from "@/config/site";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import {
  Container,
  Eyebrow,
  Icon,
  Logo,
  SocialIcon,
  Text,
  Wordmark,
} from "@/components/ui";
import { funding } from "@/content/funding";
import { projectDates } from "@/content/keyFacts";
import type { Locale } from "@/i18n/routing";

const social = [
  {
    id: "linkedin",
    name: "linkedin",
    href: site.social.linkedin,
    labelKey: "footer.social.linkedin",
  },
  {
    id: "facebook",
    name: "facebook",
    href: site.social.facebook,
    labelKey: "footer.social.facebook",
  },
  {
    id: "instagram",
    name: "instagram",
    href: site.social.instagram,
    labelKey: "footer.social.instagram",
  },
] as const;

export async function Footer() {
  const t = await getTranslations();
  const format = await getFormatter();
  const locale = (await getLocale()) as Locale;
  const languageNames = {
    en: t("languages.en"),
    "pt-PT": t("languages.pt-PT"),
  } as const;
  const currentLanguage = t("common.currentLanguage", {
    language: languageNames[locale],
  });
  const euEmblem = funding.eu.byLocale[locale];

  return (
    <footer>
      <div className="bg-bg py-12 lg:py-16">
        <Container width="wide" className="flex flex-col gap-5">
          <Eyebrow>{t("footer.acknowledgement")}</Eyebrow>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={funding.eu.href}
              rel="noopener noreferrer"
              target="_blank"
              className="duration-fast active:scale-press transition-[opacity,transform] ease-out hover:opacity-80"
            >
              <Image
                src={euEmblem.src}
                alt={t(funding.eu.altKey)}
                width={euEmblem.width}
                height={euEmblem.height}
                className="h-funding-logo w-auto shrink-0 object-contain"
              />
            </a>
            <a
              href={funding.agroecology.href}
              rel="noopener noreferrer"
              target="_blank"
              className="duration-fast active:scale-press transition-[opacity,transform] ease-out hover:opacity-80"
            >
              <Image
                src={funding.agroecology.src}
                alt={t(funding.agroecology.altKey)}
                width={funding.agroecology.width}
                height={funding.agroecology.height}
                className="h-funding-logo w-auto shrink-0 object-contain"
              />
            </a>
          </div>
          <Text size="sm" tone="muted">
            {t("footer.funding")}
          </Text>
          <Text size="sm" tone="muted">
            {t("footer.nationalFundersPending")}
          </Text>
        </Container>
      </div>
      <div className="bg-bg-footer text-text-inverse [&_a:focus-visible]:outline-focus-ring-inverse [&_button:focus-visible]:outline-focus-ring-inverse pt-section pb-viewport-blur">
        <Container width="wide" className="flex flex-col gap-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-narrow flex flex-col gap-4">
              <Logo alt={t("common.logoAlt")} className="self-start" />
              <Text tone="inverseMuted">{t("footer.tagline")}</Text>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
              <div>
                <p className="text-eyebrow text-text-inverse-muted mb-3 font-sans font-medium tracking-widest uppercase">
                  {t("footer.contact")}
                </p>
                {site.email ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="min-h-hit text-text-inverse duration-fast hover:text-highlight inline-flex items-center gap-2 font-sans font-medium transition-[color] ease-out"
                  >
                    <Icon icon={Mail} />
                    {site.email}
                  </a>
                ) : (
                  <p className="font-body text-body text-text-inverse-muted">
                    {t("footer.emailPlaceholder")}
                  </p>
                )}
                <p className="text-eyebrow text-text-inverse-muted mt-6 mb-3 font-sans font-medium tracking-widest uppercase">
                  {t("footer.follow")}
                </p>
                <ul className="flex flex-col gap-1">
                  {social.map((item) => (
                    <li key={item.id}>
                      {item.href ? (
                        <a
                          href={item.href}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="min-h-hit text-body text-text-inverse duration-fast hover:text-highlight inline-flex items-center gap-2 font-sans transition-[color] ease-out"
                        >
                          <SocialIcon name={item.name} />
                          {t(item.labelKey)}
                        </a>
                      ) : (
                        <span className="min-h-hit text-body text-text-inverse-muted inline-flex items-center gap-2 font-sans">
                          <SocialIcon name={item.name} />
                          {t(item.labelKey)}
                          <span className="text-body-sm">
                            ({t("footer.socialPending")})
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <nav aria-label={t("common.mainNav")}>
                  <ul className="flex flex-col">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="min-h-hit text-body text-text-inverse duration-fast hover:text-highlight inline-flex items-center font-sans font-medium transition-[color] ease-out"
                        >
                          {t(item.labelKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-6">
                  <LanguageSwitcher
                    tone="inverse"
                    labels={{
                      en: t("languages.en"),
                      "pt-PT": t("languages.pt-PT"),
                    }}
                    shortLabels={{
                      en: t("languages.short.en"),
                      "pt-PT": t("languages.short.pt-PT"),
                    }}
                    groupLabel={t("common.language")}
                    currentLabel={currentLanguage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-border-footer flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center">
            <p className="font-body text-body-sm text-text-inverse-muted tabular-nums">
              {t("footer.copyright", {
                start: format.dateTime(projectDates.start, {
                  year: "numeric",
                  timeZone: "UTC",
                }),
                end: format.dateTime(projectDates.end, {
                  year: "numeric",
                  timeZone: "UTC",
                }),
              })}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {site.legal.privacy ? (
                <a
                  href={site.legal.privacy}
                  className="min-h-hit font-body text-body-sm text-text-inverse-muted hover:text-text-inverse inline-flex items-center"
                >
                  {t("footer.privacy")}
                </a>
              ) : (
                <span className="min-h-hit font-body text-body-sm text-text-inverse-muted inline-flex items-center">
                  {t("footer.privacy")} ({t("footer.legalPending")})
                </span>
              )}
              {site.legal.cookies ? (
                <a
                  href={site.legal.cookies}
                  className="min-h-hit font-body text-body-sm text-text-inverse-muted hover:text-text-inverse inline-flex items-center"
                >
                  {t("footer.cookies")}
                </a>
              ) : (
                <span className="min-h-hit font-body text-body-sm text-text-inverse-muted inline-flex items-center">
                  {t("footer.cookies")} ({t("footer.legalPending")})
                </span>
              )}
              <a
                href="#top"
                className="min-h-hit text-body-sm text-text-inverse duration-fast hover:text-highlight active:scale-press inline-flex items-center gap-2 font-sans font-medium transition-[color,transform] ease-out sm:ms-auto"
              >
                {t("footer.backToTop")}
                <Icon icon={ArrowUp} />
              </a>
            </div>
          </div>
          <Wordmark tone="inverse" />
        </Container>
      </div>
    </footer>
  );
}
