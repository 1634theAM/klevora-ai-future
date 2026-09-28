import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const timeline = [
  {
    tag: 'R&D',
    tone: 'done',
    quarter: 'Q3 2026',
    items: [
      'Core research on intent extraction and structured output',
      'Workflow schema and API surface design',
      'Adapter training on the latest Jev model',
      'Internal test harness with playbook paste + trace viewer',
      'First customer conversations across D2C, fintech, and support ops',
      'Team ramp and infrastructure baseline',
    ],
  },
  {
    tag: 'In flight',
    tone: 'now',
    quarter: 'Launch · Q4 2026',
    items: [
      'First public Setu API to market',
      'Latest Jev model powering understanding + entity extraction',
      'Managed SaaS on serverless GPU',
      'Metering, auth, and usage dashboard',
      'Node and Python SDKs',
      'Hosted docs and interactive playground',
      'First paying customers live',
    ],
  },
  {
    tag: 'Next',
    tone: 'next',
    quarter: 'Adaptive · Q1 2027',
    items: [
      'Self-building workflows. Setu proposes new intents from real traffic',
      'Auto-generated entity catalogs from conversation traces',
      'One-click merge for workflow diffs, versioned end-to-end',
      'Sessions API for multi-turn state',
      'Webhooks for long-running workflows',
      'Multilingual expansion. Hindi, Hinglish, Tamil, Bengali',
    ],
  },
  {
    tag: 'Later',
    tone: 'later',
    quarter: 'Scale · H2 2027',
    items: [
      'BYOC container image and infrastructure module',
      'On-prem, air-gapped deployment for BFSI and government',
      'Custom adapters trained on customer data',
      'Setu Studio. Hosted workflow authoring + observability',
      'SEA and MENA language packs',
      'Voice IVR reference integration',
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

      {/* Adaptive workflows,hero feature */}
      <section className="pb-8">
        <div className="container-mid">
          <div className="rounded-2xl border border-ink-900/10 bg-ink-900 text-cream-100 overflow-hidden">
            <div className="grid gap-10 p-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:p-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cream-100/15 bg-cream-100/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-cream-100/70">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-600 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss-600" />
                  </span>
                  Flagship · v4
                </div>
                <h2 className="mt-6 font-serif text-[44px] leading-[1.02] tracking-tightest md:text-[64px]">
                  Adaptive workflows.
                  <br />
                  <span className="italic text-cream-100/90">
                    Self-building playbook.
                  </span>
                </h2>
                <p className="mt-6 max-w-[460px] text-[16px] leading-relaxed text-cream-100/70">
                  Every conversation that flows through Setu leaves a trace. Missing intents,
                  new paraphrases, unseen slot values, customers asking things your playbook
                  hasn't accounted for. Adaptive workflows study those gaps and propose diffs
                  you can review and merge.
                </p>
                <p className="mt-4 max-w-[460px] text-[16px] leading-relaxed text-cream-100/70">
                  The bot gets sharper every week without you writing a line.
                </p>
              </div>

              <div className="rounded-xl border border-cream-100/10 bg-cream-100/[0.03] p-5 font-mono text-[12px] leading-relaxed">
                <div className="flex items-center justify-between text-cream-100/50">
                  <span>proposed_diff.playbook</span>
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
                ['Proposes', 'Small playbook diffs, one intent at a time.'],
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
            <Link to="/pricing" className="btn-primary">Join the waitlist <span aria-hidden>→</span></Link>
            <Link to="/product" className="btn-ghost">Read the product</Link>
          </div>
        </div>
      </section>
    </>
  )
}
