import { useState } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/mbglwkgd'

/**
 * Reusable email-capture form that posts to Formspree.
 *
 * Props:
 *   source        — string tagged on each submission so we can tell which page it came from
 *   buttonLabel   — CTA text (default "Join the waitlist")
 *   align         — "left" | "center" (controls success message + error alignment)
 *   trailing      — optional React node rendered next to / below the form (e.g. secondary CTA)
 */
export default function WaitlistForm({
  source = 'Setu website',
  buttonLabel = 'Join the waitlist',
  align = 'center',
  trailing = null,
}) {
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
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
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

  const alignmentClass = align === 'center' ? 'mx-auto text-center' : ''
  const formAlign = align === 'center' ? 'mx-auto' : ''

  if (status === 'success') {
    return (
      <div
        className={`mt-6 flex max-w-[460px] items-center justify-center gap-3 rounded-full border border-moss-600/40 bg-moss-600/10 px-5 py-3 text-[14.5px] text-moss-700 ${formAlign}`}
      >
        <span aria-hidden>✓</span>
        You're on the list. We'll be in touch within 24 hours.
      </div>
    )
  }

  return (
    <div className={alignmentClass}>
      <form
        className={`flex max-w-[460px] flex-col gap-3 sm:flex-row ${formAlign}`}
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
          {status === 'submitting' ? 'Sending…' : buttonLabel}
          <span aria-hidden>→</span>
        </button>
      </form>

      {status === 'error' && (
        <p className={`mt-3 text-[13px] text-red-700 ${formAlign} max-w-[460px]`}>
          {errorMsg}
        </p>
      )}

      {trailing && (
        <div className="mt-4 flex max-w-[460px] justify-center">{trailing}</div>
      )}
    </div>
  )
}
