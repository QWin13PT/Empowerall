"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useLenis } from "lenis/react";
import { useHeaderSurface } from "@/components/layout/HeaderShell";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { IconSwap } from "@/components/motion/IconSwap";
import { motionConfig } from "@/config/motion";
import { navItems } from "@/config/site";
import { cn } from "@/lib/cn";

type MobileNavItem = {
  id: string;
  href: (typeof navItems)[number]["href"];
  label: string;
};

type MobileNavProps = {
  items: readonly MobileNavItem[];
  openLabel: string;
  closeLabel: string;
  navLabel: string;
};

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function MobileNav({
  items,
  openLabel,
  closeLabel,
  navLabel,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    subscribe,
    clientSnapshot,
    serverSnapshot,
  );
  const surface = useHeaderSurface();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    surface?.setMenuOpen(open);
  }, [open, surface]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 64rem)");
    const onChange = () => {
      if (media.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const header = buttonRef.current?.closest("header");

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      if (
        header?.querySelector('[aria-haspopup="listbox"][aria-expanded="true"]')
      ) {
        return;
      }
      setOpen(false);
      buttonRef.current?.focus();
    };

    const onFocus = (event: FocusEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || header?.contains(target)) {
        return;
      }
      event.preventDefault();
      buttonRef.current?.focus();
    };

    const onPointer = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      if (header?.contains(target) && target.closest("a")) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("click", onPointer);
    document.body.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", onPointer);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          "size-hit rounded-pill duration-fast active:scale-press inline-flex items-center justify-center font-sans transition-[background-color,color,transform] ease-out",
          open
            ? "bg-bg-inverse text-text-on-media hover:bg-surface-inverse focus-visible:outline-focus-ring-inverse"
            : "text-text hover:bg-bg-subtle group-data-[surface=clear]/header:text-text-on-media group-data-[surface=clear]/header:hover:bg-text-on-media/10",
        )}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <IconSwap
          active={open}
          on={<Icon icon={X} weight="semibold" />}
          off={<Icon icon={Menu} weight="semibold" />}
        />
      </button>
      {mounted
        ? createPortal(
            <AnimatePresence initial={false}>
              {open ? (
                <m.div
                  ref={panelRef}
                  id="mobile-nav"
                  role="dialog"
                  aria-modal="true"
                  aria-label={navLabel}
                  className="bg-bg-subtle z-overlay pt-header fixed inset-0 flex h-dvh flex-col overscroll-contain lg:hidden"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{
                    x: "100%",
                    transition: {
                      duration: motionConfig.duration.base,
                      ease: motionConfig.easeOut,
                    },
                  }}
                  transition={{
                    duration: motionConfig.duration.slow,
                    ease: motionConfig.easeOut,
                  }}
                >
                  <nav
                    aria-label={navLabel}
                    className="flex-1 overflow-y-auto overscroll-contain"
                  >
                    <Container width="wide" className="py-stack-md">
                      <ul className="gap-stack-md flex flex-col">
                        {items.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              className="min-h-hit text-heading-lg text-text duration-fast hover:bg-bg flex items-center rounded-lg px-3 py-2 font-sans font-medium transition-[background-color] ease-out"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Container>
                  </nav>
                </m.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
