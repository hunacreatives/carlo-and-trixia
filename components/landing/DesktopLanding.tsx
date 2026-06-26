/* eslint-disable @next/next/no-img-element */
import ScaledCanvas from "../ScaledCanvas";
import Hero from "./sections/Hero";
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
    <ScaledCanvas designWidth={DESKTOP_W} designHeight={DESKTOP_H} className="bg-cream">
        {/* ---- Background layers (behind all content, at exact Figma coords) ---- */}
        <img
          src="/images/bg-welcome-story.png"
          alt=""
          aria-hidden
          className="absolute left-0 top-[1006px] h-[3011px] w-[1512px] object-cover"
        />
        <img
          src="/images/bg-details.png"
          alt=""
          aria-hidden
          className="absolute left-0 top-[4017px] h-[3933px] w-[1512px] object-cover"
        />
        {/* Large floral accent on the left (node 191:163) */}
        <div className="absolute left-[-113px] top-[6663px] h-[1222px] w-[1043px] overflow-hidden pointer-events-none">
          <img
            src="/images/faq-floral.png"
            alt=""
            aria-hidden
            className="absolute left-0 top-[-2.9%] h-[116.69%] w-full max-w-none"
          />
        </div>

        {/* Flowing silk ribbon draped across the Our Story band (nodes 191:156 / 191:157) */}
        <img
          src="/images/story-silk.png"
          alt=""
          aria-hidden
          className="absolute left-0 top-[2342px] h-[430px] w-[765px] object-cover"
        />
        <img
          src="/images/story-silk.png"
          alt=""
          aria-hidden
          className="absolute left-[764px] top-[2342px] h-[430px] w-[765px] object-cover"
        />

        {/* ---- Content sections (top of stack) ---- */}
        <Hero />
        <Welcome />
        <OurStory />
        <Details />
        <DressCode />
        <FaqFooter />
    </ScaledCanvas>
  );
}
