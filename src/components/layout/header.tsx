"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RujulMark } from "@/components/brand/brand-marks";
import { CommandMenu } from "@/components/command-palette/command-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "@/components/ui/icons";
import { MAIN_NAV, SITE_INFO } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header data-site-header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-[var(--header-height)] items-center gap-2 border-x screen-line-bottom-border screen-line-top-border pr-2 pl-4 sm:gap-4 md:max-w-3xl">
        <Link href="/" aria-label="Home" className="flex items-center">
          <span className="flex">
            <RujulMark className="h-6 w-12 shrink-0 text-foreground transition-opacity hover:opacity-80" />
          </span>
        </Link>

        <div className="flex-1" />

        <nav className="max-sm:hidden flex items-center gap-4">
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
                  "text-sm font-medium tracking-wide text-muted-foreground transition-[color] hover:text-foreground aria-[current=page]:text-foreground",
                  isActive && "text-foreground font-semibold"
                )}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center max-sm:*:data-[slot=command-menu-trigger]:hidden">
          <Separator
            orientation="vertical"
            className="mr-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />

          <CommandMenu />

          <Separator
            orientation="vertical"
            className="mx-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />

          <a
            href={SITE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-5 data-vertical:self-center"
          />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
