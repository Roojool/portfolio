import { NextResponse } from "next/server";
import { researchVectors } from "@/data/research";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { patents } from "@/data/patents";
import { SITE_INFO, SITE_URL } from "@/config/site";

export const dynamic = "force-static";

export async function GET() {
  const content = `# ${SITE_INFO.name} — ${SITE_INFO.title}

> Personal research portfolio & engineering dossier.
> Computer Engineering undergraduate at Vishwakarma Institute of Technology (VIT Pune) and AI Researcher with ACM.
> Location: Pune, India.
> Identity: AI Researcher × Systems Builder

## Core Identity & Overview
${SITE_INFO.headline}

Methodological Postulate:
Configured State Is Not Wire Behavior. Systems and models must be validated through observable runtime telemetry, baseline comparisons, and reproducible instrumentation.

## Current Research Focus
${researchVectors
  .map(
    (v) => `### ${v.title} [${v.status}]
- Domain: ${v.domain}
- Core Focus: ${v.summary}
- Current Work: ${v.currentWork}
- Methods: ${v.methods.join(", ")}
- Outputs: ${v.outputs.join(", ")}`
  )
  .join("\n\n")}

## Verified Engineering Projects
${projects
  .map(
    (p) => `### ${p.displayName ?? p.name}
- Repository Slug: ${p.repo}
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
- Venue: ${pub.venue}
- Conference Dates: ${pub.conferenceDates}
${pub.publisher ? `- Publisher: ${pub.publisher}` : ""}
${pub.pages ? `- Pages: ${pub.pages}` : ""}
- Status: ${pub.status}
- Summary: ${pub.summary}`
  )
  .join("\n\n")}

## Intellectual Property & Patents
${patents
  .map(
    (pat) => `### ${pat.title} [${pat.status}]
- Identifier: ${pat.identifier}
- Jurisdiction: ${pat.jurisdiction}
- Date: ${pat.date} (${pat.dateLabel})
- Summary: ${pat.summary}`
  )
  .join("\n\n")}

## Canonical Routes & Indices
- Main Portfolio: ${SITE_URL}
- Live Curriculum Vitae: ${SITE_URL}/resume
- Research Dossiers: ${SITE_URL}/research
- Projects Directory: ${SITE_URL}/projects
- Publications Index: ${SITE_URL}/publications
- Technical Writing: ${SITE_URL}/writing
- RSS Feed: ${SITE_URL}/feed.xml

## Contact & Identifiers
- Google Scholar: ${SITE_INFO.scholarUrl}
- GitHub: ${SITE_INFO.githubUrl}
- LinkedIn: ${SITE_INFO.linkedinUrl}
- ORCID: ${SITE_INFO.orcidUrl}
- Location: Pune, India (UTC+05:30)
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
