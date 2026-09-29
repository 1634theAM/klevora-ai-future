import { useState } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/mbglwkgd'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle · submitting · success · error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || status === 'submitting') return

    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'Setu website — early access CTA',
        }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        const data = await res.json().catch(() => null)
        setStatus('error')
        setErrorMsg(
          data?.errors?.[0]?.message ||
            'Something went wrong. Please try again or email us directly.'
        )
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please try again or email us directly.')
    }
  }

  return (
    <section id="cta" className="py-28 md:py-40 border-t border-ink-900/10">
      <div className="container-narrow text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-600 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss-600" />
          </span>
          Early access · Q1 2027
        </div>
        <h2 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tightest text-ink-900 md:text-[72px]">
          Turn conversations
          <br />
          <span className="italic">into verified actions.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[540px] text-[17px] leading-relaxed text-ink-600">
          Get an API key. Ship your first workflow this week. Talk to the Setu team about
          production rollouts and custom integrations.
        </p>

        {status === 'success' ? (
          <div className="mx-auto mt-10 flex max-w-[460px] items-center justify-center gap-3 rounded-full border border-moss-600/40 bg-moss-600/10 px-5 py-3 text-[14.5px] text-moss-700">
            <span aria-hidden>✓</span>
            You're on the list. We'll be in touch within 24 hours.
          </div>
        ) : (
          <form
            className="mx-auto mt-10 flex max-w-[460px] flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'submitting'}
              placeholder="you@yourcompany.co"
              className="flex-1 rounded-full border border-ink-900/15 bg-cream-50/80 px-5 py-3 text-[14.5px] text-ink-800 placeholder:text-ink-400 focus:border-ink-900/50 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              className="btn-primary justify-center disabled:opacity-60"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Start building'}
              <span aria-hidden>→</span>
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mx-auto mt-4 max-w-[460px] text-[13px] text-red-700">
            {errorMsg}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:klevora.connect@gmail.com?subject=Setu%20%E2%80%94%20let%27s%20talk"
            className="btn-ghost"
          >
            Talk to the Setu team
          </a>
        </div>

        <p className="mt-6 text-[12px] text-ink-500">
          One reply from a human within 24 hours. No spam.
        </p>
      </div>
    </section>
  )
}
