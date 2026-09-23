"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

const VIEWBOX_WIDTH = 1410;

export function RujulFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion();

  const gradientX1Raw = useMotionValue(0.5);
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const containerRect = event.currentTarget.getBoundingClientRect();
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    );
  };

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return;
    gradientX1Raw.set(0.5);
  };

  // Stylized modular architectural RT monogram on precision 32px grid
  // ViewBox: 1410 x 258 (44 columns x 8 rows)
  // R: cols 4..17 (x: 129..577), Gap: cols 18..25 (x: 577..833), T: cols 26..39 (x: 833..1281)
  const letterR =
    "M129 1h448v128h-64l64 128h-128l-64-96H257v96H129V1zm128 64h192v64H257V65z";
  const letterT =
    "M833 1h448v64h-160v192h-128V65H833V1z";

  const combinedPath = `${letterR} ${letterT}`;

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
            aria-hidden
          >
            {/* Subtle ambient gradient fill */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={combinedPath}
              fill="url(#rujul-footer-spring-gradient)"
            />

            {/* Delicate outline strokes */}
            <path
              className="stroke-foreground/10"
              d={combinedPath}
              strokeWidth="1.5"
            />

            <defs>
              <motion.linearGradient
                id="rujul-footer-spring-gradient"
                x1={gradientX1}
                y1="10"
                x2="705"
                y2="258"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.55"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop
                  offset="1"
                  stopColor="var(--foreground)"
                  stopOpacity="0.08"
                />
              </motion.linearGradient>
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
