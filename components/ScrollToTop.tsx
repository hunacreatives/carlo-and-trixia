"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Always land at the top when the route changes (including browser back/forward).
// We opt out of the browser's automatic scroll restoration so returning to a
// page no longer jumps to wherever you previously scrolled. In-page hash
// navigation (e.g. "#our-story") doesn't change the pathname, so it's untouched.
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
