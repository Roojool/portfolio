import type { Metadata } from "next";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications — Rujul Talekar",
  description:
    "Verified academic publications, conference proceedings, and citation metadata for Rujul Talekar."
};

export default function PublicationsPage() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        <PublicationsSection />
      </div>
    </div>
  );
}
