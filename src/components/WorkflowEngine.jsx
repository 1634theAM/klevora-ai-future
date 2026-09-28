export default function WorkflowEngine() {
  return (
    <section id="workflows" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20 md:items-start">
          <div className="md:sticky md:top-32">
            <span className="eyebrow">Workflow engine</span>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
              Define your business logic.
              <br />
              <span className="italic text-ink-700">
                Let Setu handle the conversation.
              </span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
              Your workflows remain deterministic. AI understands the request. Setu validates
              the inputs and executes the workflow you declared, step by step.
            </p>

            <ul className="mt-8 space-y-3 text-[14.5px] text-ink-600">
              {[
                ['trigger', 'Which intent kicks the workflow off.'],
                ['inputs', 'Required and optional entities, with validation.'],
                ['steps', 'Ordered actions, each mapped to one of your APIs.'],
                ['conditions', 'Branching decisions based on prior step results.'],
                ['response', 'Structured business response and reply template.'],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-4">
                  <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-500 w-24 shrink-0">
                    {k}
                  </span>
                  <span className="leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[14.5px] leading-relaxed text-ink-500">
              Workflows are declarative. Version them. Diff them. Roll them back. AI never
              improvises past what your workflow allows.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-ink-900 overflow-hidden">
            <div className="flex items-center justify-between border-b border-cream-50/10 px-5 py-3">
              <span className="font-mono text-[11px] text-cream-100/70">
                refund_status.workflow.playbook
              </span>
              <span className="font-mono text-[11px] text-cream-100/40">v3 · deterministic</span>
            </div>
            <pre className="overflow-auto px-6 py-6 font-mono text-[12.5px] leading-[1.75] text-cream-100/90">
{`workflow:
  id: refund_status

trigger:
  intent: refund_status

inputs:
  required:
    - order_id

steps:
  - action: get_order
  - action: get_payment
  - action: get_refund_status
  - condition:
      if: refund.status == "pending"
      then:
        response:
          template: refund_pending
      else:
        response:
          template: refund_completed

response:
  schema:
    order_id: string
    refund_status: enum
    eta_days: integer`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
