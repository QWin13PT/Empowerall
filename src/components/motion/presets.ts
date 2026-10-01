import { motionConfig } from "@/config/motion";

export const revealPresets = {
  hidden: { opacity: 0, y: motionConfig.distance },
  visible: { opacity: 1, y: 0 },
} as const;

export const revealTransition = {
  duration: motionConfig.duration.reveal,
  ease: motionConfig.easeOut,
} as const;

export const heroTransition = {
  duration: motionConfig.duration.enter,
  ease: motionConfig.easeOut,
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionConfig.stagger,
    },
  },
} as const;

export const iconSwapTransition = motionConfig.spring;
