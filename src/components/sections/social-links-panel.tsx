import * as React from "react";
import { Rss, Fingerprint } from "lucide-react";
import { Panel, PanelContent } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/components/handwritten-note";
import { GithubIcon, LinkedinIcon, GoogleScholarIcon } from "@/components/ui/icons";
import { SITE_INFO } from "@/config/site";

const SOCIAL_ITEMS = [
  {
    title: "GitHub",
    handle: "@Roojool",
    href: SITE_INFO.githubUrl,
    icon: <GithubIcon className="size-4" />,
  },
  {
    title: "LinkedIn",
    handle: "rujul-talekar",
    href: SITE_INFO.linkedinUrl,
    icon: <LinkedinIcon className="size-4" />,
  },
  {
    title: "Google Scholar",
    handle: "RWQN9K8AAAAJ",
    href: SITE_INFO.scholarUrl,
    icon: <GoogleScholarIcon className="size-4" />,
  },
  {
    title: "ORCID",
    handle: SITE_INFO.orcid,
    href: SITE_INFO.orcidUrl,
    icon: <Fingerprint className="size-4" />,
  },
  {
    title: "RSS Feed",
    handle: "feed.xml",
    href: "/feed.xml",
    icon: <Rss className="size-4" />,
  },
];

export function SocialLinksPanel() {
  return (
    <Panel className="relative">
      <h2 className="sr-only">Social links</h2>

      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {SOCIAL_ITEMS.map((item) => (
            <li key={item.title}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      className="text-foreground/80 shadow-none hover:text-foreground hover:bg-accent-muted [&_svg:not([class*='size-'])]:size-4"
                      variant="outline"
                      size="icon-sm"
                      nativeButton={false}
                      render={
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          aria-label={`${item.title} (${item.handle})`}
                        >
                          {item.icon}
                          <span className="sr-only">{item.title}</span>
                        </a>
                      }
                    />
                  }
                />
                <TooltipContent>
                  {item.title} ({item.handle})
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </PanelContent>

      <HandwrittenNote className="-top-3.5 right-full mr-4 hidden w-28 flex-col items-end lg:flex">
        <span className="-rotate-6 whitespace-nowrap">research traces</span>
        <HandwrittenArrow className="size-7 translate-x-3 -scale-x-100 -rotate-6" />
      </HandwrittenNote>
    </Panel>
  );
}
