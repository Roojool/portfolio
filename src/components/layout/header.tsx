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
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-[var(--header-height)] items-center gap-2 border-x screen-line-bottom-border screen-line-top-border pr-2 pl-4 sm:gap-4 md:max-w-3xl">
        {/* Brand Mark */}
        <Link href="/" aria-label="Rujul Talekar Home" className="flex items-center">
          <RujulMark className="h-6 w-12 shrink-0 text-foreground transition-opacity hover:opacity-80" />
        </Link>

        <div className="flex-1" />

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-4 text-xs sm:text-sm font-medium tracking-wide">
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
                  "transition-colors hover:text-foreground",
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        {/* Separator & Controls */}
        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="mr-1.5 sm:mr-2 h-4 sm:h-5 self-center"
          />

          <CommandMenu />

          <Separator
            orientation="vertical"
            className="mx-1.5 sm:mx-2 h-4 sm:h-5 self-center"
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
            className="mx-1.5 sm:mx-2 h-4 sm:h-5 self-center"
          />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
