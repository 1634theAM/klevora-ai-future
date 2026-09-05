import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import DashboardScroll from '../components/DashboardScroll.jsx'

export default function Product() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="Parser."
        italic="Composer."
        lede="Setu does two things end to end. Everything else is your infrastructure. This is the surface, in detail."
      />

      {/* Parse */}
      <section className="py-20 border-t border-ink-900/10">
        <div className="container-mid grid gap-12 md:grid-cols-[1fr_1.15fr] md:items-start">
          <div className="md:sticky md:top-32">
            <div className="font-mono text-[11px] text-ink-500">01 · PARSE</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              Natural language, in.
              <br />
              <span className="italic text-ink-700">Structured intent, out.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              Setu accepts the customer message, the workflow YAML, and the conversation
              history. It returns an intent, its slots, a language tag, and an optional
              reply stub. Your server takes it from there.
            </p>
            <ul className="mt-6 space-y-3 text-[14.5px] text-ink-600">
              <li>Deterministic structured output, format trained by LoRA.</li>
              <li>Language auto-detect. English, Hindi, Hinglish today.</li>
              <li>Streams tokens back so your UI is never blocked.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6">
              <div className="font-mono text-[11px] text-ink-500">customer</div>
              <p className="mt-2 text-[15px] text-ink-800">
                "return karna hai, order FL1234567890, size chhoti aa gayi"
              </p>
            </div>
            <div className="rounded-2xl border border-ink-900/10 bg-ink-900 p-6 font-mono text-[12.5px] leading-relaxed text-cream-100">
              <div className="text-cream-100/40">POST /v1/parse · response</div>
              <pre className="mt-3 whitespace-pre-wrap">
{`{
  "intent": "return_request",
  "params": {
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

      {/* Compose */}
      <section className="py-20 border-t border-ink-900/10">
        <div className="container-mid grid gap-12 md:grid-cols-[1fr_1.15fr] md:items-start">
          <div className="md:sticky md:top-32">
            <div className="font-mono text-[11px] text-ink-500">02 · COMPOSE</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              Backend response, in.
              <br />
              <span className="italic text-ink-700">On-brand reply, out.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              Your OMS or CRM answers in JSON. Setu shapes that into a fluent reply in the
              language and voice the YAML persona declares. Rules bind the output. Empathy
              first. No OTP asks. Never leak internal fields.
            </p>
            <ul className="mt-6 space-y-3 text-[14.5px] text-ink-600">
              <li>Persona-locked tone from the YAML.</li>
              <li>Hard rules enforced at generation, not by post-processing.</li>
              <li>Reference data (policies, timelines, prices) quoted verbatim.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-ink-900/10 bg-ink-900 p-6 font-mono text-[12.5px] leading-relaxed text-cream-100">
              <div className="text-cream-100/40">POST /v1/compose · input</div>
              <pre className="mt-3 whitespace-pre-wrap">
{`{
  "backend": {
    "return_created": true,
    "pickup_window": "2-3 days",
    "refund_mode": "prepaid_upi",
    "refund_days": "2-3 working days"
  }
}`}
              </pre>
            </div>
            <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6">
              <div className="font-mono text-[11px] text-ink-500">setu →</div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-800">
                Return request register kar li hai. Pickup 2-3 din mein schedule ho jayega,
                aur refund 2-3 working days mein aapke UPI par aa jayega. Kuch aur help
                chahiye?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model layer */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-mid">
          <div className="max-w-[640px]">
            <span className="eyebrow">Under the hood</span>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              A tuned 8B model.
              <span className="italic text-ink-700"> A tiny adapter.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              Setu runs on Llama 3.1 8B Instruct in 4-bit, with a LoRA adapter trained
              specifically to emit structured output reliably. Small. Fast. Cheap. Swappable
              per client.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-4">
            {[
              ['Base', 'Llama 3.1 8B Instruct', '4-bit · Unsloth · ~5 GB'],
              ['Adapter', 'setu_lora_v2', '~50 MB · r=32 · alpha=64'],
              ['Training', '1,300 examples', '2 epochs · loss 1.56 → 0.03'],
              ['Serving', 'vLLM · L40S', '~2.3 s per turn'],
            ].map(([k, v, s]) => (
              <div key={k} className="bg-cream-50/80 p-6">
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink-500">{k}</div>
                <div className="mt-3 font-serif text-xl text-ink-900">{v}</div>
                <div className="mt-1 font-mono text-[11.5px] text-ink-500">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setu Studio — scroll-driven */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-wide">
          <div className="mx-auto max-w-[720px] text-center">
            <span className="eyebrow mx-auto">Setu Studio</span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-[56px]">
              The console where
              <br />
              <span className="italic text-ink-700">workflows come alive.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-relaxed text-ink-600">
              Watch traffic. Read the diffs Setu proposes. Merge in one click. Scroll to
              see a live gap turn into a shipped intent.
            </p>
          </div>
        </div>

        <div className="container-wide mt-20">
          <DashboardScroll />
        </div>
      </section>

      <section className="py-24 border-t border-ink-900/10">
        <div className="container-narrow text-center">
          <span className="eyebrow mx-auto">What's next</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            v3 is coming.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-relaxed text-ink-600">
            15,000 to 25,000 training examples. Five verticals. 30% Hindi, Hinglish, Tamil,
            Bengali. DPO on structured-output preferences. See the full roadmap.
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
