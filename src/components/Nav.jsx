import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900'}`

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-cream-100/70 border-b border-ink-900/5">
      <div className="container-wide flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-ink-900 text-cream-50 font-dev text-[13px]">
            स
          </span>
          <span className="text-[15px] tracking-tight text-ink-800">
            klevora
            <span className="mx-1.5 text-ink-400">·</span>
            <span className="font-dev text-ink-700 text-[17px] leading-none">सेतु</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[13.5px]">
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/yaml" className={linkClass}>YAML</NavLink>
          <NavLink to="/deploy" className={linkClass}>Deploy</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/roadmap" className={linkClass}>Roadmap</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/product" className="hidden sm:inline btn-ghost">Docs</Link>
          <Link to="/pricing" className="btn-primary">
            Get access
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
