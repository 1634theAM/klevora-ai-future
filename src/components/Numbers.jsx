const stats = [
  { k: '$0.001', label: 'per message at scale', sub: '~$0.002 at launch' },
  { k: '2.3s', label: 'median response', sub: '300 in · 150 out tokens' },
  { k: '60–100×', label: 'cheaper than Intercom Fin', sub: 'per resolution' },
  { k: '~5 GB', label: 'base + adapter', sub: 'Llama 3.1 8B · 4-bit · LoRA' },
]

export default function Numbers() {
  return (
    <section id="numbers" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <span className="eyebrow">Unit economics</span>
        <h2 className="mt-6 max-w-[720px] font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
          Small model. Sharp margins.
          <span className="italic text-ink-700"> Real deflection.</span>
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-4">
          {stats.map(({ k, label, sub }) => (
            <div key={label} className="bg-cream-50/80 p-7">
              <div className="font-serif text-[42px] leading-none tracking-tightest text-ink-900">
                {k}
              </div>
              <div className="mt-4 text-[14px] text-ink-700">{label}</div>
              <div className="mt-1 text-[12px] text-ink-500">{sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 text-[14.5px] leading-relaxed text-ink-600 md:grid-cols-3">
          <p>
            A typical 6–8 turn support session costs
            <span className="text-ink-800"> $0.006–$0.016</span> to serve. Enough headroom to
            price generously and still keep 90%+ gross margin at scale.
          </p>
          <p>
            The 8B base fits any modern GPU with 8 GB VRAM (L40S, RTX 4090, A10G), so
            hosting is cheap in every region, including <span className="text-ink-800">Mumbai</span>.
          </p>
          <p>
            The LoRA adapter is <span className="text-ink-800">~50 MB</span>. Custom
            fine-tunes per client are cheap to train, cheap to swap, cheap to version.
          </p>
        </div>
      </div>
    </section>
  )
}
