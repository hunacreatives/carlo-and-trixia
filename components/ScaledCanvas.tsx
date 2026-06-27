"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders a fixed-size design "canvas" (designWidth × designHeight, in px)
 * and uniformly scales it so its width always matches the wrapper width.
 * This keeps every absolutely-positioned element pixel-exact at any screen size.
 *
 * `cropTop` removes that many design-px from the top of the canvas (used to drop
 * the hero region, which is rendered full-screen separately).
 *
 * The wrapper uses `aspect-ratio` so the correct height is reserved before JS
 * runs (no layout shift); JS only sets the numeric scale factor.
 */
export default function ScaledCanvas({
  designWidth,
  designHeight,
  cropTop = 0,
  maxWidth,
  className,
  children,
}: {
  designWidth: number;
  designHeight: number;
  cropTop?: number;
  maxWidth?: number;
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
        backgroundColor: "#f4f3f1",
        // CSS calc keeps height correct pre-JS when maxWidth is set
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
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
