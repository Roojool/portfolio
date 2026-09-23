"use client";

import * as React from "react";
import { Briefcase, MapPin, Clock, Globe, Award } from "lucide-react";
import { Panel, PanelContent } from "@/components/ui/panel";
import { SITE_INFO } from "@/config/site";

export function OverviewPanel() {
  const [timeStr, setTimeStr] = React.useState<string>("12:00 PM");

  React.useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setTimeStr(formatter.format(now));
      } catch {
        setTimeStr("12:00 PM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="relative grid gap-x-4 gap-y-3 sm:grid-cols-2 text-sm font-sans">
        {/* Item 1: Role / Affiliation */}
        <div className="flex items-center gap-3">
          <Briefcase className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1 truncate">
            <span className="font-medium text-foreground">Research Intern</span>{" "}
            <span className="text-muted-foreground">· Vishwakarma Institute of Technology</span>
          </div>
        </div>

        {/* Item 2: Location */}
        <div className="flex items-center gap-3">
          <MapPin className="size-4 shrink-0 text-muted-foreground" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pune%2C+Maharashtra%2C+India"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground truncate"
          >
            Pune, Maharashtra, India
          </a>
        </div>

        {/* Item 3: Local Time */}
        <div className="flex items-center gap-3">
          <Clock className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1 truncate font-mono text-xs sm:text-sm">
            <span className="text-foreground tabular-nums">{timeStr}</span>{" "}
            <span className="text-muted-foreground">Asia/Kolkata</span>
          </div>
        </div>

        {/* Item 4: Portfolio URL */}
        <div className="flex items-center gap-3">
          <Globe className="size-4 shrink-0 text-muted-foreground" />
          <a
            href={SITE_INFO.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground truncate font-mono text-xs sm:text-sm"
          >
            portfolio-sigma-gray-12.vercel.app
          </a>
        </div>

        {/* Item 5: ORCID */}
        <div className="flex items-center gap-3 sm:col-span-2">
          <Award className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1 truncate text-xs sm:text-sm">
            <span className="text-muted-foreground mr-1.5 font-mono">ORCID:</span>
            <a
              href={SITE_INFO.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-foreground"
            >
              {SITE_INFO.orcid}
            </a>
          </div>
        </div>

        {/* Subtle dashed vertical center divider on desktop */}
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-1/2 border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />
      </PanelContent>
    </Panel>
  );
}
