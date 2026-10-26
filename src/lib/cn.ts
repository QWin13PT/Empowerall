import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-family": [{ font: ["body"] }],
      h: [{ h: ["wordmark"] }],
      w: [{ w: ["wordmark", "map-card", "glass-card"] }],
      "max-w": [{ "max-w": ["glass-card", "map"] }],
      "outline-color": [
        { outline: ["image-outline", "image-outline-inverse"] },
      ],
      "font-size": [
        {
          text: [
            "display-xl",
            "display-lg",
            "display-md",
            "heading-lg",
            "heading-md",
            "heading-sm",
            "body-lg",
            "body",
            "body-sm",
            "eyebrow",
            "stat",
            "stat-range",
            "wordmark",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
