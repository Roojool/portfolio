import * as React from "react";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { profile } from "@/data/profile";

export function AboutPanel() {
  return (
    <Panel id="about" className="screen-line-bottom-none">
      <PanelHeader>
        <PanelTitle>
          <a href="#about">About</a>
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="typeset-description space-y-3 font-sans">
          {profile.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </PanelContent>

      <div className="screen-line-bottom h-px" />
      <div className="h-4" />
      <div className="screen-line-bottom h-px screen-line-bottom-border" />
    </Panel>
  );
}
