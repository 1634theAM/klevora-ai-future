const workflows = [
  { name: 'AJIO Support', count: 38, active: true },
  { name: 'Nykaa Beauty', count: 4 },
  { name: 'Boat Lifestyle', count: 12 },
  { name: 'FabIndia', count: 2 },
]

const allSuggestions = [
  { id: 'exchange_size',       kind: 'new',  label: 'exchange_size',       seen: 38, days: 7 },
  { id: 'damaged_on_delivery', kind: 'new',  label: 'damaged_on_delivery', seen: 22, days: 7 },
  { id: 'gift_wrap_request',   kind: 'new',  label: 'gift_wrap_request',   seen: 14, days: 7 },
  { id: 'return_reason',       kind: 'edit', label: 'return_reason tweak', seen: 8,  days: 3 },
]

const sidebar = [
  {
    title: 'Workflows',
    items: workflows.map((w) => ({ label: w.name, count: w.count, active: w.active })),
  },
  {
    title: 'Analytics',
    items: [
      { label: 'Traffic' },
      { label: 'Intents' },
      { label: 'Sessions' },
      { label: 'Latency' },
    ],
  },
  {
    title: 'Settings',
    items: [
      { label: 'API keys' },
      { label: 'Team' },
      { label: 'Billing' },
    ],
  },
]

