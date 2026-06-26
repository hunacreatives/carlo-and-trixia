import HeroFull from "@/components/landing/HeroFull";
import DesktopLanding from "@/components/landing/DesktopLanding";
import MobileLanding from "@/components/landing/MobileLanding";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroFull />
      <div className="show-desktop">
        <DesktopLanding />
      </div>
      <div className="show-mobile">
        <MobileLanding />
      </div>
    </main>
  );
}
