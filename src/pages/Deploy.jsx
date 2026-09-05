import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const modes = [
  {
    letter: 'A',
    name: 'Managed SaaS',
    for: 'SMB',
    tag: 'Runpod Serverless · L40S · vLLM',
    body:
      'Upload YAML. Get an API key. We host the model in Mumbai, scale to zero, and meter usage. Fastest path from signup to a live bot.',
    bullets: [
      'Zero infra to run.',
      'Auto-scaling on Runpod Serverless L40S.',
      'Per-message pricing. Cheap at launch, cheaper at scale.',
      'Multi-region on the roadmap (Mumbai, Singapore, Frankfurt).',
    ],
    footnote: 'Best for teams under 500k messages a month.',
  },
  {
    letter: 'B',
    name: 'Bring Your Own Cloud',
    for: 'Mid-market',
    tag: 'BYOC · VPC-native · Terraform · Docker',
    body:
      'A Terraform module plus a Docker image. Setu runs inside your AWS, GCP, or Azure VPC. Customer data never leaves your network. We meter and telemeter, nothing else.',
    bullets: [
      'Deploys into your existing VPC in under an hour.',
      'vLLM inference with continuous batching.',
      'Only metering and health telemetry leave your network.',
      'Compatible with your existing observability stack.',
    ],
    footnote: 'Best for regulated industries and mid-market brands with data policies.',
  },
  {
    letter: 'C',
    name: 'On-prem · Air-gapped',
    for: 'Enterprise · BFSI · Gov',
    tag: 'Bare-metal · offline · $50k+ setup',
    body:
      'Bare-metal install with a 4 to 8 week onboarding cycle. Fully offline. Same LoRA workflow, same YAML surface, zero external calls. For BFSI, healthcare, and government.',
    bullets: [
      'Air-gapped by default. No outbound network.',
      'On-site training for your ops team.',
      'Custom LoRA on your historical data.',
      'Annual support contract with SLAs.',
    ],
    footnote: 'Best for compliance-first buyers with dedicated GPU capacity.',
  },
]

export default function Deploy() {
  return (
    <>
      <PageHeader
        eyebrow="Deployment"
        title="Three modes."
        italic="Same product underneath."
        lede="Whatever your data policy allows, Setu fits. Same YAML, same model, same LoRA. Different data path."
      />

      <section className="py-8">
        <div className="container-mid space-y-6">
          {modes.map((m) => (
            <article
              key={m.letter}
              className="grid gap-8 rounded-2xl border border-ink-900/10 bg-cream-50/70 p-8 md:grid-cols-[280px_1fr] md:p-10"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-cream-50 font-serif italic">
                    {m.letter}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
                    {m.for}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-ink-900">
                  {m.name}
                </h3>
                <div className="mt-4 font-mono text-[11px] text-ink-500">{m.tag}</div>
              </div>

              <div>
                <p className="text-[15.5px] leading-relaxed text-ink-700">{m.body}</p>
                <ul className="mt-6 grid gap-2 text-[14px] text-ink-600 sm:grid-cols-2">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-ink-500 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-ink-900/10 pt-4 font-mono text-[11.5px] text-ink-500">
                  {m.footnote}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 border-t border-ink-900/10 mt-16">
        <div className="container-mid">
          <span className="eyebrow">Compare</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Side by side.
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-cream-50/80 text-[11px] uppercase tracking-[0.16em] text-ink-500">
                <tr>
                  <th className="p-5 font-medium">Attribute</th>
                  <th className="p-5 font-medium">Managed SaaS</th>
                  <th className="p-5 font-medium">BYOC</th>
                  <th className="p-5 font-medium">On-prem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10 bg-cream-50/40 text-ink-700">
                {[
                  ['Onboarding', '1 day', '1 week', '4 to 8 weeks'],
                  ['Where data lives', 'Setu cloud (Mumbai)', 'Your VPC', 'Your datacenter'],
                  ['Setup fee', 'None', 'Included', '$50k+'],
                  ['Best for', 'SMB', 'Mid-market', 'BFSI · Gov'],
                  ['Model updates', 'Automatic', 'Opt-in', 'Manual · offline'],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`p-5 ${i === 0 ? 'font-medium text-ink-900' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-ink-900/10">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Not sure which mode?
          </h2>
          <p className="mx-auto mt-6 max-w-[440px] text-[16px] leading-relaxed text-ink-600">
            Most SMB pilots start on Managed. Most enterprise pilots start on BYOC. We can
            help you pick.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/pricing" className="btn-primary">See pricing <span aria-hidden>→</span></Link>
            <Link to="/product" className="btn-ghost">Read the product</Link>
          </div>
        </div>
      </section>
    </>
  )
}
