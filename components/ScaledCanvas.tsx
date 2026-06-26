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
  className,
  children,
}: {
  designWidth: number;
  designHeight: number;
  cropTop?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  const visibleHeight = designHeight - cropTop;

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: `${designWidth} / ${visibleHeight}`,
        overflow: "hidden",
      }}
    >
      <div
        className={className}
        style={{
          position: "absolute",
          top: -cropTop * scale,
          left: 0,
          width: designWidth,
          height: designHeight,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
