import DesktopLanding from "@/components/landing/DesktopLanding";
import MobileLanding from "@/components/landing/MobileLanding";

export default function Home() {
  return (
    <main>
      <div className="show-desktop">
        <DesktopLanding />
      </div>
      <div className="show-mobile">
        <MobileLanding />
      </div>
    </main>
  );
}
