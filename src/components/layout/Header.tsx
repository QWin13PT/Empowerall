import { getLocale, getTranslations } from "next-intl/server";
import { navItems } from "@/config/site";
import { HeaderShell } from "@/components/layout/HeaderShell";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { LogoLink } from "@/components/layout/LogoLink";
import { MobileNav } from "@/components/layout/MobileNav";
import { Nav } from "@/components/layout/Nav";
import { Container, Logo } from "@/components/ui";
import type { Locale } from "@/i18n/routing";

export async function Header() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const languageNames = {
    en: t("languages.en"),
    "pt-PT": t("languages.pt-PT"),
  } as const;
  const shortLabels = {
    en: t("languages.short.en"),
    "pt-PT": t("languages.short.pt-PT"),
  } as const;
  const currentLanguage = t("common.currentLanguage", {
    language: languageNames[locale],
  });

  const languageSwitcher = (
    <LanguageSwitcher
      labels={languageNames}
      shortLabels={shortLabels}
      groupLabel={t("common.language")}
      currentLabel={currentLanguage}
    />
  );

  const mobileItems = navItems.map((item) => ({
    id: item.id,
    href: item.href,
    label: t(item.labelKey),
  }));

  return (
    <HeaderShell>
      <Container
        width="wide"
        className="h-header flex items-center justify-between gap-4"
      >
        <LogoLink className="min-h-hit text-brand duration-slow group-data-[surface=clear]/header:text-text-on-media inline-flex items-center rounded-sm transition-[color] ease-out">
          <Logo alt="" decorative className="h-8 w-auto" />
          <span className="sr-only">{t("common.logoAlt")}</span>
        </LogoLink>
        <nav aria-label={t("common.mainNav")} className="hidden lg:block">
          <Nav />
        </nav>
        <div className="flex items-center gap-1">
          {languageSwitcher}
          <MobileNav
            items={mobileItems}
            openLabel={t("common.openMenu")}
            closeLabel={t("common.closeMenu")}
            navLabel={t("common.mainNav")}
          />
        </div>
      </Container>
    </HeaderShell>
  );
}
