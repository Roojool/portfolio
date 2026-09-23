import * as React from "react";
import { Briefcase, MapPin, Link as LinkIcon, Fingerprint } from "lucide-react";
import { Panel, PanelContent } from "@/components/ui/panel";
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
        {/* Role & Affiliation */}
        <IntroItem>
          <IntroItemIcon>
            <Briefcase />
          </IntroItemIcon>
          <IntroItemContent>
            <span>Research Intern · VIT Pune</span>
          </IntroItemContent>
        </IntroItem>

        {/* Location */}
        <IntroItem>
          <IntroItemIcon>
            <MapPin />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href="https://www.google.com/maps/search/?api=1&query=Pune%2C+Maharashtra%2C+India"
              aria-label="Location: Pune, Maharashtra, India"
            >
              Pune, Maharashtra, India
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        {/* Current Local Time */}
        <CurrentLocalTimeItem timeZone="Asia/Kolkata" />

        {/* Portfolio Site URL */}
        <IntroItem>
          <IntroItemIcon>
            <LinkIcon />
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

        {/* Verified ORCID */}
        <IntroItem>
          <IntroItemIcon>
            <Fingerprint />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={SITE_INFO.orcidUrl}
              aria-label={`ORCID: ${SITE_INFO.orcid}`}
            >
              ORCID: {SITE_INFO.orcid}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-2.25 border-r border-dashed border-line max-sm:hidden" />
    </Panel>
  );
}
