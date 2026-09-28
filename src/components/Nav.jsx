import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const linkClass = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900'}`

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-cream-100/70 border-b border-ink-900/5">
      <div className="container-wide grid grid-cols-[1fr_auto_1fr] items-center py-5">
        <Link to="/" className="col-start-1 flex items-center gap-2.5 group justify-self-start" onClick={closeMenu}>
          <img
            src="/hero/logo-removebg-preview.png"
            alt="Klevora"
            className="h-9 w-9 object-contain"
          />
          <span className="text-[15px] font-semibold uppercase tracking-[0.14em] text-ink-900">
            KLEVORA
          </span>
        </Link>

        <nav className="col-start-2 hidden items-center justify-self-center gap-9 text-[13.5px] md:flex">
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/deploy" className={linkClass}>Deploy</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/roadmap" className={linkClass}>Roadmap</NavLink>
          <NavLink to="/builders" className={linkClass}>Builders</NavLink>
        </nav>

        <div className="col-start-3 flex items-center justify-self-end gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-800 md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="text-lg leading-none" aria-hidden>
              {isMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-ink-900/10 px-6 py-4 md:hidden">
          <div className="container-wide flex flex-col gap-4 text-sm">
            <NavLink to="/product" className={linkClass} onClick={closeMenu}>Product</NavLink>
            <NavLink to="/deploy" className={linkClass} onClick={closeMenu}>Deploy</NavLink>
            <NavLink to="/pricing" className={linkClass} onClick={closeMenu}>Pricing</NavLink>
            <NavLink to="/roadmap" className={linkClass} onClick={closeMenu}>Roadmap</NavLink>
            <NavLink to="/builders" className={linkClass} onClick={closeMenu}>Builders</NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
