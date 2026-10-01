import { media } from "@/content/media";

export type NeedSurface = "photo" | "forest" | "sprout";

export const needs = [
  {
    id: "access",
    index: "01",
    titleKey: "needs.items.access.title",
    bodyKey: "needs.items.access.body",
    surface: "forest" satisfies NeedSurface,
  },
  {
    id: "knowledge",
    index: "02",
    titleKey: "needs.items.knowledge.title",
    bodyKey: "needs.items.knowledge.body",
    surface: "photo" satisfies NeedSurface,
    image: media.livingLabs.romania,
  },
  {
    id: "networks",
    index: "03",
    titleKey: "needs.items.networks.title",
    bodyKey: "needs.items.networks.body",
    surface: "sprout" satisfies NeedSurface,
  },
  {
    id: "voice",
    index: "04",
    titleKey: "needs.items.voice.title",
    bodyKey: "needs.items.voice.body",
    surface: "photo" satisfies NeedSurface,
    image: media.livingLabs.slovakia,
  },
] as const;
