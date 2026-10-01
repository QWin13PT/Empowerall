export const motionConfig = {
  duration: {
    fast: 0.15,
    base: 0.2,
    slow: 0.3,
    enter: 0.5,
    reveal: 0.7,
  },
  easeOut: [0.2, 0, 0, 1] as const,
  stagger: 0.1,
  distance: 24,
  spring: {
    type: "spring" as const,
    duration: 0.3,
    bounce: 0,
  },
  viewport: {
    once: true,
    margin: "-80px" as const,
  },
  parallax: {
    /**
     * How far the hero photo lags across the scroll that carries the hero
     * off screen, as a share of the hero height. The strip this uncovers
     * stays above the viewport, so the resting crop does not change.
     */
    heroDrift: "40%",
  },
} as const;
