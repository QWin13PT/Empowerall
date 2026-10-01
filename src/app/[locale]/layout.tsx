import type { Metadata } from "next";
import { Fraunces, Inter, Sora } from "next/font/google";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/layout/JsonLd";
import { ViewportBlur } from "@/components/layout/ViewportBlur";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SkipLink } from "@/components/ui";
import { localeOpenGraph, site } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) {
    return {};
  }
  const locale = raw as Locale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = locale === "pt-PT" ? "/pt" : "";
  const canonical = `${site.url}${path}`;

  return {
    metadataBase: new URL(site.url),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: {
        en: site.url,
        "pt-PT": `${site.url}/pt`,
        "x-default": site.url,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: canonical,
      siteName: site.name,
      locale: localeOpenGraph[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) {
    notFound();
  }
  const locale = raw as Locale;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <html
      lang={locale === "pt-PT" ? "pt-PT" : "en"}
      className={`${sora.variable} ${inter.variable} ${fraunces.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={{}}>
          <MotionProvider>
            <SmoothScroll>
              <JsonLd locale={locale} description={t("meta.description")} />
              <SkipLink href="#main-content">{t("common.skipToContent")}</SkipLink>
              <Header />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
              <ViewportBlur />
            </SmoothScroll>
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
