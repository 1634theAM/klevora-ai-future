export default function WhoFor() {
  return (
    <section className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-narrow">
        <span className="eyebrow">Who it's for</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
          For teams with APIs
          <br />
          <span className="italic text-ink-700">and a language problem.</span>
        </h2>
        <p className="mt-8 text-[16.5px] leading-relaxed text-ink-600">
          Setu is for engineering and product teams who already run their business on APIs
          and want a controlled way to expose that business surface to natural-language
          conversations. WhatsApp, voice, chat, agent copilots, internal tools.
        </p>
        <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
          The pattern fits anywhere a request needs to be understood, validated, and
          executed against an existing system: e-commerce support, fintech operations,
          citizen services, healthcare intake, logistics, EdTech desks.
        </p>

        <div className="mt-12 grid gap-3 text-[13.5px] text-ink-600 sm:grid-cols-2">
          {[
            'D2C fashion, beauty, groceries',
            'Fintech customer support',
            'Government citizen services',
            'Healthcare intake & triage',
            'Logistics operations',
            'EdTech support desks',
            'Internal agent copilots',
            'Voice IVR modernization',
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
