"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Schedule", href: "#schedule" },
  { label: "Dress Code", href: "#dress-code" },
  { label: "FAQ", href: "#faq" },
  { label: "RSVP", href: "/rsvp" },
];

function scrollToSection(href: string) {
  if (href === "#home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  const rect = el.getBoundingClientRect();
  window.scrollTo({ top: window.scrollY + rect.top, behavior: "smooth" });
}

export default function HeroFull() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const play = () => videoRef.current?.play().catch(() => {});
    // The intro overlay always shows and dispatches "intro:opened" on click,
    // which starts hero playback.
    window.addEventListener("intro:opened", play, { once: true });
    return () => window.removeEventListener("intro:opened", play);
  }, []);

  // Prevent body scroll when menu is open, and let other fixed UI (e.g. the
  // music player) know so it can get out of the way of the nav links.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("nav-menu", { detail: menuOpen }));
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full scale-[1.01] object-cover"
        muted
        loop
        playsInline
        poster="/images/hero-poster.webp"
      >
        <source src="/video/hero.webm?v=2" type="video/webm" />
        <source src="/video/hero.mp4?v=2" type="video/mp4" />
      </video>

      {/* Top scrim for nav legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

      {/* ── Desktop nav ─────────────────────────────────────────────── */}
      <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-center gap-[100px] px-6 py-5">
        <div className="hidden items-center gap-[100px] md:flex">
          {NAV.slice(0, 3).map((i) =>
            i.href.startsWith("#") ? (
              <a
                key={i.label}
                href={i.href}
                className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
                onClick={(e) => { e.preventDefault(); scrollToSection(i.href); }}
              >
                {i.label}
              </a>
            ) : (
              <Link
                key={i.label}
                href={i.href}
                className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
              >
                {i.label}
              </Link>
            )
          )}
        </div>

        <Image
          src="/images/monogram-v2.webp"
          alt="Carlo & Trixia monogram"
          width={447}
          height={447}
          className="h-24 w-24 md:h-28 md:w-28"
          priority
        />

        <div className="hidden items-center gap-[100px] md:flex">
          {NAV.slice(3).map((i) =>
            i.href.startsWith("#") ? (
              <a
                key={i.label}
                href={i.href}
                className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
                onClick={(e) => { e.preventDefault(); scrollToSection(i.href); }}
              >
                {i.label}
              </a>
            ) : (
              <Link
                key={i.label}
                href={i.href}
                className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
              >
                {i.label}
              </Link>
            )
          )}
        </div>

        {/* ── Mobile hamburger (fixed so it stays on screen while scrolling) ── */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
          className="fixed right-4 top-4 z-40 flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-full bg-black/30 md:hidden"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <span className="h-px w-5 bg-white/90" />
          <span className="h-px w-5 bg-white/90" />
          <span className="h-px w-5 bg-white/90" />
        </button>
      </nav>

      {/* ── Mobile nav drawer ───────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#1a1f14]/97 md:hidden"
          style={{ backdropFilter: "blur(4px)" }}
        >
          {/* Close button */}
          <button
            onClick={closeMenu}
            aria-label="Close navigation"
            className="absolute right-5 top-6 flex h-10 w-10 items-center justify-center text-cream/70"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Monogram */}
          <div className="flex justify-center pt-10">
            <Image
              src="/images/monogram-v2.webp"
              alt=""
              aria-hidden
              width={80}
              height={80}
              className="opacity-60"
            />
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV.map((i) =>
              i.href.startsWith("#") ? (
                <a
                  key={i.label}
                  href={i.href}
                  className="font-sans text-[14px] font-light uppercase tracking-[0.22em] text-cream/80 transition-colors hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    setTimeout(() => scrollToSection(i.href), 300);
                  }}
                >
                  {i.label}
                </a>
              ) : (
                <Link
                  key={i.label}
                  href={i.href}
                  className="font-sans text-[14px] font-light uppercase tracking-[0.22em] text-cream/80 transition-colors hover:text-white"
                  onClick={closeMenu}
                >
                  {i.label}
                </Link>
              )
            )}
          </nav>

          {/* Date tag */}
          <p className="pb-12 text-center font-serif text-[12px] tracking-[0.15em] text-cream/30">
            Saturday · 28 November 2026 · Cebu
          </p>
        </div>
      )}

      {/* Couple names */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="font-script leading-[0.9] [text-shadow:0px_-2px_6.2px_rgba(0,0,0,0.44)] text-[clamp(56px,11vw,168px)]">
          Carlo &amp; Trixia
        </h1>
        <p className="mt-2 font-serif uppercase text-white text-[clamp(11px,1.4vw,20px)] tracking-[0.55em] md:tracking-[0.8em]">
          Are Getting Married
        </p>
      </div>
    </section>
  );
}
