"use client";

import * as React from "react";
import { useEffect, useId, useRef } from "react";
import type { Transition } from "motion/react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
};

/**
 * RujulMarkIsometric: Original asymmetric 3D isometric RT wireframe mark for profile header hero.
 * Fills 75-85% of area with connected architectural RT masses, heavier top/right T structure,
 * stepped lower/left R structure, top diagonal hatch pattern, and spring-driven specular cursor lighting.
 */
export function RujulMarkIsometric() {
  const id = useId();
  const ids = {
    facePattern: `rt-face-pattern-${id}`,
    faceFill: `rt-face-fill-${id}`,
    stroke: `rt-stroke-${id}`,
    radialGradient: `rt-radial-gradient-${id}`,
  };

  const ref = useRef<SVGSVGElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { margin: "80px" });

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

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, isInView, mouseX, mouseY]);

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_18%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
    >
      <defs>
        {/* Repeating 45° diagonal hatch pattern for top faces */}
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

        {/* Top-face polygons for RT isometric masses */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: { y: 0 },
            pressed: { y: 12 },
          }}
          transition={transition}
        >
          {/* Top T Crossbar Upper Right Span */}
          <path d="M340 32 L470 107 L415 139 L285 64 Z" />
          {/* Top T Right Cantilever Wing */}
          <path d="M470 107 L535 145 L480 177 L415 139 Z" />
          {/* Top T Center Stem Joint */}
          <path d="M285 64 L340 96 L295 122 L240 90 Z" />
          {/* R Upper Loop Top Face */}
          <path d="M190 70 L280 122 L235 148 L145 96 Z" />
          {/* R Middle Crossbar Top Face */}
          <path d="M150 148 L230 194 L195 214 L115 168 Z" />
          {/* R Lower Stepped Leg Top Face */}
          <path d="M165 218 L245 264 L210 284 L130 238 Z" />
          {/* R Base Stem Left Cap */}
          <path d="M35 170 L115 216 L80 236 L0 190 Z" />
        </motion.g>

        {/* Wireframe strokes */}
        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // T Crossbar & Wing Outlines
                "M340 32 L470 107 L535 145 V177 L480 209 L415 171 V235 L360 203 V139 L285 96 V160 L230 128 V64 L340 32 Z",
                "M470 107 L415 139 L285 64",
                "M415 139 L480 177 L535 145",
                "M480 177 V209",
                "M415 171 L360 139",
                // R Structure Outlines
                "M190 70 L280 122 V154 L235 180 V244 L180 212 V148 L145 128 V192 L90 160 V96 L190 70 Z",
                "M280 122 L235 148 L145 96",
                "M150 148 L230 194 V226 L195 246 L115 200 V168 L150 148 Z",
                "M230 194 L195 214 L115 168",
                "M165 218 L245 264 V296 L210 316 L130 270 V238 L165 218 Z",
                "M245 264 L210 284 L130 238",
                "M35 170 L115 216 V280 L80 300 L0 254 V190 L35 170 Z",
                "M115 216 L80 236 L0 190",
                "M80 236 V300",
              ].join(" "),
            },
            pressed: {
              d: [
                // T Crossbar & Wing Outlines (pressed state)
                "M340 44 L470 119 L535 157 V189 L480 221 L415 183 V247 L360 215 V151 L285 108 V172 L230 140 V76 L340 44 Z",
                "M470 119 L415 151 L285 76",
                "M415 151 L480 189 L535 157",
                "M480 189 V221",
                "M415 183 L360 151",
                // R Structure Outlines (pressed state)
                "M190 82 L280 134 V166 L235 192 V256 L180 224 V160 L145 140 V204 L90 172 V108 L190 82 Z",
                "M280 134 L235 160 L145 108",
                "M150 160 L230 206 V238 L195 258 L115 212 V180 L150 160 Z",
                "M230 206 L195 226 L115 180",
                "M165 230 L245 276 V308 L210 328 L130 282 V250 L165 230 Z",
                "M245 276 L210 296 L130 250",
                "M35 182 L115 228 V292 L80 312 L0 266 V202 L35 182 Z",
                "M115 228 L80 248 L0 202",
                "M80 248 V312",
              ].join(" "),
            },
          }}
          transition={transition}
        />

        {/* Dynamic mouse specular spotlight */}
        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      {/* Subtle isometric construction guidelines */}
      <g className="stroke-line/50" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-200 380 L620 -90" />
        <path d="M-50 420 L720 -20" />
        <path d="M700 420 L-100 -40" />
      </g>

      {/* Solid side depth extrusion fills */}
      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        {/* T Cantilever side faces */}
        <motion.path
          variants={{
            normal: { d: "M535 145 L480 177 V209 L535 177 Z" },
            pressed: { d: "M535 157 L480 189 V221 L535 189 Z" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M480 177 L415 139 V171 L480 209 Z" },
            pressed: { d: "M480 189 L415 151 V183 L480 221 Z" },
          }}
          transition={transition}
        />
        {/* T Stem side faces */}
        <motion.path
          variants={{
            normal: { d: "M415 171 L360 203 V235 L415 203 Z" },
            pressed: { d: "M415 183 L360 215 V247 L415 215 Z" },
          }}
          transition={transition}
        />
        {/* R Lower Leg depth faces */}
        <motion.path
          variants={{
            normal: { d: "M245 264 L210 284 V316 L245 296 Z" },
            pressed: { d: "M245 276 L210 296 V328 L245 308 Z" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M210 284 L130 238 V270 L210 316 Z" },
            pressed: { d: "M210 296 L130 250 V282 L210 328 Z" },
          }}
          transition={transition}
        />
        {/* R Base Stem depth faces */}
        <motion.path
          variants={{
            normal: { d: "M115 216 L80 236 V300 L115 280 Z" },
            pressed: { d: "M115 228 L80 248 V312 L115 292 Z" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M80 236 L0 190 V254 L80 300 Z" },
            pressed: { d: "M80 248 L0 202 V266 L80 312 Z" },
          }}
          transition={transition}
        />
      </g>

      {/* Top faces with background underlay + diagonal hatch */}
      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      {/* Wireframe edges: static baseline + dynamic specular highlight */}
      <use href={`#${ids.stroke}`} stroke="var(--stroke)" strokeWidth="1" />
      <use
        href={`#${ids.stroke}`}
        stroke={`url(#${ids.radialGradient})`}
        strokeWidth="1.2"
      />
    </motion.svg>
  );
}
