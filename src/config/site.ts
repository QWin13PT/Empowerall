import { routing, type Locale } from "@/i18n/routing";

export const site = {
  name: "EMPOWERALL",
  url: "https://empowerall.eu",
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  email: "",
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
  legal: {
    privacy: "",
    cookies: "",
  },
} as const;

export const localeOpenGraph: Record<Locale, string> = {
  en: "en_US",
  "pt-PT": "pt_PT",
};

export const navItems = [
  { id: "about", href: "/#about", labelKey: "nav.about" },
  { id: "approach", href: "/#approach", labelKey: "nav.approach" },
  { id: "living-labs", href: "/#living-labs", labelKey: "nav.livingLabs" },
  { id: "partners", href: "/#partners", labelKey: "nav.partners" },
] as const;
