"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IconTile } from "@/components/ui/icon-tile";

export { IconTile as IntroItemIcon };

export function IntroItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-4 font-mono text-sm", className)}
      {...props}
    />
  );
}

export function IntroItemContent({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-balance", className)} {...props} />;
}

export function IntroItemLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn("link", className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function clockHandsPath(hour: number, minute: number) {
  const h = hour % 12;
  const round = (n: number) => Math.round(n * 1000) / 1000;

  const minuteAngle = (minute / 60) * 2 * Math.PI;
  const hourAngle = ((h + minute / 60) / 12) * 2 * Math.PI;

  const hx = round(12 + 3.6 * Math.sin(hourAngle));
  const hy = round(12 - 3.6 * Math.cos(hourAngle));
  const mx = round(12 + 6 * Math.sin(minuteAngle));
  const my = round(12 - 6 * Math.cos(minuteAngle));

  return `M12 12 L${hx} ${hy} M12 12 L${mx} ${my}`;
}

function computeClock(timeZone: string) {
  const now = new Date();

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);

  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "12", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);

  const viewerOffset = -now.getTimezoneOffset();
  const targetDateStr = now.toLocaleString("en-US", { timeZone });
  const utcDateStr = now.toLocaleString("en-US", { timeZone: "UTC" });
  const targetOffset =
    (new Date(targetDateStr).getTime() - new Date(utcDateStr).getTime()) / 60000;
  const hoursDiff = Math.abs(targetOffset - viewerOffset) / 60;
  const diff =
    hoursDiff < 0.25
      ? " // local time"
      : ` // ${Math.floor(hoursDiff)}h ${targetOffset > viewerOffset ? "ahead" : "behind"}`;

  return { time, hour, minute, diff };
}

export function CurrentLocalTimeItem({ timeZone }: { timeZone: string }) {
  const [clock, setClock] = useState(() => ({
    time: "",
    diff: "",
    hands: clockHandsPath(12, 0),
  }));

  useEffect(() => {
    const update = () => {
      const { time, hour, minute, diff } = computeClock(timeZone);
      setClock({
        time,
        diff,
        hands: clockHandsPath(hour, minute),
      });
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <IntroItem>
      <IconTile>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="size-4"
        >
          <circle cx="12" cy="12" r="10" />
          <path d={clock.hands} suppressHydrationWarning />
        </svg>
      </IconTile>

      <IntroItemContent>
        <span suppressHydrationWarning>{clock.time || "Asia/Kolkata"}</span>
        <span
          className="text-muted-foreground"
          aria-hidden
          suppressHydrationWarning
        >
          {clock.diff}
        </span>
      </IntroItemContent>
    </IntroItem>
  );
}
