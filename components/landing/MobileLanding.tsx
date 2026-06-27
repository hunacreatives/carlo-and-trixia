/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import ScaledCanvas from "../ScaledCanvas";
import MobileCountdown from "./MobileCountdown";

// Figma mobile frame: 402 x 7319 (node 189:1147 — MOBILE VIEW Revised)
const MOBILE_W = 402;
const MOBILE_H = 7319;

function MapBtn({ href, label, left, top, width }: { href: string; label: string; left: number; top: number; width: number }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute flex h-[33px] items-center justify-center rounded-[10px] bg-[#7d9176] font-serif text-[12px] text-white"
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

      {/* ============ HERO BACKGROUNDS ============ */}
      {/* bg-welcome-story behind welcome + story sections */}
      <img src="/images/bg-welcome-story.webp" alt="" aria-hidden
        className="absolute left-[-1px] top-[1752px] h-[799px] w-[402px] object-cover object-bottom" />
      {/* bg-details behind schedule/dress/accommodation/gifts */}
      <img src="/images/bg-details.webp" alt="" aria-hidden
        className="absolute left-[-104px] top-[2817px] h-[2772px] w-[610px] object-cover" />

      {/* ============ WELCOME ============ */}
      <section className="absolute left-0 top-0 w-[402px] text-center text-white">
        <h2 className="absolute left-[201px] top-[1073px] w-[303px] -translate-x-1/2 -translate-y-1/2 font-heading text-[90px] leading-none">Welcome</h2>
        <div className="absolute left-[48px] top-[1117px] w-[303px] font-serif text-[16px] leading-snug">
          <p>Among soft greens and quiet candlelight, two paths became one. We&apos;re so glad you&apos;re here. For years we&apos;ve been writing our story in the small, ordinary moments, the shared mornings, the long drives, the quiet certainty that grew into forever.</p>
          <p className="mt-4">And now we get to celebrate it surrounded by the people who shaped it with us. Look around, find where to be, what to wear, and all the little details we&apos;ve gathered here. Then let us know you&apos;ll be there, because no celebration of ours would feel complete without you.</p>
          <p className="mt-4">With all our love,<br /><span className="font-script text-[35px] leading-[1.2]">Trixia &amp; Don Carlo</span></p>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section id="our-story" className="absolute left-0 top-0 w-[402px]">
        {/* Torn silk / paper border at top of story */}
        <div className="absolute flex h-[300px] items-center justify-center pointer-events-none"
          style={{ left: -37, top: 1578, width: 478 }}>
          <div className="-scale-y-100 flex-none" style={{ transform: "rotate(-174.18deg) scaleY(-1)" }}>
            <img src="/images/story-silk.webp" alt="" aria-hidden
              className="h-[256px] w-[455px] object-cover" />
          </div>
        </div>

        {/* Floral corners */}
        <img src="/images/story-21.webp" alt="" aria-hidden
          className="absolute left-[9px] top-[1752px] h-[245px] w-[171px] object-contain opacity-95" />
        <div className="absolute pointer-events-none"
          style={{ left: 391, top: 1752, width: 171, height: 245 }}>
          <img src="/images/story-21.webp" alt="" aria-hidden
            className="h-full w-full object-contain opacity-95"
            style={{ transform: "rotate(180deg) scaleY(-1)" }} />
        </div>

        {/* Main story background / large circle photo */}
        <div className="absolute overflow-hidden pointer-events-none"
          style={{ left: -51, top: 1889, width: 506, height: 898 }}>
          <img src="/images/story-22.webp" alt="" aria-hidden
            className="absolute max-w-none"
            style={{ height: "123.6%", left: "-34.71%", top: "-10.7%", width: "169.51%" }} />
        </div>

        {/* Our Story heading */}
        <h3 className="absolute left-[201px] top-[2068px] w-[366px] -translate-x-1/2 -translate-y-1/2 font-heading text-[82px] leading-none text-[#2e3e09] text-center">Our Story</h3>

        {/* Left story text column — bold opening */}
        <div className="absolute font-serif text-[14px] leading-snug text-[#2e3e09]"
          style={{ left: 51, top: 2135, width: 155 }}>
          <p className="font-bold">Who would&apos;ve thought a random food trip would lead to forever?</p>
          <p className="mt-1">Although Carlo and Trixia came from the same school in Palompon, Leyte, they didn&apos;t meet until 2019, when their friend invited Carlo to join a Binondo food trip at Wai Ying.</p>
        </div>

        {/* Photo collage — couple photos + lily art (top-right quadrant) */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: 240, top: 2076, width: 239, height: 253 }}>
          {/* story-4 couple photo - slightly rotated */}
          <Image src="/images/story-4.webp" alt="" aria-hidden width={140} height={180}
            className="absolute shadow-md object-cover rounded-sm"
            style={{ left: 29, top: 90, width: 138, height: 175, transform: "rotate(12.13deg)" }} />
          {/* story-6 lily art overlay */}
          <div className="absolute overflow-hidden"
            style={{ left: 68, top: 97, width: 145, height: 200, transform: "rotate(-1.72deg)" }}>
            <img src="/images/story-6.webp" alt="" aria-hidden
              className="absolute max-w-none"
              style={{ height: "100%", left: "-155.81%", width: "255.81%" }} />
          </div>
          {/* story-4 smaller piece */}
          <Image src="/images/story-4.webp" alt="" aria-hidden width={90} height={115}
            className="absolute shadow-md object-cover rounded-sm"
            style={{ left: 27, top: 100, width: 90, height: 115, transform: "rotate(-6.86deg)" }} />
        </div>

        {/* Botanical decoration story-23 (left arc) */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: -108, top: 2315, width: 351, height: 447 }}>
          <div className="overflow-hidden rounded-sm"
            style={{ width: 394, height: 220, transform: "rotate(-111.75deg) scaleY(-1)" }}>
            <img src="/images/story-23.webp" alt="" aria-hidden
              className="absolute max-w-none"
              style={{ height: "250.99%", left: "-14.99%", top: "-0.12%", width: "108.53%" }} />
          </div>
        </div>

        {/* Botanical decoration story-23 (right arc, rotated) */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: 155, top: 2100, width: 379, height: 436 }}>
          <div className="overflow-hidden rounded-sm"
            style={{ width: 381, height: 213, transform: "rotate(-120.95deg)" }}>
            <img src="/images/story-23.webp" alt="" aria-hidden
              className="absolute max-w-none"
              style={{ height: "250.99%", left: "-14.99%", top: "-0.12%", width: "108.53%" }} />
          </div>
        </div>

        {/* story-26 foliage rotated (left) */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: -80, top: 2316, width: 324, height: 341 }}>
          <div style={{ transform: "rotate(19.14deg)" }}>
            <div className="overflow-hidden"
              style={{ width: 247, height: 276 }}>
              <img src="/images/story-26.webp" alt="" aria-hidden
                className="absolute max-w-none"
                style={{ height: "130.33%", left: "-12.07%", top: "-13.64%", width: "258.75%" }} />
            </div>
          </div>
        </div>

        {/* Right story text column */}
        <div className="absolute font-serif text-[14px] leading-snug text-[#2e3e09] text-right"
          style={{ right: 0, top: 2446, width: 156 }}>
          <p>One simple invitation turned into more food adventures, Feast Sundays, and countless moments that slowly became something special.</p>
          <p className="mt-2">The rest, as they say, is history, and now they&apos;re excited to start their greatest adventure yet, with all of you by their side.</p>
        </div>

        {/* Couple boat / lake photo */}
        <div className="absolute overflow-hidden pointer-events-none"
          style={{ left: 151, top: 2669, width: 337, height: 191 }}>
          <img src="/images/story-24.webp" alt="" aria-hidden
            className="absolute max-w-none"
            style={{ height: "330.82%", left: "-20.01%", top: "-76.1%", width: "144.22%" }} />
        </div>

        {/* story-26 foliage (center, angled) */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: -67, top: 2620, width: 375, height: 316 }}>
          <div style={{ transform: "rotate(10.93deg)" }}>
            <div className="overflow-hidden" style={{ width: 333, height: 257 }}>
              <img src="/images/story-26.webp" alt="" aria-hidden
                className="absolute max-w-none"
                style={{ height: "156.45%", left: "-105.56%", top: "-13.03%", width: "215.17%" }} />
            </div>
          </div>
        </div>

        {/* story-25 lily cluster — multiple tall botanicals */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: -13, top: 2745, width: 226, height: 176 }}>
          <div style={{ transform: "rotate(108.12deg) scaleY(-1)" }}>
            <div className="overflow-hidden" style={{ width: 120, height: 199 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden
                className="absolute max-w-none"
                style={{ height: "220.23%", left: "-16.39%", width: "283.14%" }} />
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: 168, top: 2749, width: 227, height: 157 }}>
          <div style={{ transform: "rotate(79.42deg)" }}>
            <div className="overflow-hidden" style={{ width: 121, height: 209 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden
                className="absolute max-w-none"
                style={{ height: "212.53%", left: "-16.39%", width: "283.14%" }} />
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: -98, top: 2695, width: 330, height: 227 }}>
          <div style={{ transform: "rotate(106.7deg)" }}>
            <div className="overflow-hidden" style={{ width: 146, height: 301 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden
                className="absolute max-w-none"
                style={{ height: "143.2%", left: "-13.18%", width: "227.73%" }} />
            </div>
          </div>
        </div>

        {/* story-26 bottom foliage */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: 169, top: 2715, width: 254, height: 203 }}>
          <div style={{ transform: "rotate(174.91deg) scaleY(-1)" }}>
            <div className="overflow-hidden" style={{ width: 239, height: 183 }}>
              <img src="/images/story-26.webp" alt="" aria-hidden
                className="absolute max-w-none"
                style={{ height: "158.09%", left: "-105.56%", top: "-13.17%", width: "215.17%" }} />
            </div>
          </div>
        </div>

        {/* story-25 final cluster */}
        <div className="absolute pointer-events-none overflow-visible"
          style={{ left: 231, top: 2797, width: 186, height: 145 }}>
          <div style={{ transform: "rotate(88.03deg) scaleY(-1)" }}>
            <div className="overflow-hidden" style={{ width: 139, height: 181 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden
                className="absolute max-w-none"
                style={{ height: "194.29%", left: "-11.62%", top: "1.44%", width: "196.43%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ COUNTDOWN + DETAILS ============ */}
      <section id="schedule" className="absolute left-0 top-0 w-[402px] text-center">
        <MobileCountdown />
        <h2 className="absolute left-[201px] top-[2961px] w-[402px] -translate-x-1/2 -translate-y-1/2 font-script text-[46px] leading-none text-[#2e3e09]">Until We Say &ldquo;I Do&rdquo;</h2>
        <h3 className="absolute left-[201px] top-[3100px] w-[336px] -translate-x-1/2 font-serif text-[18px] leading-none text-[#73855e]">DETAILS</h3>
        <p className="absolute left-[201px] top-[3129px] w-[302px] -translate-x-1/2 font-serif text-[13px] uppercase tracking-[0.15em] text-[#73855e]">Saturday 28 November 2026</p>

        {/* Ceremony card */}
        <Image src="/images/venue-chapel.webp" alt="Chapel of San Pedro Calungsod" width={303} height={222}
          className="absolute left-[49px] top-[3160px] h-[222px] w-[303px] rounded-[10px] object-cover" />
        <div className="absolute left-[50px] top-[3408px] w-[302px] font-serif text-[#2e3e09] text-center">
          <p className="font-script text-[28px] leading-tight">The Wedding Day</p>
          <p className="text-[18px] leading-tight text-white">Ceremony &middot; 2PM</p>
          <p className="text-[18px] font-bold leading-tight text-white">Chapel of San Pedro Calungsod</p>
          <p className="mt-1 text-[14px] leading-snug text-white">Join us as we exchange vows and begin our forever surrounded by the love of family and friends.</p>
        </div>
        <MapBtn href={maps("Chapel of San Pedro Calungsod Cebu")} label="Google Maps" left={72} top={3569} width={105} />
        <MapBtn href={gcal("Carlo & Trixia — Ceremony", "20261128T060000Z", "20261128T073000Z", "Chapel of San Pedro Calungsod, Cebu")} label="Add to Calendar" left={189} top={3569} width={141} />

        {/* Reception card */}
        <Image src="/images/venue-bai.webp" alt="Bai Hotel Cebu" width={303} height={213}
          className="absolute left-[50px] top-[3627px] h-[213px] w-[303px] rounded-[10px] object-cover" />
        <div className="absolute left-[50px] top-[3873px] w-[302px] font-serif text-[#2e3e09] text-center">
          <p className="font-script text-[28px] leading-tight">Reception &amp; Revelry</p>
          <p className="text-[18px] leading-tight text-white">Celebration &middot; 4PM onwards</p>
          <p className="text-[18px] font-bold leading-tight text-white">Bai Hotel Cebu</p>
          <p className="mt-1 text-[14px] leading-snug text-white">From heartfelt toasts to joyful moments on the dance floor, we look forward to sharing this special occasion with you long into the night.</p>
        </div>
        <MapBtn href={maps("Bai Hotel Cebu")} label="Google Maps" left={74} top={4032} width={105} />
        <MapBtn href={gcal("Carlo & Trixia — Reception", "20261128T080000Z", "20261128T140000Z", "Bai Hotel Cebu")} label="Add to Calendar" left={191} top={4032} width={141} />
      </section>

      {/* ============ DRESS CODE ============ */}
      <section id="dress-code" className="absolute left-0 top-0 w-[402px] text-center text-[#2e3e09]">
        <h3 className="absolute left-[201px] top-[4127px] w-[302px] -translate-x-1/2 -translate-y-1/2 font-script text-[28px] leading-none">Dress Code</h3>
        {/* Color palette swatches */}
        <div className="absolute left-[77px] top-[4148px] h-[101px] w-[249px] overflow-hidden">
          <img src="/images/dress-banner.webp" alt="Wedding colour palette" aria-hidden
            className="absolute max-w-none"
            style={{ height: "437.83%", left: "-72.93%", top: "-169.96%", width: "315.43%" }} />
        </div>
        <div className="absolute overflow-hidden" style={{ left: "calc(25% + 18.5px)", top: 4225, width: 165, height: 101 }}>
          <img src="/images/dress-banner.webp" alt="" aria-hidden
            className="absolute max-w-none"
            style={{ height: "437.83%", left: "-266.39%", top: "-168.82%", width: "476.55%" }} />
        </div>
        <div className="absolute left-[50px] top-[4335px] w-[302px] font-serif text-[15px] leading-snug">
          <p>We kindly invite our guests to dress in <span className="font-bold">formal attire and adhere to the colors</span> as we celebrate this special occasion.</p>
          <p className="mt-2"><span className="font-bold">For Gentlemen:</span><br />Barong Tagalog or formal long-sleeved polo · Dress pants or slacks · Closed shoes (leather shoes preferred)</p>
          <p className="mt-2"><span className="font-bold">For Ladies:</span><br />Long gown or cocktail dress · Formal footwear (heels or elegant flats)</p>
        </div>
      </section>

      {/* ============ GUEST ACCOMMODATION ============ */}
      <section className="absolute pointer-events-none" style={{ left: -14, top: 4512, width: 433, height: 610 }}>
        <img src="/images/guest-card.webp" alt="Guest accommodation information" aria-hidden
          className="absolute inset-0 h-full w-full object-cover" />
      </section>

      {/* ============ GIFTS ============ */}
      <section className="absolute overflow-hidden pointer-events-none" style={{ left: -52, top: 5016, width: 488, height: 501 }}>
        <img src="/images/section-gifts.webp" alt="Gifts information" aria-hidden
          className="absolute max-w-none"
          style={{ height: "137.22%", left: "0", top: "-13.44%", width: "100%" }} />
      </section>

      {/* ============ FAQ ============ */}
      {/* Decorative lace border (torn-paper top edge, flipped) */}
      <div className="absolute flex h-[80px] items-center justify-center pointer-events-none"
        style={{ left: -28, top: 5512, width: 459 }}>
        <div style={{ transform: "rotate(180deg)" }}>
          <div className="h-[80px] w-[459px] overflow-hidden">
            <img src="/images/faq-lace.webp" alt="" aria-hidden
              className="absolute max-w-none"
              style={{ height: "384.22%", left: "-8.45%", top: "-247.43%", width: "119%" }} />
          </div>
        </div>
      </div>

      <section id="faq" className="absolute left-0 top-[5589px] h-[873px] w-[402px] bg-[#ebebeb] text-center">
        <h2 className="absolute left-[201px] top-[5825px] w-[302px] -translate-x-1/2 -translate-y-1/2 font-faq text-[38px] font-bold leading-none text-black">Frequently Asked Questions</h2>
        <div className="absolute left-[50px] top-[5863px] w-[302px] text-black">
          {[
            { q: "By when should I respond?", a: "Kindly send your response by September 30, 2026. This helps us finalize seating and catering, so we'd be so grateful for an early reply." },
            { q: "Can I bring my kids or a plus?", a: "Plus-ones are by invitation only. Please check your invitation, if a guest is included, their name will be listed alongside yours. While we adore your little ones, we've planned an adults-focused celebration. Children who are named on the invitation are warmly welcome." },
            { q: "Who can I contact if I have questions?", a: "Feel free to message Trixia or Don Carlo on Messenger anytime, we're happy to help." },
          ].map((f, idx) => (
            <div key={f.q} className="mb-3">
              <p className="font-faq text-[30px] leading-[1.1]">{f.q}</p>
              <p className="font-[family-name:var(--font-marcellus)] text-[11px] leading-[1.45]">{f.a}</p>
              {idx < 2 && (
                <img src="/images/faq-divider.webp" alt="" aria-hidden
                  className="mx-auto my-2 w-[219px] max-w-full" style={{ height: 40, objectFit: "cover", objectPosition: "center" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="rsvp" className="absolute left-0 top-[6462px] h-[857px] w-[402px]">
        {/* Boat / couple photo background */}
        <img src="/images/footer-boat.webp" alt="Carlo and Trixia in a boat on the lake"
          className="absolute inset-0 h-full w-full object-cover" />

        {/* Lily arrangement — decorative overlay, slightly rotated */}
        <div className="absolute overflow-hidden pointer-events-none"
          style={{ left: "75.55px", top: "-168.41px", width: "386.99px", height: "373.64px",
            transform: "rotate(-1.72deg)" }}>
          <img src="/images/footer-flower.webp" alt="" aria-hidden
            className="absolute max-w-none"
            style={{ height: "149.28%", left: "-155.81%", top: "-14.54%", width: "255.81%" }} />
        </div>

        {/* Envelope */}
        <img src="/images/footer-envelope.webp" alt="" aria-hidden
          className="absolute left-[0px] top-[-141px] h-[373px] w-[387px] object-contain" />

        {/* Lace "Kindly Respond" card */}
        <div className="absolute left-[65px] top-[37px] h-[258px] w-[328px] overflow-hidden">
          <img src="/images/footer-card.webp" alt="" aria-hidden
            className="absolute left-1/2 top-1/2 h-[150%] w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* RSVP button */}
        <Link
          href="/rsvp"
          className="absolute flex h-[35px] w-[84px] items-center justify-center rounded-[8px] bg-[#7d9176] font-serif text-[14px] text-white"
          style={{ left: "188px", top: "190px", transform: "rotate(7.44deg)" }}
        >
          RSVP
        </Link>
      </footer>

    </ScaledCanvas>
  );
}
