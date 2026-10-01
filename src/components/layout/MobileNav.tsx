"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { useHeaderSurface } from "@/components/layout/HeaderShell";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { IconSwap } from "@/components/motion/IconSwap";
import { cn } from "@/lib/cn";

type MobileNavItem = {
  id: string;
  href: "/#about" | "/#approach" | "/#living-labs" | "/#partners";
  label: string;
};

type MobileNavProps = {
  items: readonly MobileNavItem[];
  openLabel: string;
  closeLabel: string;
  navLabel: string;
};

export function MobileNav({
  items,
  openLabel,
  closeLabel,
  navLabel,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const surface = useHeaderSurface();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    surface?.setMenuOpen(open);
  }, [open, surface]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onFocus = (event: FocusEvent) => {
      if (panel && !panel.contains(event.target as Node)) {
        event.preventDefault();
        focusable?.[0]?.focus();
      }
    };

    document.addEventListener("focusin", onFocus);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocus);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="size-hit rounded-pill text-text duration-fast hover:bg-bg-subtle active:scale-press group-data-[surface=clear]/header:text-text-on-media group-data-[surface=clear]/header:hover:bg-text-on-media/10 inline-flex items-center justify-center font-sans transition-[background-color,color,transform] ease-out"
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
      <div
        ref={panelRef}
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "top-header z-overlay border-border bg-bg fixed inset-x-0 border-t px-4 py-6 shadow-lg",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label={navLabel}>
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="min-h-hit text-heading-sm text-text duration-fast hover:bg-bg-subtle flex items-center rounded-lg px-3 font-sans font-medium transition-[background-color] ease-out"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
