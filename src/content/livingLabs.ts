import { media } from "@/content/media";
import type { LabId } from "@/content/europeDots";

export type LabPlacement =
  "top-start" | "bottom-start" | "top-end" | "bottom-end";

export const livingLabs = [
  {
    id: "romania" satisfies LabId,
    countryKey: "livingLabs.labs.romania.country",
    platformKey: "livingLabs.labs.romania.platform",
    descriptionKey: "livingLabs.labs.romania.description",
    imageAltKey: "livingLabs.labs.romania.imageAlt",
    image: media.livingLabs.romania,
    placement: "bottom-end" satisfies LabPlacement,
  },
  {
    id: "slovakia" satisfies LabId,
    countryKey: "livingLabs.labs.slovakia.country",
    platformKey: "livingLabs.labs.slovakia.platform",
    descriptionKey: "livingLabs.labs.slovakia.description",
    imageAltKey: "livingLabs.labs.slovakia.imageAlt",
    image: media.livingLabs.slovakia,
    placement: "top-end" satisfies LabPlacement,
  },
  {
    id: "france" satisfies LabId,
    countryKey: "livingLabs.labs.france.country",
    platformKey: "livingLabs.labs.france.platform",
    descriptionKey: "livingLabs.labs.france.description",
    imageAltKey: "livingLabs.labs.france.imageAlt",
    image: media.livingLabs.france,
    placement: "top-start" satisfies LabPlacement,
  },
  {
    id: "spain" satisfies LabId,
    countryKey: "livingLabs.labs.spain.country",
    platformKey: "livingLabs.labs.spain.platform",
    descriptionKey: "livingLabs.labs.spain.description",
    imageAltKey: "livingLabs.labs.spain.imageAlt",
    image: media.livingLabs.spain,
    placement: "bottom-end" satisfies LabPlacement,
  },
] as const;
