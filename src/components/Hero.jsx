import BridgeGraphic from './BridgeGraphic.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-44">
      {/* Bridge illustration — सेतु means bridge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[6%] flex select-none opacity-[0.09] md:bottom-[10%]"
      >
        <BridgeGraphic className="w-full h-auto text-ink-900" />
      </div>

      <div className="relative container-mid text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-600 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-moss-600" />
          <span className="font-dev normal-case tracking-normal text-[13px] text-ink-700">सेतु</span>
          <span className="text-ink-400">·</span>
          <span>v2 shipping</span>
        </div>

        <h1 className="font-serif text-[52px] leading-[1.02] tracking-tightest text-ink-900 sm:text-[68px] md:text-[86px]">
          Conversational
          <br />
          <span className="italic text-ink-700">middleware</span> for
          <br />
          your own APIs.
        </h1>

        <p className="mx-auto mt-8 max-w-[560px] text-[17px] leading-relaxed text-ink-600">
          A small fine-tuned LLM sits between your customer and your backend.
          You declare the flow in <span className="font-medium text-ink-800">YAML</span>.
          <span className="font-dev text-[19px] text-ink-800"> सेतु </span>
          speaks English, Hinglish, Hindi on top.
          Your data never leaves your servers.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#cta" className="btn-primary">
            Request access
            <span aria-hidden>→</span>
          </a>
          <a href="#what" className="btn-ghost">
            How it works
          </a>
        </div>

        <p className="mt-8 text-[12px] uppercase tracking-[0.16em] text-ink-500">
          Built for Indian D2C · WhatsApp-native · BYOC ready
        </p>
      </div>

      {/* Mini terminal card */}
      <div className="relative container-mid mt-20">
        <div className="mx-auto max-w-[720px] rounded-2xl border border-ink-900/10 bg-cream-50/90 shadow-[0_1px_0_rgba(0,0,0,0.04),0_30px_60px_-30px_rgba(20,18,16,0.15)] backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-ink-900/8 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
            <span className="ml-3 font-mono text-[11px] text-ink-500">
              POST /v1/parse
            </span>
          </div>
          <div className="px-6 py-6 font-mono text-[12.5px] leading-relaxed">
            <div className="text-ink-500">// customer message</div>
            <div className="mt-1 text-ink-800">
              "mera order kahan hai, FL1234567890"
            </div>
            <div className="mt-5 text-ink-500">// setu output</div>
            <pre className="mt-1 whitespace-pre-wrap text-ink-800">
{`{
  "intent": "order_status",
  "params": { "order_id": "FL1234567890" },
  "language": "hinglish"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
