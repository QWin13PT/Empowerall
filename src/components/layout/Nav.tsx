import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/config/site";
import { cn } from "@/lib/cn";

type NavProps = {
  className?: string;
};

export async function Nav({ className }: NavProps) {
  const t = await getTranslations();

  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className="min-h-hit rounded-pill text-body text-text duration-fast hover:bg-bg-subtle hover:text-brand group-data-[surface=clear]/header:text-text-on-media group-data-[surface=clear]/header:hover:bg-text-on-media/10 group-data-[surface=clear]/header:hover:text-text-on-media inline-flex items-center px-3 font-sans font-medium transition-[color,background-color] ease-out"
          >
            {t(item.labelKey)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
