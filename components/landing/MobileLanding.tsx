/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import ScaledCanvas from "../ScaledCanvas";
import MobileCountdown from "./MobileCountdown";

// Figma mobile frame: 402 x 7319 (node 189:1147 — MOBILE VIEW Revised)
const MOBILE_W = 402;
const MOBILE_H = 7419;

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
      {/* Welcome section bg — same image flipped vertically (Figma node 189:1215) */}
      <div className="absolute pointer-events-none" style={{ left: -6, top: 873, width: 415, height: 876 }}>
        <div style={{ transform: "scaleY(-1)", width: 415, height: 876 }}>
          <img src="/images/bg-welcome-story.webp" alt="" aria-hidden
            className="h-full w-full object-cover object-bottom" />
        </div>
      </div>
      {/* Our Story section bg (Figma node 189:1216) */}
      <img src="/images/bg-welcome-story.webp" alt="" aria-hidden
        className="absolute left-[-1px] top-[1752px] h-[799px] w-[402px] object-cover object-bottom" />
      {/* bg-details — dark forest behind schedule/gifts/faq (Figma node 189:1148) */}
      <div className="absolute pointer-events-none" style={{ left: -104, top: 2817, width: 610, height: 2872 }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src="/images/bg-details.webp" alt="" aria-hidden
            className="absolute max-w-none"
            style={{ height: "100%", left: "-75.6%", top: 0, width: "351.68%" }} />
        </div>
      </div>

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
      {/* overflow-hidden clips the rotated botanical elements that would otherwise bleed into countdown section */}
      <section id="our-story" className="absolute left-0 top-0 w-[402px]" style={{ height: 2817 }}>
        {/* Torn silk border */}
        <div className="absolute flex h-[300px] items-center justify-center pointer-events-none"
          style={{ left: -37, top: 1578, width: 478, zIndex: 20 }}>
          <div style={{ transform: "rotate(-174.18deg) scaleY(-1)" }}>
            <img src="/images/story-silk.webp" alt="" aria-hidden className="h-[256px] w-[455px] object-cover" />
          </div>
        </div>

        {/* Left arch corner */}
        <div className="absolute overflow-hidden pointer-events-none" style={{ left: 9, top: 1752, width: 171, height: 245, zIndex: 10 }}>
          <img src="/images/story-21.webp" alt="" aria-hidden className="absolute max-w-none"
            style={{ height: "268.13%", left: "-0.06%", top: 0, width: "296.25%" }} />
        </div>
        {/* Right arch corner (mirrored) — Figma: left=246, top=1791 */}
        <div className="absolute flex items-center justify-center pointer-events-none"
          style={{ left: 246, top: 1791, width: 171, height: 245, zIndex: 10 }}>
          <div style={{ transform: "rotate(180deg) scaleY(-1)" }}>
            <div className="overflow-hidden" style={{ width: 171, height: 245 }}>
              <img src="/images/story-21.webp" alt="" aria-hidden className="absolute max-w-none"
                style={{ height: "268.13%", left: "-0.06%", top: 0, width: "296.25%" }} />
            </div>
          </div>
        </div>

        {/* Large background (story-22) */}
        <div className="absolute overflow-hidden pointer-events-none" style={{ left: -51, top: 1889, width: 506, height: 898 }}>
          <img src="/images/story-22.webp" alt="" aria-hidden className="absolute max-w-none"
            style={{ height: "123.6%", left: "-34.71%", top: "-10.7%", width: "169.51%" }} />
        </div>

        {/* "Our Story" heading */}
        <h3 className="absolute left-[202px] top-[2068px] w-[366px] -translate-x-1/2 -translate-y-1/2 font-heading text-[68px] leading-none text-[#2e3e09] text-center">Our Story</h3>

        {/* ── PHOTO COLLAGE (Figma node 189:1230 "Group 12") — couple photos + lily art,
              top-right quadrant. Exact coords/crops from Figma; calc() anchored to the 402px canvas. ── */}
        {/* story-6 sparkler photo (rotate -1.72deg) */}
        <div className="absolute flex h-[204.122px] items-center justify-center pointer-events-none left-[calc(50%+39.59px)] top-[2246.28px] w-[145.029px]">
          <div className="flex-none rotate-[-1.72deg]">
            <div className="relative h-[200.039px] w-[139.089px]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/images/story-6.webp" alt="" aria-hidden className="absolute h-full left-[-155.81%] max-w-none top-0 w-[255.81%]" />
              </div>
            </div>
          </div>
        </div>
        {/* story-6 lily (rotate 48.58deg) */}
        <div className="absolute flex h-[190.269px] items-center justify-center pointer-events-none left-[calc(25%+34.32px)] top-[2150.65px] w-[190.353px]">
          <div className="flex-none rotate-[48.58deg]">
            <div className="relative h-[135.306px] w-[134.361px]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/images/story-6.webp" alt="" aria-hidden className="absolute h-[182.11%] left-[-40.53%] max-w-none top-[-60.77%] w-[326.18%]" />
              </div>
            </div>
          </div>
        </div>
        {/* story-4 large photo (rotate 12.13deg) */}
        <div className="absolute flex h-[198.963px] items-center justify-center pointer-events-none left-[calc(50%+23.45px)] top-[2126.88px] w-[171.256px]">
          <div className="flex-none rotate-[12.13deg]">
            <div className="relative h-[173.895px] w-[137.799px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/images/story-4.webp" alt="" aria-hidden className="absolute h-[116.36%] left-[-17.78%] max-w-none top-[-8.64%] w-[261.19%]" />
              </div>
            </div>
          </div>
        </div>
        {/* story-4 small photo b (rotate -6.86deg) */}
        <div className="absolute flex h-[88.077px] items-center justify-center pointer-events-none left-[calc(50%+5.71px)] top-[2252.69px] w-[94.687px]">
          <div className="flex-none rotate-[-6.86deg]">
            <div className="relative h-[78.368px] w-[85.937px]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/images/story-4.webp" alt="" aria-hidden className="absolute h-[171.03%] left-[-132.19%] max-w-none top-[-12.69%] w-[277.41%]" />
              </div>
            </div>
          </div>
        </div>
        {/* story-6 lily right (rotate 77.02deg) */}
        <div className="absolute flex h-[125.748px] items-center justify-center pointer-events-none left-[calc(75%+5.09px)] top-[2195.72px] w-[126.301px]">
          <div className="flex-none rotate-[77.02deg]">
            <div className="relative h-[105.467px] w-[104.73px]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/images/story-6.webp" alt="" aria-hidden className="absolute h-[182.11%] left-[-40.53%] max-w-none top-[-60.77%] w-[326.18%]" />
              </div>
            </div>
          </div>
        </div>
        {/* story-4 tiny sliver (rotate 12.13deg) */}
        <div className="absolute flex h-[57.032px] items-center justify-center pointer-events-none left-[calc(75%+23.6px)] top-[2268.36px] w-[44.917px]">
          <div className="flex-none rotate-[12.13deg]">
            <div className="relative h-[50.807px] w-[35.025px]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/images/story-4.webp" alt="" aria-hidden className="absolute h-[398.27%] left-[-363.39%] max-w-none top-[-271.82%] w-[1027.58%]" />
              </div>
            </div>
          </div>
        </div>
        {/* story-6 lily sliver (rotate -1.72deg) */}
        <div className="absolute flex h-[82.761px] items-center justify-center pointer-events-none left-[calc(50%+40.36px)] top-[2278.23px] w-[55.833px]">
          <div className="flex-none rotate-[-1.72deg]">
            <div className="relative h-[81.195px] w-[53.421px]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/images/story-6.webp" alt="" aria-hidden className="absolute h-[246.37%] left-[-405.66%] max-w-none top-[-35.76%] w-[666.03%]" />
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTANICAL DECORATIONS ── */}
        {/* story-26 (Figma node 189:1229) — walking-couple photo only. The crop window is
              clipped on the right (width 190 vs the original 323.63) so the adjacent dark
              lake photo in the sprite no longer covers the right-hand story text (block 2).
              Image is sized in px so narrowing the window keeps the couple at the same
              scale/position (no rescale, no stretch). */}
        <div className="absolute pointer-events-none overflow-hidden" style={{ left: -34, top: 2388, width: 224, height: 270, transform: "scale(0.9)", transformOrigin: "top left" }}>
          <img src="/images/story-26.webp" alt="" aria-hidden className="absolute max-w-none"
            style={{ width: 617, height: 347, left: -38, top: -37 }} />
        </div>

        {/* Couple lake/boat photo */}
        <div className="absolute overflow-hidden pointer-events-none" style={{ left: 151, top: 2669, width: 337, height: 191 }}>
          <img src="/images/story-24.webp" alt="" aria-hidden className="absolute max-w-none"
            style={{ height: "330.82%", left: "-20.01%", top: "-76.1%", width: "144.22%" }} />
        </div>

        {/* story-26 foliage (10.93deg) — Figma node 189:1243 (x≈-18) */}
        <div className="absolute pointer-events-none overflow-visible" style={{ left: -18, top: 2620, width: 375, height: 316 }}>
          <div style={{ transform: "rotate(10.93deg)" }}>
            <div className="relative overflow-hidden" style={{ width: 333, height: 257 }}>
              <img src="/images/story-26.webp" alt="" aria-hidden className="absolute max-w-none"
                style={{ height: "156.45%", left: "-105.56%", top: "-13.03%", width: "215.17%" }} />
            </div>
          </div>
        </div>

        {/* story-25 lily clusters */}
        <div className="absolute pointer-events-none overflow-visible" style={{ left: -13, top: 2745, width: 226, height: 176 }}>
          <div style={{ transform: "rotate(108.12deg) scaleY(-1)" }}>
            <div className="overflow-hidden" style={{ width: 120, height: 199 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden className="absolute max-w-none"
                style={{ height: "220.23%", left: "-16.39%", width: "283.14%" }} />
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none overflow-visible" style={{ left: 168, top: 2749, width: 227, height: 157 }}>
          <div style={{ transform: "rotate(79.42deg)" }}>
            <div className="overflow-hidden" style={{ width: 121, height: 209 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden className="absolute max-w-none"
                style={{ height: "212.53%", left: "-16.39%", width: "283.14%" }} />
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none overflow-visible" style={{ left: -98, top: 2695, width: 330, height: 227 }}>
          <div style={{ transform: "rotate(106.7deg)" }}>
            <div className="overflow-hidden" style={{ width: 146, height: 301 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden className="absolute max-w-none"
                style={{ height: "143.2%", left: "-13.18%", width: "227.73%" }} />
            </div>
          </div>
        </div>
        {/* story-26 bottom foliage (174.91deg) — Figma node 189:1249 sits at the right edge
              (x≈407), not center; the working tree had it at left:169 which tangled the ribbon. */}
        <div className="absolute pointer-events-none overflow-visible" style={{ left: 407, top: 2715, width: 254, height: 203 }}>
          <div style={{ transform: "rotate(174.91deg) scaleY(-1)" }}>
            <div className="overflow-hidden" style={{ width: 239, height: 183 }}>
              <img src="/images/story-26.webp" alt="" aria-hidden className="absolute max-w-none"
                style={{ height: "158.09%", left: "-105.56%", top: "-13.17%", width: "215.17%" }} />
            </div>
          </div>
        </div>

        {/* story-25 final cluster (88.03deg) */}
        <div className="absolute pointer-events-none overflow-visible" style={{ left: 231, top: 2797, width: 186, height: 145 }}>
          <div style={{ transform: "rotate(88.03deg) scaleY(-1)" }}>
            <div className="overflow-hidden" style={{ width: 139, height: 181 }}>
              <img src="/images/story-25.webp" alt="" aria-hidden className="absolute max-w-none"
                style={{ height: "194.29%", left: "-11.62%", top: "1.44%", width: "196.43%" }} />
            </div>
          </div>
        </div>

        {/* ── STORY TEXT (Figma nodes 189:1240 / 189:1241) — two staggered columns
              that weave around the photo cluster; rendered last so the words stay
              legible above the collage. Block 1 left-aligned, block 2 right-aligned. ── */}
        {/* Left column — bold opening (Figma 189:1240, x51 y2135 w155) */}
        <div className="absolute font-serif text-[14px] leading-snug text-[#2e3e09]"
          style={{ left: 51, top: 2135, width: 155 }}>
          <p className="font-bold">Who would&apos;ve thought a random food trip would lead to forever?</p>
          <p className="mt-3">Although Carlo and Trixia came from the same school in Palompon, Leyte, they didn&apos;t meet until 2019, when their friend invited Carlo to join a Binondo food trip at&nbsp;Wai&nbsp;Ying.</p>
        </div>
        {/* Right column — closing (Figma 189:1241, x184 y2446 w156, right-aligned) */}
        <div className="absolute font-serif text-[14px] leading-snug text-[#2e3e09] text-right"
          style={{ left: 184, top: 2424, width: 156 }}>
          <p>One simple invitation turned into more food adventures, Feast Sundays, and countless moments that slowly became something special.</p>
          <p className="mt-3">The rest, as they say, is history, and now they&apos;re excited to start their greatest adventure yet, with all of you by&nbsp;their&nbsp;side.</p>
        </div>
      </section>

      {/* ============ COUNTDOWN + DETAILS ============ */}
      <section id="schedule" className="absolute left-0 top-0 w-[402px] text-center">
        {/* Soft clouds behind the countdown + details text (legibility on the misty bg).
            Scaled wrappers so the fixed-pixel .cloud gradients shrink to mobile. */}
        <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: -23, top: 2885 }}>
          <div className="cloud cloud-c cloud-r-slow" style={{ opacity: 0.5 }} /></div>
        <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: 120, top: 2960 }}>
          <div className="cloud cloud-a cloud-l-med" style={{ opacity: 0.45 }} /></div>
        <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: -45, top: 3360 }}>
          <div className="cloud cloud-e cloud-bob-1" style={{ opacity: 0.5 }} /></div>
        <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: 150, top: 3440 }}>
          <div className="cloud cloud-b cloud-r-med" style={{ opacity: 0.45 }} /></div>
        <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: -45, top: 3820 }}>
          <div className="cloud cloud-e cloud-l-slow" style={{ opacity: 0.5 }} /></div>
        <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: 120, top: 3910 }}>
          <div className="cloud cloud-a cloud-bob-2" style={{ opacity: 0.45 }} /></div>

        {/* Glassmorphism card behind the countdown + script (frosts the misty bg) */}
        <div
          className="absolute left-[201px] -translate-x-1/2 pointer-events-none"
          style={{
            top: 2900,
            width: 348,
            height: 168,
            borderRadius: 26,
            background: "rgba(255,255,255,0.22)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.45)",
            boxShadow: "0 8px 32px rgba(46,62,9,0.10)",
          }}
        />
        <MobileCountdown />
        <h2 className="absolute left-[201px] top-[3034px] w-[402px] -translate-x-1/2 -translate-y-1/2 font-script text-[42px] leading-none text-[#2e3e09]">Until We Say &ldquo;I Do&rdquo;</h2>
        <h3 className="absolute left-[201px] top-[3100px] w-[336px] -translate-x-1/2 font-serif text-[25px] leading-none text-[#73855e]">DETAILS</h3>
        <p className="absolute left-[201px] top-[3129px] w-[302px] -translate-x-1/2 font-serif text-[15px] uppercase tracking-[0.15em] text-[#73855e]">Saturday 28 November 2026</p>

        {/* Ceremony card */}
        <Image src="/images/venue-chapel.webp" alt="Chapel of San Pedro Calungsod" width={303} height={222}
          className="absolute left-[49px] top-[3160px] h-[222px] w-[303px] rounded-[10px] object-cover" />
        <div className="absolute left-[50px] top-[3408px] w-[302px] font-serif text-[#2e3e09] text-center">
          <p className="font-script text-[28px] leading-tight">The Wedding Day</p>
          <p className="text-[18px] leading-tight">Ceremony &middot; 2PM</p>
          <p className="text-[18px] font-bold leading-tight">Chapel of San Pedro Calungsod</p>
          <p className="mt-1 text-[14px] leading-snug">Join us as we exchange vows and begin our forever surrounded by the love of family and friends.</p>
        </div>
        <MapBtn href={maps("Chapel of San Pedro Calungsod Cebu")} label="Google Maps" left={72} top={3569} width={105} />
        <MapBtn href={gcal("Carlo & Trixia — Ceremony", "20261128T060000Z", "20261128T073000Z", "Chapel of San Pedro Calungsod, Cebu")} label="Add to Calendar" left={189} top={3569} width={141} />

        {/* Reception card */}
        <Image src="/images/venue-bai.webp" alt="Bai Hotel Cebu" width={303} height={213}
          className="absolute left-[50px] top-[3627px] h-[213px] w-[303px] rounded-[10px] object-cover" />
        <div className="absolute left-[50px] top-[3873px] w-[302px] font-serif text-[#2e3e09] text-center">
          <p className="font-script text-[28px] leading-tight">Reception &amp; Revelry</p>
          <p className="text-[18px] leading-tight">Celebration &middot; 4PM onwards</p>
          <p className="text-[18px] font-bold leading-tight">Bai Hotel Cebu</p>
          <p className="mt-1 text-[14px] leading-snug">From heartfelt toasts to joyful moments on the dance floor, we look forward to sharing this special occasion with you long into the night.</p>
        </div>
        <MapBtn href={maps("Bai Hotel Cebu")} label="Google Maps" left={74} top={4032} width={105} />
        <MapBtn href={gcal("Carlo & Trixia — Reception", "20261128T080000Z", "20261128T140000Z", "Bai Hotel Cebu")} label="Add to Calendar" left={191} top={4032} width={141} />
      </section>

      {/* ============ ANIMATED CLOUDS — behind Dress Code, up to "For Ladies" ============
          The .cloud gradients are fixed-pixel, so each is wrapped in a scale() container
          (transform-origin top-left) to shrink it to mobile; the inner div keeps its drift
          animation. These sit on the dark-forest bg and behind the dress-code text. */}
      <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: -24, top: 4081 }}>
        <div className="cloud cloud-c cloud-r-slow" style={{ opacity: 0.55 }} /></div>
      <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: -47, top: 4237 }}>
        <div className="cloud cloud-a cloud-l-med" style={{ opacity: 0.5 }} /></div>
      <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: 154, top: 4271 }}>
        <div className="cloud cloud-b cloud-bob-1" style={{ opacity: 0.52 }} /></div>
      <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: -86, top: 4366 }}>
        <div className="cloud cloud-e cloud-r-med" style={{ opacity: 0.5 }} /></div>
      <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: 133, top: 4437 }}>
        <div className="cloud cloud-a cloud-l-slow" style={{ opacity: 0.48 }} /></div>
      <div className="absolute left-0 top-0 pointer-events-none" style={{ transform: "scale(0.32)", transformOrigin: "top left", left: -24, top: 4501 }}>
        <div className="cloud cloud-c cloud-bob-2" style={{ opacity: 0.45 }} /></div>

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
      {/* Full-margin card art (same asset/scale as the Gifts card, both 2906×4096)
          so the lace edges aren't clipped like the tight-cropped guest-card.webp. */}
      <img src="/images/faq-floral.webp" alt="Guest accommodation information" aria-hidden
        className="absolute pointer-events-none max-w-none"
        style={{ left: -22, top: 4560, width: 446 }} />

      {/* ============ GIFTS ============ */}
      <section className="absolute overflow-hidden pointer-events-none" style={{ left: -52, top: 5116, width: 488, height: 501 }}>
        <img src="/images/section-gifts.webp" alt="Gifts information" aria-hidden
          className="absolute max-w-none"
          style={{ height: "137.22%", left: "0", top: "-13.44%", width: "100%" }} />
      </section>

      {/* ============ FAQ ============ */}
      {/* Decorative lace border (torn-paper top edge, flipped) */}
      <div className="absolute flex h-[80px] items-center justify-center pointer-events-none"
        style={{ left: -28, top: 5612, width: 459 }}>
        <div style={{ transform: "rotate(180deg)" }}>
          <div className="h-[80px] w-[459px] overflow-hidden">
            <img src="/images/faq-lace.webp" alt="" aria-hidden
              className="absolute max-w-none"
              style={{ height: "384.22%", left: "-8.45%", top: "-247.43%", width: "119%" }} />
          </div>
        </div>
      </div>

      <section id="faq" className="absolute left-0 top-[5689px] h-[873px] w-[402px] bg-[#ebebeb] text-center">
        <h2 className="absolute left-[201px] top-[110px] w-[302px] -translate-x-1/2 -translate-y-1/2 font-faq text-[38px] font-bold leading-none text-black">Frequently Asked Questions</h2>
        <div className="absolute left-[50px] top-[148px] w-[302px] text-black">
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
      <footer id="rsvp" className="absolute left-0 top-[6562px] h-[857px] w-[402px]">
        {/* Boat / couple photo background */}
        <img src="/images/footer-boat.webp" alt="Carlo and Trixia in a boat on the lake"
          className="absolute inset-0 h-full w-full object-cover object-bottom" />

        {/* Lily arrangement — decorative overlay, slightly rotated */}
        <div className="absolute overflow-hidden pointer-events-none"
          style={{ left: "75.55px", top: "-168.41px", width: "386.99px", height: "373.64px",
            transform: "rotate(-1.72deg)" }}>
          <img src="/images/footer-flower.webp" alt="" aria-hidden
            className="absolute max-w-none"
            style={{ height: "149.28%", left: "-155.81%", top: "-14.54%", width: "255.81%" }} />
        </div>

        {/* Envelope */}
        <div className="absolute pointer-events-none" style={{ left: 0, top: -180, width: 354, height: 268, transform: "rotate(-3.12deg) scale(0.88)", transformOrigin: "center" }}>
          <div className="overflow-hidden" style={{ width: 341, height: 250 }}>
            <img src="/images/footer-envelope.webp" alt="" aria-hidden
              className="absolute max-w-none"
              style={{ height: "100%", left: "0", top: "0", width: "130.42%" }} />
          </div>
        </div>

        {/* Lace "Kindly Respond" card */}
        <div className="absolute left-[51px] top-[0px] h-[258px] w-[328px] overflow-hidden pointer-events-none" style={{ transform: "scale(1.08)", transformOrigin: "center" }}>
          <img src="/images/footer-card.webp" alt="" aria-hidden
            className="absolute max-w-none"
            style={{ height: "133.12%", left: "-40.93%", top: "-24.05%", width: "186.27%" }} />
        </div>

        {/* RSVP button */}
        <Link
          href="/rsvp"
          className="absolute z-10 flex h-[35px] w-[84px] cursor-pointer items-center justify-center rounded-[8px] bg-[#7d9176] font-serif text-[14px] text-white"
          style={{ left: "172px", top: "168px", transform: "rotate(7.44deg) scale(1.08)", transformOrigin: "center" }}
        >
          RSVP
        </Link>
      </footer>

    </ScaledCanvas>
  );
}
