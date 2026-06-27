"use client";

import { useEffect, useState } from "react";

// Wedding: Saturday 28 November 2026, ceremony 2PM (Asia/Manila, UTC+8)
const TARGET = new Date("2026-11-28T14:00:00+08:00").getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function getParts(): Parts {
  const diff = Math.max(0, TARGET - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

// Label centers (px) on the 1512 design canvas
const COLS = [
  { x: 494, key: "days", label: "DAYS" },
  { x: 669, key: "hours", label: "HOURS" },
  { x: 844, key: "minutes", label: "MINUTES" },
  { x: 1019, key: "seconds", label: "SECONDS" },
] as const;

const COLONS = [581, 756, 931];

export default function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(getParts());
    const id = setInterval(() => setParts(getParts()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-serif text-[#2e3e09]">
      {COLS.map((c) => (
        <p
          key={c.key}
          className="absolute top-[4385px] w-[150px] -translate-x-1/2 -translate-y-1/2 text-center text-[90px] leading-none tabular-nums"
          style={{ left: `${c.x}px` }}
        >
          {parts ? String(parts[c.key]).padStart(2, "0") : "––"}
        </p>
      ))}
      {COLONS.map((x, i) => (
        <p
          key={i}
          className="absolute top-[4412px] w-[30px] -translate-x-1/2 -translate-y-full text-center text-[65px] leading-none"
          style={{ left: `${x}px` }}
        >
          :
        </p>
      ))}
      {COLS.map((c) => (
        <p
          key={c.label}
          className="absolute top-[4439px] w-[115px] -translate-x-1/2 -translate-y-1/2 text-center text-[20px] leading-none tracking-[0.12em]"
          style={{ left: `${c.x}px` }}
        >
          {c.label}
        </p>
      ))}
    </div>
  );
}
