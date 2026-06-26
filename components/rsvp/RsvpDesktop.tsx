/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import RsvpForm from "./RsvpForm";

const RSVP_H = 1414;

const NAV = [
  { label: "Home", cx: 202.5, href: "/#home" },
  { label: "Our Story", cx: 387, href: "/#our-story" },
  { label: "Schedule", cx: 571.5, href: "/#schedule" },
  { label: "Dress Code", cx: 940.5, href: "/#dress-code" },
  { label: "FAQ", cx: 1125, href: "/#faq" },
  { label: "RSVP", cx: 1309.5, href: "/rsvp", active: true },
];

export default function RsvpDesktop() {
  return (
    <div
      className="canvas-wrap canvas-desktop-wrap"
      style={{ ["--desktop-h" as string]: RSVP_H }}
    >
      <div className="canvas canvas-desktop bg-black">
        {/* Forest background (node 195:27) */}
        <img
          src="/images/rsvp-forest.png"
          alt=""
          aria-hidden
          className="absolute left-0 top-[-12px] h-[1426px] w-[1536px] object-cover"
        />

        {/* Lily + paper card (node 195:31) */}
        <div className="absolute left-[-135px] top-[344px] h-[1070px] w-[1802px] overflow-hidden pointer-events-none">
          <img
            src="/images/rsvp-lily-card.png"
            alt=""
            aria-hidden
            className="absolute left-0 top-[-38.88%] h-[238.26%] w-full max-w-none"
          />
        </div>

        {/* Nav */}
        <nav className="absolute left-0 top-0 h-[62px] w-[1512px]">
          <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-black/55 to-transparent" />
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`absolute top-[24px] -translate-x-1/2 font-sans text-[16px] uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white ${
                item.active ? "font-medium underline" : "font-light"
              }`}
              style={{ left: `${item.cx}px` }}
            >
              {item.label}
            </Link>
          ))}
          <Image
            src="/images/monogram.png"
            alt="Carlo & Trixia monogram"
            width={85}
            height={85}
            className="absolute left-[745px] top-[-12px] -translate-x-1/2"
            priority
          />
        </nav>

        {/* Title */}
        <h1 className="absolute left-[755px] top-[263px] w-[912px] -translate-x-1/2 -translate-y-1/2 text-center font-script text-[162px] leading-none text-white [text-shadow:0px_-2px_6.2px_rgba(0,0,0,0.44)]">
          Carlo &amp; Trixia
        </h1>
        <p className="absolute left-[757px] top-[362px] w-[534px] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[20px] font-bold uppercase tracking-[0.8em] text-white">
          Réponse Souhaitée
        </p>

        {/* Form */}
        <RsvpForm />

        {/* Vinyl record (node 205:33) */}
        <img
          src="/images/record.png"
          alt=""
          aria-hidden
          className="absolute left-[1332px] top-[865px] h-[95px] w-[168px] object-contain"
        />
      </div>
    </div>
  );
}
