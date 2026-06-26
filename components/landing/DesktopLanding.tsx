/* eslint-disable @next/next/no-img-element */
import ScaledCanvas from "../ScaledCanvas";
import Welcome from "./sections/Welcome";
import OurStory from "./sections/OurStory";
import Details from "./sections/Details";
import DressCode from "./sections/DressCode";
import FaqFooter from "./sections/FaqFooter";

// Total Figma desktop canvas dimensions (node 191:63)
const DESKTOP_W = 1512;
const DESKTOP_H = 10873;

export default function DesktopLanding() {
  return (
    <ScaledCanvas designWidth={DESKTOP_W} designHeight={DESKTOP_H} cropTop={1006} className="bg-cream">
        {/* ---- Background layers (behind all content, at exact Figma coords) ---- */}
        <img
          src="/images/bg-welcome-story.png"
          alt=""
          aria-hidden
          className="absolute left-0 top-[1006px] h-[3011px] w-[1512px] object-cover"
        />
        {/* Details misty-mountain backdrop (node 191:68) */}
        <img
          src="/images/bg-details.png"
          alt=""
          aria-hidden
          className="absolute left-[-326px] top-[4017px] h-[3933px] w-[2161px] max-w-none object-cover"
        />
        {/* Dark forest band behind the Gifts/Accommodation cards (fades in from the
            misty mountains above) */}
        <img
          src="/images/forest-dark.png"
          alt=""
          aria-hidden
          className="absolute left-[-326px] top-[6300px] h-[1760px] w-[2161px] max-w-none object-cover [mask-image:linear-gradient(to_bottom,transparent,black_18%)]"
        />

        {/* Guest Accommodation + Gifts lace cards (nodes 191:69 / 191:163) —
            overlapping per Figma: Gifts behind-right, Guest Accommodation in front-left */}
        {/* Drifting fog/clouds across the dress-code + forest region — sits behind
            the cards and over the backgrounds. A very gradual mask + scattered wispy
            puffs so there's no visible container edge. */}
        <div
          aria-hidden
          className="fog-mask absolute left-0 top-[5300px] h-[2900px] w-[1512px] overflow-hidden pointer-events-none"
        >
          <div className="fog-layer fog-a" />
          <div className="fog-layer fog-b" />
          <div className="fog-layer fog-c" />
        </div>

        {/* ============================================================
            ANIMATED CLOUDS – Dress Code & Gifts region (canvas y 5820–7200)
            Divs are OVERSIZED (padding ~130-200px all sides) so gradient puffs
            stay well inside and filter:blur() fades cleanly. Positions are the
            TOP-LEFT of each oversized div — visual center is shifted inward.
            cloud-d 1040×670 (−200 offset), cloud-c 810×550 (−165),
            cloud-e 900×600 (−180), cloud-b 500×400 (−120), cloud-a 540×440 (−130)
            ============================================================ */}
        {/* Large (cloud-d 1040×670, visual center at ~520,362 from top-left) */}
        <div className="cloud cloud-d cloud-r-slow" style={{ left:  380, top: 5558, opacity: 0.62 }} />
        <div className="cloud cloud-d cloud-l-slow" style={{ left: -270, top: 5858, opacity: 0.55 }} />
        <div className="cloud cloud-d cloud-bob-2"  style={{ left:  580, top: 6258, opacity: 0.52 }} />
        {/* Medium (cloud-c 810×550 → center at 405,303; cloud-e 900×600 → 450,330) */}
        <div className="cloud cloud-c cloud-l-med"  style={{ left:  875, top: 5647, opacity: 0.58 }} />
        <div className="cloud cloud-e cloud-bob-1"  style={{ left: -300, top: 6110, opacity: 0.60 }} />
        <div className="cloud cloud-c cloud-r-slow" style={{ left:  645, top: 6577, opacity: 0.55 }} />
        {/* Small (cloud-b 500×400 → center 250,222; cloud-a 540×440 → 270,245) */}
        <div className="cloud cloud-b cloud-l-fast" style={{ left:  150, top: 5658, opacity: 0.65 }} />
        <div className="cloud cloud-a cloud-r-fast" style={{ left: 1080, top: 6015, opacity: 0.60 }} />
        <div className="cloud cloud-b cloud-r-med"  style={{ left:  -30, top: 6548, opacity: 0.55 }} />
        <div className="cloud cloud-a cloud-l-fast" style={{ left:  380, top: 6855, opacity: 0.50 }} />

        {/* Gifts card (behind, tilts right) */}
        <img
          id="gifts"
          src="/images/section-gifts.png"
          alt="Gifts — a QR code for cash gifts will be provided"
          className="absolute left-[472px] top-[6565px] h-[1374px] w-[975px] max-w-none rotate-[4deg]"
        />
        {/* Guest Accommodation card (front, tilts left) */}
        <img
          src="/images/faq-floral.png"
          alt="Guest accommodation details — Bai Hotel Cebu"
          className="absolute left-[67px] top-[6720px] h-[1130px] w-[800px] max-w-none -rotate-[4deg]"
        />

        {/* Torn-paper edge (node 191:155 "JKSDDA") — the dark forest tears open to
            reveal the light FAQ below. Scaled wider than the canvas so the paper's
            transparent side margins fall off-screen and the tear runs edge to edge. */}
        <img
          src="/images/faq-lace.png"
          alt=""
          aria-hidden
          className="absolute left-[-190px] top-[7710px] h-[850px] w-[1900px] max-w-none object-fill"
        />

        {/* ---- Content sections (top of stack) ---- */}
        <Welcome />
        <OurStory />
        {/* Flowing silk ribbon draped across the top of Our Story (nodes 191:156 /
            191:157) — two ribbons side by side, positioned above the lanterns. */}
        <img
          src="/images/story-silk.png"
          alt=""
          aria-hidden
          className="absolute left-[-9px] top-[1775px] h-[430px] w-[765px] max-w-none object-contain"
        />
        <img
          src="/images/story-silk.png"
          alt=""
          aria-hidden
          className="absolute left-[756px] top-[1775px] h-[430px] w-[765px] max-w-none object-contain"
        />
        <Details />
        <DressCode />
        <FaqFooter />
    </ScaledCanvas>
  );
}
