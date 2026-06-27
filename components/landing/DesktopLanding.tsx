/* eslint-disable @next/next/no-img-element */
import ScaledCanvas from "../ScaledCanvas";
import ScrollReveal from "../ScrollReveal";
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
    <ScaledCanvas designWidth={DESKTOP_W} designHeight={DESKTOP_H} cropTop={1006} maxWidth={1280} className="bg-cream page-enter">
        <ScrollReveal />
        {/* ---- Background layers (behind all content, at exact Figma coords) ---- */}
        {/* Green textured background for Welcome + Our Story region */}
        <img
          src="/images/bg-welcome-story.webp"
          alt=""
          aria-hidden
          decoding="async"
          className="absolute top-[1006px] max-w-none"
          style={{ left: "-800px", width: "3200px", height: "3011px" }}
        />
        {/* Details misty-mountain backdrop */}
        <img
          src="/images/bg-details.webp"
          alt=""
          aria-hidden
          decoding="async"
          className="absolute left-[-326px] top-[4017px] h-auto w-[2161px] max-w-none"
        />
{/* Guest Accommodation + Gifts lace cards (nodes 191:69 / 191:163) —
            overlapping per Figma: Gifts behind-right, Guest Accommodation in front-left */}
{/* ============================================================
            ANIMATED CLOUDS – Dress Code & Gifts region (canvas y 5820–7200)
            Divs are OVERSIZED (padding ~130-200px all sides) so gradient puffs
            stay well inside and filter:blur() fades cleanly. Positions are the
            TOP-LEFT of each oversized div — visual center is shifted inward.
            cloud-d 1040×670 (−200 offset), cloud-c 810×550 (−165),
            cloud-e 900×600 (−180), cloud-b 500×400 (−120), cloud-a 540×440 (−130)
            ============================================================ */}
        {/* Large — spread left/center, avoid right-of-gifts cluster */}
        <div className="cloud cloud-d cloud-r-slow" style={{ left:  380, top: 5558, opacity: 0.60 }} />
        <div className="cloud cloud-d cloud-l-slow" style={{ left: -270, top: 5858, opacity: 0.55 }} />
        <div className="cloud cloud-d cloud-bob-2"  style={{ left:  120, top: 6200, opacity: 0.55 }} />
        <div className="cloud cloud-d cloud-r-slow" style={{ left: -200, top: 6580, opacity: 0.50 }} />
        <div className="cloud cloud-d cloud-l-slow" style={{ left:  300, top: 6920, opacity: 0.45 }} />
        {/* Medium — scatter across full width, heavier left of center */}
        <div className="cloud cloud-c cloud-l-med"  style={{ left:  500, top: 5680, opacity: 0.55 }} />
        <div className="cloud cloud-e cloud-bob-1"  style={{ left: -280, top: 6050, opacity: 0.58 }} />
        <div className="cloud cloud-c cloud-r-slow" style={{ left:  180, top: 6320, opacity: 0.60 }} />
        <div className="cloud cloud-e cloud-l-med"  style={{ left: -100, top: 6480, opacity: 0.58 }} />
        <div className="cloud cloud-c cloud-bob-1"  style={{ left:  400, top: 6700, opacity: 0.50 }} />
        <div className="cloud cloud-e cloud-r-slow" style={{ left: -250, top: 7050, opacity: 0.45 }} />
        <div className="cloud cloud-c cloud-l-med"  style={{ left:  550, top: 7220, opacity: 0.42 }} />
        {/* Small — dense behind For Ladies (y≈6300–6500) and scattered through gifts */}
        <div className="cloud cloud-b cloud-l-fast" style={{ left:  150, top: 5680, opacity: 0.62 }} />
        <div className="cloud cloud-a cloud-bob-1"  style={{ left:  320, top: 5940, opacity: 0.58 }} />
        <div className="cloud cloud-b cloud-r-med"  style={{ left:   50, top: 6120, opacity: 0.60 }} />
        <div className="cloud cloud-a cloud-l-fast" style={{ left:  600, top: 6280, opacity: 0.62 }} />
        <div className="cloud cloud-b cloud-bob-2"  style={{ left:  -60, top: 6360, opacity: 0.65 }} />
        <div className="cloud cloud-a cloud-r-med"  style={{ left:  250, top: 6460, opacity: 0.62 }} />
        <div className="cloud cloud-b cloud-l-slow" style={{ left:  750, top: 6560, opacity: 0.50 }} />
        <div className="cloud cloud-a cloud-bob-2"  style={{ left:  -80, top: 6780, opacity: 0.48 }} />
        <div className="cloud cloud-b cloud-r-fast" style={{ left:  450, top: 6950, opacity: 0.45 }} />
        <div className="cloud cloud-a cloud-l-med"  style={{ left:  100, top: 7150, opacity: 0.42 }} />
        <div className="cloud cloud-b cloud-bob-1"  style={{ left:  700, top: 7300, opacity: 0.40 }} />

        {/* Gifts card (behind, tilts right) */}
        <img
          id="gifts"
          src="/images/section-gifts.webp"
          alt="Gifts — a QR code for cash gifts will be provided"
          loading="lazy"
          decoding="async"
          className="absolute left-[522px] top-[6565px] h-[1374px] w-[975px] max-w-none rotate-[4deg]"
        />
        {/* Guest Accommodation card (front, tilts left) */}
        <img
          src="/images/faq-floral.webp"
          alt="Guest accommodation details — Bai Hotel Cebu"
          loading="lazy"
          decoding="async"
          className="absolute left-[67px] top-[6650px] h-[1200px] w-[850px] max-w-none -rotate-[4deg]"
        />

        {/* Torn-paper edge (node 191:155 "JKSDDA") — the dark forest tears open to
            reveal the light FAQ below. Scaled wider than the canvas so the paper's
            transparent side margins fall off-screen and the tear runs edge to edge. */}
        <img
          src="/images/faq-lace.webp"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute top-[7710px] h-[850px] max-w-none object-fill"
          style={{ left: "-800px", width: "3200px" }}
        />

        {/* ---- Nav anchor targets at correct Figma y positions ---- */}
        <div id="our-story"  className="absolute pointer-events-none" style={{ top: 2450,  left: 0, height: 0 }} />
        <div id="schedule"   className="absolute pointer-events-none" style={{ top: 4017,  left: 0, height: 0 }} />
        <div id="dress-code" className="absolute pointer-events-none" style={{ top: 5720,  left: 0, height: 0 }} />

        {/* ---- Content sections (top of stack) ---- */}
        <Welcome />
        <OurStory />
        {/* Flowing silk ribbon draped across the top of Our Story (nodes 191:156 /
            191:157) — two ribbons side by side, positioned above the lanterns. */}
        <img
          src="/images/story-silk.webp"
          alt=""
          aria-hidden
          className="absolute top-[1775px] h-[430px] max-w-none object-fill"
          style={{ left: "-800px", width: "1556px" }}
        />
        <img
          src="/images/story-silk.webp"
          alt=""
          aria-hidden
          className="absolute top-[1775px] h-[430px] max-w-none object-fill"
          style={{ left: "756px", width: "1556px" }}
        />
        <Details />
        <DressCode />
        <FaqFooter />
    </ScaledCanvas>
  );
}
