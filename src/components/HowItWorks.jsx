const steps = [
  {
    n: '01',
    title: 'Understand',
    verb: 'Read the message',
    body: 'Setu accepts the raw customer message in English, Hindi, Hinglish, and more.',
    example: '"Payment ho gaya but order nahi bana"',
    kind: 'purple',
  },
  {
    n: '02',
    title: 'Identify',
    verb: 'Classify the intent',
    body: 'Setu classifies against the intents you have declared in your workflow.',
    example: 'payment_status',
    kind: 'code',
  },
  {
    n: '03',
    title: 'Extract',
    verb: 'Pull structured entities',
    body: 'Setu extracts the entities required by that workflow.',
    example: 'payment_reference\norder_id',
    kind: 'code',
  },
  {
    n: '04',
    title: 'Run workflow',
    verb: 'Follow the declared steps',
    body: 'Setu walks the declared workflow: fetch inputs, evaluate conditions, choose actions.',
    example: 'check_payment → check_order → reconcile',
    kind: 'code',
  },
  {
    n: '05',
    title: 'Execute',
    verb: 'Call your APIs',
    body: 'Setu calls your existing APIs. Semantic actions map to your OMS, CRM, or ERP endpoints.',
    example: 'POST customer.api/payments/lookup\nGET  customer.api/orders/ORD123',
    kind: 'code',
  },
  {
    n: '06',
    title: 'Result',
    verb: 'Return a verified result',
    body: 'Setu returns a structured business result, plus a natural-language reply if you want one.',
    example:
      '"Aapka payment successful hai. Missing order ke liye humne ek support request bana di hai."',
    kind: 'purple',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="max-w-[600px]">
          <span className="eyebrow">How Setu works</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            From conversation
            <br />
            <span className="italic text-ink-700">to verified action.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
            Every request follows the same six-step path. Deterministic where it matters,
            language-aware where it counts.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6 md:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-ink-500">{s.n}</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  {s.verb}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-ink-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
                {s.body}
              </p>
              <div
                className="mt-5 rounded-lg border border-ink-900/40 bg-gradient-to-br from-[#1F1A14] via-[#181410] to-[#14100B] p-4 font-mono text-[12.5px] leading-relaxed text-cream-100/90"
              >
                <pre className="whitespace-pre-wrap">{s.example}</pre>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-[640px] text-[15.5px] leading-relaxed text-ink-500">
          Setu turns language into controlled business execution. Your intents, your workflows,
          your APIs. Setu is the connective layer that makes them addressable in natural
          language.
        </p>
      </div>
    </section>
  )
}
