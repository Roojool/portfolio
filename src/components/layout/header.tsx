"use client";

import * as React from "react";
import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CommandMenu } from "@/components/command-palette/command-menu";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Projects", href: "/#projects" },
  { label: "Publications", href: "/#publications" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-white/80 backdrop-blur-md transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Wordmark />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-zinc-400 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <CommandMenu />
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 dark:bg-zinc-950/95 light:bg-white/95 px-4 py-4 space-y-3 font-mono text-xs animate-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-300 hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-4 text-zinc-500">
            <Link href="/research" onClick={() => setMobileMenuOpen(false)}>
              All Research
            </Link>
            <Link href="/writing" onClick={() => setMobileMenuOpen(false)}>
              All Writing
            </Link>
            <Link href="/llms.txt">llms.txt</Link>
          </div>
        </div>
      )}
    </header>
  );
}
