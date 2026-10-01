"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  labels: Record<Locale, string>;
  shortLabels: Record<Locale, string>;
  groupLabel: string;
  currentLabel: string;
  tone?: "default" | "inverse";
};

export function LanguageSwitcher({
  labels,
  shortLabels,
  groupLabel,
  currentLabel,
  tone = "default",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={cn(
          "min-h-hit min-w-hit rounded-pill text-body-sm duration-fast active:scale-press inline-flex items-center justify-center gap-1 px-3 font-sans font-semibold tracking-wide transition-[background-color,transform,color] ease-out",
          tone === "inverse"
            ? "text-text-inverse hover:bg-text-inverse/10"
            : "text-text hover:bg-bg-subtle group-data-[surface=clear]/header:text-text-on-media group-data-[surface=clear]/header:hover:bg-text-on-media/10",
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={menuId}
        aria-label={currentLabel}
        onClick={() => setOpen((value) => !value)}
      >
        {shortLabels[activeLocale]}
        <Icon
          icon={ChevronDown}
          size="sm"
          weight="semibold"
          className={cn(
            "duration-fast transition-transform ease-out",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label={groupLabel}
          className="z-overlay border-border bg-surface [&_a:focus-visible]:outline-focus-ring absolute end-0 top-full mt-1 min-w-40 rounded-lg border p-1 shadow-md"
        >
          {routing.locales.map((locale) => {
            const active = locale === activeLocale;

            return (
              <li key={locale} role="none">
                <Link
                  href={pathname}
                  locale={locale}
                  hrefLang={locale}
                  lang={locale === "pt-PT" ? "pt" : "en"}
                  role="option"
                  aria-selected={active}
                  className={cn(
                    "min-h-hit text-body-sm duration-fast flex items-center rounded-md px-3 font-sans font-medium transition-[background-color,color] ease-out",
                    active
                      ? "bg-brand text-brand-foreground"
                      : "text-text hover:bg-bg-subtle",
                  )}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    const hash = window.location.hash;
                    router.replace(`${pathname}${hash}`, { locale });
                  }}
                >
                  {labels[locale]}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
