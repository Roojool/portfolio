import React from "react";

interface MonogramProps {
  size?: number;
  className?: string;
}

export function Monogram({ size = 28, className = "" }: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Rujul Talekar Monogram"
    >
      {/* Outer bounding technical frame */}
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeOpacity="0.3"
      />
      {/* Corner calibration tick marks */}
      <path d="M1.5 5.5H5.5M1.5 26.5H5.5M30.5 5.5H26.5M30.5 26.5H26.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      
      {/* Stem of 'R' */}
      <path
        d="M8.5 7.5V24.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      {/* Loop of 'R' */}
      <path
        d="M8.5 7.5H15C17.2 7.5 18.5 8.8 18.5 11C18.5 13.2 17.2 14.5 15 14.5H8.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      {/* Leg of 'R' with cyan accent dot */}
      <path
        d="M13.5 14.5L18.5 24.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />

      {/* Crossbar of 'T' */}
      <path
        d="M19 7.5H25"
        stroke="#06b6d4"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      {/* Stem of 'T' */}
      <path
        d="M22 7.5V24.5"
        stroke="#06b6d4"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );
}
