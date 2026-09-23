import * as React from "react";
import Link from "next/link";
import { Rss, Fingerprint } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon, GoogleScholarIcon, XIcon } from "@/components/ui/icons";
import { RujulMark } from "@/components/brand/brand-marks";
import { getBuildInfo, getStack } from "@/lib/build-info";
import { SITE_INFO } from "@/config/site";
import { researchVectors } from "@/data/research";
import { publications } from "@/data/publications";
import { patents } from "@/data/patents";
import { cn } from "@/lib/utils";


const SITE_TITLE = "rujul-talekar";
const SITE_SUBTITLE = "AI research, systems engineering, and experimental software.";

export function Footer() {
  const build = getBuildInfo();
  const stack = getStack();

  return (
    <footer data-site-footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        {/* Stripe divider header */}
        <div className="screen-line-top screen-line-bottom screen-line-top-border before:z-1">
          <div className="stripe-divider h-12" />
        </div>

        {/* CAD Title Block */}
        <div className="relative">
          {/* Top Title Bar */}
          <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-sm">
            <span className="font-medium text-foreground">{SITE_TITLE}</span>
            <span className="font-sans text-xs text-muted-foreground">
              {SITE_SUBTITLE}
            </span>
          </div>

          {/* Technical Metadata Grid */}
          <dl className="grid grid-cols-2 gap-px bg-line font-mono md:grid-cols-4">
            <Field label="Crafted by">
              <span className="font-medium">{SITE_INFO.name}</span>
            </Field>

            <Field label="Build">
              {build.commitShortSha ? (
                build.commitUrl ? (
                  <a
                    className="link-underline"
                    href={build.commitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {build.commitShortSha}
                  </a>
                ) : (
                  build.commitShortSha
                )
              ) : (
                <span className="text-muted-foreground">unavailable</span>
              )}
            </Field>

            <Field label="Date">
              <time dateTime={build.date}>{build.date}</time>
            </Field>

            <Field label="Deployed on">
              <span className="font-sans flex items-center gap-1.5" aria-hidden>
                ▲ <span>Vercel</span>
              </span>
            </Field>

            <Field label="Research">
              <span>{researchVectors.length} vectors</span>
            </Field>

            <Field label="Publications">
              <span>{publications.length} papers</span>
            </Field>

            <Field label="IP">
              <span>{patents.length} records</span>
            </Field>

            <Field label="Source code">
              <a
                className="link-underline"
                href={SITE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Field>

            <Field label="License">
              <span className="text-muted-foreground">MIT License</span>
            </Field>

            <Field label="Typeface">Geist</Field>

            <Field className="col-span-2" label="Stack">
              <ul className="flex flex-wrap gap-x-2 gap-y-0.5">
                {stack.map((entry, i) => (
                  <li key={entry}>
                    {entry}
                    {i < stack.length - 1 && (
                      <span className="text-muted-foreground/60 ml-2">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </Field>

            <Field label="For agents">
              <ul className="flex flex-col gap-0.5">
                <li>
                  <a className="link-underline" href="/llms.txt">
                    llms.txt
                  </a>
                </li>
                <li>
                  <a className="link-underline" href="/feed.xml">
                    feed.xml
                  </a>
                </li>
              </ul>
            </Field>

            <Field className="col-span-1 md:col-span-3" label="Identity">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                <li>
                  <a
                    className="link-underline"
                    href={SITE_INFO.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Scholar
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline"
                    href={SITE_INFO.orcidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ORCID
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline"
                    href={SITE_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline"
                    href={SITE_INFO.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                </li>
              </ul>
            </Field>

          </dl>
        </div>

        <div className="screen-line-top h-4" />

        {/* Social Icon Strip */}
        <div className="screen-line-top screen-line-bottom flex items-center gap-3 screen-line-bottom-border px-4 py-3 text-muted-foreground">
          <Link
            href="/"
            className="mr-auto text-muted-foreground transition-[color] hover:text-foreground"
            aria-label="Home"
          >
            <RujulMark className="h-4 w-8 shrink-0 text-foreground" />
          </Link>

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={SITE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={SITE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={SITE_INFO.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile"
          >
            <XIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={SITE_INFO.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar Profile"
          >
            <GoogleScholarIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={SITE_INFO.orcidUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ORCID Profile"
          >
            <Fingerprint className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href="/feed.xml"
            aria-label="RSS Feed"
          >
            <Rss className="size-4" />
          </a>
        </div>
      </div>

      <div className="h-6" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  );
}

function Field({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1 bg-background px-4 py-3",
        className
      )}
    >
      <dt className="text-[0.625rem]/4 font-medium tracking-wider text-muted-foreground uppercase select-none">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  );
}
