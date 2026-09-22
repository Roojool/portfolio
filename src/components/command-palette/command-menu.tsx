"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Home,
  FlaskConical,
  FolderGit2,
  BookOpen,
  PenTool,
  Award,
  User,
  Sun,
  Moon,
  ExternalLink,
  Search,
  Command as CommandIcon
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { socialLinks } from "@/data/links";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono text-zinc-400 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 hover:text-zinc-200 border border-zinc-800 rounded transition-colors"
        aria-label="Open command palette"
      >
        <Search className="w-3 h-3 text-zinc-500" />
        <span>Search commands...</span>
        <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-zinc-400 bg-zinc-800/80 rounded border border-zinc-700/60">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/70 backdrop-blur-sm p-4 animate-in fade-in-0">
          <div
            className="fixed inset-0"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-lg bg-zinc-950 dark:bg-zinc-950 light:bg-white border border-zinc-800 rounded-lg shadow-2xl overflow-hidden z-10">
            <Command className="w-full">
              <div className="flex items-center border-b border-zinc-800 px-3">
                <Search className="w-4 h-4 text-zinc-500 mr-2 shrink-0" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full h-11 bg-transparent text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setOpen(false)}
                  className="text-xs text-zinc-500 hover:text-zinc-300 font-mono px-1.5 py-0.5 rounded border border-zinc-800"
                >
                  ESC
                </button>
              </div>

              <Command.List className="max-h-80 overflow-y-auto p-2 text-xs">
                <Command.Empty className="py-6 text-center text-zinc-500">
                  No matching commands found.
                </Command.Empty>

                <Command.Group
                  heading="Navigation"
                  className="px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-500"
                >
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <Home className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Home</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/research"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Research Dossier</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/projects"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Engineering Projects</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/publications"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Publications & Index</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/writing"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <PenTool className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Writing & Field Notes</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/about"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5 text-zinc-400" />
                    <span>About & Academic Dossier</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="External Links"
                  className="mt-2 px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-500"
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(socialLinks.github.url, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>GitHub: {socialLinks.github.username}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-600 ml-auto" />
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(socialLinks.linkedin.url, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-zinc-600 ml-auto" />
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(socialLinks.orcid.url, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>ORCID: {socialLinks.orcid.id}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-600 ml-auto" />
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Preferences"
                  className="mt-2 px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-500"
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      )
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 cursor-pointer"
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="w-3.5 h-3.5 text-zinc-400" />
                    ) : (
                      <Moon className="w-3.5 h-3.5 text-zinc-400" />
                    )}
                    <span>
                      Toggle Theme ({resolvedTheme === "dark" ? "Light" : "Dark"})
                    </span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between border-t border-zinc-800 px-3 py-2 text-[10px] text-zinc-500 font-mono">
                <span>Navigate with ↑↓ · Select with Enter</span>
                <span className="flex items-center gap-1">
                  <CommandIcon className="w-3 h-3" /> Palette
                </span>
              </div>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
