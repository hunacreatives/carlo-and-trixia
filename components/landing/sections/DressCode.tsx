/* eslint-disable @next/next/no-img-element */
export default function DressCode() {
  return (
    <section id="dress-code" className="absolute left-0 top-0 w-[1512px]">
      {/* Decorative banner behind the heading (node 191:164) */}
      <div className="absolute left-[293px] top-[5905px] h-[217px] w-[924px] overflow-hidden pointer-events-none">
        <img
          src="/images/dress-banner.png"
          alt=""
          aria-hidden
          className="absolute h-[437.83%] left-[-42.33%] max-w-none top-[-169.96%] w-[183.08%]"
        />
      </div>

      {/* Dress code copy */}
      <div className="absolute left-[117px] top-[5809px] w-[1272px] text-center font-serif text-[#2e3e09]">
        <p className="font-script text-[65px] leading-tight">Dress Code</p>

        <div className="mt-10 space-y-1 text-[30px] leading-snug">
          <p>
            We kindly invite our guests to dress in{" "}
            <span className="font-bold">formal attire and adhere to the colors</span> as we
            celebrate this special occasion.
          </p>
        </div>

        <div className="mt-10 space-y-1 text-[30px] leading-snug">
          <p className="font-bold">For Gentlemen:</p>
          <p>Barong Tagalog or formal long-sleeved polo</p>
          <p>Dress pants or slacks</p>
          <p>Closed shoes (leather shoes preferred)</p>
        </div>

        <div className="mt-8 space-y-1 text-[30px] leading-snug">
          <p className="font-bold">For Ladies:</p>
          <p>Long gown or cocktail dress</p>
          <p>Formal footwear (heels or elegant flats)</p>
        </div>
      </div>
    </section>
  );
}
