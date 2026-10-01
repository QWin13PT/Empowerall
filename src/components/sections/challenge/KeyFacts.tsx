import { getFormatter, getTranslations } from "next-intl/server";
import { CountUp } from "@/components/motion/CountUp";
import { Stat } from "@/components/ui";
import { keyFacts, projectDateOptions, projectDates } from "@/content/keyFacts";
import { cn } from "@/lib/cn";

type KeyFactsProps = {
  className?: string;
};

export async function KeyFacts({ className }: KeyFactsProps) {
  const t = await getTranslations();
  const format = await getFormatter();

  return (
    <ul className={cn("grid grid-cols-2 gap-8 lg:grid-cols-4", className)}>
      {keyFacts.map((fact) => {
        if (fact.kind === "dates") {
          return (
            <li key={fact.id}>
              <Stat
                value={t("hero.facts.duration.range", {
                  start: format.dateTime(
                    projectDates.start,
                    projectDateOptions,
                  ),
                  end: format.dateTime(projectDates.end, projectDateOptions),
                })}
                unit={t(fact.unitKey)}
                valueSize="text"
              />
            </li>
          );
        }

        const formatted = format.number(fact.value);
        const caption =
          "captionCount" in fact
            ? t(fact.captionKey, { count: fact.captionCount })
            : t(fact.captionKey);

        return (
          <li key={fact.id}>
            <Stat
              value={<CountUp value={fact.value} formatted={formatted} />}
              unit={t(fact.unitKey)}
              caption={caption}
            />
          </li>
        );
      })}
    </ul>
  );
}
