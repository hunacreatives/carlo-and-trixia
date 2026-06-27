"use client";
import { useState, useEffect } from "react";

const KEY = "intro-opened";
const markOpened = () => sessionStorage.setItem(KEY, "1");

export default function IntroLetter() {
  const [phase, setPhase] = useState<"idle" | "opening" | "done">("idle");

  useEffect(() => {
    if (sessionStorage.getItem(KEY) === "1") setPhase("done");
  }, []);

  const open = () => {
    if (phase !== "idle") return;
    markOpened();
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
      {/* Left panel — shows left half of the image */}
      <div
        style={{
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
        }}
      />

      {/* Right panel — background offset -50vw so it shows the right half of the same image */}
      <div
        style={{
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
        }}
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
