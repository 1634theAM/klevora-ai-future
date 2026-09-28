const trace = [
  { k: 'intent', v: 'payment_status', tone: 'ink' },
  { k: 'entities', v: 'payment_reference · order_id', tone: 'ink' },
  { k: 'workflow', v: 'payment_reconciliation', tone: 'ink' },
  { k: 'actions', v: 'check_payment, check_order', tone: 'ink' },
  { k: 'decision', v: 'Payment successful · order missing', tone: 'moss' },
  { k: 'action', v: 'create_support_ticket', tone: 'moss' },
]

export default function RealExample() {
  return (
    <section id="example" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="max-w-[600px]">
          <span className="eyebrow">A real Setu trace</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            One message.
            <br />
            <span className="italic text-ink-700">One traced execution.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
            A customer types a common problem in Hinglish. Watch Setu classify, extract,
            resolve the workflow, decide the outcome, and reply.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-8">
          {/* Customer message */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-500">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-400" />
                Customer · WhatsApp
              </div>
              <p className="mt-4 rounded-xl bg-cream-100 p-4 text-[15.5px] leading-relaxed text-ink-800">
                "Bhai mera paisa kat gaya but order nahi bana."
              </p>
            </div>

            <div className="rounded-2xl border border-ink-900/10 bg-ink-900 p-6 text-cream-100">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-cream-100/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-600 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss-600" />
                </span>
                Setu → your customer
              </div>
              <p className="mt-4 rounded-xl bg-cream-100/[0.04] p-4 text-[15.5px] leading-relaxed text-cream-100/90">
                "Your payment was successful. We've created a support request to resolve the
                missing order."
              </p>
              <p className="mt-4 font-mono text-[11px] text-cream-100/50">
                request_id: req_9f4e · latency: 1.8s · reviewed by rules ✓
              </p>
            </div>
          </div>

          {/* Trace */}
          <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                execution trace
              </span>
              <span className="font-mono text-[11px] text-ink-400">
                Setu API
              </span>
            </div>

            <ul className="mt-6 divide-y divide-ink-900/10">
              {trace.map((t) => (
                <li
                  key={t.k}
                  className="grid grid-cols-[130px_1fr] items-baseline gap-4 py-3 font-mono text-[12.5px]"
                >
                  <span className="text-ink-500 uppercase tracking-[0.12em] text-[11px]">
                    {t.k}
                  </span>
                  <span
                    className={
                      t.tone === 'moss'
                        ? 'text-moss-700 font-medium'
                        : 'text-ink-800'
                    }
                  >
                    {t.v}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-ink-900 p-5 font-mono text-[12px] leading-relaxed text-cream-100">
              <div className="text-cream-100/50">// structured business response</div>
              <pre className="mt-3 whitespace-pre-wrap">
{`{
  "intent": "payment_status",
  "workflow": "payment_reconciliation",
  "actions_taken": [
    "check_payment",
    "check_order",
    "create_support_ticket"
  ],
  "outcome": "ticket_created",
  "ticket_id": "TKT-4820"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
