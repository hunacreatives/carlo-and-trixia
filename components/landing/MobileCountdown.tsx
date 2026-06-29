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

// X positions — widened (~1.4x) so the enlarged numerals don't collide
const COLS = [
  { x: 99, key: "days", label: "DAYS" },
  { x: 174, key: "hours", label: "HOURS" },
  { x: 242, key: "minutes", label: "MINUTES" },
  { x: 312, key: "seconds", label: "SECONDS" },
] as const;

const COLONS = [136.5, 208, 277];

// Y positions updated for revised mobile canvas (7319px height)
const NUM_TOP = 2951;   // numbers center y
const LBL_TOP = 2989;   // label center y

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
          className="absolute w-[68px] -translate-x-1/2 -translate-y-1/2 text-center text-[47px] leading-none tabular-nums"
          style={{ left: `${c.x}px`, top: `${NUM_TOP}px` }}
        >
          {parts ? String(parts[c.key]).padStart(2, "0") : "––"}
        </p>
      ))}
      {COLONS.map((x, i) => (
        <p
          key={i}
          className="absolute w-[16px] -translate-x-1/2 -translate-y-1/2 text-center text-[36px] leading-none"
          style={{ left: `${x}px`, top: `${NUM_TOP}px` }}
        >
          :
        </p>
      ))}
      {COLS.map((c) => (
        <p
          key={c.label}
          className="absolute w-[68px] -translate-x-1/2 -translate-y-1/2 text-center text-[11px] leading-none tracking-[0.1em]"
          style={{ left: `${c.x}px`, top: `${LBL_TOP}px` }}
        >
          {c.label}
        </p>
      ))}
    </div>
  );
}
