import { europeDots } from "@/content/europeDots";
import { livingLabs, type LabPlacement } from "@/content/livingLabs";

type Point = {
  x: number;
  y: number;
};

const PIN_RING = 1.15;
const LINE_START_INSET = PIN_RING + 0.2;
const LINE_END_INSET = 0.4;
// --spacing-map-pin at --container-map, expressed in the map viewBox.
const MAP_WIDTH_REM = 36;
const PIN_GAP_REM = 3;

function cardCorner(
  anchor: Point,
  placement: LabPlacement,
  gap: number,
): Point {
  return {
    x: anchor.x + (placement.endsWith("end") ? gap : -gap),
    y: anchor.y + (placement.startsWith("bottom") ? gap : -gap),
  };
}

function insetSegment(
  from: Point,
  to: Point,
  startInset: number,
  endInset: number,
): { start: Point; end: Point } {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;

  return {
    start: {
      x: from.x + (dx / length) * startInset,
      y: from.y + (dy / length) * startInset,
    },
    end: {
      x: to.x - (dx / length) * endInset,
      y: to.y - (dy / length) * endInset,
    },
  };
}

export function MapConnector() {
  const { width, height, pins, cardAnchors } = europeDots;
  const gap = (PIN_GAP_REM / MAP_WIDTH_REM) * width;

  return (
    <svg
      viewBox={`-1 -1 ${width + 2} ${height + 2}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block"
    >
      {livingLabs.map((lab) => {
        const pin = pins[lab.id];
        const card = cardCorner(cardAnchors[lab.id], lab.placement, gap);
        const { start, end } = insetSegment(
          pin,
          card,
          LINE_START_INSET,
          LINE_END_INSET,
        );

        return (
          <line
            key={lab.id}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            strokeLinecap="round"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            className="stroke-accent/70"
          />
        );
      })}
    </svg>
  );
}
