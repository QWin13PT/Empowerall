import { Bird, Droplets, Layers, Map, Users } from "lucide-react";

export const monitoredDimensions = [
  {
    id: "soil",
    icon: Layers,
    labelKey: "observation.monitored.items.soil",
  },
  {
    id: "biodiversity",
    icon: Bird,
    labelKey: "observation.monitored.items.biodiversity",
  },
  {
    id: "water",
    icon: Droplets,
    labelKey: "observation.monitored.items.water",
  },
  {
    id: "landUse",
    icon: Map,
    labelKey: "observation.monitored.items.landUse",
  },
  {
    id: "practices",
    icon: Users,
    labelKey: "observation.monitored.items.practices",
  },
] as const;
