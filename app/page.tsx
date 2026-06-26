import DesktopLanding from "@/components/landing/DesktopLanding";

export default function Home() {
  return (
    <main>
      <div className="show-desktop">
        <DesktopLanding />
      </div>
      <div className="show-mobile">
        {/* Mobile canvas (402px Figma frame) is built next; desktop shown as fallback for now */}
        <DesktopLanding />
      </div>
    </main>
  );
}
