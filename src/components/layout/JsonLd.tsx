import { site } from "@/config/site";
import type { Locale } from "@/i18n/routing";

type JsonLdProps = {
  locale: Locale;
  description: string;
};

export function JsonLd({ locale, description }: JsonLdProps) {
  const language = locale === "pt-PT" ? "pt-PT" : "en";
  const data = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: site.name,
    url: locale === "pt-PT" ? `${site.url}/pt` : site.url,
    description,
    inLanguage: language,
    startDate: "2026-02",
    endDate: "2029-01",
    founder: {
      "@type": "Organization",
      name: "CSIC / INGENIO",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
