import { Link } from 'react-router-dom'

export default function AdaptiveTeaser() {
  return (
    <section className="py-28 md:py-36 border-t border-ink-900/10">
      <div className="container-mid">
        <div className="rounded-2xl border border-ink-900/10 bg-ink-900 text-cream-100 overflow-hidden">
          <div className="grid gap-10 p-10 md:grid-cols-[1.15fr_1fr] md:gap-16 md:p-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cream-100/15 bg-cream-100/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-cream-100/70">
                <span className="h-1.5 w-1.5 rounded-full bg-moss-600" />
                Coming soon
              </div>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tightest md:text-[52px]">
                Workflows that
                <br />
                <span className="italic text-cream-100/90">write themselves.</span>
              </h2>
              <p className="mt-6 max-w-[440px] text-[16px] leading-relaxed text-cream-100/70">
                Every real conversation flowing through Setu leaves a trace. Missing intents,
                new paraphrases, unseen slot values. Adaptive workflows propose YAML diffs
                you can review and merge in one click. The bot gets smarter the more people
                talk to it.
              </p>
              <div className="mt-8">
                <Link
                  to="/roadmap"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-100/25 px-5 py-2.5 text-sm text-cream-100 transition-all hover:border-cream-100/60"
                >
                  See the roadmap
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-cream-100/10 bg-cream-100/[0.03] p-5 font-mono text-[12px] leading-relaxed">
              <div className="text-cream-100/40">// suggested by setu</div>
              <div className="mt-1 text-cream-100/60">proposed diff · workflow.yaml</div>
              <pre className="mt-4 whitespace-pre-wrap">
<span className="text-cream-100/40">  intents:</span>
{`\n`}
<span className="text-moss-600">+   - id: exchange_size</span>
{`\n`}
<span className="text-moss-600">+     triggers: ["size chhoti", "size bada",</span>
{`\n`}
<span className="text-moss-600">+                 "exchange size"]</span>
{`\n`}
<span className="text-moss-600">+     collect:</span>
{`\n`}
<span className="text-moss-600">+       - field: desired_size</span>
{`\n`}
<span className="text-moss-600">+         ask: "Kaunsa size chahiye?"</span>
{`\n`}
<span className="text-cream-100/40">    - id: return_request</span>
{`\n`}
              </pre>
              <div className="mt-5 flex items-center gap-3 border-t border-cream-100/10 pt-4">
                <span className="text-cream-100/40">seen in</span>
                <span className="rounded-full bg-cream-100/10 px-2 py-0.5 text-cream-100/80">
                  38 conversations · last 7 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
