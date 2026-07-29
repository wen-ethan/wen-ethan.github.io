/**
 * Procedural wave background, live-rendered and animated.
 *
 * Drawn as vector geometry rather than a raster image so it resolves crisply at
 * any size and has no fixed aspect ratio to fight with.
 *
 * Deliberately has no static/animated variants: every page renders exactly this,
 * so the background is identical everywhere. Motion comes from drifting the
 * whole SVG as one composited layer plus a few soft colour blooms over it,
 * rather than animating the paths -- animating the geometry would force Safari
 * to re-rasterise a full-screen SVG every frame, which is janky on a phone.
 * Respects prefers-reduced-motion (see main.css).
 */

function WaveSvg() {
  return (
    <svg
      className="bg-svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Diagonal sweep: deep navy at bottom-left up to dusty periwinkle */}
        <linearGradient id="wave-base" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#101033" />
          <stop offset="30%" stopColor="#3a2154" />
          <stop offset="62%" stopColor="#6d3566" />
          <stop offset="100%" stopColor="#7676a4" />
        </linearGradient>

        {/* Magenta bloom sitting over the right-hand side */}
        <radialGradient id="wave-glow" cx="70%" cy="50%" r="62%">
          <stop offset="0%" stopColor="#a2416f" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a2416f" stopOpacity="0" />
        </radialGradient>

        {/* Cool wash that lifts the upper-right corner */}
        <radialGradient id="wave-lift" cx="88%" cy="6%" r="55%">
          <stop offset="0%" stopColor="#8f8fc0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8f8fc0" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="wave-shade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d0d2e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0d0d2e" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#wave-base)" />
      <rect width="1440" height="900" fill="url(#wave-glow)" />
      <rect width="1440" height="900" fill="url(#wave-lift)" />

      {/* Stacked bands. Each dips slightly on the left before sweeping up to
          the right, then closes to the bottom edge -- overlapping them
          deepens the shadow progressively toward the lower-left corner. */}
      <g fill="url(#wave-shade)">
        <path
          d="M0,455 C200,486 430,455 700,366 C980,276 1235,156 1440,78 L1440,900 L0,900 Z"
          opacity="0.32"
        />
        <path
          d="M0,585 C205,616 440,586 710,498 C990,410 1240,292 1440,214 L1440,900 L0,900 Z"
          opacity="0.32"
        />
        <path
          d="M0,706 C210,736 450,708 720,622 C1000,536 1245,420 1440,344 L1440,900 L0,900 Z"
          opacity="0.32"
        />
        <path
          d="M0,818 C215,846 460,820 730,736 C1010,652 1250,540 1440,466 L1440,900 L0,900 Z"
          opacity="0.32"
        />
        <path
          d="M0,922 C220,948 470,924 740,842 C1015,760 1255,652 1440,580 L1440,900 L0,900 Z"
          opacity="0.32"
        />
      </g>

      {/* Matching crest closing to the top edge, lifting the upper band */}
      <path
        d="M0,318 C200,350 430,318 700,230 C980,140 1235,20 1440,-58 L1440,0 L0,0 Z"
        fill="#ffffff"
        opacity="0.05"
      />
    </svg>
  )
}

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      {/* Oversized so the drift never exposes an edge */}
      <div className="bg-drift">
        <WaveSvg />
      </div>
      {/* Soft blooms; each fades to transparent, so they can move freely
          without ever showing a seam. */}
      <div className="bg-bloom bg-bloom-1" />
      <div className="bg-bloom bg-bloom-2" />
      <div className="bg-bloom bg-bloom-3" />
    </div>
  )
}
