"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
