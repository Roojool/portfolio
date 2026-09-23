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
      {/* Letter 'R' with inner counter hole */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0h192v128h-32v32h64v96h-64v-48h-32v-48H96v96H32V0zm64 64h64v64H96V64z"
      />
      {/* Letter 'T' with architectural foot bracket */}
      <path
        fill="currentColor"
        d="M256 0h224v64h-80v160h32v32H304v-32h32V64h-80V0z"
      />
    </svg>
  );
}
