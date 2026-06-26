/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Schedule", href: "#schedule" },
  { label: "Dress Code", href: "#dress-code" },
  { label: "FAQ", href: "#faq" },
  { label: "RSVP", href: "/rsvp" },
];

/**
 * Full-viewport, full-bleed video hero. Sits outside the scaled design canvas so
 * the video always fills the screen edge-to-edge (no hairline borders) and the
 * section fits the viewport height.
 */
export default function HeroFull() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full scale-[1.01] object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Top scrim for nav legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

      {/* Nav */}
      <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-center px-6 py-5">
        {/* Desktop menu (left group) */}
        <div className="hidden flex-1 items-center justify-evenly md:flex">
          {NAV.slice(0, 3).map((i) => (
            <a key={i.label} href={i.href} className="font-sans text-[15px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white">
              {i.label}
            </a>
          ))}
        </div>
        {/* Monogram */}
        <Image src="/images/monogram.png" alt="Carlo & Trixia monogram" width={447} height={447} className="mx-6 h-12 w-12 md:h-16 md:w-16" priority />
        {/* Desktop menu (right group) */}
        <div className="hidden flex-1 items-center justify-evenly md:flex">
          {NAV.slice(3).map((i) => (
            <a key={i.label} href={i.href} className="font-sans text-[15px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white">
              {i.label}
            </a>
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

      {/* Vinyl record motif */}
      <img src="/images/record.png" alt="" aria-hidden className="absolute bottom-8 right-8 hidden h-14 w-24 object-contain md:block" />
    </section>
  );
}
