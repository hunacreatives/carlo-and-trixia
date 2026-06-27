import HeroFull from "@/components/landing/HeroFull";
import DesktopLanding from "@/components/landing/DesktopLanding";
import MobileLanding from "@/components/landing/MobileLanding";

export default function Home() {
  return (
    <main className="overflow-x-hidden max-w-full" style={{ overscrollBehaviorX: "none" }}>
      <HeroFull />
      {/*
        Outer wrapper is full-width so section backgrounds bleed edge-to-edge.
        The gradient approximates the dark forest/mountain section (canvas visible-y
        3011–7054) so the gutters beside the centered 1280px canvas match.
      */}
      <div
        className="show-desktop"
        style={{ overflow: "hidden",
          background: `linear-gradient(to bottom,
            #1e2a14 calc(3011 * min(100vw, 1280px) / 1512),
            #1e2a14 calc(7054 * min(100vw, 1280px) / 1512),
            #ececec calc(7054 * min(100vw, 1280px) / 1512),
            #ececec calc(7838 * min(100vw, 1280px) / 1512),
            #1a1f14 calc(7838 * min(100vw, 1280px) / 1512),
            #1a1f14 100%)`,
        }}
      >
        <DesktopLanding />
      </div>
      <div className="show-mobile">
        <MobileLanding />
      </div>
    </main>
  );
}
