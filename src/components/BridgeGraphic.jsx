const piers = [
  { l: 100, r: 140 },
  { l: 540, r: 580 },
  { l: 980, r: 1020 },
  { l: 1460, r: 1500 },
]

const arches = [
  { l: 140, r: 540 },
  { l: 580, r: 980 },
  { l: 1020, r: 1460 },
]

export default function BridgeGraphic({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1600 500"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Distant horizon */}
      <line x1="0" y1="90" x2="1600" y2="90" strokeWidth="0.8" opacity="0.45" />

      {/* Deck — top and bottom of the roadway */}
      <line x1="0" y1="130" x2="1600" y2="130" />
      <line x1="0" y1="150" x2="1600" y2="150" />

      {/* Balustrade ticks along the deck */}
      {Array.from({ length: 33 }, (_, i) => {
        const x = 40 + i * 48
        return (
          <line
            key={`b-${i}`}
            x1={x}
            y1="112"
            x2={x}
            y2="130"
            strokeWidth="0.9"
            opacity="0.55"
          />
        )
      })}

      {/* Piers — two vertical faces + base plate */}
      {piers.map((p, i) => (
        <g key={`p-${i}`}>
          <line x1={p.l} y1="150" x2={p.l} y2="400" />
          <line x1={p.r} y1="150" x2={p.r} y2="400" />
          <line x1={p.l - 8} y1="400" x2={p.r + 8} y2="400" strokeWidth="1.6" />
        </g>
      ))}

      {/* Arches — three semicircular spans, crown meets the deck */}
      {arches.map((a, i) => {
        const r = (a.r - a.l) / 2
        return (
          <path
            key={`a-${i}`}
            d={`M ${a.l} 340 A ${r} ${r} 0 0 0 ${a.r} 340`}
          />
        )
      })}

      {/* Arch keystones — tiny mark at each crown */}
      {arches.map((a, i) => {
        const cx = (a.l + a.r) / 2
        return (
          <line
            key={`k-${i}`}
            x1={cx}
            y1="135"
            x2={cx}
            y2="150"
            strokeWidth="1.6"
          />
        )
      })}

      {/* Water / ground line */}
      <line x1="0" y1="400" x2="1600" y2="400" strokeWidth="1.2" />

      {/* Water ripples */}
      <path d="M 60 428 Q 110 422 160 428 T 260 428" strokeWidth="0.9" opacity="0.55" />
      <path d="M 340 448 Q 390 442 440 448 T 540 448" strokeWidth="0.9" opacity="0.55" />
      <path d="M 660 432 Q 710 426 760 432 T 860 432" strokeWidth="0.9" opacity="0.55" />
      <path d="M 940 452 Q 990 446 1040 452 T 1140 452" strokeWidth="0.9" opacity="0.55" />
      <path d="M 1240 434 Q 1290 428 1340 434 T 1440 434" strokeWidth="0.9" opacity="0.55" />

      {/* Second row of ripples, further from the piers */}
      <path d="M 200 470 Q 240 466 280 470 T 360 470" strokeWidth="0.8" opacity="0.4" />
      <path d="M 720 472 Q 760 468 800 472 T 880 472" strokeWidth="0.8" opacity="0.4" />
      <path d="M 1180 468 Q 1220 464 1260 468 T 1340 468" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}
