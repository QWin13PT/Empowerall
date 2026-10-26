import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Approach } from "@/components/sections/approach/Approach";
import { Challenge } from "@/components/sections/challenge/Challenge";
import { Hero } from "@/components/sections/hero/Hero";
import { LivingLabs } from "@/components/sections/living-labs/LivingLabs";
import { Needs } from "@/components/sections/needs/Needs";
import { Partners } from "@/components/sections/partners/Partners";
import { People } from "@/components/sections/people/People";
import { routing } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Challenge />
      <Needs />
      <Approach />
      <LivingLabs />
      <People />
      <Partners />
    </>
  );
}
