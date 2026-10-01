import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import DottedMap from "dotted-map";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = resolve(root, "src/content/europeDots.ts");

// Full country shapes, not a rectangle sliced through them. The box only
// has to contain every country below; dots outside a country are never drawn.
const countries = [
  "EST", "LVA", "LTU", "NLD", "BEL",
  "LUX", "FRA", "ESP", "PRT", "DEU", "POL", "CZE", "SVK", "AUT", "CHE", "ITA",
  "SVN", "HRV", "HUN", "ROU", "BGR", "GRC", "ALB", "MKD", "MNE", "SRB", "BIH",
  "UKR", "MDA", "BLR", "MLT",
];

const region = {
  lat: { min: 34, max: 72 },
  lng: { min: -12, max: 42 },
};

const mapSettings = {
  height: 100,
  grid: "diagonal",
  countries,
  region,
};

const labs = [
  { id: "romania", iso: "ROU", lat: 45.94, lng: 24.97 },
  { id: "slovakia", iso: "SVK", lat: 48.67, lng: 19.7 },
  { id: "france", iso: "FRA", lat: 46.23, lng: 2.21 },
  { id: "spain", iso: "ESP", lat: 40.46, lng: -3.75 },
];

function round(value) {
  return Math.round(value * 100) / 100;
}

function pointKey(point) {
  return `${round(point.x)},${round(point.y)}`;
}

const base = new DottedMap(mapSettings);
const tagged = new Map();

for (const lab of labs) {
  const countryMap = new DottedMap({
    ...mapSettings,
    countries: [lab.iso],
  });

  for (const point of countryMap.getPoints()) {
    tagged.set(pointKey(point), lab.id);
  }
}

const dots = base.getPoints().map((point) => {
  const x = round(point.x);
  const y = round(point.y);
  return [x, y, tagged.get(`${x},${y}`) ?? null];
});

const pins = {};

for (const lab of labs) {
  const pin = base.getPin({ lat: lab.lat, lng: lab.lng });
  const highlighted = dots.some((dot) => dot[2] === lab.id);
  if (!pin || !highlighted) {
    throw new Error(`No pin or country dots for ${lab.id}`);
  }
  pins[lab.id] = { x: round(pin.x), y: round(pin.y) };
}

const pad = 1.5;
const minX = Math.min(...dots.map((dot) => dot[0])) - pad;
const minY = Math.min(...dots.map((dot) => dot[1])) - pad;
const maxX = Math.max(...dots.map((dot) => dot[0])) + pad;
const maxY = Math.max(...dots.map((dot) => dot[1])) + pad;

for (const dot of dots) {
  dot[0] = round(dot[0] - minX);
  dot[1] = round(dot[1] - minY);
}

for (const pin of Object.values(pins)) {
  pin.x = round(pin.x - minX);
  pin.y = round(pin.y - minY);
}

const width = round(maxX - minX);
const height = round(maxY - minY);

const file = `export const labIds = ["romania", "slovakia", "france", "spain"] as const;

export type LabId = (typeof labIds)[number];

export type EuropeDot = readonly [x: number, y: number, lab: LabId | null];

export const europeDots = {
  width: ${width},
  height: ${height},
  dots: ${JSON.stringify(dots)} as EuropeDot[],
  pins: ${JSON.stringify(pins, null, 2)} as Record<LabId, { x: number; y: number }>,
} satisfies {
  width: number;
  height: number;
  dots: EuropeDot[];
  pins: Record<LabId, { x: number; y: number }>;
};
`;

writeFileSync(outPath, file);
console.log(
  `Wrote ${dots.length} dots (${tagged.size} highlighted) to ${outPath}`,
);
