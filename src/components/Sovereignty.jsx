export default function Sovereignty() {
  return (
    <section className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-narrow text-center">
        <span className="eyebrow mx-auto">Data path</span>
        <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-[56px]">
          Your servers.
          <br />
          <span className="italic text-ink-700">Your data.</span>
          <br />
          Setu never touches it.
        </h2>
        <p className="mx-auto mt-8 max-w-[520px] text-[16.5px] leading-relaxed text-ink-600">
          Order IDs, payment info, PII. None of it is sent to us. Your backend does the
          round-trip: parse → fetch → compose → send. Data residency guaranteed by
          architecture, not by contract.
        </p>
      </div>

      {/* Flow diagram */}
      <div className="container-wide mt-20">
        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-4">
          {[
            ['01', 'Customer', 'WhatsApp · web chat'],
            ['02', 'Setu', 'parse → intent'],
            ['03', 'Your APIs', 'OMS · CRM · payments'],
            ['04', 'Setu', 'compose → reply'],
          ].map(([n, title, sub], i) => (
            <div key={n} className="relative rounded-xl border border-ink-900/10 bg-cream-50/60 p-5">
              <div className="font-mono text-[11px] text-ink-500">{n}</div>
              <div className="mt-4 font-serif text-xl text-ink-900">{title}</div>
              <div className="mt-1 text-[13px] text-ink-500">{sub}</div>
              {i < 3 && (
                <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-ink-400 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
