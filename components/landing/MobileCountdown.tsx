"use client";

import { useEffect, useState } from "react";

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

// X positions match both old and new Figma (unchanged)
const COLS = [
  { x: 128, key: "days", label: "DAYS" },
  { x: 181.5, key: "hours", label: "HOURS" },
  { x: 230, key: "minutes", label: "MINUTES" },
  { x: 280.5, key: "seconds", label: "SECONDS" },
] as const;

const COLONS = [158, 202, 256];

// Y positions updated for revised mobile canvas (7319px height)
const NUM_TOP = 2951;   // numbers center y
const COL_TOP = 2966;   // colon bottom y  (-translate-y-full)
const LBL_TOP = 2976;   // label center y

export default function MobileCountdown() {
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
          className="absolute w-[52px] -translate-x-1/2 -translate-y-1/2 text-center text-[33px] leading-none tabular-nums"
          style={{ left: `${c.x}px`, top: `${NUM_TOP}px` }}
        >
          {parts ? String(parts[c.key]).padStart(2, "0") : "––"}
        </p>
      ))}
      {COLONS.map((x, i) => (
        <p
          key={i}
          className="absolute w-[12px] -translate-x-1/2 -translate-y-full text-center text-[22px] leading-none"
          style={{ left: `${x}px`, top: `${COL_TOP}px` }}
        >
          :
        </p>
      ))}
      {COLS.map((c) => (
        <p
          key={c.label}
          className="absolute w-[52px] -translate-x-1/2 -translate-y-1/2 text-center text-[8px] leading-none tracking-[0.1em]"
          style={{ left: `${c.x}px`, top: `${LBL_TOP}px` }}
        >
          {c.label}
        </p>
      ))}
    </div>
  );
}
