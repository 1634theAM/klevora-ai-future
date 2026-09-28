import PageHeader from '../components/PageHeader.jsx'

const factors = [
  {
    k: '01',
    title: 'Traffic',
    body: 'How many API calls a month, peak concurrency, latency budget.',
  },
  {
    k: '02',
    title: 'Deployment',
    body: 'Managed SaaS, inside your VPC, or fully on-prem and air-gapped.',
  },
  {
    k: '03',
    title: 'Custom work',
    body: 'Fine-tuned adapter on your data, workflow authoring, integration engineering.',
  },
  {
    k: '04',
    title: 'Support level',
    body: 'Community Slack, email SLA, shared channel, or a named CSM with quarterly reviews.',
  },
]

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pricing built around"
        italic="your usage."
        lede="Every workload is different. Tell us what you're building, how your customers reach you, and where your data has to live. We'll come back with a plan that actually fits."
      />

      {/* Big contact block */}
      <section className="pb-8">
        <div className="container-mid">
          <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-16 md:items-center">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  How this works
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tightest text-ink-900 md:text-4xl">
                  Hop on a call. We listen first,
                  <br />
                  <span className="italic text-ink-700">then pitch the best possible fit.</span>
                </h2>
                <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
                  Every business is a little different. Share what you're building and we'll
                  put together a plan that fits.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:klevora.connect@gmail.com?subject=Setu%20%E2%80%94%20let%27s%20talk%20pricing"
                    className="btn-primary"
                  >
                    Book a call <span aria-hidden>→</span>
                  </a>
                  <a
                    href="mailto:klevora.connect@gmail.com"
                    className="btn-ghost"
                  >
                    klevora.connect@gmail.com
                  </a>
                </div>
                <p className="mt-6 font-mono text-[11.5px] text-ink-500">
                  One reply from a human within 48 hours.
                </p>
              </div>

              <div className="rounded-xl border border-ink-900/10 bg-cream-100 p-6 md:p-7">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  What to send us
                </div>
                <ul className="mt-5 space-y-4 text-[14.5px] text-ink-700">
                  {[
                    'A sentence on your product and who your customers are.',
                    'Where the conversations happen (WhatsApp, in-app, voice, agent copilot).',
                    'Roughly how many messages a month, today and in 12 months.',
                    'Any data residency or compliance constraints we should know about.',
                    'Deadline, if any.',
                  ].map((l, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                      <span className="leading-relaxed">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we consider */}
      <section className="py-20 border-t border-ink-900/10 mt-12">
        <div className="container-mid">
          <span className="eyebrow">What we consider</span>
          <h2 className="mt-6 max-w-[620px] font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Four things drive the number.
          </h2>
          <p className="mt-6 max-w-[620px] text-[16px] leading-relaxed text-ink-600">
            Not seat counts. Not vanity features. Just the levers that actually move cost
            and value on both sides.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {factors.map((f) => (
              <article
                key={f.k}
                className="flex flex-col rounded-2xl border border-ink-900/10 bg-cream-50/70 p-7"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  {f.k}
                </div>
                <div className="mt-4 font-serif text-2xl leading-snug text-ink-900">
                  {f.title}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-600">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-narrow">
          <span className="eyebrow">Common questions</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Before you ask.
          </h2>

          <div className="mt-10 divide-y divide-ink-900/10">
            {[
              [
                'Why no public price list?',
                "Our best customers don't fit standard tiers. Public pricing tends to anchor conversations in the wrong place. We'd rather understand your workload first, then quote what makes sense.",
              ],
              [
                'Is there a minimum commitment?',
                "For managed pilots, no. For BYOC and on-prem contracts, typically 12 months so we can plan capacity and support. We're flexible if the pilot lands well.",
              ],
              [
                'Do you charge per seat?',
                "No. Setu is API infrastructure, not a workforce. You pay against traffic, deployment mode, and support level. Never against how many humans you employ.",
              ],
              [
                'How fast can we get a quote?',
                "One reply from a human within 48 hours. A concrete number usually lands within a week, after a short call to align on scope.",
              ],
              [
                'Can we start small and scale?',
                "Yes. Most engagements start with a pilot workflow on Managed SaaS. When you're ready for BYOC or on-prem, the API contract does not change.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-[15.5px] text-ink-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="text-ink-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">{a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:klevora.connect@gmail.com?subject=Setu%20%E2%80%94%20let%27s%20talk%20pricing"
              className="btn-primary"
            >
              Start the conversation <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
