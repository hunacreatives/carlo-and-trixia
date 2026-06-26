import Image from "next/image";

const NAV = [
  { label: "Home", cx: 202.5, href: "#home" },
  { label: "Our Story", cx: 387, href: "#our-story" },
  { label: "Schedule", cx: 571.5, href: "#schedule" },
  { label: "Dress Code", cx: 940.5, href: "#dress-code" },
  { label: "FAQ", cx: 1125, href: "#faq" },
  { label: "RSVP", cx: 1309.5, href: "#rsvp" },
];

export default function Hero() {
  return (
    <section id="home" className="absolute left-0 top-0 h-[1006px] w-[1512px]">
      {/* Background video (animated ocean at golden hour) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      {/* Soft top gradient so the nav reads on any frame */}
      <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-black/45 to-transparent" />

      {/* Nav */}
      <nav className="absolute left-0 top-0 h-[62px] w-[1512px]">
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="absolute top-[24px] -translate-x-1/2 font-sans text-[16px] font-light uppercase tracking-[0.12em] text-cream/90 transition-colors hover:text-white"
            style={{ left: `${item.cx}px` }}
          >
            {item.label}
          </a>
        ))}
        {/* Center monogram */}
        <Image
          src="/images/monogram.png"
          alt="Carlo & Trixia monogram"
          width={85}
          height={85}
          className="absolute left-[745px] top-[-12px] -translate-x-1/2"
          priority
        />
      </nav>

      {/* Couple names */}
      <h1 className="absolute left-[755px] top-[490px] w-[912px] -translate-x-1/2 -translate-y-1/2 text-center font-script text-[162px] leading-none text-white [text-shadow:0px_-2px_6.2px_rgba(0,0,0,0.44)]">
        Carlo &amp; Trixia
      </h1>
      <p className="absolute left-[760px] top-[589px] w-[534px] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[20px] uppercase tracking-[0.8em] text-white">
        Are Getting Married
      </p>
    </section>
  );
}
