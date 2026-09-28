const actions = [
  { name: 'get_order_status', map: 'GET  /orders/{id}',        system: 'OMS' },
  { name: 'get_payment_status', map: 'POST /payments/lookup',   system: 'Payments' },
  { name: 'create_support_ticket', map: 'POST /tickets',        system: 'CRM' },
  { name: 'trigger_reshipment', map: 'POST /orders/{id}/reship', system: 'Commerce' },
  { name: 'get_refund_status', map: 'GET  /refunds/{id}',       system: 'Payments' },
  { name: 'update_customer_profile', map: 'PATCH /customers/{id}', system: 'CRM' },
]

export default function BackendIntegration() {
  return (
    <section id="integration" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-narrow text-center">
        <span className="eyebrow mx-auto">Existing systems</span>
        <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-[52px]">
          Keep your
          <br />
          <span className="italic text-ink-700">existing systems.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[540px] text-[16.5px] leading-relaxed text-ink-600">
          Setu works with the backend you already trust. You don't need to rebuild your
          business logic. Map each semantic action Setu emits to an endpoint on your CRM,
          ERP, or commerce stack.
        </p>
      </div>

      {/* Flow diagram */}
      <div className="container-wide mt-16">
        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-4">
          {[
            ['01', 'Setu', 'intent + entities'],
            ['02', 'Semantic actions', 'get_order · get_payment'],
            ['03', 'Your APIs', 'CRM · ERP · commerce'],
            ['04', 'Business result', 'verified · logged'],
          ].map(([n, title, sub], i) => (
            <div key={n} className="relative rounded-xl border border-ink-900/10 bg-cream-50/60 p-5">
              <div className="font-mono text-[11px] text-ink-500">{n}</div>
              <div className="mt-4 font-serif text-xl text-ink-900">{title}</div>
              <div className="mt-1 text-[13px] text-ink-500">{sub}</div>
              {i < 3 && (
                <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-ink-400 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Semantic action map */}
      <div className="container-mid mt-20">
        <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
              semantic action map
            </span>
            <span className="font-mono text-[11px] text-ink-400">
              customer-defined · versioned
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-ink-900/10">
            <table className="w-full text-left text-[13.5px]">
              <thead className="bg-cream-100 text-[11px] uppercase tracking-[0.14em] text-ink-500">
                <tr>
                  <th className="p-4 font-medium">Semantic action</th>
                  <th className="p-4 font-medium">Your endpoint</th>
                  <th className="p-4 font-medium">System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10 bg-cream-50/60 text-ink-700 font-mono text-[12.5px]">
                {actions.map((a) => (
                  <tr key={a.name}>
                    <td className="p-4 text-ink-900">{a.name}</td>
                    <td className="p-4">{a.map}</td>
                    <td className="p-4 uppercase tracking-[0.12em] text-[11px] text-ink-500">
                      {a.system}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[14.5px] leading-relaxed text-ink-500">
            No rip-and-replace. No new database. Your backend keeps owning the truth; Setu
            keeps owning the conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
