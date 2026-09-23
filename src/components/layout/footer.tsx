import * as React from "react";
import { RujulFooterLogotype } from "@/components/brand/brand-marks";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Award, Rss } from "lucide-react";
import { SITE_INFO } from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x md:max-w-3xl">
        {/* Top Stripe Divider */}
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-12" />
        </div>

        {/* Two-column Definition List */}
        <dl className="flex flex-col gap-3.5 py-8 font-mono text-xs sm:text-sm [&_dd]:text-foreground [&_dt]:text-right [&_dt]:text-muted-foreground">
          <FooterRow label="Built by">
            <span className="font-sans font-medium">{SITE_INFO.name}</span>
          </FooterRow>

          <FooterRow label="Based in">Pune, India</FooterRow>

          <FooterRow label="Research">AI · HCI · VMS · Systems</FooterRow>

          <FooterRow label="Deployed on">Vercel</FooterRow>

          <FooterRow label="Source code">
            <a
              href={SITE_INFO.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              GitHub
            </a>
          </FooterRow>

          <FooterRow label="ORCID">
            <a
              href={SITE_INFO.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              {SITE_INFO.orcid}
            </a>
          </FooterRow>

          <FooterRow label="License">
            <span>MIT License</span>
          </FooterRow>

          <FooterRow label="Upstream">
            <a
              href="https://github.com/ncdai/chanhdai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-muted-foreground hover:text-foreground"
            >
              ncdai/chanhdai.com
            </a>
          </FooterRow>
        </dl>

        {/* Bottom Social Icons Row */}
        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-4 border-x border-line bg-background px-6 py-2.5">
            <a
              href={SITE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="size-4" />
            </a>

            <div className="h-4 w-px bg-line" />

            <a
              href={SITE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="size-4" />
            </a>

            <div className="h-4 w-px bg-line" />

            <a
              href={SITE_INFO.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID Record"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Award className="size-4" />
            </a>

            <div className="h-4 w-px bg-line" />

            <a
              href="/feed.xml"
              aria-label="RSS Feed"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Rss className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Interactive RUJUL Logotype */}
      <RujulFooterLogotype />

      <div className="h-14 sm:h-20" />
    </footer>
  );
}

function FooterRow({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 px-4", className)}>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
