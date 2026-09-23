import * as React from "react";
import { Briefcase, MapPin, Link as LinkIcon } from "lucide-react";
import { Panel, PanelContent } from "@/components/ui/panel";
import { GoogleScholarIcon } from "@/components/ui/icons";
import {
  IntroItem,
  IntroItemIcon,
  IntroItemContent,
  IntroItemLink,
  CurrentLocalTimeItem,
} from "./overview-items";
import { SITE_INFO } from "@/config/site";

export function OverviewPanel() {
  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {/* 1. Role & Affiliation */}
        <IntroItem>
          <IntroItemIcon>
            <Briefcase className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <span>Artificial Intelligence Researcher · ACM</span>
          </IntroItemContent>
        </IntroItem>

        {/* 2. Location */}
        <IntroItem>
          <IntroItemIcon>
            <MapPin className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href="https://www.google.com/maps/search/?api=1&query=Pune+District%2C+Maharashtra%2C+India"
              aria-label="Location: Pune District, Maharashtra, India"
            >
              Pune District, Maharashtra, India
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        {/* 3. Current Local Time */}
        <CurrentLocalTimeItem timeZone="Asia/Kolkata" />

        {/* 4. Google Scholar */}
        <IntroItem>
          <IntroItemIcon>
            <GoogleScholarIcon className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={SITE_INFO.scholarUrl}
              aria-label="Google Scholar Profile"
            >
              Google Scholar
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        {/* 5. Portfolio Site URL */}
        <IntroItem className="sm:col-span-2">
          <IntroItemIcon>
            <LinkIcon className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={SITE_INFO.url}
              aria-label={`Personal website: ${SITE_INFO.domain}`}
            >
              {SITE_INFO.domain}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-2.25 border-r border-dashed border-line max-sm:hidden" />
    </Panel>
  );
}