function Spark({ scene }) {
  const base = [4, 8, 6, 11, 9, 14, 12, 18, 16, 22, 19, 24, 27, 31]
  const extra = scene >= 3 ? [34, 38] : scene >= 2 ? [33] : []
  const points = [...base, ...extra]
  const max = Math.max(...points)
  const w = 220
  const h = 42
  const step = w / (points.length - 1)
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (p / max) * h}`)
    .join(' ')
  const area = `${path} L ${w} ${h} L 0 ${h} Z`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-10 w-full transition-all duration-500">
      <path d={area} fill="rgba(74,90,69,0.14)" />
      <path d={path} fill="none" stroke="#4A5A45" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export default function DashboardMock({ scene = 2 }) {
  // Scene 0: quiet — 1 suggestion in queue, diff empty
  // Scene 1: gaps surface — 4 suggestions with pulse, still empty diff
  // Scene 2: review — exchange_size selected, full diff
  // Scene 3: merged — exchange_size gone, version bumped, success state

  const visibleSuggestions =
    scene === 0
      ? allSuggestions.slice(3)
      : scene === 3
        ? allSuggestions.slice(1)
        : allSuggestions

  const selectedId = scene === 2 ? 'exchange_size' : null
  const pendingCount = scene === 0 ? 3 : scene === 3 ? 37 : 38
  const deflectionRate = scene === 3 ? '86%' : '84%'
  const version = scene === 3 ? 'v3.3' : 'v3.2'
  const editedAgo = scene === 3 ? 'just now' : '2h ago'

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-x-6 -bottom-6 h-24 rounded-full bg-ink-900/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-50/95 shadow-[0_1px_0_rgba(0,0,0,0.04),0_40px_80px_-40px_rgba(20,18,16,0.35)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-ink-900/10 bg-cream-100/70 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
          </div>
          <div className="flex-1">
            <div className="mx-auto max-w-[380px] rounded-md border border-ink-900/10 bg-cream-50/90 px-3 py-1 text-center font-mono text-[10.5px] text-ink-500">
              studio.klevora.co / workflows / ajio
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-6 w-6 rounded-full bg-ink-900" />
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[210px_1fr] min-h-[560px]">
          {/* Sidebar */}
          <aside className="border-r border-ink-900/10 bg-cream-100/50 px-4 py-5">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded bg-ink-900 font-dev text-[11px] text-cream-50">
                स
              </span>
              <span className="text-[12.5px] text-ink-800">
                setu <span className="font-dev text-[13px] text-ink-600">studio</span>
              </span>
            </div>

            <div className="mt-7 space-y-6">
              {sidebar.map((sec) => (
                <div key={sec.title}>
                  <div className="mb-2 text-[9.5px] uppercase tracking-[0.18em] text-ink-400">
                    {sec.title}
                  </div>
                  <ul className="space-y-1">
                    {sec.items.map((it) => {
                      const isAjio = it.label === 'AJIO Support'
                      const badgeCount = isAjio ? pendingCount : it.count
                      return (
                        <li
                          key={it.label}
                          className={`flex items-center justify-between rounded px-2 py-1.5 text-[12px] transition-colors ${
                            it.active
                              ? 'bg-ink-900 text-cream-50'
                              : 'text-ink-700 hover:bg-ink-900/5'
                          }`}
                        >
                          <span className="truncate">{it.label}</span>
                          {badgeCount !== undefined && (
                            <span
                              className={`font-mono text-[10px] transition-colors ${
                                it.active
                                  ? scene === 1
                                    ? 'text-moss-600'
                                    : 'text-cream-100/70'
                                  : 'text-ink-500'
                              }`}
                            >
                              {badgeCount}
                            </span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <div className="flex flex-col">
            {/* Page header */}
            <div className="flex items-center justify-between border-b border-ink-900/10 px-6 py-4">
              <div>
                <div className="font-serif text-lg leading-tight text-ink-900">
                  AJIO Customer Support
                </div>
                <div className="mt-0.5 font-mono text-[10.5px] text-ink-500 transition-all duration-300">
                  workflow · hinglish · {version} · last edit {editedAgo}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full border border-ink-900/15 px-3 py-1.5 text-[11.5px] text-ink-700">
                  Preview bot
                </button>
                <button className="rounded-full bg-ink-900 px-3 py-1.5 text-[11.5px] text-cream-50">
                  + New intent
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-px border-b border-ink-900/10 bg-ink-900/10">
              {[
                { k: '12,847', label: 'conversations · 7d', spark: true },
                { k: deflectionRate, label: 'deflection rate', bump: scene === 3 },
                {
                  k: pendingCount.toString(),
                  label: 'adaptive suggestions',
                  pill: scene === 1 ? 'new' : scene === 3 ? 'updated' : 'pending',
                  pulse: scene === 1,
                },
                { k: '2.3s', label: 'p50 latency' },
              ].map((m, i) => (
                <div key={i} className="bg-cream-50/80 p-4">
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`font-serif text-[26px] leading-none tracking-tightest text-ink-900 transition-all duration-500 ${
                        m.bump ? 'text-moss-700' : ''
                      }`}
                    >
                      {m.k}
                    </span>
                    {m.pill && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9.5px] uppercase tracking-wider transition-all ${
                          m.pill === 'updated'
                            ? 'bg-ink-900 text-cream-50'
                            : 'bg-moss-600/15 text-moss-700'
                        } ${m.pulse ? 'animate-pulse' : ''}`}
                      >
                        {m.pill}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                    {m.label}
                  </div>
                  {m.spark && (
                    <div className="mt-2">
                      <Spark scene={scene} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Suggestions + Diff */}
            <div className="grid flex-1 grid-cols-[260px_1fr]">
              {/* Queue */}
              <div className="border-r border-ink-900/10 px-4 py-4">
                <div className="flex items-center justify-between px-1">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    Adaptive queue
                  </div>
                  <div className="font-mono text-[10px] text-ink-400">seen · 7d</div>
                </div>

                <ul className="mt-3 space-y-1">
                  {visibleSuggestions.map((s, i) => {
                    const isSelected = s.id === selectedId
                    const isNewlyArrived = scene === 1 && s.kind === 'new'
                    return (
                      <li
                        key={s.id}
                        className={`group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[12px] transition-all duration-500 ${
                          isSelected
                            ? 'bg-ink-900 text-cream-50'
                            : 'text-ink-700 hover:bg-ink-900/5'
                        } ${isNewlyArrived ? 'ring-1 ring-moss-600/40' : ''}`}
                        style={{
                          animation: isNewlyArrived
                            ? `sceneIn 400ms ease-out ${i * 90}ms both`
                            : undefined,
                        }}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={`grid h-4 w-4 shrink-0 place-items-center rounded font-mono text-[10px] ${
                              s.kind === 'new'
                                ? isSelected
                                  ? 'bg-moss-600 text-cream-50'
                                  : 'bg-moss-600/15 text-moss-700'
                                : isSelected
                                  ? 'bg-cream-100/25 text-cream-50'
                                  : 'bg-ink-900/10 text-ink-600'
                            }`}
                          >
                            {s.kind === 'new' ? '+' : '~'}
                          </span>
                          <span className="truncate font-mono text-[11.5px]">{s.label}</span>
                        </div>
                        <span
                          className={`font-mono text-[10px] ${
                            isSelected ? 'text-cream-100/70' : 'text-ink-500'
                          }`}
                        >
                          {s.seen}×
                        </span>
                      </li>
                    )
                  })}

                  {scene === 0 && (
                    <li className="mt-2 rounded-lg border border-dashed border-ink-900/15 px-3 py-4 text-center text-[11px] leading-relaxed text-ink-500">
                      No new gaps today. Traffic is running clean.
                    </li>
                  )}
                </ul>

                <div className="mt-4 border-t border-ink-900/10 pt-3 text-[10.5px] leading-relaxed text-ink-500">
                  Suggestions are auto-generated from conversations Setu couldn't route
                  cleanly. Nothing merges without you.
                </div>
              </div>

              {/* Diff detail */}
              <div className="flex flex-col">
                {scene === 2 ? (
                  <ReviewPane version={version} />
                ) : scene === 3 ? (
                  <MergedPane />
                ) : (
                  <EmptyPane scene={scene} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sceneIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

function EmptyPane({ scene }) {
  return (
    <div className="flex flex-1 items-center justify-center bg-cream-50/40 p-8">
      <div className="max-w-[280px] text-center">
        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-cream-100 font-mono text-ink-500">
          {scene === 1 ? '!' : '·'}
        </div>
        <div className="mt-4 font-serif text-lg text-ink-900">
          {scene === 1 ? 'New gaps detected' : 'Nothing selected'}
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
          {scene === 1
            ? 'Setu flagged three new intents from this week\'s traffic. Open one to review.'
            : 'Pick a suggestion from the queue to see the proposed YAML diff.'}
        </p>
      </div>
    </div>
  )
}

function ReviewPane({ version }) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-ink-900/10 px-6 py-3.5">
        <div className="flex items-center gap-3">
          <span className="grid h-6 w-6 place-items-center rounded bg-moss-600/15 font-mono text-[11px] text-moss-700">
            +
          </span>
          <div>
            <div className="font-mono text-[12px] text-ink-900">exchange_size</div>
            <div className="font-mono text-[10px] text-ink-500">
              proposed by setu · seen 38 conversations · last 7 days
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="rounded-full bg-ink-900 px-3 py-1.5 text-[11px] text-cream-50">
            Approve & merge
          </button>
          <button className="rounded-full border border-ink-900/15 px-3 py-1.5 text-[11px] text-ink-700">
            Edit
          </button>
          <button className="rounded-full px-3 py-1.5 text-[11px] text-ink-500">Dismiss</button>
        </div>
      </div>

      <div className="flex-1 bg-ink-900 px-6 py-5 font-mono text-[11.5px] leading-[1.75] text-cream-100/85">
        <div className="text-cream-100/40">// workflow.yaml · intents</div>
        <pre className="mt-2 whitespace-pre-wrap">
<span className="text-cream-100/45">    - id: return_request</span>{`\n`}
<span className="text-cream-100/45">      triggers: ["return", "wapas"]</span>{`\n`}
<span className="text-cream-100/45">      ...</span>{`\n`}
{`\n`}
<span className="text-moss-600">+   - id: exchange_size</span>{`\n`}
<span className="text-moss-600">+     triggers:</span>{`\n`}
<span className="text-moss-600">+       - "size chhoti"</span>{`\n`}
<span className="text-moss-600">+       - "size bada"</span>{`\n`}
<span className="text-moss-600">+       - "exchange size"</span>{`\n`}
<span className="text-moss-600">+       - "different size chahiye"</span>{`\n`}
<span className="text-moss-600">+     collect:</span>{`\n`}
<span className="text-moss-600">+       - field: desired_size</span>{`\n`}
<span className="text-moss-600">+         ask: "Kaunsa size chahiye?"</span>{`\n`}
<span className="text-moss-600">+     reply: |</span>{`\n`}
<span className="text-moss-600">+       Exchange request register kar li hai.</span>{`\n`}
<span className="text-moss-600">+       Pickup 2-3 din mein schedule ho jayega.</span>{`\n`}
        </pre>
      </div>

      <div className="flex items-center justify-between border-t border-ink-900/10 bg-cream-100/50 px-6 py-3 text-[10.5px] text-ink-500">
        <div className="flex items-center gap-4">
          <span>+13 additions</span>
          <span>0 deletions</span>
          <span>confidence 0.94</span>
        </div>
        <div className="font-mono">on {version} · setu-lora-v3</div>
      </div>
    </>
  )
}

function MergedPane() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-ink-900/10 bg-moss-600/5 px-6 py-3.5">
        <div className="flex items-center gap-3">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-moss-600 font-mono text-[11px] text-cream-50">
            ✓
          </span>
          <div>
            <div className="font-mono text-[12px] text-ink-900">
              exchange_size · merged
            </div>
            <div className="font-mono text-[10px] text-ink-500">
              live on v3.3 · deflection +2 pts in 24h
            </div>
          </div>
        </div>
        <button className="rounded-full border border-ink-900/15 px-3 py-1.5 text-[11px] text-ink-700">
          View intent
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center bg-cream-50/40 px-8 py-10 text-center">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-moss-600 text-cream-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="mt-5 font-serif text-2xl leading-tight tracking-tightest text-ink-900">
          Merged into your workflow.
        </div>
        <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-relaxed text-ink-600">
          The bot handled the next 12 <span className="font-mono">exchange_size</span> requests
          without a human.
        </p>

        <div className="mt-6 grid w-full max-w-[380px] grid-cols-3 gap-px overflow-hidden rounded-xl border border-ink-900/10 bg-ink-900/10">
          {[
            ['+2 pts', 'deflection'],
            ['12', 'auto-handled'],
            ['0', 'escalations'],
          ].map(([k, v]) => (
            <div key={v} className="bg-cream-50 p-3 text-left">
              <div className="font-serif text-lg leading-none tracking-tightest text-ink-900">
                {k}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-ink-500">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
