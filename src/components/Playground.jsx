import { useEffect, useMemo, useRef, useState } from 'react'

const presets = [
  {
    label: 'Payment missing',
    text: 'bhai paisa kat gaya order nahi bana',
    result: {
      intent: 'payment_status',
      confidence: 0.96,
      entities: { order_id: 'ORD123' },
      workflow: 'payment_reconciliation',
      status: '✓ Completed',
    },
  },
  {
    label: 'Refund status',
    text: 'ORD452 ka refund kab tak aayega?',
    result: {
      intent: 'refund_status',
      confidence: 0.94,
      entities: { order_id: 'ORD452' },
      workflow: 'refund_status',
      status: '✓ Completed',
    },
  },
  {
    label: 'Return request',
    text: 'return karna hai FL1234567890 size chhoti',
    result: {
      intent: 'return_request',
      confidence: 0.92,
      entities: { order_id: 'FL1234567890', reason: 'size_issue' },
      workflow: 'return_pickup',
      status: '✓ Completed',
    },
  },
  {
    label: 'Order tracking',
    text: 'mera order kahan hai ORD-8891',
    result: {
      intent: 'order_status',
      confidence: 0.98,
      entities: { order_id: 'ORD-8891' },
      workflow: 'order_tracking',
      status: '✓ Completed',
    },
  },
]

// Fake request id helper
const randId = () => 'req_' + Math.random().toString(36).slice(2, 10)
const sessId = () => 'sess_' + Math.random().toString(36).slice(2, 10)

