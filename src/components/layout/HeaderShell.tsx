"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type HeaderSurfaceContextValue = {
  setMenuOpen: (open: boolean) => void;
};

const HeaderSurfaceContext = createContext<HeaderSurfaceContextValue | null>(
  null,
);

export function useHeaderSurface() {
  return useContext(HeaderSurfaceContext);
}

type HeaderShellProps = {
  children: React.ReactNode;
};

const HEADER_THRESHOLD = 64;
const DIRECTION_DELTA = 4;

export function HeaderShell({ children }: HeaderShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpenState] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [focused, setFocused] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  const setMenuOpen = useCallback((open: boolean) => {
    setMenuOpenState(open);
  }, []);
  const surface = useMemo(() => ({ setMenuOpen }), [setMenuOpen]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = lastY.current;
    lastY.current = y;
    const nextAtTop = y <= HEADER_THRESHOLD;
    setAtTop((current) => (current === nextAtTop ? current : nextAtTop));

    if (nextAtTop) {
      setHidden((current) => (current ? false : current));
      return;
    }

    const delta = y - previous;
    if (Math.abs(delta) < DIRECTION_DELTA) {
      return;
    }

    const nextHidden = delta > 0;
    setHidden((current) => (current === nextHidden ? current : nextHidden));
  });

  const clear = isHome && atTop && !menuOpen;
  const isHidden = hidden && !menuOpen && !focused && !atTop;

  return (
    <HeaderSurfaceContext value={surface}>
      {isHome ? null : <div className="h-header" aria-hidden="true" />}
      <header
        className={cn(
          "group/header duration-slow fixed inset-x-0 top-0 transition-[translate,background-color,color] ease-out motion-reduce:transition-none",
          menuOpen ? "z-modal" : "z-sticky",
          clear || menuOpen ? "bg-transparent" : "bg-bg",
          isHidden && "-translate-y-full",
          "[&_a:focus-visible]:outline-focus-ring [&_button:focus-visible]:outline-focus-ring",
          "data-[surface=clear]:[&_a:focus-visible]:outline-focus-ring-inverse",
          "data-[surface=clear]:[&_button:focus-visible]:outline-focus-ring-inverse",
        )}
        data-surface={clear ? "clear" : "solid"}
        data-menu={menuOpen ? "open" : undefined}
        data-hidden={isHidden ? "true" : undefined}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          const next = event.relatedTarget;
          if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
            setFocused(false);
          }
        }}
      >
        {children}
      </header>
    </HeaderSurfaceContext>
  );
}
