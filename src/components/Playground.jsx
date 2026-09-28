import { useEffect, useMemo, useState } from 'react'

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

export default function Playground() {
  const [i, setI] = useState(0)
  const [phase, setPhase] = useState('done') // idle · running · done
  const [result, setResult] = useState(presets[0].result)

  const active = useMemo(() => presets[i], [i])

  useEffect(() => {
    setResult(active.result)
    setPhase('done')
  }, [active])

  const run = () => {
    setPhase('running')
    setResult(null)
    setTimeout(() => {
      setResult(active.result)
      setPhase('done')
    }, 900)
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
                <span className="font-mono text-[11px] text-ink-500">
                  Setu API
                </span>
              </div>
            </div>

            {/* Result */}
            <div className="rounded-xl border border-ink-900/10 bg-ink-900 p-5 font-mono text-[12.5px] leading-relaxed text-cream-100 min-h-[260px]">
              <div className="flex items-center justify-between text-cream-100/60">
                <span>result</span>
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

              {phase === 'running' && (
                <div className="mt-6 space-y-2 text-cream-100/70">
                  <div>→ classifying intent…</div>
                  <div>→ extracting entities…</div>
                  <div>→ resolving workflow…</div>
                </div>
              )}

              {phase === 'done' && result && (
                <div className="mt-6 space-y-3">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
