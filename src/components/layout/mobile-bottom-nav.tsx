"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Research", href: "/research" },
  { title: "Projects", href: "/projects" },
  { title: "Publications", href: "/publications" },
  { title: "Writing", href: "/writing" },
];

export function MobileBottomNav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const handleOpenCommand = () => {
    // Dispatch Cmd+K event to trigger CommandMenu
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true })
    );
  };

  return (
    <>
      {/* Popover Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/50 backdrop-blur-xs sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Popover Menu Content */}
      {menuOpen && (
        <div className="fixed bottom-[calc(theme(spacing.14)+env(safe-area-inset-bottom,0))] left-1/2 z-50 w-48 -translate-x-1/2 rounded-xl border border-border bg-popover p-1 shadow-lg sm:hidden">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-accent font-medium text-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Floating Bottom Nav Pill */}
      <div
        className={cn(
          "fixed bottom-[calc(theme(spacing.2)+env(safe-area-inset-bottom,0))] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center rounded-xl bg-popover py-1 pr-1 pl-2.5 shadow-md ring-1 ring-foreground/10 sm:hidden dark:ring-foreground/20"
        )}
      >
        {/* Search / Command Trigger */}
        <button
          type="button"
          onClick={handleOpenCommand}
          className="flex items-center gap-2 px-1 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer select-none"
          aria-label="Open command palette"
        >
          <Search className="size-4" />
          <span className="text-xs">Search…</span>
        </button>

        <Separator
          orientation="vertical"
          className="mr-1 ml-2.5 data-vertical:h-6 data-vertical:self-center"
        />

        {/* 2-bar animated menu trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="group relative flex size-8 touch-manipulation flex-col items-center justify-center gap-1 rounded-lg hover:bg-accent cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform duration-200",
              menuOpen && "translate-y-0.75 rotate-45"
            )}
          />
          <span
            className={cn(
              "flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform duration-200",
              menuOpen && "-translate-y-0.75 -rotate-45"
            )}
          />
        </button>
      </div>
    </>
  );
}
