"use client";
import { useState, useEffect } from "react";

export default function IntroLetter() {
  const [phase, setPhase] = useState<"idle" | "opening" | "done">("idle");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Intro shows on every launch — no session skip (mobile browsers restore
    // sessionStorage on tab reopen, which was bypassing the click-to-open step).
    setIsMobile(window.matchMedia("(max-width: 767px)").matches);
  }, []);

  const open = () => {
    if (phase !== "idle") return;
    setPhase("opening");
    window.dispatchEvent(new Event("music:start"));
    window.dispatchEvent(new Event("intro:opened"));
    setTimeout(() => setPhase("done"), 900);
  };

  if (phase === "done") return null;

  const isOpening = phase === "opening";

  return (
    <div
      onClick={open}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        cursor: "pointer",
        perspective: "1400px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      {/* First panel — desktop: left half (left/right split). mobile: top half (top/bottom stack) */}
      <div
        style={
          isMobile
            ? {
                position: "absolute",
                top: 0, left: 0,
                width: "100%", height: "50%",
                backgroundImage: "url(/images/intro-letter-bg.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "200vw auto",
                backgroundPosition: "0% center",
                backgroundColor: "#e3ddd5",
                transformOrigin: "50% 0%",
                transform: isOpening ? "rotateX(90deg)" : "rotateX(0deg)",
                transition: isOpening ? "transform 0.7s cubic-bezier(0.4,0,1,1)" : "none",
              }
            : {
                position: "absolute",
                top: 0, left: 0,
                width: "50%", height: "100%",
                backgroundImage: "url(/images/intro-letter-bg.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw auto",
                backgroundPosition: "0px center",
                backgroundColor: "#e3ddd5",
                transformOrigin: "0% 50%",
                transform: isOpening ? "rotateY(-90deg)" : "rotateY(0deg)",
                transition: isOpening ? "transform 0.7s cubic-bezier(0.4,0,1,1)" : "none",
              }
        }
      />

      {/* Second panel — desktop: right half. mobile: bottom half */}
      <div
        style={
          isMobile
            ? {
                position: "absolute",
                bottom: 0, left: 0,
                width: "100%", height: "50%",
                backgroundImage: "url(/images/intro-letter-bg.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "200vw auto",
                backgroundPosition: "100% center",
                backgroundColor: "#e3ddd5",
                transformOrigin: "50% 100%",
                transform: isOpening ? "rotateX(-90deg)" : "rotateX(0deg)",
                transition: isOpening ? "transform 0.7s cubic-bezier(0.4,0,1,1)" : "none",
              }
            : {
                position: "absolute",
                top: 0, right: 0,
                width: "50%", height: "100%",
                backgroundImage: "url(/images/intro-letter-bg.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw auto",
                backgroundPosition: "-50vw center",
                backgroundColor: "#e3ddd5",
                transformOrigin: "100% 50%",
                transform: isOpening ? "rotateY(90deg)" : "rotateY(0deg)",
                transition: isOpening ? "transform 0.7s cubic-bezier(0.4,0,1,1)" : "none",
              }
        }
      />

      {/* Wax seal centered on the fold line */}
      <div
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: `translate(-50%, -50%) scale(${isOpening ? 0.7 : 1})`,
          opacity: isOpening ? 0 : 1,
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: "none",
        }}
      >
        <img
          src="/images/intro-wax-seal-crop.webp"
          alt=""
          draggable={false}
          style={{ width: 260, height: "auto", display: "block" }}
        />
      </div>

      {/* Click hint */}
      <p
        style={{
          position: "absolute",
          bottom: 48, left: "50%",
          transform: "translateX(-50%)",
          opacity: isOpening ? 0 : 1,
          transition: "opacity 0.2s",
          fontFamily: "var(--font-sans, sans-serif)",
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(60,52,38,0.6)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        click to open
      </p>
    </div>
  );
}
