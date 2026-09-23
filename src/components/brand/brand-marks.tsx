"use client";

import * as React from "react";

/**
 * RujulMark: Original technical RT monogram for header navigation.
 * Geometric CAD-inspired vector occupying 2:1 bounding box (512x256).
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
      {/* Letter 'R' */}
      <path
        fill="currentColor"
        d="M48 24h120c35 0 64 29 64 64 0 25-14 47-35 57l43 87h-56l-38-78H96v78H48V24zm48 44v44h72c13 0 24-10 24-22s-11-22-24-22H96z"
      />
      {/* Letter 'T' */}
      <path
        fill="currentColor"
        d="M280 24h184v44h-68v164h-48V68h-68V24z"
      />
    </svg>
  );
}

/**
 * RujulFooterLogotype: Original CAD-style decorative wireframe logotype for site footer.
 * Renders 'RUJUL' in bold technical strokes with mouse-interactive specular gradient.
 */
export function RujulFooterLogotype() {
  const [gradientX, setGradientX] = React.useState(705);
  const [isReduced, setIsReduced] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setGradientX(ratio * 1410);
  };

  const handleMouseLeave = () => {
    if (isReduced) return;
    setGradientX(705);
  };

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1410 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="RUJUL"
          >
            {/* RUJUL block letters */}
            <g fill="url(#rujul-footer-gradient)">
              {/* R */}
              <path d="M40 10h160c44 0 80 36 80 80 0 32-19 60-46 72l54 86h-66l-48-78h-74v78H40V10zm60 52v56h100c15 0 28-13 28-28s-13-28-28-28H100z" />
              {/* U */}
              <path d="M330 10h60v150c0 28 22 50 50 50s50-22 50-50V10h60v150c0 61-49 110-110 110s-110-49-110-110V10z" />
              {/* J */}
              <path d="M600 10h180v52h-60v118c0 39-31 70-70 70-39 0-70-31-70-70h54c0 9 7 16 16 16s16-7 16-16V62h-66V10z" />
              {/* U */}
              <path d="M830 10h60v150c0 28 22 50 50 50s50-22 50-50V10h60v150c0 61-49 110-110 110s-110-49-110-110V10z" />
              {/* L */}
              <path d="M1100 10h60v186h150v52h-210V10z" />
            </g>

            {/* Wireframe CAD stroke overlay */}
            <g stroke="currentColor" strokeWidth="2" className="stroke-foreground/15">
              <path d="M40 10h160c44 0 80 36 80 80 0 32-19 60-46 72l54 86h-66l-48-78h-74v78H40V10zm60 52v56h100c15 0 28-13 28-28s-13-28-28-28H100z" />
              <path d="M330 10h60v150c0 28 22 50 50 50s50-22 50-50V10h60v150c0 61-49 110-110 110s-110-49-110-110V10z" />
              <path d="M600 10h180v52h-60v118c0 39-31 70-70 70-39 0-70-31-70-70h54c0 9 7 16 16 16s16-7 16-16V62h-66V10z" />
              <path d="M830 10h60v150c0 28 22 50 50 50s50-22 50-50V10h60v150c0 61-49 110-110 110s-110-49-110-110V10z" />
              <path d="M1100 10h60v186h150v52h-210V10z" />
            </g>

            <defs>
              <linearGradient
                id="rujul-footer-gradient"
                x1={gradientX}
                y1="10"
                x2="705"
                y2="258"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.4" stopColor="var(--foreground)" stopOpacity="0.05" />
                <stop offset="0.75" stopColor="var(--foreground)" stopOpacity="0.25" />
                <stop offset="1" stopColor="var(--foreground)" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
