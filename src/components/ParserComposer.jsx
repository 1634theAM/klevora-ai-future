export default function ParserComposer() {
  return (
    <section className="py-24 md:py-32 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="max-w-[560px]">
          <span className="eyebrow">Two functions</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Parser. Composer.
            <br />
            <span className="italic text-ink-700">Nothing else.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-ink-500">01</span>
              <span className="font-serif italic text-xl text-ink-800">parse</span>
            </div>
            <h3 className="mt-6 font-serif text-2xl leading-snug text-ink-900">
              Natural language, in.
              <br />
              Structured intent, out.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Customer text plus your workflow YAML plus conversation history. Setu returns a
              typed intent and its slots, ready for your server to route.
            </p>
            <pre className="mt-6 overflow-auto rounded-lg bg-ink-900 p-5 font-mono text-[12px] leading-relaxed text-cream-100">
{`{
  "intent": "return_request",
  "params": {
    "order_id": "FL1234567890",
    "reason": "size_issue"
  }
}`}
            </pre>
          </article>

          <article className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-ink-500">02</span>
              <span className="font-serif italic text-xl text-ink-800">compose</span>
            </div>
            <h3 className="mt-6 font-serif text-2xl leading-snug text-ink-900">
              Backend response, in.
              <br />
              On-brand reply, out.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              You hand Setu the structured result from your OMS or CRM. It composes a warm,
              rule-abiding reply in the language and voice the YAML declares.
            </p>
            <div className="mt-6 rounded-lg border border-ink-900/10 bg-cream-100 p-5">
              <div className="font-mono text-[11px] text-ink-500">setu →</div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-800">
                Aapka order 'Out for Delivery' stage mein hai. Aaj sham 7 baje tak
                pahunch jayega. Kuch aur help chahiye?
              </p>
            </div>
          </article>
        </div>

        <p className="mt-14 max-w-[620px] text-[15.5px] leading-relaxed text-ink-500">
          Everything between parse and compose (auth, order lookup, refund creation, CRM
          writes) stays on <span className="text-ink-800">your</span> infrastructure.
        </p>
      </div>
    </section>
  )
}
