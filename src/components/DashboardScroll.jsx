import { useEffect, useRef, useState } from 'react'
import DashboardMock from './DashboardMock.jsx'

const chapters = [
  {
    step: '01',
    title: 'Live traffic',
    italic: 'Setu watches every turn.',
    body:
      "Conversations run through the workflow you wrote. Deflection climbs, latency stays flat. On a normal day, the queue is quiet.",
  },
  {
    step: '02',
    title: 'Gaps surface',
    italic: 'The bot flags what it can\'t handle.',
    body:
      "Customers say things the YAML hasn't seen. Setu doesn't guess. It records the gap, groups paraphrases, and drops it into your adaptive queue.",
  },
  {
    step: '03',
    title: 'Review the diff',
    italic: 'It reads like a code review.',
    body:
      "Open the top suggestion. Setu shows the proposed intent as a YAML diff, with triggers, slots, and reply template. Frequency and confidence are right there.",
  },
  {
    step: '04',
    title: 'Merge in one click',
    italic: 'The bot gets sharper.',
    body:
      "Approve, and the intent goes live. Version bumps. In the next 24 hours, deflection ticks up and 12 more requests get handled without a human.",
  },
]

export default function DashboardScroll() {
  const [scene, setScene] = useState(0)
  const triggerRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry whose center is closest to viewport center
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const winCenter = window.innerHeight / 2
        const best = visible.reduce((prev, curr) => {
          const prevRect = prev.target.getBoundingClientRect()
          const currRect = curr.target.getBoundingClientRect()
          const prevD = Math.abs(prevRect.top + prevRect.height / 2 - winCenter)
          const currD = Math.abs(currRect.top + currRect.height / 2 - winCenter)
          return currD < prevD ? curr : prev
        })
        const idx = Number(best.target.dataset.scene)
        setScene(idx)
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )
    triggerRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      {/* Desktop: sticky mock + scrolling chapters */}
      <div className="hidden md:grid md:grid-cols-[380px_1fr] md:gap-16 lg:gap-24">
        {/* Left: chapters */}
        <div className="relative">
          <div className="space-y-[65vh] py-[20vh]">
            {chapters.map((c, i) => (
              <div
                key={c.step}
                ref={(el) => (triggerRefs.current[i] = el)}
                data-scene={i}
                className={`transition-all duration-500 ${
                  scene === i ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-1'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full font-mono text-[11px] transition-all ${
                      scene === i
                        ? 'bg-ink-900 text-cream-50'
                        : 'border border-ink-900/15 text-ink-500'
                    }`}
                  >
                    {c.step}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                    Step {c.step}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tightest text-ink-900">
                  {c.title}
                  <br />
                  <span className="italic text-ink-700">{c.italic}</span>
                </h3>
                <p className="mt-5 max-w-[380px] text-[15.5px] leading-relaxed text-ink-600">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: sticky dashboard */}
        <div className="relative">
          <div className="sticky top-24">
            <DashboardMock scene={scene} />
            <div className="mt-4 flex items-center justify-center gap-2">
              {chapters.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    scene === i ? 'w-8 bg-ink-900' : 'w-4 bg-ink-900/15'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: chapters stacked, mock inline between */}
      <div className="space-y-16 md:hidden">
        {chapters.map((c, i) => (
          <div
            key={c.step}
            ref={(el) => (triggerRefs.current[i] = el)}
            data-scene={i}
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full font-mono text-[11px] transition-all ${
                  scene === i ? 'bg-ink-900 text-cream-50' : 'border border-ink-900/15 text-ink-500'
                }`}
              >
                {c.step}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                Step {c.step}
              </span>
            </div>
            <h3 className="mt-5 font-serif text-3xl leading-[1.05] tracking-tightest text-ink-900">
              {c.title}
              <br />
              <span className="italic text-ink-700">{c.italic}</span>
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{c.body}</p>
            <div className="mt-8">
              <DashboardMock scene={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
