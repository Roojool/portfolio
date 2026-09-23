import * as React from "react";
import { Rss, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Panel, PanelContent } from "@/components/ui/panel";
import { SITE_INFO } from "@/config/site";

export function SocialLinksPanel() {
  const links = [
    {
      name: "GitHub",
      href: SITE_INFO.githubUrl,
      icon: <GithubIcon className="size-4" />,
      label: "GitHub (@Roojool)",
    },
    {
      name: "LinkedIn",
      href: SITE_INFO.linkedinUrl,
      icon: <LinkedinIcon className="size-4" />,
      label: "LinkedIn (/in/rujul-talekar)",
    },
    {
      name: "ORCID",
      href: SITE_INFO.orcidUrl,
      icon: <Award className="size-4" />,
      label: `ORCID (${SITE_INFO.orcid})`,
    },
    {
      name: "RSS",
      href: "/feed.xml",
      icon: <Rss className="size-4" />,
      label: "RSS Feed",
    },
  ];

  return (
    <Panel className="screen-line-top-none screen-line-bottom-none">
      <h2 className="sr-only">Social Links</h2>

      <PanelContent className="flex items-center justify-between">
        <ul className="flex flex-wrap gap-2">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                title={item.label}
                className="flex size-8 sm:size-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Original side annotation */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80 select-none">
          <span>research traces</span>
          <span aria-hidden>→</span>
        </div>
      </PanelContent>
    </Panel>
  );
}
