"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const play = () => videoRef.current?.play().catch(() => {});
    window.addEventListener("intro:opened", play, { once: true });
    return () => window.removeEventListener("intro:opened", play);
  }, []);

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
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Top scrim for nav legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

      {/* Nav */}
      <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-center gap-[100px] px-6 py-5">
        <div className="hidden items-center gap-[100px] md:flex">
          {NAV.slice(0, 3).map((i) => (
            i.href.startsWith("#") ? (
              <a
                key={i.label} href={i.href}
                className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
                onClick={(e) => { e.preventDefault(); scrollToSection(i.href); }}
              >
                {i.label}
              </a>
            ) : (
              <Link key={i.label} href={i.href} className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white">
                {i.label}
              </Link>
            )
          ))}
        </div>
        <Image src="/images/monogram-v2.webp" alt="Carlo & Trixia monogram" width={447} height={447} className="h-24 w-24 md:h-28 md:w-28" priority />
        <div className="hidden items-center gap-[100px] md:flex">
          {NAV.slice(3).map((i) => (
            i.href.startsWith("#") ? (
              <a
                key={i.label} href={i.href}
                className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
                onClick={(e) => { e.preventDefault(); scrollToSection(i.href); }}
              >
                {i.label}
              </a>
            ) : (
              <Link key={i.label} href={i.href} className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white">
                {i.label}
              </Link>
            )
          ))}
        </div>
      </nav>

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
