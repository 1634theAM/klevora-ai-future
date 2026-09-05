export default function WhoFor() {
  return (
    <section className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-narrow">
        <span className="eyebrow">Who it's for</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
          Built for the brands
          <br />
          <span className="italic text-ink-700">the West's tools weren't.</span>
        </h2>
        <p className="mt-8 text-[16.5px] leading-relaxed text-ink-600">
          Indian D2C brands, ₹5 to 100 Cr ARR. WhatsApp-first support. An OMS with an API
          you already trust: Shopify, Unicommerce, Vinculum, or custom. Two to eight human
          agents drowning in 500 to 5,000 tickets a day. No appetite for sending customer
          data to OpenAI. No budget for $500/agent/month Intercom Fin.
        </p>
        <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
          Beyond e-commerce, Setu is a fit anywhere a customer conversation needs a bridge
          to an existing system: fintech support, citizen services, healthcare intake,
          logistics ops, EdTech.
        </p>

        <div className="mt-12 grid gap-3 text-[13.5px] text-ink-600 sm:grid-cols-2">
          {[
            'D2C fashion, beauty, groceries',
            'Fintech customer support',
            'Government citizen services',
            'Healthcare intake & triage',
            'Logistics operations',
            'EdTech support desks',
          ].map((x) => (
            <div key={x} className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-ink-500" />
              <span>{x}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
