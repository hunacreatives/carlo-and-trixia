/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const FAQS = [
  {
    q: "By when should I respond?",
    a: [
      "Kindly send your response by September 30, 2026.",
      "This helps us finalize seating and catering, so we'd be so grateful for an early reply.",
    ],
  },
  {
    q: "Can I bring my kids or a plus?",
    a: [
      "Plus-ones are by invitation only. Please check your invitation, if a guest is included, their name will be listed alongside yours. While we adore your little ones, we've planned an adults-focused celebration. Children who are named on the invitation are warmly welcome.",
    ],
  },
  {
    q: "Who can I contact if I have questions?",
    a: [
      "Feel free to message Trixia or Don Carlo on Messenger anytime, we're happy to help.",
    ],
  },
];

export default function FaqFooter() {
  return (
    <>
      {/* ---- FAQ light area (node 191:154). Background is a standalone layer so the
            forest above can extend further down before the torn-paper edge. ---- */}
      <div
        id="faq"
        className="absolute top-[8060px] h-[784px] bg-[#ececec]"
        style={{ left: "-800px", width: "3200px" }}
      />
      <h2 className="absolute left-[753px] top-[8180px] w-[902px] -translate-x-1/2 -translate-y-1/2 text-center font-faq text-[100px] font-bold leading-none text-black">
        Frequently Asked Questions
      </h2>
      <div className="absolute left-[302px] top-[8293px] w-[902px] text-center text-black">
        {FAQS.map((f, idx) => (
          <div key={f.q}>
            <p className="font-faq text-[70px] leading-[1.1]">{f.q}</p>
            {f.a.map((line, i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-marcellus)] text-[20px] leading-[1.5]"
              >
                {line}
              </p>
            ))}
            {idx < FAQS.length - 1 && (
              <img src="/images/faq-divider.webp" alt="" aria-hidden className="mx-auto my-2 w-[459px] max-w-full" style={{ height: 40, objectFit: "cover", objectPosition: "center center" }} />
            )}
          </div>
        ))}
      </div>

      {/* ---- Footer boat image — full-bleed, outside the content footer so child positions aren't affected ---- */}
      <img
        src="/images/footer-boat.webp"
        alt="Carlo and Trixia in a boat on the lake"
        className="absolute top-[8844px] max-w-none"
        style={{
          left: "-137px",
          width: "calc(100% + 274px)",
          height: "auto",
        }}
      />

      {/* ---- Footer content: envelope, lace card, flower, RSVP (node 191:75) ---- */}
      <footer
        id="rsvp"
        className="absolute left-[-9px] top-[8844px] h-[2029px] w-[1530px]"
      >

        {/* Envelope with lilies (node 191:76) — positioned over the lake */}
        <img
          src="/images/footer-envelope.webp"
          alt=""
          aria-hidden
          className="absolute left-[56px] top-[394px] h-[820px] w-[1025px] object-contain"
        />

        {/* Lace "Kindly Respond" card (node 191:165) */}
        <div className="absolute left-[603px] top-[555px] h-[693px] w-[881px] overflow-hidden">
          <img
            src="/images/footer-card.webp"
            alt=""
            aria-hidden
            className="absolute h-[133.12%] left-[-40.93%] max-w-none top-[-24.05%] w-[186.27%]"
          />
        </div>

        {/* Lily flower arrangement (node 191:166) — overlaid across envelope + lace card */}
        <div className="absolute overflow-hidden pointer-events-none" style={{ left: 290, top: 480, width: 600, height: 665, transformOrigin: "bottom center", animation: "flowerSway 5s ease-in-out infinite" }}>
          <img
            src="/images/footer-flower.webp"
            alt=""
            aria-hidden
            className="absolute max-w-none top-0"
            style={{ left: "-155.81%", width: "255.81%", height: "126.45%" }}
          />
        </div>

        {/* RSVP button (node 191:167) — overlaid on the lace card */}
        <Link
          href="/rsvp"
          className="absolute left-[925px] top-[974px] flex h-[59px] w-[197px] rotate-[7.41deg] items-center justify-center rounded-[10px] bg-[#7d9176] font-serif text-[30px] text-white transition-opacity hover:opacity-90"
        >
          RSVP
        </Link>
      </footer>
    </>
  );
}
