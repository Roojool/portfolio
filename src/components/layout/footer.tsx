import React from "react";
import Link from "next/link";
import { Monogram } from "@/components/brand/monogram";
import { socialLinks } from "@/data/links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          <div className="flex items-center gap-3">
            <Monogram size={30} className="text-cyan-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                Rujul Talekar
              </p>
              <p className="text-[11px] font-mono text-zinc-500">
                AI Researcher × Systems Builder · Pune, India
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-700">/</span>
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-700">/</span>
            <a
              href={socialLinks.orcid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              ORCID
            </a>
            <span className="text-zinc-700">/</span>
            <Link href="/feed.xml" className="hover:text-cyan-400 transition-colors">
              RSS Feed
            </Link>
            <span className="text-zinc-700">/</span>
            <Link href="/llms.txt" className="hover:text-cyan-400 transition-colors">
              llms.txt
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <p>© {currentYear} Rujul Talekar. All rights reserved.</p>
          <p className="text-zinc-500 leading-relaxed text-left sm:text-right max-w-md">
            Design inspiration:{" "}
            <a
              href="https://www.prathadox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-300"
            >
              prathadox.com
            </a>
            . Portions of the architecture and interaction patterns were adapted from{" "}
            <a
              href="https://github.com/ncdai/chanhdai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-300"
            >
              ncdai/chanhdai.com
            </a>{" "}
            under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
