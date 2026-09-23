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

  // Modular outline path for RUJUL
  const letterR =
    "M40 10h150c40 0 74 34 74 74 0 28-16 52-40 64l48 80h-48l-42-72H84v72H40V10zm44 42v62h104c18 0 32-14 32-31s-14-31-32-31H84z";
  const letterU1 =
    "M310 10h44v146c0 30 24 54 54 54s54-24 54-54V10h44v146c0 54-44 98-98 98s-98-44-98-98V10z";
  const letterJ =
    "M560 10h160v44h-58v102c0 36-28 66-64 66-36 0-66-30-66-66h44c0 12 10 22 22 22s22-10 22-22V54h-60V10z";
  const letterU2 =
    "M790 10h44v146c0 30 24 54 54 54s54-24 54-54V10h44v146c0 54-44 98-98 98s-98-44-98-98V10z";
  const letterL =
    "M1040 10h44v194h180v44h-224V10z";

  const combinedPath = `${letterR} ${letterU1} ${letterJ} ${letterU2} ${letterL}`;

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