export default function Playground() {
  const [i, setI] = useState(0)
  const [phase, setPhase] = useState('idle') // idle · running · done
  const [result, setResult] = useState(null)
  const [logs, setLogs] = useState([])
  const [meta, setMeta] = useState({ req: null, latencyMs: null })
  const timeoutsRef = useRef([])

  const active = useMemo(() => presets[i], [i])

  // Clear any in-flight timers when switching preset / unmounting
  const clearTimers = () => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  // Whenever the user picks a different preset, reset the terminal back to idle
  // so the previous result doesn't linger.
  useEffect(() => {
    clearTimers()
    setResult(null)
    setPhase('idle')
    setLogs([])
    setMeta({ req: null, latencyMs: null })
  }, [active])

  useEffect(() => clearTimers, [])

  const run = () => {
    clearTimers()

    const reqId = randId()
    const sId = sessId()
    setPhase('running')
    setResult(null)
    setLogs([])
    setMeta({ req: reqId, latencyMs: null })

    const conf = Math.round(active.result.confidence * 100)
    const entitiesStr = Object.entries(active.result.entities)
      .map(([k, v]) => `${k}: "${v}"`)
      .join(', ')

    const events = [
      { at: 0,    text: `> POST setu.api/v1/execute`,                              tone: 'req' },
      { at: 100,  text: `  request_id: ${reqId}`,                                  tone: 'muted' },
      { at: 180,  text: `  session_id: ${sId}`,                                    tone: 'muted' },
      { at: 360,  text: `→ classifying intent…`,                                   tone: 'pending' },
      { at: 780,  text: `✓ intent: ${active.result.intent}  (${conf}%)`,           tone: 'ok' },
      { at: 900,  text: `→ extracting entities…`,                                  tone: 'pending' },
      { at: 1260, text: `✓ entities: { ${entitiesStr} }`,                          tone: 'ok' },
      { at: 1380, text: `→ resolving workflow…`,                                   tone: 'pending' },
      { at: 1720, text: `✓ workflow: ${active.result.workflow}`,                   tone: 'ok' },
      { at: 1820, text: `→ validating action…`,                                    tone: 'pending' },
      { at: 2080, text: `✓ action authorized`,                                     tone: 'ok' },
      { at: 2180, text: `← 200 OK · returned in 2.18s`,                            tone: 'success' },
    ]

    events.forEach((evt) => {
      const t = setTimeout(() => {
        setLogs((prev) => [...prev, evt])
      }, evt.at)
      timeoutsRef.current.push(t)
    })

    const finalT = setTimeout(() => {
      setResult(active.result)
      setPhase('done')
      setMeta({ req: reqId, latencyMs: 2180 })
    }, 2300)
    timeoutsRef.current.push(finalT)
  }

  const toneClass = {
    req: 'text-cream-100',
    ok: 'text-moss-600',
    success: 'text-moss-600 font-medium',
    muted: 'text-cream-100/40',
    pending: 'text-cream-100/70',
  }

  return (
    <section id="playground" className="relative overflow-hidden py-24 md:py-32">
      {/* Deep warm-ink backdrop. Cream card floats on it like paper on leather */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-[calc(100%-6rem)] max-w-[1080px] rounded-[48px] bg-gradient-to-br from-[#1F1A14] via-[#181410] to-[#14100B]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-[calc(100%-6rem)] max-w-[1080px] rounded-[48px] opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(245,240,230,0.07) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative container-mid">
        <div className="max-w-[620px]">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-medium text-cream-100/60">
            <span className="block h-[1px] w-6 bg-cream-100/40" />
            Try Setu
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-cream-50 md:text-5xl">
            Pick a message.
            <br />
            <span className="italic text-cream-100/70">Watch it become a workflow.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-cream-100/75">
            A tiny sandbox running against a demo workflow. Pick one of the sample
            messages and hit run. The full API is available in the developer section below.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-ink-900/15 bg-cream-50 p-6 md:p-8 shadow-[6px_6px_0_0_rgba(20,18,16,0.85)]">
          <div className="flex flex-wrap gap-2">
            {presets.map((p, idx) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setI(idx)}
                className={`rounded-full border px-4 py-1.5 text-[12.5px] transition-all ${
                  i === idx
                    ? 'border-ink-900 bg-ink-900 text-cream-50'
                    : 'border-ink-900/15 bg-cream-50 text-ink-700 hover:border-ink-900/40'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.05fr_1fr]">
            {/* Fixed message (read-only) */}
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                message
              </label>
              <div
                aria-label="Sample customer message"
                className="mt-3 min-h-[112px] w-full rounded-xl border border-ink-900/15 bg-cream-100 p-4 text-[15px] leading-relaxed text-ink-800"
              >
                {active.text}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={run}
                  className="btn-primary disabled:opacity-60"
                  disabled={phase === 'running'}
                >
                  {phase === 'running' ? 'Running…' : 'Run understand + execute'}
                  <span aria-hidden>→</span>
                </button>
                <span className="font-mono text-[11px] text-ink-500">Setu API</span>
              </div>
            </div>

            {/* Result / terminal */}
            <div className="flex flex-col rounded-xl border border-ink-900/10 bg-ink-900 font-mono text-[12.5px] leading-relaxed text-cream-100 min-h-[300px]">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-cream-100/10 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-cream-100/25" />
                    <span className="h-2 w-2 rounded-full bg-cream-100/25" />
                    <span className="h-2 w-2 rounded-full bg-cream-100/25" />
                  </span>
                  <span className="ml-1 text-cream-100/50 text-[11px] uppercase tracking-wider">
                    setu.api
                  </span>
                </div>
                <span
                  className={`h-2 w-2 rounded-full ${
                    phase === 'running'
                      ? 'bg-moss-600 animate-pulse'
                      : phase === 'done'
                      ? 'bg-moss-600'
                      : 'bg-cream-100/20'
                  }`}
                />
              </div>

              {/* Terminal body */}
              <div className="flex-1 overflow-hidden px-4 py-3">
                {/* Idle prompt — before the user hits Run */}
                {phase === 'idle' && (
                  <div className="space-y-1 text-cream-100/50">
                    <div>$ setu.api ready</div>
                    <div className="text-cream-100/35">
                      # hit <span className="text-cream-100/70">Run understand + execute</span> to send the message
                    </div>
                    <div className="flex items-center gap-1 pt-1 text-cream-100/60">
                      <span>&gt;</span>
                      <span className="inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-cream-100/60" />
                    </div>
                  </div>
                )}

                {/* Streaming logs during a run */}
                {phase === 'running' && (
                  <div className="space-y-1">
                    {logs.map((log, idx) => (
                      <div
                        key={idx}
                        className={`${toneClass[log.tone] || 'text-cream-100'} whitespace-pre-wrap`}
                        style={{ animation: 'fadeIn 220ms ease-out both' }}
                      >
                        {log.text}
                      </div>
                    ))}
                    <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-cream-100/60" />
                  </div>
                )}

                {/* Structured result when done */}
                {phase === 'done' && result && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-cream-100/50">
                      <span>← 200 OK</span>
                      <span className="text-[11px]">{meta.req}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-cream-100/60">intent</span>
                      <span className="text-cream-100">
                        {result.intent}{' '}
                        <span className="text-moss-600">
                          · {(result.confidence * 100).toFixed(0)}%
                        </span>
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-cream-100/60">entities</span>
                      <span className="text-cream-100 text-right">
                        {Object.entries(result.entities).map(([k, v]) => (
                          <span key={k} className="block">
                            {k}: {v}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-cream-100/60">workflow</span>
                      <span className="text-cream-100">{result.workflow}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-cream-100/10 pt-3">
                      <span className="text-cream-100/60">status</span>
                      <span className="text-moss-600">{result.status}</span>
                    </div>
                    {meta.latencyMs != null && (
                      <div className="pt-1 text-right text-[11px] text-cream-100/40">
                        returned in {(meta.latencyMs / 1000).toFixed(2)}s
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframe for log line reveal */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
