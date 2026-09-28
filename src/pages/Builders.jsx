import PageHeader from '../components/PageHeader.jsx'

const builders = [
  {
    slug: 'psycho-builder-1',
    role: 'Setu · Builder',
    name: 'Swanand Vaidya',
    img: '/builders/build-1.png',
    bio:
      "Sets the direction. Talks to every early customer, writes the pitch, and keeps the team pointed at the same north star. Believes distribution is a craft and that the fastest way to learn a market is to sit in a support inbox for a week.",
    fact: "I'm annoyingly good at almost every sport.....",
    factIcon: '🏆',
    linkedin: 'https://www.linkedin.com/in/swanandvaidya/',
    rotate: '-rotate-1',
    fx: 'bottom-6 -right-6',
  },
  {
    slug: 'psycho-builder-2',
    role: 'Setu · Builder',
    name: 'Atharv More',
    img: '/builders/build-2.png',
    bio:
      "Owns the stack. Designs the workflow engine, the API surface, and the trace pipeline that makes every request auditable. Believes every conversation is a contract, every intent is a promise, and every action deserves a request_id.",
    fact: 'I try to guess the plot twist before Patrick Jane does........',
    factIcon: '🕵️',
    linkedin: 'https://www.linkedin.com/in/moreatharv/',
    rotate: 'rotate-1',
    fx: 'bottom-6 -right-6',
  },
]

function TerminalWindow({ role, children }) {
  return (
    <div className="rounded-md border-2 border-ink-900 bg-cream-50 shadow-[6px_6px_0_0_rgba(20,18,16,1)]">
      <div className="flex items-center gap-2 border-b-2 border-ink-900 bg-ink-900 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-cream-50">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-cream-50/60" />
          <span className="h-2 w-2 rounded-full bg-cream-50/40" />
          <span className="h-2 w-2 rounded-full bg-cream-50/20" />
        </span>
        <span className="ml-2 truncate">{role}</span>
      </div>
      {children}
    </div>
  )
}

export default function Builders() {
  return (
    <>
      <PageHeader
        eyebrow="Builders"
        title="Builders who"
        italic="build the bridge."
        lede="Setu is built by a small team that refuses to ship anything they wouldn't run in production themselves. Meet them."
      />

      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Deep warm-ink backdrop - matches the Try Setu section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[520px] max-w-[1080px] rounded-[48px] bg-gradient-to-br from-[#1F1A14] via-[#181410] to-[#14100B]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[520px] max-w-[1080px] rounded-[48px] opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(rgba(245,240,230,0.07) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative container-wide">
          <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">
            {builders.map((b) => (
              <article
                key={b.slug}
                className={`group/card relative mx-auto w-full max-w-[440px] ${b.rotate}`}
              >
                <TerminalWindow role={b.role}>
                  {/* Photo */}
                  <div className="aspect-[4/5] w-full overflow-hidden border-b-2 border-ink-900 bg-white">
                    <img
                      src={b.img}
                      alt={b.name}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-contain"
                      style={{ imageRendering: 'auto' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement.innerHTML =
                          '<div class="grid h-full w-full place-items-center font-mono text-[11px] uppercase tracking-widest text-ink-500">photo pending - drop file at ' +
                          b.img +
                          '</div>'
                      }}
                    />
                  </div>

                  {/* Name block */}
                  <div className="border-b-2 border-ink-900 bg-cream-50 px-4 py-3">
                    <h2 className="font-mono text-[22px] font-medium leading-none tracking-tight text-ink-900">
                      {b.name}
                    </h2>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4 px-4 py-4">
                    <p className="text-[14.5px] leading-relaxed text-ink-800">
                      {b.bio}
                    </p>
                    <a
                      href={b.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-[13px] text-ink-900 underline underline-offset-[3px] decoration-2 hover:text-ink-700"
                    >
                      LinkedIn
                    </a>
                  </div>
                </TerminalWindow>

                {/* Fun fact sticker - hover the card to lift it away and reveal the bio */}
                <div
                  className={`absolute ${b.fx} w-[240px] max-w-[80%] rotate-[-2deg] cursor-pointer transition-all duration-500 ease-out group-hover/card:-translate-y-[260px] group-hover/card:translate-x-6 group-hover/card:rotate-[8deg] group-hover/card:opacity-25`}
                  title="Hover the card to peek behind"
                >
                  <TerminalWindow role="Fun fact">
                    <div className="px-3 py-3 font-mono text-[12px] leading-snug text-ink-900">
                      <span className="mr-1.5">{b.factIcon}</span>
                      {b.fact}
                    </div>
                  </TerminalWindow>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values / manifesto */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-mid">
          <span className="eyebrow">How we build</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Small team.
            <br />
            <span className="italic text-ink-700">Sharp opinions.</span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [
                'API-first, always',
                "Every feature ships with an API before it ships with a UI. If it can't be scripted, it isn't done.",
              ],
              [
                'Deterministic where it matters',
                "AI understands. Workflows decide. We refuse to let the model improvise past the contract.",
              ],
              [
                'One trace per request',
                "Every request has a request_id. Every action is logged. Nothing runs in the dark.",
              ],
              [
                'We build what we would use',
                "If we wouldn't run it in our own production, it doesn't ship.",
              ],
              [
                'Guardrails, not vibes',
                "Validation, permissions, confirmations. High-impact actions never happen on a shrug.",
              ],
              [
                "Model-agnostic contract",
                "The underlying model is replaceable. The integration you built on top of us is not going to break.",
              ],
            ].map(([t, b]) => (
              <div
                key={t}
                className="rounded-2xl border border-ink-900/10 bg-cream-50/70 p-6"
              >
                <div className="font-serif text-xl leading-snug text-ink-900">{t}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-600">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-24 border-t border-ink-900/10">
        <div className="container-narrow text-center">
          <span className="eyebrow mx-auto">Building the bridge</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tightest text-ink-900 md:text-5xl">
            Want in?
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-relaxed text-ink-600">
            We hire builders who ship, argue for their choices, and treat every request_id like it
            matters. If that sounds like you, drop us a line.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:klevora.connect@gmail.com"
              className="btn-primary"
            >
              Say hi <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
