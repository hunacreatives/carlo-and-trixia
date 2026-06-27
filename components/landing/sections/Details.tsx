/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Countdown from "./Countdown";

const calIcon = "/images/icon-calendar.svg";

// Helpers for "Add to Calendar" (Google) + Maps links
const gcal = (text: string, start: string, end: string, location: string, details: string) =>
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    text
  )}&dates=${start}/${end}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(
    details
  )}`;

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

function Button({
  href,
  label,
  left,
  width,
  withIcon = false,
}: {
  href: string;
  label: string;
  left: number;
  width: number;
  withIcon?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-[5719px] flex h-[51px] items-center justify-center gap-2 rounded-[10px] bg-[#7d9176] font-serif text-[20px] text-white transition-opacity hover:opacity-90"
      style={{ left: `${left}px`, width: `${width}px` }}
    >
      {withIcon && <img src={calIcon} alt="" className="h-5 w-5" />}
      {label}
    </a>
  );
}

export default function Details() {
  return (
    <section id="schedule" className="absolute left-0 top-0 w-[1512px] text-center">
      {/* Live countdown */}
      <Countdown />

      {/* "Until We Say I Do" */}
      <h2 data-reveal className="absolute left-[755px] top-[4546px] w-[1032px] -translate-x-1/2 -translate-y-1/2 font-script text-[90px] leading-none text-[#2e3e09]">
        Until We Say &ldquo;I Do&rdquo;
      </h2>

      {/* DETAILS */}
      <h3 data-reveal data-reveal-delay="80" className="absolute left-[753px] top-[4774px] w-[336px] -translate-x-1/2 -translate-y-1/2 font-serif text-[60px] leading-none text-[#73855e]">
        DETAILS
      </h3>
      <p data-reveal data-reveal-delay="120" className="absolute left-[773px] top-[4834px] w-[600px] -translate-x-1/2 -translate-y-1/2 font-serif text-[24px] uppercase tracking-[0.18em] text-[#73855e]">
        Saturday 28 November 2026
      </p>

      {/* Divider */}
      <div className="absolute left-[754px] top-[4926px] h-[828px] w-px bg-[#73855e]/50" />

      {/* ---- Chapel / Ceremony card ---- */}
      <img
        src="/images/venue-chapel.webp"
        alt="Chapel of San Pedro Calungsod"
        className="absolute left-[117px] top-[4930px] h-[389px] w-[531px] rounded-[10px] object-cover"
      />
      <div className="absolute left-[117px] top-[5367px] w-[531px] font-serif text-center text-[#2e3e09]">
        <p className="font-script text-[48.5px] leading-tight text-[#2e3e09]">The Wedding Day</p>
        <p className="text-[36px] leading-tight text-[#2e3e09]">Ceremony</p>
        <p className="text-[36px] leading-tight text-[#2e3e09]">2PM</p>
        <p className="text-[36px] font-bold leading-tight text-[#2e3e09]">Chapel of San Pedro Calungsod</p>
        <p className="mt-5 text-[26px] leading-snug text-[#2e3e09]">
          Join us as we exchange vows and begin our forever surrounded by the love of family and friends.
        </p>
      </div>
      <Button href={maps("Chapel of San Pedro Calungsod Cebu")} label="Google Maps" left={145} width={210.872} />
      <Button
        href={gcal(
          "Carlo & Trixia — Wedding Ceremony",
          "20261128T060000Z",
          "20261128T073000Z",
          "Chapel of San Pedro Calungsod, Cebu",
          "Ceremony at 2PM. Join us as we exchange vows."
        )}
        label="Add to Calendar"
        left={380.68}
        width={244.984}
        withIcon
      />

      {/* ---- Reception card ---- */}
      <img
        src="/images/venue-bai.webp"
        alt="Bai Hotel Cebu"
        className="absolute left-[854px] top-[4930px] h-[389px] w-[534px] rounded-[10px] object-cover"
      />
      <div className="absolute left-[854px] top-[5369px] w-[535px] font-serif text-center text-[#2e3e09]">
        <p className="font-script text-[48.5px] leading-tight text-[#2e3e09]">Cocktails &amp; Reception</p>
        <p className="text-[36px] leading-tight text-[#2e3e09]">Celebration</p>
        <p className="text-[36px] leading-tight text-[#2e3e09]">4:00 PM onwards</p>
        <p className="text-[36px] font-bold leading-tight text-[#2e3e09]">Bai Hotel Cebu</p>
        <p className="mt-5 text-[26px] leading-snug text-[#2e3e09]">
          From heartfelt toasts to joyful moments on the dance floor, we look forward to sharing this special occasion with you long into the night.
        </p>
      </div>
      <Button href={maps("Bai Hotel Cebu")} label="Google Maps" left={882} width={210.872} />
      <Button
        href={gcal(
          "Carlo & Trixia — Reception",
          "20261128T080000Z",
          "20261128T140000Z",
          "Bai Hotel Cebu",
          "Cocktails & Reception, 4:00 PM onwards."
        )}
        label="Add to Calendar"
        left={1117.68}
        width={244.984}
        withIcon
      />
    </section>
  );
}
