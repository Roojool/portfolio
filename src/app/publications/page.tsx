import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PublicationsPanel } from "@/components/sections/publications-panel";
import { PatentPanel } from "@/components/sections/patent-panel";
import { StripeSeparator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Publications & IP",
  description:
    "Verified academic publications, conference proceedings, and patent application records for Rujul Talekar.",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto md:max-w-3xl border-x">
      <div className="p-4 border-b border-line">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" /> Back to Home
        </Link>
      </div>

      <PublicationsPanel />
      <StripeSeparator />
      <PatentPanel />
    </div>
  );
}
