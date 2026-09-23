"use client";

import * as React from "react";
import { useId, useState, useEffect } from "react";
import { InkFilter } from "@/components/ink-filter";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/ui/panel";

function getGreeting(): string {
  try {
    const kolkataHourStr = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      hour12: false,
    }).format(new Date());
    const hour = parseInt(kolkataHourStr, 10);
    if (hour >= 0 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    return "Good evening";
  } catch {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    return "Good evening";
  }
}

export function HelloTitle() {
  const inkId = useId();
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <>
      <InkFilter id={inkId} />
      <PanelTitle
        as="div"
        id="hello-greeting"
        className="font-handwritten text-4xl leading-none text-foreground select-none"
        style={{ filter: `url(#${inkId})` }}
        suppressHydrationWarning
      >
        {greeting}
      </PanelTitle>
    </>
  );
}

export function AboutPanel() {
  return (
    <Panel id="about" className="screen-line-bottom-none">
      <PanelHeader>
        <h2 className="sr-only">About</h2>
        <HelloTitle />
      </PanelHeader>

      <PanelContent>
        <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
          <ul className="list-disc space-y-2">
            <li>
              Computer Engineering undergraduate at Vishwakarma Institute of
              Technology (VIT Pune) working across Human-Centered AI, Video
              Management Systems, computer vision, and network telemetry.
            </li>
            <li>
              Current research includes AI usability evaluation with Prof.
              Ganesh Bhutkar, a structured 60-paper VMS research corpus, and
              empirical cellular bufferbloat measurement on mobile endpoints.
            </li>
            <li>
              I treat configured state, observed state, and measured behavior
              as separate layers of evidence: systems must be characterized
              through repeatable baseline telemetry rather than declared
              parameters.
            </li>
          </ul>
        </div>
      </PanelContent>

      <div className="screen-line-bottom h-px" />
      <div className="h-4" />
      <div className="screen-line-bottom h-px screen-line-bottom-border" />
    </Panel>
  );
}
