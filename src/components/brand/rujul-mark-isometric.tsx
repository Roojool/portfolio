"use client";

import * as React from "react";

/**
 * RujulMarkIsometric: Original technical isometric wireframe representation of R & T blocks.
 * Built with geometric isometric projection (30-degree angles), specular lighting, and
 * diagonal pattern hatching.
 */
export function RujulMarkIsometric() {
  const [pos, setPos] = React.useState({ x: 278, y: 177 });
  const [isReduced, setIsReduced] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(556, ((e.clientX - rect.left) / rect.width) * 556));
    const y = Math.max(0, Math.min(354, ((e.clientY - rect.top) / rect.height) * 354));
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    if (isReduced) return;
    setPos({ x: 278, y: 177 });
  };

  return (
    <figure
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-full items-center justify-center p-2 sm:p-4 select-none"
    >
      <svg
        className="h-auto w-full max-w-[480px]"
        viewBox="0 0 556 354"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Isometric Wireframe Mark (Fig. 1.)"
      >
        <defs>
          {/* Diagonal hatch pattern */}
          <pattern
            id="rt-hatch-pattern"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="currentColor"
              strokeWidth="0.8"
              className="text-foreground/15"
            />
          </pattern>

          {/* Interactive radial specular highlight */}
          <radialGradient
            id="rt-specular"
            cx={pos.x}
            cy={pos.y}
            r="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.25" />
            <stop offset="60%" stopColor="var(--foreground)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Isometric 3D structure for RT Block System */}
        {/* Left Structure: R block (isometric cubes) */}
        {/* R Pillar Left Faces */}
        <polygon points="120,180 160,203 160,290 120,267" fill="currentColor" className="text-foreground/[0.04]" />
        <polygon points="120,180 160,203 160,290 120,267" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* R Pillar Right Faces */}
        <polygon points="160,203 200,180 200,267 160,290" fill="currentColor" className="text-foreground/[0.08]" />
        <polygon points="160,203 200,180 200,267 160,290" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* R Middle Bridge Top */}
        <polygon points="160,113 200,90 240,113 200,136" fill="url(#rt-hatch-pattern)" />
        <polygon points="160,113 200,90 240,113 200,136" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* R Top Loop Front */}
        <polygon points="120,90 160,113 160,180 120,157" fill="currentColor" className="text-foreground/[0.05]" />
        <polygon points="120,90 160,113 160,180 120,157" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* R Top Head Top Face */}
        <polygon points="120,90 160,67 240,113 200,136" fill="currentColor" className="text-foreground/[0.12]" />
        <polygon points="120,90 160,67 240,113 200,136" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/50" />

        {/* R Diagonal Leg */}
        <polygon points="200,180 240,203 260,290 220,267" fill="currentColor" className="text-foreground/[0.06]" />
        <polygon points="200,180 240,203 260,290 220,267" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* Right Structure: T Block System */}
        {/* T Top Horizontal Bar: Top Face */}
        <polygon points="280,67 360,21 480,90 400,136" fill="url(#rt-hatch-pattern)" />
        <polygon points="280,67 360,21 480,90 400,136" stroke="currentColor" strokeWidth="1.5" className="stroke-foreground/50" />

        {/* T Top Horizontal Bar: Left Face */}
        <polygon points="280,67 400,136 400,170 280,101" fill="currentColor" className="text-foreground/[0.07]" />
        <polygon points="280,67 400,136 400,170 280,101" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* T Top Horizontal Bar: Right Face */}
        <polygon points="400,136 480,90 480,124 400,170" fill="currentColor" className="text-foreground/[0.14]" />
        <polygon points="400,136 480,90 480,124 400,170" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* T Vertical Stem: Left Face */}
        <polygon points="340,170 380,193 380,300 340,277" fill="currentColor" className="text-foreground/[0.05]" />
        <polygon points="340,170 380,193 380,300 340,277" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* T Vertical Stem: Right Face */}
        <polygon points="380,193 420,170 420,277 380,300" fill="currentColor" className="text-foreground/[0.10]" />
        <polygon points="380,193 420,170 420,277 380,300" stroke="currentColor" strokeWidth="1.2" className="stroke-foreground/40" />

        {/* Wireframe Coordinate Grid Lines */}
        <line x1="80" y1="290" x2="480" y2="290" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="stroke-foreground/20" />
        <line x1="280" y1="30" x2="280" y2="310" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="stroke-foreground/20" />

        {/* Specular Interactive Layer */}
        <rect x="0" y="0" width="556" height="354" fill="url(#rt-specular)" pointerEvents="none" />
      </svg>

      <figcaption className="pointer-events-none absolute right-2 bottom-2 text-xs font-mono tracking-wide text-muted-foreground tabular-nums select-none sm:right-4 sm:bottom-4">
        Fig. 1.
      </figcaption>
    </figure>
  );
}
