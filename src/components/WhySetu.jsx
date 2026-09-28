const capabilities = [
  {
    title: 'Deterministic workflows',
    body: 'AI understands the request. Your business logic decides what happens.',
    tag: 'workflow.playbook',
  },
  {
    title: 'API-first',
    body: 'Integrate Setu into your existing applications through clean HTTP APIs.',
    tag: 'REST · JSON',
  },
  {
    title: 'Structured outputs',
    body: 'Return predictable intent and entity schemas your services can rely on.',
    tag: 'schema-locked',
  },
  {
    title: 'Validation & guardrails',
    body: 'Validate inputs, arguments, and actions before Setu ever calls your APIs.',
    tag: 'input · action',
  },
  {
    title: 'Permissions & confirmation',
    body: 'Protect high-impact business actions with role checks and human confirmation.',
    tag: 'RBAC · 2-step',
  },
  {
    title: 'Observability',
    body: 'Trace every request: intent → workflow → action → API → result.',
    tag: 'traces · logs',
  },
  {
    title: 'Human escalation',
    body: 'Route cases to human agents when automation should stop. Cleanly.',
    tag: 'handoff',
  },
  {
    title: 'Multilingual by default',
    body: 'Understands English, Hindi, Hinglish, and more without extra configuration.',
    tag: 'language',
  },
  {
    title: 'Replaceable model layer',
    body: 'The model powering understanding is an implementation detail. Your integration contract does not change when we upgrade it.',
    tag: 'model-agnostic',
  },
]

export default function WhySetu() {
  return (
    <section id="why" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="max-w-[620px]">
          <span className="eyebrow">Why Setu</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Infrastructure primitives,
            <br />
            <span className="italic text-ink-700">not AI marketing.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
            Setu is designed for teams that ship. The underlying model is replaceable. What
            you build on stays stable.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <article key={c.title} className="flex flex-col bg-cream-50/85 p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                {c.tag}
              </div>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-ink-900">
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
