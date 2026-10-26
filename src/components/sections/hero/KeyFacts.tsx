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
    <ul
      className={cn(
        "grid grid-cols-2 justify-items-center gap-8 lg:grid-cols-4",
        className,
      )}
    >
      {keyFacts.map((fact) => {
        const caption =
          "captionCount" in fact
            ? t(fact.captionKey, { count: fact.captionCount })
            : t(fact.captionKey);

        if (fact.kind === "dates") {
          return (
            <li
              key={fact.id}
              className="@container w-full min-w-0 justify-self-stretch"
            >
              <Stat
                value={t("hero.facts.duration.range", {
                  start: format.dateTime(
                    projectDates.start,
                    projectDateOptions,
                  ),
                  end: format.dateTime(projectDates.end, projectDateOptions),
                })}
                unit={t(fact.unitKey)}
                caption={caption}
                valueSize="range"
                className="w-full items-center text-center"
              />
            </li>
          );
        }

        const formatted = format.number(fact.value);

        return (
          <li key={fact.id}>
            <Stat
              value={<CountUp value={fact.value} formatted={formatted} />}
              unit={t(fact.unitKey)}
              caption={caption}
              className="items-center text-center"
            />
          </li>
        );
      })}
    </ul>
  );
}
