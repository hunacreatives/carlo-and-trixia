/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import ScaledCanvas from "../ScaledCanvas";
import MobileCountdown from "./MobileCountdown";

// Figma mobile frame: 402 x 6983 (node 189:1322)
const MOBILE_W = 402;
const MOBILE_H = 6983;

function MapBtn({ href, label, left, top, width }: { href: string; label: string; left: number; top: number; width: number }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute flex h-[33px] items-center justify-center rounded-[8px] bg-[#7d9176] font-serif text-[12px] text-white"
      style={{ left, top, width }}
    >
      {label}
    </a>
  );
}

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const gcal = (text: string, start: string, end: string, location: string) =>
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${start}/${end}&location=${encodeURIComponent(location)}`;

export default function MobileLanding() {
  return (
    <ScaledCanvas designWidth={MOBILE_W} designHeight={MOBILE_H} cropTop={873} className="bg-cream">
        {/* ---- Backgrounds ---- */}
        <img src="/images/bg-welcome-story.webp" alt="" aria-hidden className="absolute left-[-1px] top-[1752px] h-[799px] w-[402px] object-cover" />
        <img src="/images/bg-details.webp" alt="" aria-hidden className="absolute left-[-96px] top-[2552px] h-[2701px] w-[594px] object-cover" />

        {/* ============ WELCOME ============ */}
        <section className="absolute left-0 top-0 w-[402px] text-center text-white">
          <h2 className="absolute left-[200px] top-[1073px] w-[303px] -translate-x-1/2 -translate-y-1/2 font-heading text-[90px] leading-none">Welcome</h2>
          <div className="absolute left-[199px] top-[1117px] w-[303px] -translate-x-1/2 space-y-4 font-serif text-[16px] leading-snug">
            <p>Among soft greens and quiet candlelight, two paths became one. We&apos;re so glad you&apos;re here. For years we&apos;ve been writing our story in the small, ordinary moments, the shared mornings, the long drives, the quiet certainty that grew into forever.</p>
            <p>And now we get to celebrate it surrounded by the people who shaped it with us. Look around, find where to be, what to wear, and all the little details we&apos;ve gathered here. Then let us know you&apos;ll be there, because no celebration of ours would feel complete without you.</p>
            <p>With all our love,<br /><span className="font-script text-[35px] leading-[1.2]">Trixia &amp; Don Carlo</span></p>
          </div>
        </section>

        {/* ============ OUR STORY ============ */}
        <section id="our-story" className="absolute left-0 top-0 w-[402px] text-center">
          {/* Floral corners */}
          <img src="/images/story-21.webp" alt="" aria-hidden className="absolute left-[9px] top-[1752px] h-[236px] w-[165px] object-contain opacity-95" />
          <img src="/images/story-21.webp" alt="" aria-hidden className="absolute left-[391px] top-[1752px] h-[236px] w-[165px] -scale-x-100 object-contain opacity-95" />
          <h3 className="absolute left-[80px] top-[1998px] w-[242px] font-heading text-[40px] leading-none text-[#2e3e09]">Our Story</h3>
          {/* Photos */}
          <Image src="/images/venue-chapel.webp" alt="" width={210} height={224} aria-hidden className="absolute left-[20px] top-[2120px] h-[150px] w-[140px] rounded-[8px] object-cover shadow-md -rotate-3" />
          <Image src="/images/venue-bai.webp" alt="" width={210} height={224} aria-hidden className="absolute left-[245px] top-[2110px] h-[150px] w-[135px] rounded-[8px] object-cover shadow-md rotate-3" />
          <p className="absolute left-[130px] top-[2073px] w-[141px] text-center font-serif text-[11px] leading-snug text-[#2e3e09]">
            <span className="font-bold">Who would&apos;ve thought a random food trip would lead to forever?</span> Although Carlo and Trixia came from the same school in Palompon, Leyte, they didn&apos;t meet until 2019, when their friend invited Carlo to join a Binondo food trip at Wai Ying. One simple invitation turned into more food adventures, Feast Sundays, and countless moments that slowly became something special. The rest, as they say, is history, and now they&apos;re excited to start their greatest adventure yet, with all of you by their side.
          </p>
          <Image src="/images/footer-boat.webp" alt="" width={285} height={161} aria-hidden className="absolute left-[47px] top-[2400px] h-[150px] w-[285px] rounded-[8px] object-cover shadow-md" />
        </section>

        {/* ============ COUNTDOWN + DETAILS ============ */}
        <section id="schedule" className="absolute left-0 top-0 w-[402px] text-center">
          <MobileCountdown />
          <h2 className="absolute left-[201px] top-[2660px] w-[420px] -translate-x-1/2 -translate-y-1/2 font-script text-[46px] leading-none text-[#2e3e09]">Until We Say &ldquo;I Do&rdquo;</h2>
          <h3 className="absolute left-[201px] top-[2764px] w-[336px] -translate-x-1/2 font-serif text-[18px] leading-none text-[#73855e]">DETAILS</h3>
          <p className="absolute left-[201px] top-[2792px] w-[302px] -translate-x-1/2 font-serif text-[13px] uppercase tracking-[0.15em] text-[#73855e]">Saturday 28 November 2026</p>

          {/* Ceremony card */}
          <Image src="/images/venue-chapel.webp" alt="Chapel of San Pedro Calungsod" width={303} height={222} className="absolute left-[49px] top-[2824px] h-[222px] w-[303px] rounded-[10px] object-cover" />
          <div className="absolute left-[50px] top-[3072px] w-[302px] font-serif text-[#2e3e09]">
            <p className="font-script text-[24px] leading-tight">The Wedding Day</p>
            <p className="text-[15px] leading-tight text-white">Ceremony · 2PM</p>
            <p className="text-[15px] font-bold leading-tight text-white">Chapel of San Pedro Calungsod</p>
            <p className="mt-2 text-[12px] leading-snug text-white">Join us as we exchange vows and begin our forever surrounded by the love of family and friends.</p>
          </div>
          <MapBtn href={maps("Chapel of San Pedro Calungsod Cebu")} label="Google Maps" left={72} top={3233} width={105} />
          <MapBtn href={gcal("Carlo & Trixia — Ceremony", "20261128T060000Z", "20261128T073000Z", "Chapel of San Pedro Calungsod, Cebu")} label="Add to Calendar" left={189} top={3233} width={141} />

          {/* Reception card */}
          <Image src="/images/venue-bai.webp" alt="Bai Hotel Cebu" width={303} height={213} className="absolute left-[50px] top-[3291px] h-[213px] w-[303px] rounded-[10px] object-cover" />
          <div className="absolute left-[50px] top-[3537px] w-[302px] font-serif text-[#2e3e09]">
            <p className="font-script text-[24px] leading-tight">Reception &amp; Revelry</p>
            <p className="text-[15px] leading-tight text-white">Celebration · 4PM onwards</p>
            <p className="text-[15px] font-bold leading-tight text-white">Bai Hotel Cebu</p>
            <p className="mt-2 text-[12px] leading-snug text-white">From heartfelt toasts to joyful moments on the dance floor, we look forward to sharing this special occasion with you long into the night.</p>
          </div>
          <MapBtn href={maps("Bai Hotel Cebu")} label="Google Maps" left={74} top={3696} width={105} />
          <MapBtn href={gcal("Carlo & Trixia — Reception", "20261128T080000Z", "20261128T140000Z", "Bai Hotel Cebu")} label="Add to Calendar" left={191} top={3696} width={141} />
        </section>

        {/* ============ DRESS CODE ============ */}
        <section id="dress-code" className="absolute left-0 top-0 w-[402px] text-center text-[#2e3e09]">
          <img src="/images/dress-banner.webp" alt="" aria-hidden className="absolute left-[77px] top-[3812px] h-[101px] w-[249px] object-contain opacity-90" />
          <h3 className="absolute left-[201px] top-[3791px] w-[302px] -translate-x-1/2 font-script text-[32px] leading-none">Dress Code</h3>
          <div className="absolute left-[50px] top-[3999px] w-[302px] space-y-2 font-serif text-[12px] leading-snug">
            <p>We kindly invite our guests to dress in <span className="font-bold">formal attire and adhere to the colors</span> as we celebrate this special occasion.</p>
            <div><p className="font-bold">For Gentlemen:</p><p>Barong Tagalog or formal long-sleeved polo · Dress pants or slacks · Closed shoes (leather shoes preferred)</p></div>
            <div><p className="font-bold">For Ladies:</p><p>Long gown or cocktail dress · Formal footwear (heels or elegant flats)</p></div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="absolute left-0 top-[5253px] h-[873px] w-[402px] bg-[#ececec] text-center">
          <h2 className="absolute left-[201px] top-[5500px] w-[360px] -translate-x-1/2 -translate-y-1/2 font-faq text-[44px] font-bold leading-none text-black">Frequently Asked Questions</h2>
          <div className="absolute left-[50px] top-[5540px] w-[302px] text-black">
            {[
              { q: "By when should I respond?", a: "Kindly send your response by September 30, 2026. This helps us finalize seating and catering, so we'd be so grateful for an early reply." },
              { q: "Can I bring my kids or a plus?", a: "Plus-ones are by invitation only. Please check your invitation, if a guest is included, their name will be listed alongside yours. While we adore your little ones, we've planned an adults-focused celebration. Children who are named on the invitation are warmly welcome." },
              { q: "Who can I contact if I have questions?", a: "Feel free to message Trixia or Don Carlo on Messenger anytime, we're happy to help." },
            ].map((f) => (
              <div key={f.q} className="mb-3">
                <p className="font-faq text-[30px] leading-[1.1]">{f.q}</p>
                <p className="font-[family-name:var(--font-marcellus)] text-[11px] leading-[1.45]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer id="rsvp" className="absolute left-0 top-[6126px] h-[857px] w-[402px]">
          <img src="/images/footer-boat.webp" alt="Carlo and Trixia in a boat" className="absolute inset-0 h-full w-full object-cover" />
          <img src="/images/footer-envelope.webp" alt="" aria-hidden className="absolute left-[0px] top-[-123px] h-[373px] w-[387px] object-contain" />
          <div className="absolute left-[65px] top-[37px] h-[258px] w-[328px] overflow-hidden">
            <img src="/images/footer-card.webp" alt="" aria-hidden className="absolute left-1/2 top-1/2 h-[150%] w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2" />
          </div>
          <Link href="/rsvp" className="absolute left-[188px] top-[190px] flex h-[35px] w-[84px] rotate-[7deg] items-center justify-center rounded-[8px] bg-[#7d9176] font-serif text-[14px] text-white">RSVP</Link>
        </footer>
    </ScaledCanvas>
  );
}
