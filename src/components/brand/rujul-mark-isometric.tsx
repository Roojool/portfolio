"use client";

import * as React from "react";
import { useId, useRef } from "react";
import type { Transition } from "motion/react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

const tapTransition: Transition = {
  type: "spring",
  mass: 0.3,
  damping: 15,
  stiffness: 300,
};

/**
 * RujulMarkIsometric: Canonical architectural 3D axonometric RT wireframe mark.
 * Derived directly from the modular 2D RT logo geometry in `brand-marks.tsx`:
 * - 'R' (left): Columnar spine, cantilevered upper facet loop with inner counter void, grounded diagonal leg.
 * - 'T' (right): Balanced horizontal cantilever crossbar spanning an anchored central stem.
 * Layered render architecture:
 *   construction guidelines
 *   ↓ back/depth wires (occluded by front plane)
 *   ↓ side depth fills (fill-background)
 *   ↓ front solid faces (fill-background occlusion)
 *   ↓ top face underlay & 45° diagonal hatch
 *   ↓ visible front outlines (silhouette stroke)
 *   ↓ visible foreground depth edges (extrusion stroke)
 *   ↓ specular highlight (cursor spotlight)
 */
export function RujulMarkIsometric() {
  const id = useId();
  const ids = {
    facePattern: `rt-face-pattern-${id}`,
    topFaces: `rt-top-faces-${id}`,
    backWires: `rt-back-wires-${id}`,
    visibleEdges: `rt-visible-edges-${id}`,
    radialGradient: `rt-radial-gradient-${id}`,
  };

  const ref = useRef<SVGSVGElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  });

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  });

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(Math.max(0, Math.min(1, x)));
    mouseY.set(Math.max(0, Math.min(1, y)));
  };

  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_18%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      whileTap={{ scale: 0.985, y: 2 }}
      transition={tapTransition}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <defs>
        {/* Repeating 45° diagonal hatch pattern for top horizontal faces */}
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        {/* Top-face polygons for the canonical RT architectural wireframe */}
        <g id={ids.topFaces}>
          {/* 'R' Top Horizontal Face */}
          <path d="M 68.9 84 L 230.2 84 L 271.8 60 L 110.5 60 Z" />
          {/* 'T' Top Horizontal Face */}
          <path d="M 283.9 84 L 445.2 84 L 486.8 60 L 325.5 60 Z" />
          {/* 'R' Inner Counter Shelf Face */}
          <path d="M 122.6 184.8 L 176.4 184.8 L 218 160.8 L 164.2 160.8 Z" />
        </g>

        {/* Layer 2: Back/depth wires physically behind the front plane */}
        <path
          id={ids.backWires}
          d={[
            "M 164.2 194.4 L 164.2 275", // R stem back right vertical (occluded by front diagonal leg)
            "M 122.6 299 L 164.2 275",   // R stem base connector (occluded by front diagonal leg)
          ].join(" ")}
        />

        {/* Layer 7 & 8: Visible foreground linework (front silhouette + visible extrusion) */}
        <path
          id={ids.visibleEdges}
          d={[
            // 'R' Front Silhouette Outer & Inner Void
            "M 68.9 84 L 230.2 84 L 230.2 191.5 L 203.3 191.5 L 230.2 299 L 176.4 299 L 149.5 218.4 L 122.6 218.4 L 122.6 299 L 68.9 299 Z",
            "M 122.6 131 L 176.4 131 L 176.4 184.8 L 122.6 184.8 Z",

            // 'T' Front Silhouette Monogram Contour
            "M 283.9 84 L 445.2 84 L 445.2 131 L 391.4 131 L 391.4 299 L 337.7 299 L 337.7 131 L 283.9 131 Z",

            // Visible Top Back Edges
            "M 110.5 60 L 271.8 60",
            "M 325.5 60 L 486.8 60",
            "M 164.2 160.8 L 218 160.8",

            // Visible Side Right Back Edges (Outer silhouette boundaries)
            "M 271.8 60 L 271.8 167.5",
            "M 244.9 167.5 L 271.8 275",
            "M 486.8 60 L 486.8 107",
            "M 433 107 L 433 275",
            "M 164.2 107 L 164.2 160.8",

            // Visible Depth Extrusion Connectors (30° outer corners)
            "M 68.9 84 L 110.5 60",
            "M 230.2 84 L 271.8 60",
            "M 230.2 191.5 L 271.8 167.5",
            "M 203.3 191.5 L 244.9 167.5",
            "M 230.2 299 L 271.8 275",
            "M 283.9 84 L 325.5 60",
            "M 445.2 84 L 486.8 60",
            "M 445.2 131 L 486.8 107",
            "M 391.4 131 L 433 107",
            "M 391.4 299 L 433 275",
            "M 122.6 131 L 164.2 107",
            "M 176.4 184.8 L 218 160.8",
          ].join(" ")}
        />

        {/* Dynamic cursor specular spotlight gradient */}
        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="190"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#ffffff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-500)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      {/* Layer 1: Subtle architectural coordinate construction guidelines */}
      <g className="stroke-line/40" strokeWidth="1" strokeDasharray="3 3">
        <path d="M-50 250 L600 -125" />
        <path d="M-40 370 L600 0" />
        <path d="M600 370 L-80 -20" />
      </g>

      {/* Layer 2: Back/depth wires (rendered BEFORE front solid faces so occluded portions are hidden) */}
      <use href={`#${ids.backWires}`} stroke="var(--stroke)" strokeWidth="1" />

      {/* Layer 3: Side depth extrusion fills for architectural occlusion */}
      <g className="fill-background">
        {/* 'R' Outer Loop Right Face */}
        <path d="M 230.2 84 L 271.8 60 L 271.8 167.5 L 230.2 191.5 Z" />
        {/* 'R' Diagonal Leg Right Face */}
        <path d="M 203.3 191.5 L 244.9 167.5 L 271.8 275 L 230.2 299 Z" />
        {/* 'R' Stem Right Face */}
        <path d="M 122.6 218.4 L 164.2 194.4 L 164.2 275 L 122.6 299 Z" />
        {/* 'T' Lintel Crossbar Right Face */}
        <path d="M 445.2 84 L 486.8 60 L 486.8 107 L 445.2 131 Z" />
        {/* 'T' Stem Right Face */}
        <path d="M 391.4 131 L 433 107 L 433 275 L 391.4 299 Z" />
        {/* 'R' Inner Hole Left Wall */}
        <path d="M 122.6 131 L 164.2 107 L 164.2 160.8 L 122.6 184.8 Z" />
      </g>

      {/* Layer 4: Front faces solid occlusion (occludes all rear wires behind R and T) */}
      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        {/* 'R' Front Face */}
        <path d="M 68.9 84 L 230.2 84 L 230.2 191.5 L 203.3 191.5 L 230.2 299 L 176.4 299 L 149.5 218.4 L 122.6 218.4 L 122.6 299 L 68.9 299 Z M 122.6 131 L 176.4 131 L 176.4 184.8 L 122.6 184.8 Z" />
        {/* 'T' Front Face */}
        <path d="M 283.9 84 L 445.2 84 L 445.2 131 L 391.4 131 L 391.4 299 L 337.7 299 L 337.7 131 L 283.9 131 Z" />
      </g>

      {/* Layer 5 & 6: Top horizontal faces with background underlay + diagonal hatch */}
      <use href={`#${ids.topFaces}`} className="fill-background" />
      <use href={`#${ids.topFaces}`} fill={`url(#${ids.facePattern})`} />

      {/* Layer 7 & 8: Visible foreground wireframe edges */}
      <use href={`#${ids.visibleEdges}`} stroke="var(--stroke)" strokeWidth="1" />

      {/* Layer 9: Specular highlight tracks cursor across visible edges only */}
      <use
        href={`#${ids.visibleEdges}`}
        stroke={`url(#${ids.radialGradient})`}
        strokeWidth="1.2"
      />
    </motion.svg>
  );
}
