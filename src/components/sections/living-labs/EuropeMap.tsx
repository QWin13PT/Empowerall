import { europeDots } from "@/content/europeDots";
import { livingLabs } from "@/content/livingLabs";

const DOT_RADIUS = 0.34;
const PIN_RADIUS = 0.48;
const PIN_RING = 1.15;
const PIN_STROKE = 0.2;

type EuropeMapProps = {
  label: string;
};

export function EuropeMap({ label }: EuropeMapProps) {
  const { width, height, dots, pins } = europeDots;

  return (
    <svg
      viewBox={`-1 -1 ${width + 2} ${height + 2}`}
      role="img"
      aria-label={label}
      className="h-auto w-full"
    >
      {dots.map(([x, y, lab]) => (
        <circle
          key={`${x},${y}`}
          cx={x}
          cy={y}
          r={DOT_RADIUS}
          className={lab ? "fill-map-dot-active" : "fill-map-dot"}
        />
      ))}
      {livingLabs.map((lab) => {
        const pin = pins[lab.id];

        return (
          <g key={lab.id}>
            <circle
              cx={pin.x}
              cy={pin.y}
              r={PIN_RING}
              className="fill-bg stroke-accent"
              strokeWidth={PIN_STROKE}
            />
            <circle
              cx={pin.x}
              cy={pin.y}
              r={PIN_RADIUS}
              className="fill-accent"
            />
          </g>
        );
      })}
    </svg>
  );
}
