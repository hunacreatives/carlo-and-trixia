"use client";
import { useRef, useState, useEffect } from "react";

const SPOTIFY_URL = "https://open.spotify.com/track/2kfGoV9a5dbSKCNmUWH2ZF?si=3b3a7c23cb074457";
const APPLE_URL   = "https://music.apple.com/us/song/turning-page/532884591";

const BAR_HEIGHTS = [20, 12, 22];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.7;

    const start = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    };

    // IntroLetter dispatches this when user clicks to open — that click IS the user gesture
    window.addEventListener("music:start", start, { once: true });

    return () => window.removeEventListener("music:start", start);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/turning-page.mp3" loop preload="auto" />

      {/* Outer wrapper — flex-col so tooltip + record are one continuous hover area, no gap */}
      <div
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tooltip card */}
        <div style={{
          width: 230,
          background: "rgba(20, 27, 15, 0.55)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 20,
          padding: "18px 20px 16px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          pointerEvents: hovered ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}>

          {/* Top row: bars + status */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2.5, height: 18 }}>
              {BAR_HEIGHTS.map((h, i) => (
                <div key={i} style={{
                  width: 3, borderRadius: 99,
                  background: "rgba(176, 179, 149, 0.9)",
                  height: playing ? undefined : 3,
                  maxHeight: h,
                  animation: playing ? `eqBar${i} ${0.5 + i * 0.1}s ease-in-out infinite alternate` : "none",
                }} />
              ))}
            </div>
            <span style={{
              fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(176,179,149,0.9)",
              fontFamily: "var(--font-sans), sans-serif", fontWeight: 500,
            }}>
              {playing ? "Now Playing" : "Paused"}
            </span>
          </div>

          {/* Song info */}
          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: 15, fontWeight: 600, color: "#f4f3f1", lineHeight: 1.2, marginBottom: 3, letterSpacing: "-0.01em",
          }}>
            Turning Page
          </p>
          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: 12, fontWeight: 300, color: "rgba(244,243,241,0.55)", marginBottom: 16, letterSpacing: "0.02em",
          }}>
            Sleeping At Last
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 14 }} />

          {/* Stream buttons */}
          <div style={{ display: "flex", gap: 8 }}>
            <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer" style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              background: "#1DB954", color: "#fff", borderRadius: 99,
              padding: "8px 0", fontSize: 11, fontWeight: 700,
              fontFamily: "var(--font-sans), sans-serif",
              textDecoration: "none", letterSpacing: "0.04em",
              transition: "opacity 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a href={APPLE_URL} target="_blank" rel="noopener noreferrer" style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              background: "linear-gradient(135deg,#fc3c44,#c0408a)",
              color: "#fff", borderRadius: 99,
              padding: "8px 0", fontSize: 11, fontWeight: 700,
              fontFamily: "var(--font-sans), sans-serif",
              textDecoration: "none", letterSpacing: "0.04em",
              transition: "opacity 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple Music
            </a>
          </div>
        </div>

        {/* Equalizer + vinyl row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* 3 bars — hidden while tooltip is open */}
          {!hovered && (
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 24 }}>
              {BAR_HEIGHTS.map((h, i) => (
                <div key={i} style={{
                  width: 3, borderRadius: 99,
                  background: "#ffffff",
                  height: playing ? undefined : 3,
                  maxHeight: h,
                  animation: playing ? `eqBar${i} ${0.5 + i * 0.1}s ease-in-out infinite alternate` : "none",
                }} />
              ))}
            </div>
          )}

          {/* Vinyl */}
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: 0,
              position: "relative", borderRadius: "50%",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
              transition: "transform 0.2s ease, filter 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            <img
              src="/images/record.webp"
              alt=""
              style={{
                width: 52, height: 52, borderRadius: "50%",
                objectFit: "cover", display: "block",
                animation: "recordSpin 4s linear infinite",
                animationPlayState: playing ? "running" : "paused",
              }}
            />
            {!playing && (
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(0,0,0,0.28)",
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <path d="M3 2l9 5-9 5V2z"/>
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes eqBar0 { to { height: 20px; } }
        @keyframes eqBar1 { to { height: 12px; } }
        @keyframes eqBar2 { to { height: 22px; } }
      `}</style>
    </>
  );
}
