export default function WhatItIs() {
  return (
    <section id="what" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-narrow">
        <span className="eyebrow">The core message</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
          AI understands.
          <br />
          Your systems execute.
          <br />
          <span className="italic text-ink-700">Setu orchestrates.</span>
        </h2>
        <p className="mt-8 text-[17px] leading-relaxed text-ink-600">
          Setu, or <span className="font-dev text-[22px] text-ink-800">सेतु</span>, is Sanskrit
          for <em>bridge</em>. That's what it is: an API layer between AI conversations and
          business systems. Setu understands customer intent, extracts the information required
          by your workflow, and executes verified actions through your existing APIs.
        </p>

        <div className="mt-10 grid gap-3 rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6 md:p-7">
          <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 font-mono text-[13px] text-ink-700">
            <span className="text-ink-500">01</span>
            <span>User speaks naturally.</span>
            <span className="text-ink-500">02</span>
            <span>Setu understands the intent.</span>
            <span className="text-ink-500">03</span>
            <span>Setu extracts the required information.</span>
            <span className="text-ink-500">04</span>
            <span>Setu resolves the correct workflow.</span>
            <span className="text-ink-500">05</span>
            <span>Setu validates the action.</span>
            <span className="text-ink-500">06</span>
            <span>Your existing APIs execute it.</span>
            <span className="text-ink-500">07</span>
            <span>Setu returns the verified result.</span>
          </div>
        </div>

        <p className="mt-8 text-[15.5px] leading-relaxed text-ink-500">
          It is not an autonomous agent. It is not a generic chatbot. It is API-first
          infrastructure for turning conversations into controlled business execution.
        </p>
      </div>
    </section>
  )
}
