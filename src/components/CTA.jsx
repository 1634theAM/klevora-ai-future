export default function CTA() {
  return (
    <section id="cta" className="py-28 md:py-40 border-t border-ink-900/10">
      <div className="container-narrow text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-600 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss-600" />
          </span>
          Early access · Q1 2027
        </div>
        <h2 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tightest text-ink-900 md:text-[72px]">
          Turn conversations
          <br />
          <span className="italic">into verified actions.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[540px] text-[17px] leading-relaxed text-ink-600">
          Get an API key. Ship your first workflow this week. Talk to the Setu team about
          production rollouts and custom integrations.
        </p>

        <form
          className="mx-auto mt-10 flex max-w-[460px] flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@yourcompany.co"
            className="flex-1 rounded-full border border-ink-900/15 bg-cream-50/80 px-5 py-3 text-[14.5px] text-ink-800 placeholder:text-ink-400 focus:border-ink-900/50 focus:outline-none"
          />
          <button type="submit" className="btn-primary justify-center">
            Start building
            <span aria-hidden>→</span>
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:klevora.connect@gmail.com?subject=Setu%20%E2%80%94%20let%27s%20talk"
            className="btn-ghost"
          >
            Talk to the Setu team
          </a>
        </div>

        <p className="mt-6 text-[12px] text-ink-500">
          One reply from a human within 48 hours. No spam.
        </p>
      </div>
    </section>
  )
}
