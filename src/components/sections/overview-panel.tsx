import * as React from "react";
import { Briefcase, MapPin, FileText, Mail } from "lucide-react";
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
        {/* 1. Role: Col 1 Row 1 on desktop; Item 1 on mobile */}
        <IntroItem className="sm:col-start-1 sm:row-start-1">
          <IntroItemIcon>
            <Briefcase className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <span>Artificial Intelligence Researcher · </span>
            <IntroItemLink
              href="https://www.acm.org/"
              aria-label="Association for Computing Machinery (ACM)"
            >
              ACM
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        {/* 2. Location: Col 2 Row 1 on desktop; Item 2 on mobile */}
        <IntroItem className="sm:col-start-2 sm:row-start-1">
          <IntroItemIcon>
            <MapPin className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href="https://www.google.com/maps/search/?api=1&query=Pune%2C+India"
              aria-label="Location: Pune, India"
            >
              Pune, India
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        {/* 3. Current Local Time: Col 1 Row 2 on desktop; Item 3 on mobile */}
        <div className="sm:col-start-1 sm:row-start-2">
          <CurrentLocalTimeItem timeZone="Asia/Kolkata" />
        </div>

        {/* 4. Resume: Col 2 Row 2 on desktop; Item 4 on mobile */}
        <IntroItem className="sm:col-start-2 sm:row-start-2">
          <IntroItemIcon>
            <FileText className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink href="/resume" aria-label="View Resume">
              Resume
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        {/* 5. Email: Col 1 Row 3 on desktop; Item 5 on mobile */}
        <IntroItem className="sm:col-start-1 sm:row-start-3">
          <IntroItemIcon>
            <Mail className="size-4" />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={SITE_INFO.emailUrl}
              aria-label={`Email: ${SITE_INFO.email}`}
            >
              {SITE_INFO.email}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-2.25 border-r border-dashed border-line max-sm:hidden" />
    </Panel>
  );
}
