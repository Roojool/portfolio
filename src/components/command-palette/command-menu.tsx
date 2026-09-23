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
  Command as CommandIcon,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { SITE_INFO } from "@/config/site";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
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
      <Button
        data-slot="command-menu-trigger"
        className="gap-1.5 border-none px-1.5 text-muted-foreground select-none cursor-pointer"
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Search and commands (Ctrl K)"
      >
        <Search className="size-4" />
        <span className="font-sans text-sm/4 font-medium sm:hidden">Search…</span>
        <KbdGroup className="hidden gap-0.75 sm:flex">
          <Kbd>Ctrl</Kbd>
          <Kbd className="w-5 min-w-auto">K</Kbd>
        </KbdGroup>
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-background/80 backdrop-blur-sm p-4 animate-in fade-in-0">
          <div
            className="fixed inset-0"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-lg bg-card border border-border rounded-lg shadow-2xl overflow-hidden z-10 font-sans">
            <Command className="w-full">
              <div className="flex items-center border-b border-border px-3">
                <Search className="size-4 text-muted-foreground mr-2 shrink-0" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full h-11 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xs text-muted-foreground hover:text-foreground font-mono px-1.5 py-0.5 rounded border border-border cursor-pointer"
                >
                  ESC
                </button>
              </div>

              <Command.List className="max-h-80 overflow-y-auto p-2 text-xs">
                <Command.Empty className="py-6 text-center text-muted-foreground">
                  No matching commands found.
                </Command.Empty>

                <Command.Group
                  heading="Navigation"
                  className="px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground"
                >
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <Home className="size-3.5 text-muted-foreground" />
                    <span>Home</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/research"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <FlaskConical className="size-3.5 text-muted-foreground" />
                    <span>Research Dossier</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/projects"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <FolderGit2 className="size-3.5 text-muted-foreground" />
                    <span>Engineering Projects</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/publications"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <BookOpen className="size-3.5 text-muted-foreground" />
                    <span>Publications & Index</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/writing"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <PenTool className="size-3.5 text-muted-foreground" />
                    <span>Writing & Field Notes</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/about"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <User className="size-3.5 text-muted-foreground" />
                    <span>About & Academic Dossier</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/resume"))}
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <FileText className="size-3.5 text-muted-foreground" />
                    <span>Resume / CV</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="External Links"
                  className="mt-2 px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground"
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(SITE_INFO.githubUrl, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <GithubIcon className="size-3.5 text-muted-foreground" />
                    <span>GitHub: @{SITE_INFO.githubUsername}</span>
                    <ExternalLink className="size-3 text-muted-foreground ml-auto" />
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(SITE_INFO.linkedinUrl, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <LinkedinIcon className="size-3.5 text-muted-foreground" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="size-3 text-muted-foreground ml-auto" />
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(SITE_INFO.xUrl, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <XIcon className="size-3.5 text-muted-foreground" />
                    <span>X: {SITE_INFO.xHandle}</span>
                    <ExternalLink className="size-3 text-muted-foreground ml-auto" />
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(SITE_INFO.scholarUrl, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <BookOpen className="size-3.5 text-muted-foreground" />
                    <span>Google Scholar Profile</span>
                    <ExternalLink className="size-3 text-muted-foreground ml-auto" />
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(SITE_INFO.orcidUrl, "_blank"))
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    <Award className="size-3.5 text-muted-foreground" />
                    <span>ORCID: {SITE_INFO.orcid}</span>
                    <ExternalLink className="size-3 text-muted-foreground ml-auto" />
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Preferences"
                  className="mt-2 px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground"
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      )
                    }
                    className="flex items-center gap-2 px-2.5 py-2 rounded text-foreground hover:bg-muted cursor-pointer"
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="size-3.5 text-muted-foreground" />
                    ) : (
                      <Moon className="size-3.5 text-muted-foreground" />
                    )}
                    <span>
                      Toggle Theme ({resolvedTheme === "dark" ? "Light" : "Dark"})
                    </span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between border-t border-border px-3 py-2 text-[10px] text-muted-foreground font-mono">
                <span>Navigate with ↑↓ · Select with Enter</span>
                <span className="flex items-center gap-1">
                  <CommandIcon className="size-3" /> Palette
                </span>
              </div>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
