import { cn } from "@/lib/cn";

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

type SocialName = "linkedin" | "facebook" | "instagram";

type SocialIconProps = {
  name: SocialName;
  size?: keyof typeof iconSizes;
  className?: string;
};

function LinkedInMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 9.5V18M6.5 6.5v.01M10.5 18v-5.2c0-1.6 1.3-2.3 2.4-2.3 1 0 2.1.6 2.1 2.3V18M17.5 18v-5.5c0-3-1.6-4-3.7-4-1.2 0-2.1.4-2.7 1.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 8h2.5V5h-2.5c-2.5 0-4 1.6-4 4v2H8v3h2v7h3v-7h2.3l.7-3H13V9c0-.6.4-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

const marks = {
  linkedin: LinkedInMark,
  facebook: FacebookMark,
  instagram: InstagramMark,
} as const;

export function SocialIcon({ name, size = "md", className }: SocialIconProps) {
  const Mark = marks[name];
  return (
    <span className={cn("inline-flex shrink-0", className)}>
      <Mark size={iconSizes[size]} />
    </span>
  );
}
