export const projectDates = {
  start: new Date("2026-09-01T00:00:00.000Z"),
  end: new Date("2029-08-31T00:00:00.000Z"),
} as const;

export const projectDateOptions = {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
} as const;

export const keyFacts = [
  {
    id: "labs",
    kind: "count",
    value: 4,
    unitKey: "hero.facts.labs.unit",
    captionKey: "hero.facts.labs.caption",
    captionCount: 4,
  },
  {
    id: "partners",
    kind: "count",
    value: 13,
    unitKey: "hero.facts.partners.unit",
    captionKey: "hero.facts.partners.caption",
    captionCount: 7,
  },
  {
    id: "platforms",
    kind: "count",
    value: 4,
    unitKey: "hero.facts.platforms.unit",
    captionKey: "hero.facts.platforms.caption",
  },
  {
    id: "duration",
    kind: "dates",
    unitKey: "hero.facts.duration.unit",
  },
] as const;
