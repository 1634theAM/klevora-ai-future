import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const anatomy = [
  ['name', 'Human label for the workflow. Shows in dashboard.'],
  ['language', 'english · hindi · hinglish · tamil · bengali'],
  ['persona', 'How the bot speaks. Tone, formality, language rules.'],
  ['greeting', 'Opening message. Sent on session start.'],
  ['initial_ask', 'First required slot. Usually order_id or phone.'],
  ['intents', 'Customer goals. Each with triggers, slots, reply template.'],
  ['policies', 'Return windows, refund timelines, cutoffs. Quoted verbatim.'],
  ['reference_data', 'Prices, addresses, timings the bot may cite.'],
  ['rules', 'Hard constraints. Enforced at generation.'],
]

export default function Yaml() {
  return (
    <>
      <PageHeader
        eyebrow="Configuration"
        title="One file."
        italic="One truth."
        lede="Setu has no orchestrator. No state machine. The YAML is the entire bot. Change the file, redeploy the bot."
      />

      <section className="py-16 border-t border-ink-900/10">
        <div className="container-mid grid gap-14 md:grid-cols-[1fr_1.15fr] md:items-start">
          <div className="md:sticky md:top-32">
            <span className="eyebrow">Anatomy</span>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              Nine top-level keys.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              Every workflow shares the same shape. Linear collect flows for booking,
              onboarding, lead capture. Intent-driven flows for support. Same file.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-ink-600">
              {anatomy.map(([k, v]) => (
                <li key={k} className="flex gap-4">
                  <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-500 w-28 shrink-0">
                    {k}
                  </span>
                  <span className="leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-ink-900 overflow-hidden">
            <div className="flex items-center justify-between border-b border-cream-50/10 px-5 py-3">
              <span className="font-mono text-[11px] text-cream-100/70">workflow.yaml</span>
              <span className="font-mono text-[11px] text-cream-100/40">AJIO · Hinglish</span>
            </div>
            <pre className="overflow-auto px-6 py-6 font-mono text-[12px] leading-[1.75] text-cream-100/90">
{`name: "AJIO Customer Support — Order Help"
language: hinglish

persona: |
  You are AJIO's WhatsApp support assistant.
  Warm, patient, professional. Reply in Hinglish
  (Hindi in Latin script).

greeting: |
  Namaste! AJIO customer support mein
  aapka swagat hai. Kaise madad karun?

initial_ask:
  field: order_id
  ask: "Apna AJIO order ID bhejiye, 'FL' se
        start hota hai, 10 digits ka."

intents:
  - id: order_status
    triggers: ["order kahan", "status", "track"]
    reply: |
      Aapka order '{{ status }}' stage mein hai.
      {{ eta }} tak pahunch jayega.

  - id: return_request
    triggers: ["return", "wapas"]
    collect:
      - field: return_reason
        ask: |
          Return reason kya hai?
          1) Size  2) Quality  3) Wrong item
    reply: |
      Return request register kar li hai.
      Pickup 2-3 din mein schedule hoga.
    conditions:
      - if: "category in ['innerwear', 'swimwear']"
        reply: "Hygiene ki wajah se non-returnable."

policies:
  return_window: "15 din"
  refund_timeline:
    prepaid_upi: "2-3 working days"
    prepaid_card: "5-7 working days"

rules:
  - Har reply Hinglish mein. Latin script only.
  - Ek message mein ek hi kaam.
  - Customer frustrated lage to pehle empathy.
  - Kabhi OTP, CVV, card number mat maango.`}
            </pre>
          </div>
        </div>
      </section>

      {/* Two flow shapes */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-mid">
          <span className="eyebrow">Two shapes</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Pick the one that fits.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-8">
              <div className="font-mono text-[11px] text-ink-500">FLOW · A</div>
              <h3 className="mt-4 font-serif text-2xl text-ink-900">Linear collect</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
                An ordered list of fields the bot walks through. Booking, onboarding, lead
                capture, KYC intake. Simple, predictable, easy to reason about.
              </p>
            </article>
            <article className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-8">
              <div className="font-mono text-[11px] text-ink-500">FLOW · B</div>
              <h3 className="mt-4 font-serif text-2xl text-ink-900">Intent-driven</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
                A menu of intents (order status, return, refund, cancel, escalation), each
                with its own triggers, slots, and reply template. Customer support at scale.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-ink-900/10">
        <div className="container-narrow text-center">
          <span className="eyebrow mx-auto">Related</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Workflows will write themselves.
          </h2>
          <p className="mx-auto mt-6 max-w-[540px] text-[16px] leading-relaxed text-ink-600">
            Adaptive workflows watch real conversations, spot gaps, and propose YAML diffs
            you can review and merge. Coming in v3.
          </p>
          <div className="mt-8">
            <Link to="/roadmap" className="btn-primary">Read the roadmap <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
