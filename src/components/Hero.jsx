import SetuBridge from './SetuBridge.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-32 md:pt-14 md:pb-40">
      {/* Living bridge - photograph + mist canvas */}
      <SetuBridge />

      <div className="relative container-mid text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-600 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-600 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss-600" />
          </span>
          <span className="font-dev normal-case tracking-normal text-[13px] text-ink-700">सेतु</span>
          <span className="text-ink-400">·</span>
          <span>API-first · v1 shipping</span>
        </div>

        <h1 className="font-serif text-[46px] leading-[1.02] tracking-tightest text-ink-900 sm:text-[62px] md:text-[80px]">
          Turn your APIs into
          <br />
          <span className="italic text-ink-700">AI-powered</span> workflows.
        </h1>

        <p className="mx-auto mt-8 max-w-[580px] text-[17px] leading-relaxed text-ink-600">
          Setu is the intelligence layer between customer conversations and your business systems.
          Understand intent. Extract the required information. Execute verified workflows
          through your existing APIs.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#cta" className="btn-primary">
            Start building
            <span aria-hidden>→</span>
          </a>
        </div>

        <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-800">
          Natural language → Intent → Workflow → Verified action
        </p>
      </div>

      {/* Flow visual */}
      <div className="relative container-wide mt-20">
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-stretch justify-center gap-3 text-[12px] font-mono uppercase tracking-[0.14em] text-ink-600">
          {[
            'User message',
            'Setu API',
            'Intent + entities',
            'Workflow',
            'Your APIs',
            'Business result',
          ].map((step, i, arr) => (
            <div key={step} className="flex items-stretch">
              <div className="flex items-center rounded-full border border-ink-900/10 bg-cream-50/80 px-4 py-2 backdrop-blur-sm">
                {step}
              </div>
              {i < arr.length - 1 && (
                <span className="mx-1 flex items-center text-ink-400">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
