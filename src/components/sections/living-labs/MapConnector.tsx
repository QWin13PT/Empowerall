import type { LabPlacement } from "@/content/livingLabs";
import { cn } from "@/lib/cn";

type Point = {
  x: number;
  y: number;
};

const pinCorner: Record<LabPlacement, Point> = {
  "top-start": { x: 10, y: 10 },
  "bottom-start": { x: 10, y: 0 },
  "top-end": { x: 0, y: 10 },
  "bottom-end": { x: 0, y: 0 },
};

const cardCorner: Record<LabPlacement, Point> = {
  "top-start": { x: 0, y: 0 },
  "bottom-start": { x: 0, y: 10 },
  "top-end": { x: 10, y: 0 },
  "bottom-end": { x: 10, y: 10 },
};

const anchorClass: Record<LabPlacement, string> = {
  "top-start": "end-0 bottom-0",
  "bottom-start": "end-0 top-0",
  "top-end": "start-0 bottom-0",
  "bottom-end": "start-0 top-0",
};

function pullToward(from: Point, to: Point, amount: number): Point {
  return {
    x: from.x + (to.x - from.x) * amount,
    y: from.y + (to.y - from.y) * amount,
  };
}

function mirrorX(point: Point): Point {
  return { x: 10 - point.x, y: point.y };
}

type MapConnectorProps = {
  placement: LabPlacement;
};

export function MapConnector({ placement }: MapConnectorProps) {
  const pin = pinCorner[placement];
  const card = cardCorner[placement];
  const start = pullToward(pin, card, 0.28);
  const end = pullToward(pin, card, 1.22);
  const mirroredPin = mirrorX(pin);
  const mirroredCard = mirrorX(card);
  const mirroredStart = pullToward(mirroredPin, mirroredCard, 0.28);
  const mirroredEnd = pullToward(mirroredPin, mirroredCard, 1.22);

  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={cn(
        "size-map-pin pointer-events-none absolute hidden overflow-visible lg:block",
        anchorClass[placement],
      )}
    >
      <ConnectorLine from={start} to={end} className="stroke-accent/70 rtl:hidden" />
      <ConnectorLine
        from={mirroredStart}
        to={mirroredEnd}
        className="stroke-accent/70 hidden rtl:block"
      />
    </svg>
  );
}

function ConnectorLine({
  from,
  to,
  className,
}: {
  from: Point;
  to: Point;
  className: string;
}) {
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      strokeLinecap="round"
      strokeWidth="1.5"
      vectorEffect="non-scaling-stroke"
      className={className}
    />
  );
}
