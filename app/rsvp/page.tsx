import type { Metadata } from "next";
import RsvpDesktop from "@/components/rsvp/RsvpDesktop";
import MobileRsvp from "@/components/rsvp/MobileRsvp";

export const metadata: Metadata = {
  title: "RSVP — Carlo & Trixia",
  description: "Kindly send your response by September 30, 2026.",
};

export default function RsvpPage() {
  return (
    <main>
      <div className="show-desktop">
        <RsvpDesktop />
      </div>
      <div className="show-mobile">
        <MobileRsvp />
      </div>
    </main>
  );
}
