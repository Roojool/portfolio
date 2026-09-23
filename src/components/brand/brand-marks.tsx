"use client";

import * as React from "react";

/**
 * RujulMark: Original modular/pixel geometric RT symbol for header navigation.
 * 2:1 footprint (512x256), constructed from precision orthogonal architectural blocks.
 */
export function RujulMark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-label="Rujul Talekar Monogram"
      className={className}
      {...props}
    >
      {/* Modular Architectural RT Monogram */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0h192v128h-32l32 128h-64l-32-96H96v96H32V0zm64 56h64v64H96V56zM288 0h192v56h-64v200h-64V56h-64V0z"
      />
    </svg>
  );
}
