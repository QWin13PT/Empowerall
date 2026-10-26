import type { Locale } from "@/i18n/routing";

type FundingLogo = {
  src: string;
  width: number;
  height: number;
};

export const funding = {
  eu: {
    href: "https://european-union.europa.eu/",
    altKey: "footer.euEmblemAlt",
    byLocale: {
      en: {
        src: "/images/funding/eu-funded-en.png",
        width: 1920,
        height: 428,
      },
      "pt-PT": {
        src: "/images/funding/eu-funded-en.png",
        width: 1920,
        height: 428,
      },
    } satisfies Record<Locale, FundingLogo>,
  },
  agroecology: {
    href: "https://www.agroecologypartnership.eu/",
    altKey: "footer.agroecologyAlt",
    src: "/images/funding/agroecology-partnership.png",
    width: 1060,
    height: 594,
  },
} as const;
