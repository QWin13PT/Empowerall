"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { motionConfig } from "@/config/motion";

type HeroBackgroundProps = {
  src: string;
  alt: string;
};

export function HeroBackground({ src, alt }: HeroBackgroundProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", motionConfig.parallax.heroDrift],
  );

  return (
    <div ref={frameRef} className="absolute inset-0 overflow-hidden">
      <m.div className="absolute inset-0" style={{ y: reduced ? 0 : y }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover"
        />
      </m.div>
    </div>
  );
}
