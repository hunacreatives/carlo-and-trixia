import type { Metadata } from "next";
import RsvpDesktop from "@/components/rsvp/RsvpDesktop";

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
        {/* Mobile RSVP canvas built next */}
        <RsvpDesktop />
      </div>
    </main>
  );
}
