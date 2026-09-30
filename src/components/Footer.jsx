import BrandMark from './BrandMark'
import { navLinks, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:px-8 md:py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2.5 font-display text-xl font-semibold tracking-[0.16em]">
              <BrandMark className="h-7 w-7" />
              {site.name}
            </p>
            <p className="mt-3 text-sm tracking-[0.14em] text-muted">{site.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-[0.75rem] tracking-[0.14em] text-muted uppercase transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-sm text-muted">© 2026 İDEONİX. All rights reserved.</p>
      </div>
    </footer>
  )
}
