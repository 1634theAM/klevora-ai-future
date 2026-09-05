export default function CTA() {
  return (
    <section id="cta" className="py-28 md:py-40 border-t border-ink-900/10">
      <div className="container-narrow text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-600">
          <span className="h-1.5 w-1.5 rounded-full bg-moss-600" />
          Early access · Q1 2026
        </div>
        <h2 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tightest text-ink-900 md:text-[80px]">
          Speak your
          <br />
          <span className="italic">customer's language.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[520px] text-[17px] leading-relaxed text-ink-600">
          Ten pilot slots for Indian D2C brands. Custom LoRA on your last three months of
          tickets. Live in four weeks.
        </p>

        <form
          className="mx-auto mt-10 flex max-w-[440px] flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@yourbrand.co"
            className="flex-1 rounded-full border border-ink-900/15 bg-cream-50/80 px-5 py-3 text-[14.5px] text-ink-800 placeholder:text-ink-400 focus:border-ink-900/50 focus:outline-none"
          />
          <button type="submit" className="btn-primary justify-center">
            Request pilot
            <span aria-hidden>→</span>
          </button>
        </form>
        <p className="mt-4 text-[12px] text-ink-500">
          No spam. One reply from a human within 48 hours.
        </p>
      </div>
    </section>
  )
}
