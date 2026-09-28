const capabilities = [
  {
    tag: 'Understand',
    body: 'Text in. Intent + entities out. Use when your app owns orchestration.',
  },
  {
    tag: 'Execute',
    body: 'Text in. Full workflow execution, action calls, response out.',
  },
  {
    tag: 'Action results',
    body: 'Your backend hands back the result of an action Setu asked it to perform.',
  },
]

const later = [
  { tag: 'Sessions', body: 'Multi-turn session state, if you want us to hold it.' },
  { tag: 'Workflows', body: 'Manage workflows programmatically. Versioning included.' },
  { tag: 'Intents', body: 'Manage the intent catalog outside of workflow files.' },
  { tag: 'Webhooks', body: 'Subscribe to events across the lifecycle of a request.' },
]

const docLinks = [
  ['Quickstart', 'From zero to a live API call in under 10 minutes.'],
  ['Authentication', 'Bearer tokens, tenant IDs, key rotation.'],
  ['Understand', 'Classify intents and extract entities.'],
  ['Execute', 'End-to-end workflow execution.'],
  ['Actions', 'Define, secure, and version the actions Setu can call.'],
  ['Workflows', 'Playbook schema, control flow, testing.'],
  ['Sessions', 'When to hold state with us, when to hold it yourself.'],
  ['Webhooks', 'Async events for long-running workflows.'],
  ['Error codes', 'Predictable, versioned, retry-safe.'],
  ['SDKs', 'Official clients for Node, Python, Go.'],
  ['API reference', 'Full OpenAPI spec, request/response schemas.'],
  ['Rate limits', 'Quotas, retry-after headers, and fair-use policies.'],
]

export default function DevSection() {
  return (
    <section id="docs" className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="max-w-[620px]">
          <span className="eyebrow">For developers</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            One small API.
            <br />
            <span className="italic text-ink-700">Predictable schemas.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
            A small API surface, versioned end-to-end. You should be able to read the reference
            and know exactly what Setu will do.
          </p>
        </div>

        {/* API surface */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map((e) => (
            <article
              key={e.tag}
              className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6"
            >
              <span className="rounded bg-ink-900 px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-cream-50">
                {e.tag}
              </span>
              <p className="mt-5 text-[14px] leading-relaxed text-ink-600">{e.body}</p>
            </article>
          ))}
        </div>

        {/* Quickstart snippet */}
        <div className="mt-8 grid gap-6 md:grid-cols-[1.05fr_1fr]">
          <div className="rounded-2xl border border-ink-900/10 bg-ink-900 overflow-hidden">
            <div className="flex items-center justify-between border-b border-cream-100/10 px-5 py-3">
              <span className="font-mono text-[11px] text-cream-100/70">quickstart.js</span>
              <span className="font-mono text-[11px] text-cream-100/40">
                Node · @setu/sdk
              </span>
            </div>
            <pre className="overflow-auto px-6 py-6 font-mono text-[12.5px] leading-[1.75] text-cream-100/90">
{`import Setu from "@setu/sdk";

const setu = new Setu({ apiKey: process.env.SETU_KEY });

const result = await setu.execute({
  message: "Bhai ORD123 ka refund kab aayega?",
  session_id: "sess_123",
});

// {
//   request_id: "req_123",
//   intent: "refund_status",
//   entities: { order_id: "ORD123" },
//   workflow: "refund_status",
//   status: "completed"
// }`}
            </pre>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6 md:p-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
              Coming next
            </span>
            <ul className="mt-5 space-y-4">
              {later.map((l) => (
                <li key={l.tag} className="border-b border-ink-900/10 pb-4 last:border-0">
                  <div className="font-serif text-[15.5px] text-ink-900">{l.tag}</div>
                  <div className="mt-1 text-[13.5px] leading-relaxed text-ink-600">
                    {l.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Doc index */}
        <div className="mt-16 rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
              documentation
            </span>
            <a href="#cta" className="text-[13px] text-ink-700 underline underline-offset-4 hover:text-ink-900">
              Request early access →
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {docLinks.map(([title, body]) => (
              <div
                key={title}
                className="group rounded-xl border border-ink-900/10 bg-cream-100 p-4 transition-all hover:border-ink-900/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[17px] text-ink-900">{title}</span>
                  <span className="text-ink-400 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
