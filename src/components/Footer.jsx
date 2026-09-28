import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', to: '/#how' },
      { label: 'Try Setu', to: '/#playground' },
      { label: 'Workflow engine', to: '/#workflows' },
      { label: 'Backend integration', to: '/#integration' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Product', to: '/product' },
      { label: 'Deploy', to: '/deploy' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Roadmap', to: '/roadmap' },
      { label: 'Builders', to: '/builders' },
      { label: 'Contact', to: '/#cta' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-900/10 bg-cream-100">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/hero/logo-removebg-preview.png"
                alt="Klevora"
                className="h-10 w-10 object-contain"
              />
              <span className="text-[15px] font-semibold uppercase tracking-[0.14em] text-ink-900">
                KLEVORA
              </span>
            </Link>
            <p className="mt-5 max-w-[320px] text-[13.5px] leading-relaxed text-ink-500">
              <span className="font-dev text-[16px] text-ink-700">सेतु</span>. The API layer
              between AI conversations and business systems. AI understands. Your systems
              execute. Setu orchestrates.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3 text-[14px] text-ink-700">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-ink-900 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 hairline pt-6 text-center text-[12.5px] text-ink-500">
          © {year} Klevora. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
