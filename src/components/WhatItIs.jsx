export default function WhatItIs() {
  return (
    <section id="what" className="py-28 md:py-36">
      <div className="container-narrow">
        <span className="eyebrow">Concept</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
          A bridge, not a brain.
        </h2>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-600">
          Setu, or <span className="font-dev text-[22px] text-ink-800">सेतु</span>, is Sanskrit
          for <em>bridge</em>. That's what it is: a stateless conversational layer. It reads a
          customer's natural-language message, consults the YAML workflow you defined, and
          emits a structured intent. Your backend does the work. Setu turns the result back
          into a fluent reply. That is all it does. That is the whole product.
        </p>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-600">
          It is not an agent. It is not a tool-calling framework. It does not hold state on
          your customer. It is the smallest possible surface between natural language and
          your existing infrastructure.
        </p>
      </div>
    </section>
  )
}
