import { useEffect, useRef, useState } from 'react'

/**
 * SetuBridge - hero backdrop.
 *
 * Layers (bottom → top):
 *   1. Photograph of a stepping-stone bridge (from /public/hero/bridge.*)
 *   2. Cream tint that welds the photo into the page palette
 *   3. Canvas of drifting mist + rising particles → "the scene is alive"
 *   4. Gradient fades (top / left) that keep the hero copy fully readable
 *
 * If the photograph is missing, the component silently falls back to a
 * procedural canvas bridge so the page never breaks.
 *
 * Honors `prefers-reduced-motion` - freezes the canvas animation.
 */

const IMAGE_CANDIDATES = ['/hero/bridge.webp', '/hero/bridge.jpg', '/hero/bridge.png']

// Try to find a usable bridge image; returns the first that loads.
function useBridgeImage() {
  const [src, setSrc] = useState(null)
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      for (const candidate of IMAGE_CANDIDATES) {
        const ok = await new Promise((resolve) => {
          const img = new Image()
          img.onload = () => resolve(true)
          img.onerror = () => resolve(false)
          img.src = candidate
        })
        if (cancelled) return
        if (ok) {
          setSrc(candidate)
          return
        }
      }
      // no image - leave src null so we render the procedural fallback
    })()
    return () => {
      cancelled = true
    }
  }, [])
  return src
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return reduced
}

// ---------------------------------------------------------------------------
// Mist + particles overlay
// ---------------------------------------------------------------------------
function MistCanvas({ intensity = 1 }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5)

    let width = 0
    let height = 0
    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      width = Math.max(320, rect.width)
      height = Math.max(240, rect.height)
      canvas.width = Math.ceil(width * dpr)
      canvas.height = Math.ceil(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
    }

    // Rising mist particles - small, blurred, slow.
    let particles = []
    const initParticles = () => {
      const count = Math.round(Math.min(width, 1400) * 0.05 * intensity)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: height * (0.45 + Math.random() * 0.55),
        r: 12 + Math.random() * 28,
        vy: -(4 + Math.random() * 8),          // upward, px/sec
        vx: (Math.random() - 0.5) * 4,         // gentle drift
        life: 0,
        maxLife: 6 + Math.random() * 6,        // seconds
        alpha: 0.05 + Math.random() * 0.12,
      }))
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    // Horizontal mist bands drifting across the middle-back of the scene.
    const bands = [
      { y: 0.42, amp: 0.05, freq: 0.006, speed: 12, phase: 0, alpha: 0.28 },
      { y: 0.55, amp: 0.06, freq: 0.005, speed: -9, phase: 1.4, alpha: 0.2 },
      { y: 0.68, amp: 0.08, freq: 0.004, speed: 6,  phase: 2.8, alpha: 0.14 },
    ]

    let raf = 0
    let last = performance.now()

    const draw = (now) => {
      const dt = Math.min(60, now - last) / 1000
      last = now
      ctx.clearRect(0, 0, width, height)

      // 1) Soft horizontal mist bands
      const t = now / 1000
      for (const b of bands) {
        const yBase = b.y * height
        const amp = b.amp * height
        // Fill a soft band with a vertical gradient
        const grad = ctx.createLinearGradient(0, yBase - amp * 4, 0, yBase + amp * 4)
        grad.addColorStop(0, `rgba(245, 240, 230, 0)`)
        grad.addColorStop(0.5, `rgba(245, 240, 230, ${b.alpha * intensity})`)
        grad.addColorStop(1, `rgba(245, 240, 230, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        const step = 10
        for (let x = 0; x <= width + step; x += step) {
          const y = yBase + Math.sin(x * b.freq + t * (b.speed * 0.05) + b.phase) * amp
          if (x === 0) ctx.moveTo(x, y - amp * 6)
          else ctx.lineTo(x, y - amp * 6)
        }
        for (let x = width; x >= 0; x -= step) {
          const y = yBase + Math.sin(x * b.freq + t * (b.speed * 0.05) + b.phase) * amp
          ctx.lineTo(x, y + amp * 6)
        }
        ctx.closePath()
        ctx.fill()
      }

      // 2) Rising mist particles
      for (const p of particles) {
        p.life += dt
        p.y += p.vy * dt
        p.x += p.vx * dt
        if (p.life >= p.maxLife || p.y < -p.r) {
          // Respawn near the bottom
          p.x = Math.random() * width
          p.y = height * (0.72 + Math.random() * 0.28)
          p.r = 12 + Math.random() * 28
          p.vy = -(4 + Math.random() * 8)
          p.vx = (Math.random() - 0.5) * 4
          p.life = 0
          p.maxLife = 6 + Math.random() * 6
          p.alpha = 0.05 + Math.random() * 0.12
        }
        const lifeT = p.life / p.maxLife
        const fade = Math.sin(lifeT * Math.PI) // 0 → 1 → 0
        const a = p.alpha * fade * intensity
        if (a <= 0.002) continue
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        grd.addColorStop(0, `rgba(245, 240, 230, ${a})`)
        grd.addColorStop(1, `rgba(245, 240, 230, 0)`)
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    if (reduced) {
      draw(performance.now())
    } else {
      raf = requestAnimationFrame(draw)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [reduced, intensity])

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Procedural fallback (only used if no bridge image is present)
// ---------------------------------------------------------------------------
function ProceduralFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse at 25% 88%, rgba(60,50,40,0.20), rgba(60,50,40,0.05) 55%, transparent 75%)',
      }}
    />
  )
}

// ---------------------------------------------------------------------------
export default function SetuBridge({
  className = '',
  imageOpacity = 1,
  mistIntensity = 0.5,
}) {
  const src = useBridgeImage()

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}
    >
      {/* Base: photograph or procedural fallback */}
      {src ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          style={{ opacity: imageOpacity }}
          decoding="async"
        />
      ) : (
        <ProceduralFallback />
      )}

      {/* Very light warm wash - just enough to keep tone consistent, not obscure */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(245,240,230,0.12) 0%, rgba(245,240,230,0.04) 40%, rgba(245,240,230,0.10) 100%)',
        }}
      />

      {/* Live mist + particles - half strength */}
      <MistCanvas intensity={mistIntensity} />

      {/* Top fade - only the top ~28% dissolves into cream so the sky blends */}
      <div
        className="absolute inset-x-0 top-0 h-[28%]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(245,240,230,0.85) 0%, rgba(245,240,230,0.35) 55%, rgba(245,240,230,0) 100%)',
        }}
      />

      {/* Bottom fade - soft dissolve so the image doesn't hit the section edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-[14%]"
        style={{
          background:
            'linear-gradient(to top, rgba(245,240,230,0.85) 0%, rgba(245,240,230,0) 100%)',
        }}
      />
    </div>
  )
}
