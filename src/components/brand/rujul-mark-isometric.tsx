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
 * RujulMarkIsometric: Refined original architectural 3D isometric RT wireframe mark.
 * Features a balanced, unified dual-mass silhouette:
 * - 'R' (left): Columnar spine, cantilevered upper facet loop, and grounded diagonal leg.
 * - 'T' (right): Symmetrical cantilever lintel spanning an anchored central stem.
 * Enhanced with subtle diagonal hatching, generous negative space, and spring-driven specular cursor highlight.
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
        {/* Repeating 45° diagonal hatch pattern for top isometric faces */}
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

        {/* Top-face polygons for the RT architectural wireframe */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: { y: 0 },
            pressed: { y: 14 },
          }}
          transition={transition}
        >
          {/* 'R' Top Loop Face */}
          <path d="M120 72 L210 124 L165 150 L75 98 Z" />
          {/* 'R' Mid Crossbar Face */}
          <path d="M140 145 L215 188 L180 208 L105 165 Z" />
          {/* 'R' Grounded Diagonal Leg Face */}
          <path d="M155 210 L230 253 L195 273 L120 230 Z" />
          {/* 'R' Base Foot Face */}
          <path d="M45 168 L110 205 L80 222 L15 185 Z" />

          {/* 'T' Left Wing Face */}
          <path d="M285 58 L370 107 L335 127 L250 78 Z" />
          {/* 'T' Center Joint Face */}
          <path d="M370 107 L425 139 L390 159 L335 127 Z" />
          {/* 'T' Right Wing Face */}
          <path d="M425 139 L510 188 L475 208 L390 159 Z" />
        </motion.g>

        {/* Wireframe edges */}
        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // 'R' Upper Loop & Spine
                "M120 72 L210 124 V156 L165 182 V220 L120 194 V120 L75 94 V160 L30 134 V72 L120 72 Z",
                "M210 124 L165 150 L75 98",
                "M165 150 V182",
                // 'R' Mid-section to Lower Leg
                "M140 145 L215 188 V220 L180 240 L105 197 V165 L140 145 Z",
                "M215 188 L180 208 L105 165",
                "M180 208 V240",
                "M155 210 L230 253 V285 L195 305 L120 262 V230 L155 210 Z",
                "M230 253 L195 273 L120 230",
                "M195 273 V305",
                // 'R' Left Base Foot
                "M45 168 L110 205 V255 L80 272 L15 235 V185 L45 168 Z",
                "M110 205 L80 222 L15 185",
                "M80 222 V272",

                // 'T' Cantilever Lintel Span
                "M285 58 L510 188 V220 L475 240 L425 211 V295 L370 263 V179 L335 159 V127 L250 78 V110 L215 90 V58 L285 58 Z",
                "M370 107 L335 127 L250 78",
                "M425 139 L390 159 L335 127",
                "M510 188 L475 208 L390 159",
                "M475 208 V240",
                "M390 159 V223",
                // 'T' Center Supporting Column
                "M425 211 L370 179 V263 L425 295 V211 Z",
              ].join(" "),
            },
            pressed: {
              d: [
                // 'R' Upper Loop & Spine (pressed state)
                "M120 86 L210 138 V170 L165 196 V234 L120 208 V134 L75 108 V174 L30 148 V86 L120 86 Z",
                "M210 138 L165 164 L75 112",
                "M165 164 V196",
                // 'R' Mid-section to Lower Leg (pressed)
                "M140 159 L215 202 V234 L180 254 L105 211 V179 L140 159 Z",
                "M215 202 L180 222 L105 179",
                "M180 222 V254",
                "M155 224 L230 267 V299 L195 319 L120 276 V244 L155 224 Z",
                "M230 267 L195 287 L120 244",
                "M195 287 V319",
                // 'R' Left Base Foot (pressed)
                "M45 182 L110 219 V269 L80 286 L15 249 V199 L45 182 Z",
                "M110 219 L80 236 L15 199",
                "M80 236 V286",

                // 'T' Cantilever Lintel Span (pressed)
                "M285 72 L510 202 V234 L475 254 L425 225 V309 L370 277 V193 L335 173 V141 L250 92 V124 L215 104 V72 L285 72 Z",
                "M370 121 L335 141 L250 92",
                "M425 153 L390 173 L335 141",
                "M510 202 L475 222 L390 173",
                "M475 222 V254",
                "M390 173 V237",
                // 'T' Center Supporting Column (pressed)
                "M425 225 L370 193 V277 L425 309 V225 Z",
              ].join(" "),
            },
          }}
          transition={transition}
        />

        {/* Dynamic mouse specular spotlight gradient */}
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

      {/* Subtle isometric coordinate construction guidelines */}
      <g className="stroke-line/40" strokeWidth="1" strokeDasharray="3 3">
        <path d="M-100 330 L550 -45" />
        <path d="M-40 370 L600 0" />
        <path d="M600 370 L-80 -20" />
      </g>

      {/* Solid side depth extrusion fills for architectural occlusion */}
      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        {/* 'T' Column Depth Faces */}
        <motion.path
          variants={{
            normal: { d: "M425 211 L370 179 V263 L425 295 Z" },
            pressed: { d: "M425 225 L370 193 V277 L425 309 Z" },
          }}
          transition={transition}
        />
        {/* 'T' Right Cantilever Wing Depth Face */}
        <motion.path
          variants={{
            normal: { d: "M510 188 L475 208 V240 L510 220 Z" },
            pressed: { d: "M510 202 L475 222 V254 L510 234 Z" },
          }}
          transition={transition}
        />
        {/* 'R' Lower Leg Depth Face */}
        <motion.path
          variants={{
            normal: { d: "M230 253 L195 273 V305 L230 285 Z" },
            pressed: { d: "M230 267 L195 287 V319 L230 299 Z" },
          }}
          transition={transition}
        />
        {/* 'R' Base Foot Depth Face */}
        <motion.path
          variants={{
            normal: { d: "M110 205 L80 222 V272 L110 255 Z" },
            pressed: { d: "M110 219 L80 236 V286 L110 269 Z" },
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
