/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import ScaledCanvas from "../ScaledCanvas";
import RsvpForm from "./RsvpForm";

const RSVP_W = 1512;
const RSVP_H = 2160;

const NAV_LEFT  = ["Home", "Our Story", "Schedule"];
const NAV_RIGHT = ["Dress Code", "FAQ", "RSVP"];
const NAV_HREFS: Record<string, string> = {
  "Home":       "/#home",
  "Our Story":  "/#our-story",
  "Schedule":   "/#schedule",
  "Dress Code": "/#dress-code",
  "FAQ":        "/#faq",
  "RSVP":       "/rsvp",
};

export default function RsvpDesktop() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url(/images/rsvp-forest.webp)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Nav */}
      <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-center gap-[100px] px-6 py-5">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="relative hidden items-center gap-[100px] md:flex">
          {NAV_LEFT.map((label) => (
            <Link
              key={label}
              href={NAV_HREFS[label]}
              className="font-sans text-[13px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
        <Image
          src="/images/monogram-v2.webp"
          alt="Carlo & Trixia monogram"
          width={447} height={447}
          className="relative h-24 w-24 md:h-28 md:w-28"
          priority
        />
        <div className="relative hidden items-center gap-[100px] md:flex">
          {NAV_RIGHT.map((label) => (
            <Link
              key={label}
              href={NAV_HREFS[label]}
              className={`font-sans text-[13px] uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white ${
                label === "RSVP" ? "font-medium underline underline-offset-4" : "font-light"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* bg="transparent" so the outer wrapper's forest background shows in the gutters */}
      <ScaledCanvas designWidth={RSVP_W} designHeight={RSVP_H} maxWidth={1280} bg="transparent">
        {/* Lily + paper card */}
        <div className="absolute left-[-135px] top-[344px] h-[2020px] w-[1802px] overflow-hidden pointer-events-none">
          <img
            src="/images/rsvp-lily-card.webp"
            alt="" aria-hidden
            className="absolute left-0 w-full max-w-none"
            style={{ top: -416, height: 2549 }}
          />
        </div>

        {/* Title */}
        <h1 className="absolute left-[755px] top-[263px] w-[912px] -translate-x-1/2 -translate-y-1/2 text-center font-script text-[162px] leading-none text-white [text-shadow:0px_-2px_6.2px_rgba(0,0,0,0.44)]">
          Carlo &amp; Trixia
        </h1>
        <p className="absolute left-[757px] top-[362px] w-[534px] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[20px] font-bold uppercase tracking-[0.8em] text-white">
          Réponse Souhaitée
        </p>

        {/* Form */}
        <RsvpForm />
      </ScaledCanvas>
    </div>
  );
}
