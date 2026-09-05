import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Parser', to: '/product' },
      { label: 'Composer', to: '/product' },
      { label: 'YAML', to: '/yaml' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Deploy',
    links: [
      { label: 'Managed SaaS', to: '/deploy' },
      { label: 'BYOC', to: '/deploy' },
      { label: 'On-prem', to: '/deploy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Roadmap', to: '/roadmap' },
      { label: 'Docs', to: '/product' },
      { label: 'Contact', to: '/pricing' },
      { label: 'Careers', to: '/' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-900/10 bg-cream-100">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-ink-900 text-cream-50 font-dev text-[13px]">
                स
              </span>
              <span className="text-[15px] tracking-tight text-ink-800">
                klevora
                <span className="mx-1.5 text-ink-400">·</span>
                <span className="font-dev text-ink-700 text-[17px] leading-none">सेतु</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[300px] text-[13.5px] leading-relaxed text-ink-500">
              <span className="font-dev text-[16px] text-ink-700">सेतु</span>. The bridge
              between natural language and your APIs. Built in India for the world.
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

        <div className="mt-14 hairline pt-6 flex flex-col gap-3 text-[12.5px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} Klevora Labs. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a className="hover:text-ink-800" href="#">Privacy</a>
            <a className="hover:text-ink-800" href="#">Terms</a>
            <a className="hover:text-ink-800" href="#">Security</a>
            <span className="font-mono text-[11px] text-ink-400">setu · v2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
