import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const tiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    quota: '10,000 messages',
    tag: 'For teams testing the waters',
    features: [
      'One workflow.',
      'Managed SaaS. Mumbai region.',
      'Community Slack support.',
      'v2 English LoRA.',
    ],
    accent: false,
  },
  {
    name: 'Growth',
    price: '$499',
    period: '/month',
    quota: '100,000 messages',
    tag: 'For live D2C brands',
    features: [
      'Up to five workflows.',
      'Managed SaaS. Mumbai region.',
      'Email support with 24-hour SLA.',
      'v3 multilingual LoRA when it ships.',
      'Overage: $0.005 per message.',
    ],
    accent: true,
  },
  {
    name: 'Scale',
    price: '$2,499',
    period: '/month',
    quota: '750,000 messages',
    tag: 'For high-volume support desks',
    features: [
      'Unlimited workflows.',
      'Managed SaaS or BYOC.',
      'Shared Slack channel with our team.',
      'Priority access to custom LoRA training.',
      'Overage: $0.003 per message.',
    ],
    accent: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    quota: 'From $5,000/month',
    tag: 'BFSI, healthcare, government',
    features: [
      'BYOC, on-prem, or air-gapped.',
      'Custom LoRA on your data.',
      'DPAs, VPAT, SOC 2 evidence pack.',
      'Named CSM. Quarterly business review.',
    ],
    accent: false,
  },
]

const services = [
  {
    name: 'Custom LoRA fine-tune',
    price: '$2,000 to $5,000',
    sub: 'one-time · then $500/month maintenance',
    body:
      'We train a Setu LoRA on the last three months of your real conversations. Delivered in two to four weeks. Sharpens tone, vocabulary, and edge cases.',
  },
  {
    name: 'YAML authoring workshop',
    price: '$1,500',
    sub: 'one-time · half day, remote or on-site',
    body:
      'Our team sits with yours to write the first production workflow together. Covers intents, policies, escalation, and evaluation.',
  },
  {
    name: 'Integration engineering',
    price: '$150 / hour',
    sub: 'monthly retainer available',
    body:
      'Wiring Setu to your OMS, CRM, or WhatsApp Business API. Reference implementations in Node, Python, and Go.',
  },
]

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pay for messages."
        italic="Never for seats."
        lede="Setu is priced against traffic, not against how many humans you employ. Cost per message drops as volume grows."
      />

      <section className="pb-16">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-4">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`flex flex-col rounded-2xl border p-7 ${
                  t.accent
                    ? 'border-ink-900 bg-ink-900 text-cream-100'
                    : 'border-ink-900/10 bg-cream-50/70 text-ink-800'
                }`}
              >
                <div className={`text-[11px] uppercase tracking-[0.16em] ${
                  t.accent ? 'text-cream-100/60' : 'text-ink-500'
                }`}>
                  {t.name}
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`font-serif text-5xl leading-none tracking-tightest ${
                    t.accent ? 'text-cream-100' : 'text-ink-900'
                  }`}>
                    {t.price}
                  </span>
                  <span className={`text-[13px] ${t.accent ? 'text-cream-100/60' : 'text-ink-500'}`}>
                    {t.period}
                  </span>
                </div>
                <div className={`mt-2 font-mono text-[11.5px] ${
                  t.accent ? 'text-cream-100/70' : 'text-ink-500'
                }`}>
                  {t.quota}
                </div>
                <p className={`mt-4 text-[13.5px] leading-relaxed ${
                  t.accent ? 'text-cream-100/80' : 'text-ink-600'
                }`}>
                  {t.tag}
                </p>
                <ul className={`mt-6 space-y-2.5 text-[13.5px] leading-relaxed ${
                  t.accent ? 'text-cream-100/85' : 'text-ink-700'
                }`}>
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                        t.accent ? 'bg-cream-100/60' : 'bg-ink-500'
                      }`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    to="/#cta"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all ${
                      t.accent
                        ? 'bg-cream-100 text-ink-900 hover:bg-cream-50'
                        : 'border border-ink-900/20 text-ink-800 hover:border-ink-900/50'
                    }`}
                  >
                    {t.name === 'Enterprise' ? 'Talk to sales' : 'Start pilot'}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-[12.5px] text-ink-500">
            All plans include the same v2 model. No feature gates. Pay only for how much
            you talk.
          </p>
        </div>
      </section>

      {/* Unit econ context */}
      <section className="py-20 border-t border-ink-900/10">
        <div className="container-mid">
          <span className="eyebrow">The economics</span>
          <h2 className="mt-6 max-w-[620px] font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            60 to 100x cheaper than Intercom Fin.
          </h2>
          <p className="mt-6 max-w-[620px] text-[16px] leading-relaxed text-ink-600">
            A typical 6 to 8 turn support session costs $0.006 to $0.016 to serve.
            Intercom Fin charges roughly $0.99 per resolution. That gap is why Setu can
            price generously and still keep 90%+ gross margin.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
            {[
              ['$0.001', 'per message at scale', 'includes GPU + KV cache + overhead'],
              ['$0.012', 'per full 6-turn session', 'compared to $0.99 for Intercom Fin'],
              ['90%+', 'gross margin at scale', 'once you clear ~$5k MRR'],
            ].map(([k, v, s]) => (
              <div key={v} className="bg-cream-50/80 p-6">
                <div className="font-serif text-[42px] leading-none tracking-tightest text-ink-900">
                  {k}
                </div>
                <div className="mt-3 text-[14px] text-ink-700">{v}</div>
                <div className="mt-1 text-[12px] text-ink-500">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-mid">
          <span className="eyebrow">Services</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            When you want us in the room.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-ink-600">
            Beyond the platform, three services carry most of our margin. Add any of them
            to any plan.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.name}
                className="flex flex-col rounded-2xl border border-ink-900/10 bg-cream-50/70 p-7"
              >
                <div className="font-serif text-2xl leading-snug text-ink-900">{s.name}</div>
                <div className="mt-4 font-serif text-2xl tracking-tightest text-ink-800">
                  {s.price}
                </div>
                <div className="mt-1 font-mono text-[11.5px] text-ink-500">{s.sub}</div>
                <p className="mt-5 text-[14px] leading-relaxed text-ink-600">{s.body}</p>
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
                'How do you count messages?',
                'One request to /v1/parse or /v1/compose is one message. A typical support turn is one parse plus one compose, so two messages.',
              ],
              [
                'What happens if we exceed the quota?',
                'Overage kicks in at the rate listed. We alert you at 80% and 100% of the plan. No hard cut-off.',
              ],
              [
                'Do you charge per seat?',
                'No. Setu is a machine, not a workforce. You pay for traffic, not for humans.',
              ],
              [
                'Can we bring our own model?',
                'Not yet. The LoRA is trained specifically for structured output on Llama 3.1 8B. Custom bases will land in an enterprise contract in 2027.',
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
        </div>
      </section>
    </>
  )
}
