"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export default function ScaledCanvas({
  designWidth,
  designHeight,
  cropTop = 0,
  maxWidth,
  bg = "#f4f3f1",
  className,
  children,
}: {
  designWidth: number;
  designHeight: number;
  cropTop?: number;
  maxWidth?: number;
  bg?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(() => ({
    scale: maxWidth ? maxWidth / designWidth : 1,
    left: 0,
  }));

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const cappedW = maxWidth ? Math.min(w, maxWidth) : w;
      setState({ scale: cappedW / designWidth, left: Math.round((w - cappedW) / 2) });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth, maxWidth]);

  const visibleHeight = designHeight - cropTop;

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: bg,
        ...(maxWidth
          ? { height: `calc(${visibleHeight} * min(100vw, ${maxWidth}px) / ${designWidth})` }
          : { aspectRatio: `${designWidth} / ${visibleHeight}` }),
        overflow: "hidden",
      }}
    >
      <div
        className={className}
        style={{
          position: "absolute",
          top: -cropTop * state.scale,
          left: state.left,
          width: designWidth,
          height: designHeight,
          transformOrigin: "top left",
          transform: `scale(${state.scale})`,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
