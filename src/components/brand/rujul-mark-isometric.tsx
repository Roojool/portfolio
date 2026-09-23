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
 * RujulMarkIsometric: Refined architectural 3D isometric RT wireframe mark.
 * Features an unmistakable, balanced dual-mass silhouette:
 * - 'R' (left): Columnar spine, cantilevered upper facet loop with inner counter void, and grounded diagonal leg.
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
          {/* 'R' Spine Top Face */}
          <path d="M66 68 L111 94 L75 115 L30 89 Z" />
          {/* 'R' Loop Top Beam Face */}
          <path d="M111 94 L211 152 L175 173 L75 115 Z" />
          {/* 'R' Mid Crossbar Face */}
          <path d="M75 155 L175 213 L139 234 L39 176 Z" />
          {/* 'R' Grounded Diagonal Leg Face */}
          <path d="M175 259 L215 282 L179 303 L139 280 Z" />

          {/* 'T' Cantilever Lintel Top Face */}
          <path d="M290 60 L510 187 L474 208 L254 81 Z" />
        </motion.g>

        {/* Wireframe edges */}
        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // 'R' Vertical Column Spine
                "M30 89 V250 L66 229 V68 L30 89 Z",
                "M111 94 L75 115 L30 89",
                "M75 115 V276 L30 250",
                "M75 276 L111 255 V94",
                // 'R' Upper Facet Loop
                "M111 94 L211 152 V192 L175 213 V173 L75 115",
                "M211 152 L175 173",
                "M211 192 L175 213",
                // 'R' Middle Crossbar Bridge
                "M175 213 L75 155 V187 L175 245 V213 Z",
                // 'R' Grounded Diagonal Leg
                "M175 213 L215 282 V302 L179 323 L139 254",
                "M215 282 L179 303 L139 280",
                "M179 303 V323",

                // 'T' Cantilever Lintel Span
                "M290 60 L510 187 L474 208 L254 81 Z",
                "M254 81 V113 L474 240 V208",
                "M510 187 V219 L474 240",
                "M254 113 L290 92 V60",
                // 'T' Centered Supporting Column
                "M344 165 V265 L394 294 V194",
                "M344 265 L380 244 V144",
                "M394 294 L430 273 V173",
              ].join(" "),
            },
            pressed: {
              d: [
                // 'R' Vertical Column Spine (pressed)
                "M30 103 V264 L66 243 V82 L30 103 Z",
                "M111 108 L75 129 L30 103",
                "M75 129 V290 L30 264",
                "M75 290 L111 269 V108",
                // 'R' Upper Facet Loop (pressed)
                "M111 108 L211 166 V206 L175 227 V187 L75 129",
                "M211 166 L175 187",
                "M211 206 L175 227",
                // 'R' Middle Crossbar Bridge (pressed)
                "M175 227 L75 169 V201 L175 259 V227 Z",
                // 'R' Grounded Diagonal Leg (pressed)
                "M175 227 L215 296 V316 L179 337 L139 268",
                "M215 296 L179 317 L139 294",
                "M179 317 V337",

                // 'T' Cantilever Lintel Span (pressed)
                "M290 74 L510 201 L474 222 L254 95 Z",
                "M254 95 V127 L474 254 V222",
                "M510 201 V233 L474 254",
                "M254 127 L290 106 V74",
                // 'T' Centered Supporting Column (pressed)
                "M344 179 V279 L394 308 V208",
                "M344 279 L380 258 V158",
                "M394 308 L430 287 V187",
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
        {/* 'T' Stem Front */}
        <motion.path
          variants={{
            normal: { d: "M344 165 V265 L394 294 V194 Z" },
            pressed: { d: "M344 179 V279 L394 308 V208 Z" },
          }}
          transition={transition}
        />
        {/* 'T' Stem Left */}
        <motion.path
          variants={{
            normal: { d: "M344 165 L380 144 V244 L344 265 Z" },
            pressed: { d: "M344 179 L380 158 V258 L344 279 Z" },
          }}
          transition={transition}
        />
        {/* 'T' Lintel Front */}
        <motion.path
          variants={{
            normal: { d: "M254 81 V113 L474 240 V208 Z" },
            pressed: { d: "M254 95 V127 L474 254 V222 Z" },
          }}
          transition={transition}
        />
        {/* 'T' Lintel Right Face */}
        <motion.path
          variants={{
            normal: { d: "M474 208 V240 L510 219 V187 Z" },
            pressed: { d: "M474 222 V254 L510 233 V201 Z" },
          }}
          transition={transition}
        />
        {/* 'R' Spine Front Face */}
        <motion.path
          variants={{
            normal: { d: "M30 89 V250 L75 276 V115 Z" },
            pressed: { d: "M30 103 V264 L75 290 V129 Z" },
          }}
          transition={transition}
        />
        {/* 'R' Spine Right Face */}
        <motion.path
          variants={{
            normal: { d: "M75 115 V276 L111 255 V94 Z" },
            pressed: { d: "M75 129 V290 L111 269 V108 Z" },
          }}
          transition={transition}
        />
        {/* 'R' Loop Front Face */}
        <motion.path
          variants={{
            normal: { d: "M175 173 V213 L211 192 V152 Z" },
            pressed: { d: "M175 187 V227 L211 206 V166 Z" },
          }}
          transition={transition}
        />
        {/* 'R' Leg Front Face */}
        <motion.path
          variants={{
            normal: { d: "M175 213 L215 282 V302 L175 233 Z" },
            pressed: { d: "M175 227 L215 296 V316 L175 247 Z" },
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
