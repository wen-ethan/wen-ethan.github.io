/**
 * Procedural wave background -- the wave band shapes only.
 *
 * Drawn as vector geometry rather than a raster image so it resolves crisply at
 * any size and has no fixed aspect ratio to fight with.
 *
 * The three broad smooth gradients this used to draw now live in CSS on .bg,
 * because full-screen SVG gradients grid on desktop engines; see main.css. Only
 * the band shapes remain here -- they are soft and low-contrast enough not to.
 *
 * Deliberately takes no props: every page renders exactly this, so the
 * background is identical everywhere. An animated variant (a drifting oversized
 * SVG layer plus soft colour blooms) was tried and removed -- even though it was
 * transform/opacity only, compositing it was too slow in Firefox.
 */

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <svg
        className="bg-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stacked bands. Each dips slightly on the left before sweeping up to
            the right, then closes to the bottom edge -- overlapping them
            deepens the shadow progressively toward the lower-left corner. */}
        <g fill="#0d0d2e">
          <path
            d="M0,455 C200,486 430,455 700,366 C980,276 1235,156 1440,78 L1440,900 L0,900 Z"
            opacity="0.04"
          />
          <path
            d="M0,585 C205,616 440,586 710,498 C990,410 1240,292 1440,214 L1440,900 L0,900 Z"
            opacity="0.04"
          />
          <path
            d="M0,706 C210,736 450,708 720,622 C1000,536 1245,420 1440,344 L1440,900 L0,900 Z"
            opacity="0.04"
          />
          <path
            d="M0,818 C215,846 460,820 730,736 C1010,652 1250,540 1440,466 L1440,900 L0,900 Z"
            opacity="0.04"
          />
          <path
            d="M0,922 C220,948 470,924 740,842 C1015,760 1255,652 1440,580 L1440,900 L0,900 Z"
            opacity="0.04"
          />
        </g>

        {/* Matching crest closing to the top edge, lifting the upper band.
            Kept at ~47% of the band opacity above, the same ratio it had when the
            bands were gradient-filled -- at a higher value it outweighs them and
            reads as a light patch with a hard edge rather than a subtle lift. */}
        <path
          d="M0,318 C200,350 430,318 700,230 C980,140 1235,20 1440,-58 L1440,0 L0,0 Z"
          fill="#ffffff"
          opacity="0.019"
        />
      </svg>
    </div>
  )
}
