export default function MadeByBanner() {
  return (
    <footer
      style={{ background: "#1a1f14" }}
      className="w-full py-6 px-4 text-center"
    >
      <p
        className="text-cream/80 text-[13px] tracking-wide"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        Made with Love by{" "}
        <a
          href="https://hunacreatives.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-cream"
        >
          The RSVP Studio
        </a>
      </p>
    </footer>
  );
}
