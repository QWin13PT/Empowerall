import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt-PT"],
  defaultLocale: "en",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "pt-PT": "/pt",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
