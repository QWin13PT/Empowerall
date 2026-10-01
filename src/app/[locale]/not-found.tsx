import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button, Container, DisplayHeading, Text } from "@/components/ui";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container className="flex flex-col items-start gap-6 py-section-lg">
      <DisplayHeading as="h1" size="md">
        {t("title")}
      </DisplayHeading>
      <Text tone="muted" size="lg" className="max-w-narrow">
        {t("description")}
      </Text>
      <Button asChild>
        <Link href="/">{t("cta")}</Link>
      </Button>
    </Container>
  );
}
