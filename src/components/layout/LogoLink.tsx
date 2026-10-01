"use client";

import { Link, usePathname } from "@/i18n/navigation";

type LogoLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function LogoLink({ children, className }: LogoLinkProps) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <a href="#top" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href="/" className={className}>
      {children}
    </Link>
  );
}
