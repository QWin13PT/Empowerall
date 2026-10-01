import { getTranslations } from "next-intl/server";
import { Eyebrow, Icon } from "@/components/ui";
import { monitoredDimensions } from "@/content/observation";

export async function ObservationMonitored() {
  const t = await getTranslations();

  return (
    <div className="bg-surface text-text max-w-glass-card hidden rounded-lg p-4 shadow-md sm:block">
      <Eyebrow>{t("observation.monitored.title")}</Eyebrow>
      <ul className="mt-3">
        {monitoredDimensions.map((item) => (
          <li
            key={item.id}
            className="border-border flex items-center gap-2 border-t py-2 first:border-t-0 first:pt-0 last:pb-0"
          >
            <Icon icon={item.icon} size="sm" className="text-text-muted" />
            <span className="text-body-sm font-sans text-pretty">
              {t(item.labelKey)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
