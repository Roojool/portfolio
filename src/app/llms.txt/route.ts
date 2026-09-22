import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { researchVectors } from "@/data/research";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { patents } from "@/data/patents";
import { socialLinks } from "@/data/links";

export const dynamic = "force-static";

export async function GET() {
  const content = `# Rujul Talekar — AI Researcher × Systems Builder

> Personal research portfolio & engineering dossier.
> Computer Engineering undergraduate at Vishwakarma Institute of Technology (VIT Pune).
> Location: Pune, Maharashtra, India.
> Identity: AI Researcher × Systems Builder

## Core Identity & Overview
${profile.headline}

Methodological Postulate:
Configured State Is Not Wire Behavior. Systems and models must be validated through observable runtime telemetry, baseline comparisons, and reproducible instrumentation.

## Current Research Focus
${researchVectors
  .map(
    (v) => `### ${v.title} [${v.status}]
- Category: ${v.category}
- Research Question: ${v.researchQuestion}
- Current State: ${v.currentState}
- Methods: ${v.methods.join(", ")}
- Tooling: ${v.tooling.join(", ")}`
  )
  .join("\n\n")}

## Verified Engineering Projects
${projects
  .map(
    (p) => `### ${p.name}
- Domain: ${p.domain}
- Status: ${p.status}
- Repository: ${p.url}
- Description: ${p.description}
- Stack: ${p.stack.join(", ")}`
  )
  .join("\n\n")}

## Verified Publications
${publications
  .map(
    (pub) => `### ${pub.title} (${pub.year})
- Authors: ${pub.authors.join(", ")}
${pub.venue ? `- Venue: ${pub.venue}` : ""}
${pub.publisher ? `- Publisher: ${pub.publisher}` : ""}
${pub.pages ? `- Pages: ${pub.pages}` : ""}
- Status: ${pub.status}`
  )
  .join("\n\n")}

## Intellectual Property & Patents
${patents
  .map(
    (pat) => `### ${pat.title} [${pat.status}]
- Field: ${pat.field}
- Filing Date: ${pat.filingDate}
- Publication Date: ${pat.publicationDate}
- IPC: ${pat.ipcClassification.join(", ")}`
  )
  .join("\n\n")}

## Canonical Routes & Indices
- Main Portfolio: https://roojool.github.io/portfolio
- Research Dossiers: https://roojool.github.io/portfolio/research
- Projects Directory: https://roojool.github.io/portfolio/projects
- Publications Index: https://roojool.github.io/portfolio/publications
- Technical Writing: https://roojool.github.io/portfolio/writing
- RSS Feed: https://roojool.github.io/portfolio/feed.xml

## Contact & Identifiers
- GitHub: ${socialLinks.github.url}
- LinkedIn: ${socialLinks.linkedin.url}
- ORCID: ${socialLinks.orcid.url}
- Location: Pune, Maharashtra, India (UTC+05:30)
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400"
    }
  });
}
