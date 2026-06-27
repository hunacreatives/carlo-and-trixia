export default function Welcome() {
  return (
    <section className="absolute left-0 top-0 w-[1512px] text-center text-white">
      {/* Heading */}
      <h2 data-reveal className="absolute left-[763px] top-[1274px] w-[904px] -translate-x-1/2 -translate-y-1/2 font-heading text-[104px] leading-none text-white">
        Welcome
      </h2>

      {/* Body */}
      <div data-reveal data-reveal-delay="120" className="absolute left-[755px] top-[1369px] w-[1100px] -translate-x-1/2 space-y-5 font-serif text-[28px] leading-relaxed text-white">
        <p>
          Among soft greens and quiet candlelight, two paths became one. We&apos;re
          so glad you&apos;re here. For years we&apos;ve been writing our story in the
          small, ordinary moments, the shared mornings, the long drives, the quiet
          certainty that grew into forever.
        </p>
        <p>
          And now we get to celebrate it surrounded by the people who shaped it with
          us. Look around, find where to be, what to wear, and all the little details
          we&apos;ve gathered here. Then let us know you&apos;ll be there, because no
          celebration of ours would feel complete without you.
        </p>
        <p className="pt-6">
          With all our love,
          <br />
          <span className="font-script text-[56px] leading-[1.1]">
            Trixia &amp; Don Carlo
          </span>
        </p>
      </div>
    </section>
  );
}
