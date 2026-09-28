import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function Product() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="Understand."
        italic="Execute."
        lede="Setu is an API-first workflow layer. It reads a message, resolves a workflow, calls your APIs, and returns a verified business result."
      />

      {/* Understand */}
      <section className="py-20 border-t border-ink-900/10">
        <div className="container-mid grid gap-12 md:grid-cols-[1fr_1.15fr] md:items-start">
          <div className="md:sticky md:top-32">
            <div className="font-mono text-[11px] text-ink-500">01 · UNDERSTAND</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              Natural language, in.
              <br />
              <span className="italic text-ink-700">Intent + entities, out.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              The Setu API accepts the raw message plus optional session context. It returns
              a typed intent, structured entities, and a confidence score. Your app decides
              what to do next.
            </p>
            <ul className="mt-6 space-y-3 text-[14.5px] text-ink-600">
              <li>Schema-locked structured output. Predictable, versioned.</li>
              <li>Multilingual by default. English, Hindi, Hinglish today.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6">
              <div className="font-mono text-[11px] text-ink-500">request</div>
              <p className="mt-2 text-[15px] text-ink-800">
                "return karna hai, order FL1234567890, size chhoti aa gayi"
              </p>
            </div>
            <div className="rounded-2xl border border-ink-900/10 bg-ink-900 p-6 font-mono text-[12.5px] leading-relaxed text-cream-100">
              <div className="text-cream-100/40">Setu API · response</div>
              <pre className="mt-3 whitespace-pre-wrap">
{`{
  "intent": "return_request",
  "entities": {
    "order_id": "FL1234567890",
    "reason": "size_issue"
  },
  "language": "hinglish",
  "confidence": 0.94
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Execute */}
      <section className="py-20 border-t border-ink-900/10">
        <div className="container-mid grid gap-12 md:grid-cols-[1fr_1.15fr] md:items-start">
          <div className="md:sticky md:top-32">
            <div className="font-mono text-[11px] text-ink-500">02 · EXECUTE</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              One request.
              <br />
              <span className="italic text-ink-700">Whole workflow run.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              The Setu API takes the same input, but runs the full workflow: input validation,
              calls to your APIs, conditional branching, and a structured business response.
            </p>
            <ul className="mt-6 space-y-3 text-[14.5px] text-ink-600">
              <li>Deterministic step execution. AI never improvises past the workflow.</li>
              <li>Semantic actions map to your existing endpoints.</li>
              <li>Guardrails and confirmations for high-impact actions.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-ink-900/10 bg-ink-900 p-6 font-mono text-[12.5px] leading-relaxed text-cream-100">
              <div className="text-cream-100/40">Setu API · trace</div>
              <pre className="mt-3 whitespace-pre-wrap">
{`{
  "request_id": "req_9f4e",
  "intent": "return_request",
  "workflow": "return_pickup",
  "actions_taken": [
    "get_order",
    "check_return_eligibility",
    "create_return_pickup"
  ],
  "outcome": "pickup_scheduled",
  "pickup_window": "2-3 days",
  "refund_days": "2-3 working"
}`}
              </pre>
            </div>
            <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6">
              <div className="font-mono text-[11px] text-ink-500">optional reply</div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-800">
                Return request register kar li hai. Pickup 2-3 din mein schedule ho jayega,
                aur refund 2-3 working days mein aapke UPI par aa jayega.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / after comparison */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-mid">
          <div className="max-w-[640px]">
            <span className="eyebrow">Two ways to build</span>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              Chatbot theater,
              <br />
              <span className="italic text-ink-700">or verified execution.</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
              Most AI stacks today are prompts glued to hope. Setu replaces that with
              deterministic workflows, traced actions, and versioned intents, everything
              you'd already demand from the rest of your infrastructure.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Without Setu */}
            <article className="rounded-2xl border border-ink-900/10 bg-cream-50 p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ink-900/15 font-mono text-[11px] text-ink-500">
                  A
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  Without Setu
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-snug text-ink-500">
                Chatbot glued to hope.
              </h3>
              <ul className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-ink-500">
                {[
                  ['Understanding', 'Prompts + guesswork. Every model change is a rewrite.'],
                  ['Execution', 'Ad-hoc tool calls. AI may or may not do the right thing.'],
                  ['Accountability', "\"AI did it.\" No trace, no audit, no request_id."],
                  ['New intents', 'Weeks of prompt engineering and manual QA.'],
                  ['Debugging', 'Grep through chat logs, rerun by hand, cross fingers.'],
                  ['Cost', 'Per-seat SaaS or per-token chaos. Both scale badly.'],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-4">
                    <span className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-wider text-ink-400">
                      {k}
                    </span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* With Setu */}
            <article className="rounded-2xl border-2 border-ink-900 bg-ink-900 p-8 text-cream-100 shadow-[6px_6px_0_0_rgba(20,18,16,0.85)]">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream-50 font-mono text-[11px] text-ink-900">
                  B
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream-100/60">
                  With Setu
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-snug text-cream-50">
                Verified business execution.
              </h3>
              <ul className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-cream-100/85">
                {[
                  ['Understanding', 'Schema-locked intent + entities on every request.'],
                  ['Execution', 'Deterministic workflow steps mapped to your APIs.'],
                  ['Accountability', 'Every request has a request_id. Every action logged.'],
                  ['New intents', 'One-click merge from the adaptive queue.'],
                  ['Debugging', 'End-to-end trace: request → intent → workflow → API → result.'],
                  ['Cost', 'Priced against traffic and deployment mode, not seats.'],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-4">
                    <span className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-wider text-cream-100/50">
                      {k}
                    </span>
                    <span className="text-cream-50">{v}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-ink-900/10">
        <div className="container-narrow text-center">
          <span className="eyebrow mx-auto">What's next</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            The API keeps growing.
          </h2>
          <p className="mx-auto mt-6 max-w-[540px] text-[16px] leading-relaxed text-ink-600">
            Sessions, webhooks, programmatic workflow management, and multi-region
            residency. All designed to keep the integration contract stable.
          </p>
          <div className="mt-8">
            <Link to="/roadmap" className="btn-primary">
              View roadmap <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
