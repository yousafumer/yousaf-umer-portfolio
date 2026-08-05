// The site's signature motif: nodes connected by flowing dashed lines, echoing
// the Bronze -> Silver -> Gold pipeline pattern that runs through Yousaf's projects.
export default function PipelineFlow({ className = '' }) {
  const nodes = [
    { x: 40, y: 100, label: 'RAW' },
    { x: 220, y: 40, label: 'BRONZE' },
    { x: 400, y: 130, label: 'SILVER' },
    { x: 580, y: 60, label: 'GOLD' },
    { x: 760, y: 100, label: 'BI' },
  ]

  const paths = [
    'M40,100 C110,100 150,40 220,40',
    'M220,40 C290,40 330,130 400,130',
    'M400,130 C470,130 510,60 580,60',
    'M580,60 C650,60 690,100 760,100',
  ]

  return (
    <svg
      viewBox="0 0 820 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pipelineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>

      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="url(#pipelineStroke)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="animate-flow"
          opacity="0.5"
        />
      ))}

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="5" fill="#22D3EE" className="animate-pulse-slow" />
          <circle cx={n.x} cy={n.y} r="12" stroke="#3B82F6" strokeOpacity="0.35" fill="none" />
          <text
            x={n.x}
            y={n.y + 28}
            textAnchor="middle"
            className="fill-ink-500"
            style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
