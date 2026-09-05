import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const timeline = [
  {
    tag: 'Shipped',
    tone: 'done',
    quarter: 'v2 · Q4 2025',
    items: [
      'Setu LoRA v2 · English structured output',
      'Local test harness with YAML paste panel',
      'AJIO Hinglish sample workflow',
      'Streaming token output',
    ],
  },
  {
    tag: 'In flight',
    tone: 'now',
    quarter: 'v2.5 · Q1 2026',
    items: [
      'Production /v1/parse and /v1/compose endpoints',
      'Managed SaaS on Runpod Serverless (Mumbai)',
      'Metering, auth, usage dashboard',
      'First ten pilot customers',
    ],
  },
  {
    tag: 'Next',
    tone: 'next',
    quarter: 'v3 · Q2 2026',
    items: [
      '15,000 to 25,000 examples across five verticals',
      '30% Hindi, Hinglish, Tamil, Bengali',
      '40% multi-turn dialogs (3 to 6 turns)',
      'LoRA r=64, alpha=128 for extra capacity',
      'DPO on structured-output preferences',
      'Held-out eval set of 500 conversations',
    ],
  },
  {
    tag: 'Later',
    tone: 'later',
    quarter: 'v4 · H2 2026',
    items: [
      'BYOC Docker image and Terraform module',
      'Adaptive workflows (see below)',
      'Setu Studio hosted YAML authoring',
      'SEA and MENA language packs',
    ],
  },
]

const toneStyles = {
  done: 'bg-moss-600 text-cream-50',
  now: 'bg-ink-900 text-cream-50',
  next: 'bg-cream-50 text-ink-800 border border-ink-900/20',
  later: 'bg-cream-50 text-ink-500 border border-ink-900/10',
}

export default function Roadmap() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title="Where Setu is going."
        italic="No mystery, no vaporware."
        lede="Everything shipped, everything in flight, everything we've committed to. Updated quarterly."
      />

      {/* Adaptive workflows — hero feature */}
      <section className="pb-8">
        <div className="container-mid">
          <div className="rounded-2xl border border-ink-900/10 bg-ink-900 text-cream-100 overflow-hidden">
            <div className="grid gap-10 p-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:p-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cream-100/15 bg-cream-100/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-cream-100/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss-600" />
                  Flagship · v4
                </div>
                <h2 className="mt-6 font-serif text-[44px] leading-[1.02] tracking-tightest md:text-[64px]">
                  Adaptive workflows.
                  <br />
                  <span className="italic text-cream-100/90">
                    Self-building YAML.
                  </span>
                </h2>
                <p className="mt-6 max-w-[460px] text-[16px] leading-relaxed text-cream-100/70">
                  Every conversation that flows through Setu leaves a trace. Missing intents,
                  new paraphrases, unseen slot values, customers asking things your YAML
                  hasn't accounted for. Adaptive workflows study those gaps and propose diffs
                  you can review and merge.
                </p>
                <p className="mt-4 max-w-[460px] text-[16px] leading-relaxed text-cream-100/70">
                  The bot gets sharper every week without you writing a line.
                </p>
              </div>

              <div className="rounded-xl border border-cream-100/10 bg-cream-100/[0.03] p-5 font-mono text-[12px] leading-relaxed">
                <div className="flex items-center justify-between text-cream-100/50">
                  <span>proposed_diff.yaml</span>
                  <span className="text-[10px] uppercase tracking-wider text-cream-100/40">
                    seen 38x in 7 days
                  </span>
                </div>
                <pre className="mt-4 whitespace-pre-wrap">
<span className="text-cream-100/40">  intents:</span>{`\n`}
<span className="text-moss-600">+   - id: exchange_size</span>{`\n`}
<span className="text-moss-600">+     triggers:</span>{`\n`}
<span className="text-moss-600">+       - "size chhoti"</span>{`\n`}
<span className="text-moss-600">+       - "size bada"</span>{`\n`}
<span className="text-moss-600">+       - "exchange size"</span>{`\n`}
<span className="text-moss-600">+     collect:</span>{`\n`}
<span className="text-moss-600">+       - field: desired_size</span>{`\n`}
<span className="text-moss-600">+         ask: "Kaunsa size chahiye?"</span>{`\n`}
<span className="text-moss-600">+     reply: |</span>{`\n`}
<span className="text-moss-600">+       Exchange request register kar li hai.</span>{`\n`}
<span className="text-cream-100/40">    - id: return_request</span>{`\n`}
                </pre>
                <div className="mt-6 flex gap-2 border-t border-cream-100/10 pt-4">
                  <button className="rounded-full bg-cream-100 px-4 py-1.5 text-[11.5px] text-ink-900">
                    Merge
                  </button>
                  <button className="rounded-full border border-cream-100/20 px-4 py-1.5 text-[11.5px] text-cream-100/80">
                    Edit
                  </button>
                  <button className="rounded-full px-4 py-1.5 text-[11.5px] text-cream-100/50">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-6 border-t border-cream-100/10 px-10 py-10 md:grid-cols-3 md:px-16">
              {[
                ['Observes', 'Every real conversation. Nothing synthetic.'],
                ['Proposes', 'Small YAML diffs, one intent at a time.'],
                ['Waits', 'A human on your team reviews and merges.'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-cream-100/50">
                    {k}
                  </div>
                  <div className="mt-3 text-[14.5px] leading-relaxed text-cream-100/85">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-ink-900/10 mt-16">
        <div className="container-mid">
          <span className="eyebrow">Timeline</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            The whole picture.
          </h2>

          <div className="mt-14 space-y-10">
            {timeline.map((row) => (
              <div key={row.quarter} className="grid gap-6 md:grid-cols-[220px_1fr]">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[10.5px] uppercase tracking-[0.16em] ${toneStyles[row.tone]}`}
                  >
                    {row.tag}
                  </span>
                  <div className="mt-3 font-mono text-[12px] text-ink-500">{row.quarter}</div>
                </div>
                <ul className="space-y-3 border-l border-ink-900/10 pl-6">
                  {row.items.map((it) => (
                    <li key={it} className="text-[15px] leading-relaxed text-ink-700">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Longer horizon */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-narrow">
          <span className="eyebrow">Beyond that</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Where the bridge leads.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
            E-commerce is the wedge. The name सेतु means bridge, and there are many bridges
            to build. Fintech customer support. Government citizen services. Healthcare
            intake. Logistics ops. EdTech. All of them are natural-language on top of an
            existing system. All of them fit Setu's shape.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <Link to="/pricing" className="btn-primary">Start on v2 today <span aria-hidden>→</span></Link>
            <Link to="/product" className="btn-ghost">Read the product</Link>
          </div>
        </div>
      </section>
    </>
  )
}
