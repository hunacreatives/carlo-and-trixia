/* eslint-disable @next/next/no-img-element */
// Desktop "Our Story" — exact V2 reproduction.
// V2 separated the photos out into four flattened photo/lily/ribbon composites
// (nodes 35 2 / 36 1 / 37 1 / 38 1) and keeps the columns, arch, lamps and copy
// as standalone layers. Absolute coords resolve against the desktop canvas.

const img22 = "/images/story-22.webp";   // arch + cream panel  (node 191:27)
const img21 = "/images/story-21.webp";   // hanging lamps
const col = "/images/story-23.webp";     // classical column + lilies (node "(23)")

const comp35 = "/images/story-comp-35.webp"; // left photos + lilies   (node 290:39)
const comp38 = "/images/story-comp-38.webp"; // right photos + lilies  (node 289:107)
const comp37 = "/images/story-comp-37.webp"; // bottom-left band       (node 289:105)
const comp36 = "/images/story-comp-36.webp"; // bottom-right band      (node 292:44)
const ribbon = "/images/story-25.webp";      // twisting silk ribbon (node "(25)")
const lily = "/images/story-lily.webp";      // clean lily cluster (node "(6)")

export default function OurStory() {
  return (
    <div className="contents">
      {/* Arch + cream panel background (node 191:27) */}
      <div className="absolute h-[1759px] left-[266px] top-[2249px] w-[992px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none clipfix">
          <img alt="" className="absolute h-[123.6%] left-[-34.71%] max-w-none top-[-10.7%] w-[169.51%]" src={img22} />
        </div>
      </div>

      {/* "Our Story" title (node 191:28) — placed before the lamps so the lamps hang in front of it */}
      <div data-reveal className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-heading h-[240px] justify-center leading-[0] left-[calc(14.29%+549px)] text-[#2e3e09] text-[160px] text-center top-[2680px] w-[862px]">
        <p className="leading-[normal]">Our Story</p>
      </div>

      {/* Hanging lamps — left and mirrored right */}
      <div className="breeze absolute h-[609px] left-[140px] top-[2032px] w-[426px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none clipfix">
          <img alt="" className="absolute h-[268.13%] left-[-0.06%] max-w-none top-0 w-[296.25%]" src={img21} />
        </div>
      </div>
      <div className="absolute flex h-[609px] items-center justify-center left-[calc(71.43%-24px)] top-[2032px] w-[426px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="breeze h-[609px] relative w-[426px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none clipfix">
              <img alt="" className="absolute h-[268.13%] left-[-0.06%] max-w-none top-0 w-[296.25%]" src={img21} />
            </div>
          </div>
        </div>
      </div>

      {/* Silk ribbon drapes — flanking the section (behind columns/photos) */}
      <div className="absolute flex h-[905.918px] items-center justify-center top-[3200px] w-[1033.473px]" style={{ left: -512 }}>
        <div className="flex-none rotate-[113.05deg]">
          <div className="breeze-3 h-[859.914px] relative w-[618.62px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none clipfix">
              <img alt="" className="absolute h-[182.82%] left-[-11.37%] max-w-none top-0 w-[196.43%]" src={ribbon} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[789.469px] items-center justify-center top-[3324px] w-[855.962px]" style={{ left: -312 }}>
        <div className="flex-none rotate-[-89.66deg]">
          <div className="breeze-2 h-[851.298px] relative w-[784.406px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none clipfix">
              <img alt="" className="absolute h-[234.16%] left-[-11.37%] max-w-none top-0 w-[196.43%]" src={ribbon} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[905.918px] items-center justify-center left-[calc(57.14%+127px)] top-[3200px] w-[1033.473px]">
        <div className="flex-none rotate-[-113.05deg]">
          <div className="breeze-3 h-[859.914px] relative w-[618.62px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none clipfix">
              <img alt="" className="absolute h-[182.82%] left-[-11.37%] max-w-none top-0 w-[196.43%]" src={ribbon} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[789.469px] items-center justify-center left-[calc(57.14%+103.73px)] top-[3324px] w-[855.962px]">
        <div className="flex-none rotate-[89.66deg]">
          <div className="breeze-2 h-[851.298px] relative w-[784.406px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none clipfix">
              <img alt="" className="absolute h-[234.16%] left-[-11.37%] max-w-none top-0 w-[196.43%]" src={ribbon} />
            </div>
          </div>
        </div>
      </div>

      {/* Left column — full column, mirrored to face inward */}
      <div className="-scale-x-100 absolute h-[1135px] top-[2921px] w-[949px]" style={{ left: -350 }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.02%] left-[-7.48%] max-w-none top-[-1.16%] w-[102.62%]" src={col} />
        </div>
      </div>
      {/* Right column (node 193:54 "(23) 3") — moved toward the right edge */}
      <div className="absolute h-[1135px] left-[845px] top-[2921px] w-[949px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.02%] left-[-7.48%] max-w-none top-[-1.16%] w-[102.62%]" src={col} />
        </div>
      </div>

      {/* ===== Updated photo composites (photos + lilies + ribbons) ===== */}
      {/* Bottom-right band (node 292:44 "36 1") — scaled down so it doesn't crowd the timer */}
      <div className="absolute h-[864px] left-[430px] top-[3504px] w-[1363px]" style={{ transform: "scale(0.8)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={comp36} />
      </div>
      {/* Bottom-left band (node 289:105 "37 1") — scaled down to match */}
      <div className="absolute h-[883px] top-[3441px] w-[1396px]" style={{ left: -221, transform: "scale(0.8)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={comp37} />
      </div>
      {/* Right photos + lilies (node 289:107 "38 1") */}
      <div className="absolute h-[760px] left-[997px] top-[2786px] w-[756px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-54.52%] max-w-none top-0 w-[178.79%]" src={comp38} />
        </div>
      </div>
      {/* Left photos + lilies (node 290:39 "35 2") */}
      <div className="absolute h-[680px] top-[2775px] w-[936px]" style={{ left: -388 }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.02%] max-w-none top-0 w-[129.21%]" src={comp35} />
        </div>
      </div>

      {/* Corner lily clusters at the column bases — mask the seam between sections */}
      <img alt="" className="absolute max-w-none object-contain pointer-events-none h-[330px] w-[586px]" style={{ left: -110, top: 3820 }} src={lily} />
      <img alt="" className="-scale-x-100 absolute max-w-none object-contain pointer-events-none h-[330px] w-[586px]" style={{ left: 1036, top: 3820 }} src={lily} />

      {/* Body copy (node 194:55) */}
      <div data-reveal data-reveal-delay="100" className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-serif h-[740px] justify-center leading-[0] left-[calc(28.57%+324.5px)] text-[#2e3e09] text-center top-[3200px] w-[493px]">
        <p className="font-bold leading-[normal] mb-0 text-[30px]">{`Who would've thought a random food trip would lead to forever?`}</p>
        <p className="leading-[normal] mb-0 text-[30px]">&nbsp;</p>
        <p className="leading-[normal] mb-0 text-[30px]">{`Although Carlo and Trixia came from the same school in Palompon, Leyte, they didn't meet until 2019, when their friend invited Carlo to join a Binondo food trip at Wai Ying.`}</p>
        <p className="leading-[normal] mb-0 text-[30px]">&nbsp;</p>
        <p className="leading-[normal] mb-0 text-[30px]">One simple invitation turned into more food adventures, Feast Sundays, and countless moments that slowly became something special.</p>
        <p className="leading-[normal] mb-0 text-[30px]">&nbsp;</p>
        <p className="leading-[normal] text-[30px]">{`The rest, as they say, is history, and now they're excited to start their greatest adventure yet, with all of you by their side.`}</p>
      </div>
    </div>
  );
}
