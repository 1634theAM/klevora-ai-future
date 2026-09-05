export default function YamlSection() {
  return (
    <section id="yaml" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20 md:items-start">
          <div className="md:sticky md:top-32">
            <span className="eyebrow">Configuration</span>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              One file.
              <br />
              <span className="italic text-ink-700">One truth.</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
              You describe your bot in a single YAML file. Persona, greeting, intents,
              slots, policies, rules. Setu reads it on every turn and follows it.
              No state machine to maintain. No orchestration layer to babysit.
            </p>
            <ul className="mt-8 space-y-3 text-[14.5px] text-ink-600">
              {[
                ['persona', 'How the bot speaks. Tone, language, formality.'],
                ['intents', 'What the customer might want, with triggers and slots.'],
                ['policies', 'Return windows, refund timelines, cutoffs.'],
                ['rules', 'Hard constraints. Never ask for OTP. Always empathise first.'],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-4">
                  <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-500 w-16 shrink-0">
                    {k}
                  </span>
                  <span className="leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-ink-900 overflow-hidden">
            <div className="flex items-center justify-between border-b border-cream-50/10 px-5 py-3">
              <span className="font-mono text-[11px] text-cream-100/70">
                workflow.yaml
              </span>
              <span className="font-mono text-[11px] text-cream-100/40">
                AJIO · Hinglish
              </span>
            </div>
            <pre className="overflow-auto px-6 py-6 font-mono text-[12.5px] leading-[1.75] text-cream-100/90">
{`name: "AJIO Customer Support"
language: hinglish
persona: |
  You are AJIO's support assistant on WhatsApp.
  Warm, patient, professional. Reply in Hinglish.

greeting: |
  Namaste! AJIO customer support mein
  aapka swagat hai.

initial_ask:
  field: order_id
  ask: "Apna order ID bhejiye, 'FL' se
        start hota hai, 10 digits ka."

intents:
  - id: return_request
    triggers: ["return", "wapas"]
    collect:
      - field: return_reason
        ask: "Return reason kya hai?"
    reply: |
      Return request register kar li hai.
      Pickup 2-3 din mein schedule hoga.

policies:
  return_window: "15 din"
  refund_timeline:
    prepaid_upi: "2-3 working days"

rules:
  - Har reply Hinglish mein.
  - Ek message mein ek hi kaam.
  - Kabhi OTP/CVV mat maango.`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
