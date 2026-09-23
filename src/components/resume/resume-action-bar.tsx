"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeActionBar() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <aside aria-label="Resume actions" className="no-print mx-auto flex w-full max-w-[210mm] items-center justify-between pb-4 pt-2">
      <Button
        variant="ghost"
        size="sm"
        nativeButton={false}
        render={
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Portfolio</span>
          </Link>
        }
      />

      <Button
        onClick={handlePrint}
        size="sm"
        className="flex items-center gap-1.5 font-mono text-xs cursor-pointer shadow-sm"
      >
        <Printer className="size-3.5" />
        <span>Print / Save PDF</span>
      </Button>
    </aside>
  );
}
