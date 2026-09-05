const modes = [
  {
    letter: 'A',
    name: 'Managed SaaS',
    for: 'SMB',
    body: 'Upload YAML. Get an API key. We host the model in Mumbai, scale to zero, and meter usage. Fastest path to a live bot.',
    tag: 'Runpod Serverless · L40S · vLLM',
  },
  {
    letter: 'B',
    name: 'Bring Your Own Cloud',
    for: 'Mid-market',
    body: 'Terraform module plus a Docker image. Deploys into your AWS, GCP, or Azure VPC. Customer data never leaves your network.',
    tag: 'BYOC · VPC-native · telemetry only',
  },
  {
    letter: 'C',
    name: 'On-prem · Air-gapped',
    for: 'Enterprise · BFSI · Gov',
    body: 'Bare-metal install with a 4–8 week onboarding. Fully offline. Same LoRA workflow, same YAML surface, zero external calls.',
    tag: 'Compliance-first · $50k+ setup',
  },
]

export default function Deployment() {
  return (
    <section id="deploy" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <span className="eyebrow">Deployment</span>
        <h2 className="mt-6 max-w-[640px] font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
          Three ways to run it.
          <br />
          <span className="italic text-ink-700">Same product underneath.</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {modes.map((m) => (
            <article
              key={m.letter}
              className="group flex flex-col rounded-2xl border border-ink-900/10 bg-cream-50/70 p-7 transition-all hover:border-ink-900/25"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-cream-50 font-serif italic">
                  {m.letter}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  {m.for}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl leading-snug text-ink-900">
                {m.name}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
                {m.body}
              </p>
              <div className="mt-auto pt-6 font-mono text-[11px] text-ink-500">
                {m.tag}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
