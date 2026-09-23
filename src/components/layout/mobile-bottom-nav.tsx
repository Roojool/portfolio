"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 flex sm:hidden items-center gap-1 rounded-full border border-border bg-background/90 backdrop-blur-md px-3 py-1.5 shadow-lg font-mono text-xs"
    >
      {MAIN_NAV.map(({ title, href }) => {
        const isActive =
          href === "/"
            ? pathname === "/"
            : pathname?.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              isActive
                ? "bg-foreground text-background font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
